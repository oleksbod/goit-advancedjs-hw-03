import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{i}from"./assets/vendor-9808d4ac.js";document.querySelector(".form").addEventListener("submit",function(e){e.preventDefault();const o=parseInt(e.target.delay.value),r=e.target.state.value;s(o,r).then(t=>{i.success({position:"topRight",icon:"icon-bi_check2-circle",progressBarColor:"rgb(50, 97, 1)",title:"OK",message:`Fulfilled promise in ${t}ms`})}).catch(t=>{i.error({position:"topRight",icon:"icon-bi_x-octagon",title:"Error",progressBarColor:"rgb(181, 27, 27)",message:`Rejected promise in ${t}ms`})})});function s(e,o){return new Promise((r,t)=>{setTimeout(()=>{o==="fulfilled"?r(e):t(e)},e)})}
//# sourceMappingURL=commonHelpers2.js.map
