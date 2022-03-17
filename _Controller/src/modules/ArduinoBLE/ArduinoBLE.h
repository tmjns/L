#include "helpers/common.h"
#include "../Neopixel/LED.h"

class ArduinoBLE{

    public:
    
        ArduinoBLE();
        void init();
        void update();

    private:        

        LED led;

};