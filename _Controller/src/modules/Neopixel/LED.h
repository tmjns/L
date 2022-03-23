#include "helpers/common.h"

class LED{

    public:
    
        LED();
        void init();
        void update(int r, int g, int b);       
        void brightness(int br);
};