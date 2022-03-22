import './style.css'

const slider = document.querySelector("#brightness");

slider.addEventListener ("input", function () {
   console.log(this.value);
});

document.getElementById("connect").addEventListener("click", function() {

  navigator.bluetooth.requestDevice({ filters: [{ services: ['4fafc201-1fb5-459e-8fcc-c5c9c331914b'] }] })
  .then(device => device.gatt.connect())
  .then(server => server.getPrimaryService('4fafc201-1fb5-459e-8fcc-c5c9c331914b'))
  .then(service => service.getCharacteristic('beb5483e-36e1-4688-b7f5-ea07361b26a8'))
  .then(characteristic => {

      document.getElementById("off").addEventListener("click", function(){
          return characteristic.writeValue(Uint8Array.of(48));
      });

      document.getElementById("red").addEventListener("click", function(){
          return characteristic.writeValue(Uint8Array.of(49));
      });

      document.getElementById("green").addEventListener("click", function(){
          return characteristic.writeValue(Uint8Array.of(50));
      });

      document.getElementById("blue").addEventListener("click", function(){
          return characteristic.writeValue(Uint8Array.of(51));
      });

      document.getElementById("yellow").addEventListener("click", function(){
          return characteristic.writeValue(Uint8Array.of(52));
      });

      document.getElementById("white").addEventListener("click", function(){
        return characteristic.writeValue(Uint8Array.of(53));
      });

  })
  .then(_ => {

      document.getElementById("status").className = "on";  
      console.log('Lamp is connected');


  })
  .catch(error => { 

      document.getElementById("status").className = "error"; 
      console.error(error); 
      
  });

});