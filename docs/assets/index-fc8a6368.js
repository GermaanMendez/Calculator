(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();const i=(e,l)=>{e.innerHTML=l},g=(e,l,r)=>(r===0?r=e:r+=e,i(l,r),r),m=(e,l,r,s,t,o)=>(e==0?e=s:(l==="+"&&(e=parseFloat(e)+parseFloat(s)),l==="-"&&(e=parseFloat(e)-parseFloat(s)),l==="%"&&(e=parseFloat(e)/parseFloat(s)),l==="x"&&(e=parseFloat(e)*parseFloat(s))),i(t,e+l),i(o,0),r===!0?{currentResult:e}:{currentResult:e,currentNumberInput:0});window.addEventListener("load",h);function h(){document.querySelectorAll(".buttonNumbers").forEach(o=>{o.addEventListener("click",c=>{u=!1,n=g(c.target.value,a,n)})}),document.querySelectorAll(".buttonOperators").forEach(o=>{o.addEventListener("click",c=>{u=!1,d=c.target.value;let y=m(f,d,u,n,p,a);f=y.currentResult,n=y.currentNumberInput})}),document.querySelector(".buttonClear").addEventListener("click",B),document.querySelector(".buttonDelete").addEventListener("click",v),document.querySelector(".buttonResult").addEventListener("click",L)}const p=document.querySelector("#h2currentResult"),a=document.querySelector("#h2currentInput");let d=null,n=0,f=0,u=!1;function L(){u=!0,i(p,f+d+n+" = ");let e=m(f,d,u,n,a,a).currentResult;i(a,e)}function v(){u?i(p," "):(n=n.substring(0,n.length-1),i(a,n))}function B(){n=0,f=0,d=null,i(a,n),i(p," ")}