var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},e.parcelRequired7c6=n);var o=n("iQIUW");const i=document.querySelector(".form");let l=0;function u(e,t){const r=Math.random()>.3;return new Promise(((n,o)=>{setTimeout((()=>{r?n(`✅ Fulfilled promise ${e} in ${t}ms`):o(`❌ Rejected promise ${e} in ${t}ms`)}),t)})).then((e=>o.Notify.success(e))).catch((e=>o.Notify.failure(e)))}i.addEventListener("submit",(function(e){e.preventDefault();const{elements:{delay:t,step:r,amount:n}}=e.currentTarget,o=Number(t.value),i=Number(r.value),a=Number(n.value);setTimeout((()=>{u(1,o),l+=1;let e=setInterval((()=>{if(l===a)return void clearInterval(e);u(1+l,o+i*l),l+=1}),i)}),o),e.currentTarget.reset(),l=0}));
//# sourceMappingURL=03-promises.ea75b408.js.map
