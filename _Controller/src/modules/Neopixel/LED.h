#include "helpers/common.h"

class LED{

    public:
    
        LED();
        void init();
        void solid(unsigned long color);       
        void brightness(int br);
};