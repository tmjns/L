const l=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function i(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(t){if(t.ep)return;t.ep=!0;const n=i(t);fetch(t.href,n)}};l();const u=document.querySelector("#brightness");u.addEventListener("input",function(){console.log(this.value)});document.getElementById("connect").addEventListener("click",function(){navigator.bluetooth.requestDevice({filters:[{services:["4fafc201-1fb5-459e-8fcc-c5c9c331914b"]}]}).then(e=>e.gatt.connect()).then(e=>e.getPrimaryService("4fafc201-1fb5-459e-8fcc-c5c9c331914b")).then(e=>e.getCharacteristic("beb5483e-36e1-4688-b7f5-ea07361b26a8")).then(e=>{document.getElementById("off").addEventListener("click",function(){return e.writeValue(Uint8Array.of(48))}),document.getElementById("red").addEventListener("click",function(){return e.writeValue(Uint8Array.of(49))}),document.getElementById("green").addEventListener("click",function(){return e.writeValue(Uint8Array.of(50))}),document.getElementById("blue").addEventListener("click",function(){return e.writeValue(Uint8Array.of(51))}),document.getElementById("yellow").addEventListener("click",function(){return e.writeValue(Uint8Array.of(52))}),document.getElementById("white").addEventListener("click",function(){return e.writeValue(Uint8Array.of(53))})}).then(e=>{document.getElementById("status").className="on",console.log("Lamp is connected")}).catch(e=>{document.getElementById("status").className="error",console.error(e)})});
