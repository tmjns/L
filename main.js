import './style.css'

document.getElementById("connect").addEventListener("click", function() {

  navigator.bluetooth.requestDevice({ filters: [{ services: ['4fafc201-1fb5-459e-8fcc-c5c9c331914b'] }] })
  .then(device => device.gatt.connect())
  .then(server => server.getPrimaryService('4fafc201-1fb5-459e-8fcc-c5c9c331914b'))
  .then(service => service.getCharacteristic('beb5483e-36e1-4688-b7f5-ea07361b26a8'))
  .then(characteristic => {

      document.getElementById("off").addEventListener("click", function(){
          const resetEnergyExpended = Uint8Array.of(48);
          return characteristic.writeValue(resetEnergyExpended);
      });

      document.getElementById("red").addEventListener("click", function(){
          const resetEnergyExpended = Uint8Array.of(49);
          return characteristic.writeValue(resetEnergyExpended);
      });

      document.getElementById("green").addEventListener("click", function(){
          const resetEnergyExpended = Uint8Array.of(50);
          return characteristic.writeValue(resetEnergyExpended);
      });

      document.getElementById("blue").addEventListener("click", function(){
          const resetEnergyExpended = Uint8Array.of(51);
          return characteristic.writeValue(resetEnergyExpended);
      });

      document.getElementById("white").addEventListener("click", function(){
          const resetEnergyExpended = Uint8Array.of(52);
          return characteristic.writeValue(resetEnergyExpended);
      });


      // const btn = document.querySelector('#btn');
      // const sb = document.querySelector('#framework')
      // btn.onclick = (event) => {
      //     event.preventDefault();
      //     // show the selected index
      //     alert(sb.selectedIndex);
      // };

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