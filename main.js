import './style.scss'

const swiper = new Swiper(".mySwiper", {
    slidesPerView:  2,
    spaceBetween: 20,
    freeMode: true,
    centeredSlides: true,
    loop: false
});


async function getPermittedBluetoothDevices() {
    let devices = await navigator.bluetooth.getDevices();
    for (let device of devices) {
      // Start a scan for each device before connecting to check that they're in
      // range.
      let abortController = new AbortController();
      await device.watchAdvertisements({signal: abortController.signal});
      device.addEventListener('advertisementreceived', async (evt) => {
        // Stop the scan to conserve power on mobile devices.
        abortController.abort();
        
        // At this point, we know that the device is in range, and we can attempt
        // to connect to it.
        await evt.device.gatt.connect();

        console.log(evt)

        document.getElementById("status-bar").className = "online";
      });
    }
  }



document.getElementById("connect").addEventListener("click", function() {
    console.log("press")
    getPermittedBluetoothDevices()

//     navigator.bluetooth.requestDevice({ filters: [{ services: ['4fafc201-1fb5-459e-8fcc-c5c9c331914b'] }] })
//     .then(device => device.gatt.connect())
//     .then(server => server.getPrimaryService('4fafc201-1fb5-459e-8fcc-c5c9c331914b'))
//     .then(service => service.getCharacteristic('beb5483e-36e1-4688-b7f5-ea07361b26a8'))
//     .then(characteristic => {

//         document.getElementById("light-off").addEventListener("click", function(){
//             console.log("off");
//             return characteristic.writeValue(Uint8Array.of(51));
//         });

//         document.getElementById("red").addEventListener("click", function(){
//             console.log("red");
//             return characteristic.writeValue(Uint8Array.of(52));
//         });

//         document.getElementById("green").addEventListener("click", function(){
//             console.log("green");
//             return characteristic.writeValue(Uint8Array.of(53));
//         });

//         document.getElementById("blue").addEventListener("click", function(){
//             console.log("blue");
//             return characteristic.writeValue(Uint8Array.of(54));
//         });

//         document.getElementById("yellow").addEventListener("click", function(){
//             console.log("yellow");
//             return characteristic.writeValue(Uint8Array.of(55));
//         });

//         document.getElementById("white").addEventListener("click", function(){
//             console.log("white");
//             return characteristic.writeValue(Uint8Array.of(56));
//         });

//         document.getElementById("purple").addEventListener("click", function(){
//             console.log("purple");
//             return characteristic.writeValue(Uint8Array.of(57));
//         });

//         // brightness controll
//         document.querySelector("#brightness").addEventListener ("input", function () {
//             console.log(this.value);
//             return characteristic.writeValue(Uint8Array.of(this.value));
//         });

//   })
//   .then(_ => {

//     document.getElementById("status-bar").className = "online";  
//     console.log('Lamp is connected');

//   })
//   .catch(error => { 

//     document.getElementById("status-bar").className = "error"; 
//     console.error(error); 
      
//   });

});