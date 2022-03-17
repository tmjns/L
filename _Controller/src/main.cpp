#include "controller/controller.h"

Controller controller;

void setup() {
  Serial.begin(115200);
  Serial.println("Init");
  controller.init();
}

void loop() {
  delay(1000);
  controller.update();
}
