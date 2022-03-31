#include "LED.h"

//Neopixel
Adafruit_NeoPixel pixels(NUMPIXELS, PIN, NEO_GRB + NEO_KHZ800);

LED::LED(){}

void LED::init(){
    Serial.println("LED init");
    pixels.begin();
    pixels.clear();
    pixels.setBrightness(5);
}

void LED::solid(unsigned long color){
    for(int i=0; i<NUMPIXELS; i++) {
        pixels.setPixelColor(i, pixels.Color(color));
        pixels.show(); 
    }
}

void LED::brightness(int br){
    pixels.setBrightness(br);
    pixels.show(); 
}