#include "controller.h"

Controller::Controller(){}

void Controller::init(){
    ble.init();
}

void Controller::update(){
    ble.update();
}