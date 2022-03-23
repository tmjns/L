import './style.scss'

document.getElementById("connect").addEventListener("click", function() {

  navigator.bluetooth.requestDevice({ filters: [{ services: ['4fafc201-1fb5-459e-8fcc-c5c9c331914b'] }] })
  .then(device => device.gatt.connect())
  .then(server => server.getPrimaryService('4fafc201-1fb5-459e-8fcc-c5c9c331914b'))
  .then(service => service.getCharacteristic('beb5483e-36e1-4688-b7f5-ea07361b26a8'))
  .then(characteristic => {

      document.getElementById("off").addEventListener("click", function(){
          return characteristic.writeValue(Uint8Array.of(51));
      });

      document.getElementById("red").addEventListener("click", function(){
          return characteristic.writeValue(Uint8Array.of(52));
      });

      document.getElementById("green").addEventListener("click", function(){
          return characteristic.writeValue(Uint8Array.of(53));
      });

      document.getElementById("blue").addEventListener("click", function(){
          return characteristic.writeValue(Uint8Array.of(54));
      });

      document.getElementById("yellow").addEventListener("click", function(){
          return characteristic.writeValue(Uint8Array.of(55));
      });

      document.getElementById("white").addEventListener("click", function(){
        return characteristic.writeValue(Uint8Array.of(56));
      });

      document.querySelector("#brightness").addEventListener ("input", function () {
        return characteristic.writeValue(Uint8Array.of(this.value));
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

let deferredPrompt;
const addBtn = document.querySelector('.add-button');
// addBtn.style.display = 'none';

window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    console.log("1");
    e.preventDefault();
    // Stash the event so it can be triggered later.
    deferredPrompt = e;
    // Update UI to notify the user they can add to home screen
    addBtn.style.display = 'block';
  
    addBtn.addEventListener('click', (e) => {
      // hide our user interface that shows our A2HS button
      console.log("2");
      addBtn.style.display = 'none';
      // Show the prompt
      deferredPrompt.prompt();
      // Wait for the user to respond to the prompt
      deferredPrompt.userChoice.then((choiceResult) => {
          if (choiceResult.outcome === 'accepted') {
            console.log('User accepted the A2HS prompt');
          } else {
            console.log('User dismissed the A2HS prompt');
          }
          deferredPrompt = null;
        });
    });
  });