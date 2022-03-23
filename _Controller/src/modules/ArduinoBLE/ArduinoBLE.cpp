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
        Serial.println(central.address());

        while (central.connected()) {

            if (switchCharacteristic.written()) {

                // Serial.println(switchCharacteristic.value());
                
                if(switchCharacteristic.value() <= 50){
                    led.brightness(switchCharacteristic.value());
                }

                if (switchCharacteristic.value() == 51) { 
                    Serial.println("off");  
                    led.update(0,0,0); 
                }

                if (switchCharacteristic.value() == 52) {  //Red
                    Serial.println("red"); 
                    led.update(255,0,0);   
                }

                if (switchCharacteristic.value() == 53) {  //Green 
                    Serial.println("green"); 
                    led.update(0,255,0);       
                }

                if (switchCharacteristic.value() == 54) {  //Blue
                    Serial.println("blue"); 
                    led.update(0,0,255);          
                }

                if (switchCharacteristic.value() == 55) {  //Yellow 
                    Serial.println("yellow"); 
                    led.update(200,188,14);           
                }

                if (switchCharacteristic.value() == 56) {  //White 
                    Serial.println("white"); 
                    led.update(255,255,255);           
                } 

            }
        }

        // when the central disconnects, print it out:
        Serial.print(F("Disconnected from central: "));
        Serial.println(central.address());
    }
}