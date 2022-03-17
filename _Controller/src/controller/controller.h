#include "helpers/common.h"
#include "../modules/ArduinoBLE/ArduinoBLE.h"

class Controller{
    
    public:
    
        Controller();
        void init();
        void update();

    private:

        ArduinoBLE ble;

};