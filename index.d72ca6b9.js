var t=!1,n=!1;function e(t,n){var e=document.createElement("div");e.classList.add(n),e.setAttribute("data-qa","notification"),e.textContent=t,document.body.appendChild(e)}new Promise(function(n,e){document.addEventListener("mousedown",function(e){0===e.button&&(n("First promise was resolved"),t=!0)}),setTimeout(function(){t||e("First promise was rejected")},3e3)}).then(function(t){return e(t,"success")}).catch(function(t){return e(t,"error")}),new Promise(function(e,o){document.addEventListener("mousedown",function(o){(0===o.button||2===o.button)&&(e("Second promise was resolved"),0===o.button&&(t=!0),2===o.button&&(n=!0))})}).then(function(t){return e(t,"success")}),new Promise(function(e){var o=function(){t&&n&&e("Third promise was resolved")};document.addEventListener("mousedown",function(e){0===e.button&&(t=!0),2===e.button&&(n=!0),o()})}).then(function(t){return e(t,"success")});
//# sourceMappingURL=index.d72ca6b9.js.map
