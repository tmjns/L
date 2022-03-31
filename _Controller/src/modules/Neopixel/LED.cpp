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

void LED::solid(int r, int g, int b){
    for(int i=0; i<NUMPIXELS; i++) {
        pixels.setPixelColor(i, pixels.Color(r, g, b));
        pixels.show(); 
        delay(1); 
    }
}

void LED::brightness(int br){
    pixels.setBrightness(br);
    pixels.show(); 
}