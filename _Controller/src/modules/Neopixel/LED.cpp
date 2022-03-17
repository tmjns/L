#include "LED.h"

//Neopixel
Adafruit_NeoPixel pixels(NUMPIXELS, PIN, NEO_GRB + NEO_KHZ800);

LED::LED(){}

void LED::init(){
    Serial.println("LED init");
    pixels.begin();
    pixels.setBrightness(5);
}

void LED::update(int r, int g, int b){
    pixels.clear();
    for(int i=0; i<NUMPIXELS; i++) {
        pixels.setPixelColor(i, pixels.Color(r, g, b));
        pixels.show(); 
        delay(1); 
    }
}