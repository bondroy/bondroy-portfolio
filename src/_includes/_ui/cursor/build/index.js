"use strict";function Cursor(t){var e=document.querySelectorAll("a"),n={x:0,y:0},o={x:0,y:0},a={x:0,y:0},r=1,c=1;function i(e){r=e.target.offsetHeight/10,t.style.filter="invert(1)",t.style.mixBlendMode="exclusion"}function d(e){r=1,t.style.filter="",t.style.mixBlendMode=""}e.forEach(function(e){e.addEventListener("mouseenter",i),e.addEventListener("mouseleave",d)}),window.addEventListener("mousemove",function(e){n.x=e.x,n.y=e.y}),window.renderer.onUpdate(function(){var e=n.x-o.x,t=n.y-o.y;o.x+=.2*e,o.y+=.2*t,c+=.2*(r-c),a.x=0<e?Math.min(e,5)/100:Math.max(e,-5)/100,a.y=0<t?Math.min(t,5)/100:Math.max(t,-5)/100}),window.renderer.onRender(function(){t.style.transform="translate(-50%, -50%) translate3d(".concat(o.x,"px, ").concat(o.y,"px, 0) scale(").concat(c*(1+a.x),", ").concat(c*(1+a.y),") skew(").concat(a.x,"deg, ").concat(a.y,"deg)")})}