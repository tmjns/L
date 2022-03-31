#include "helpers/common.h"

class LED{

    public:
    
        LED();
        void init();
        void solid(int r, int g, int b);       
        void brightness(int br);
};