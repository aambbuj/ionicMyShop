(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{Tsnu:function(e,s,t){"use strict";t.r(s),t.d(s,"startFocusVisible",(function(){return n}));const o=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp"],n=()=>{let e=[],s=!0;const t=document,n=s=>{e.forEach(e=>e.classList.remove("ion-focused")),s.forEach(e=>e.classList.add("ion-focused")),e=s},c=()=>{s=!1,n([])};t.addEventListener("keydown",e=>{s=o.includes(e.key),s||n([])}),t.addEventListener("focusin",e=>{if(s&&e.composedPath){const s=e.composedPath().filter(e=>!!e.classList&&e.classList.contains("ion-focusable"));n(s)}}),t.addEventListener("focusout",()=>{t.activeElement===t.body&&n([])}),t.addEventListener("touchstart",c),t.addEventListener("mousedown",c)}}}]);