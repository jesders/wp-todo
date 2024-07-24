(()=>{"use strict";var e,r={543:()=>{const e=window.wp.blocks,r=window.wp.i18n,t=window.React,s=window.wp.blockEditor,l=window.wp.components,o=({wrestlers:e,removeWrestler:r})=>(0,t.createElement)("ul",null,e.map(((e,s)=>(0,t.createElement)("li",{key:s},e,(0,t.createElement)(l.Button,{isLink:!0,isDestructive:!0,onClick:()=>r(s)},(0,t.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"remove"},(0,t.createElement)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18 18 6M6 6l12 12"}))))))),n=window.wp.element,i=({addWrestler:e})=>{const[r,s]=(0,n.useState)("");return(0,t.createElement)("div",{className:"wrestler-input"},(0,t.createElement)(l.TextControl,{label:"Add Wrestler",value:r,onChange:s}),(0,t.createElement)(l.Button,{isPrimary:!0,onClick:()=>{""!==r.trim()&&(e(r),s(""))}},"Add Wrestler"))};(0,e.registerBlockType)("create-block/favorite-wrestlers",{title:(0,r.__)("Favorite Wrestlers","favorite-wrestlers"),icon:"groups",category:"widgets",attributes:{wrestlers:{type:"array",default:[]}},edit:function({attributes:e,setAttributes:r}){const{wrestlers:l}=e;return(0,t.createElement)("div",{...(0,s.useBlockProps)()},(0,t.createElement)(o,{wrestlers:l,removeWrestler:e=>{const t=[...l];t.splice(e,1),r({wrestlers:t})}}),(0,t.createElement)(i,{addWrestler:e=>{r({wrestlers:[...l,e]})}}))},save:function({attributes:e}){const{wrestlers:r}=e;return(0,t.createElement)("div",{...s.useBlockProps.save()},(0,t.createElement)("ul",null,r.map(((e,r)=>(0,t.createElement)("li",{key:r},e)))))}})}},t={};function s(e){var l=t[e];if(void 0!==l)return l.exports;var o=t[e]={exports:{}};return r[e](o,o.exports,s),o.exports}s.m=r,e=[],s.O=(r,t,l,o)=>{if(!t){var n=1/0;for(w=0;w<e.length;w++){for(var[t,l,o]=e[w],i=!0,a=0;a<t.length;a++)(!1&o||n>=o)&&Object.keys(s.O).every((e=>s.O[e](t[a])))?t.splice(a--,1):(i=!1,o<n&&(n=o));if(i){e.splice(w--,1);var c=l();void 0!==c&&(r=c)}}return r}o=o||0;for(var w=e.length;w>0&&e[w-1][2]>o;w--)e[w]=e[w-1];e[w]=[t,l,o]},s.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e={57:0,350:0};s.O.j=r=>0===e[r];var r=(r,t)=>{var l,o,[n,i,a]=t,c=0;if(n.some((r=>0!==e[r]))){for(l in i)s.o(i,l)&&(s.m[l]=i[l]);if(a)var w=a(s)}for(r&&r(t);c<n.length;c++)o=n[c],s.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return s.O(w)},t=globalThis.webpackChunkfavorite_wrestlers=globalThis.webpackChunkfavorite_wrestlers||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var l=s.O(void 0,[350],(()=>s(543)));l=s.O(l)})();