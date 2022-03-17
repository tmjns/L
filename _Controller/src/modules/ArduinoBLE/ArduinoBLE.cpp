#include "ArduinoBLE.h"

//BLE
BLEService ledService("4fafc201-1fb5-459e-8fcc-c5c9c331914b");
BLEByteCharacteristic switchCharacteristic("beb5483e-36e1-4688-b7f5-ea07361b26a8", BLERead | BLEWrite);

ArduinoBLE::ArduinoBLE(){}

void ArduinoBLE::init(){

    led.init();

    if (!BLE.begin()) {
        Serial.println("starting BLE failed!");
        while (1);
    }

    // set advertised local name and service UUID:
    BLE.setLocalName("LED");
    BLE.setAdvertisedService(ledService);

    // add the characteristic to the service
    ledService.addCharacteristic(switchCharacteristic);

    // add service
    BLE.addService(ledService);

    // set the initial value for the characeristic:
    switchCharacteristic.writeValue(0);

    // start advertising
    BLE.advertise();

    Serial.println("BLE LED Peripheral");
}

void ArduinoBLE::update(){

    BLEDevice central = BLE.central();

    if (central) {
        Serial.print("Connected to central: ");
        // print the central's MAC address:
        Serial.println(central.address());

        while (central.connected()) {

            if (switchCharacteristic.written()) {

                if (switchCharacteristic.value() == 48) {   
                    led.update(0,0,0); 
                }

                if (switchCharacteristic.value() == 49) {  //Red
                    led.update(255,0,0);     
                }

                if (switchCharacteristic.value() == 50) {  //Green 
                    led.update(0,255,0);       
                }

                if (switchCharacteristic.value() == 51) {  //Blue
                    led.update(0,0,255);          
                }

                if (switchCharacteristic.value() == 52) {  //Yellow 
                    led.update(200,188,14);           
                }

                if (switchCharacteristic.value() == 53) {  //White 
                    led.update(255,255,255);           
                }

            }
        }

        // when the central disconnects, print it out:
        Serial.print(F("Disconnected from central: "));
        Serial.println(central.address());
    }
}