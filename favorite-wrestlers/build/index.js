(()=>{"use strict";var e,r={738:()=>{const e=window.wp.blocks,r=window.wp.i18n,t=window.React,s=window.wp.blockEditor,l=window.wp.components,n=({wrestlers:e,removeWrestler:r})=>(0,t.createElement)("ul",null,e.map(((e,s)=>(0,t.createElement)("li",{key:s},e,(0,t.createElement)(l.Button,{isLink:!0,isDestructive:!0,onClick:()=>r(s)},"Remove"))))),o=window.wp.element,a=({addWrestler:e})=>{const[r,s]=(0,o.useState)("");return(0,t.createElement)("div",{className:"wrestler-input"},(0,t.createElement)(l.TextControl,{label:"Add Wrestler",value:r,onChange:s}),(0,t.createElement)(l.Button,{isPrimary:!0,onClick:()=>{""!==r.trim()&&(e(r),s(""))}},"Add Wrestler"))};(0,e.registerBlockType)("create-block/favorite-wrestlers",{title:(0,r.__)("Favorite Wrestlers","favorite-wrestlers"),icon:"groups",category:"widgets",attributes:{wrestlers:{type:"array",default:[]}},edit:function({attributes:e,setAttributes:r}){const{wrestlers:l}=e;return(0,t.createElement)("div",{...(0,s.useBlockProps)()},(0,t.createElement)(a,{addWrestler:e=>{r({wrestlers:[...l,e]})}}),(0,t.createElement)(n,{wrestlers:l,removeWrestler:e=>{const t=[...l];t.splice(e,1),r({wrestlers:t})}}))},save:function({attributes:e}){const{wrestlers:r}=e;return(0,t.createElement)("div",{...s.useBlockProps.save()},(0,t.createElement)("ul",null,r.map(((e,r)=>(0,t.createElement)("li",{key:r},e)))))}})}},t={};function s(e){var l=t[e];if(void 0!==l)return l.exports;var n=t[e]={exports:{}};return r[e](n,n.exports,s),n.exports}s.m=r,e=[],s.O=(r,t,l,n)=>{if(!t){var o=1/0;for(u=0;u<e.length;u++){for(var[t,l,n]=e[u],a=!0,i=0;i<t.length;i++)(!1&n||o>=n)&&Object.keys(s.O).every((e=>s.O[e](t[i])))?t.splice(i--,1):(a=!1,n<o&&(o=n));if(a){e.splice(u--,1);var c=l();void 0!==c&&(r=c)}}return r}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[t,l,n]},s.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e={57:0,350:0};s.O.j=r=>0===e[r];var r=(r,t)=>{var l,n,[o,a,i]=t,c=0;if(o.some((r=>0!==e[r]))){for(l in a)s.o(a,l)&&(s.m[l]=a[l]);if(i)var u=i(s)}for(r&&r(t);c<o.length;c++)n=o[c],s.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return s.O(u)},t=globalThis.webpackChunkfavorite_wrestlers=globalThis.webpackChunkfavorite_wrestlers||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var l=s.O(void 0,[350],(()=>s(738)));l=s.O(l)})();