import{S as pe,i as ge,s as me,e as ye,b as J,C as xe,h as p,o as Qt,D as mn,E as Fe,F as xt,k as b,l as v,m as y,G as Et,H as Kt,I as bn,J as vn,K as St,L as _n,q as K,r as W,n as h,M as d,N as R,O as ae,a as N,y as Z,c as O,z as ee,A as te,P as ce,g as $,Q as Ae,R as fe,d as z,B as ne,T as rt,U as Ct,V as $e,v as st,f as it,W as Ye,X as Wt,Y as Gt,Z as Yt,_ as Jt,w as yn}from"../chunks/index.d9d0aa8f.mjs";import{f as De,a as Ve}from"../chunks/index.c24b7fc2.mjs";const Ee=/^[a-z0-9]+(-[a-z0-9]+)*$/,Be=(e,t,n,r="")=>{const o=e.split(":");if(e.slice(0,1)==="@"){if(o.length<2||o.length>3)return null;r=o.shift().slice(1)}if(o.length>3||!o.length)return null;if(o.length>1){const l=o.pop(),c=o.pop(),a={provider:o.length>0?o[0]:r,prefix:c,name:l};return t&&!Oe(a)?null:a}const s=o[0],i=s.split("-");if(i.length>1){const l={provider:r,prefix:i.shift(),name:i.join("-")};return t&&!Oe(l)?null:l}if(n&&r===""){const l={provider:r,prefix:"",name:s};return t&&!Oe(l,n)?null:l}return null},Oe=(e,t)=>e?!!((e.provider===""||e.provider.match(Ee))&&(t&&e.prefix===""||e.prefix.match(Ee))&&e.name.match(Ee)):!1,Xt=Object.freeze({left:0,top:0,width:16,height:16}),ze=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),Re=Object.freeze({...Xt,...ze}),Je=Object.freeze({...Re,body:"",hidden:!1});function wn(e,t){const n={};!e.hFlip!=!t.hFlip&&(n.hFlip=!0),!e.vFlip!=!t.vFlip&&(n.vFlip=!0);const r=((e.rotate||0)+(t.rotate||0))%4;return r&&(n.rotate=r),n}function Mt(e,t){const n=wn(e,t);for(const r in Je)r in ze?r in e&&!(r in n)&&(n[r]=ze[r]):r in t?n[r]=t[r]:r in e&&(n[r]=e[r]);return n}function In(e,t){const n=e.icons,r=e.aliases||Object.create(null),o=Object.create(null);function s(i){if(n[i])return o[i]=[];if(!(i in o)){o[i]=null;const l=r[i]&&r[i].parent,c=l&&s(l);c&&(o[i]=[l].concat(c))}return o[i]}return(t||Object.keys(n).concat(Object.keys(r))).forEach(s),o}function kn(e,t,n){const r=e.icons,o=e.aliases||Object.create(null);let s={};function i(l){s=Mt(r[l]||o[l],s)}return i(t),n.forEach(i),Mt(e,s)}function Zt(e,t){const n=[];if(typeof e!="object"||typeof e.icons!="object")return n;e.not_found instanceof Array&&e.not_found.forEach(o=>{t(o,null),n.push(o)});const r=In(e);for(const o in r){const s=r[o];s&&(t(o,kn(e,o,s)),n.push(o))}return n}const xn={provider:"",aliases:{},not_found:{},...Xt};function We(e,t){for(const n in t)if(n in e&&typeof e[n]!=typeof t[n])return!1;return!0}function en(e){if(typeof e!="object"||e===null)return null;const t=e;if(typeof t.prefix!="string"||!e.icons||typeof e.icons!="object"||!We(e,xn))return null;const n=t.icons;for(const o in n){const s=n[o];if(!o.match(Ee)||typeof s.body!="string"||!We(s,Je))return null}const r=t.aliases||Object.create(null);for(const o in r){const s=r[o],i=s.parent;if(!o.match(Ee)||typeof i!="string"||!n[i]&&!r[i]||!We(s,Je))return null}return t}const At=Object.create(null);function En(e,t){return{provider:e,prefix:t,icons:Object.create(null),missing:new Set}}function he(e,t){const n=At[e]||(At[e]=Object.create(null));return n[t]||(n[t]=En(e,t))}function lt(e,t){return en(t)?Zt(t,(n,r)=>{r?e.icons[n]=r:e.missing.add(n)}):[]}function Sn(e,t,n){try{if(typeof n.body=="string")return e.icons[t]={...n},!0}catch{}return!1}let Se=!1;function tn(e){return typeof e=="boolean"&&(Se=e),Se}function Cn(e){const t=typeof e=="string"?Be(e,!0,Se):e;if(t){const n=he(t.provider,t.prefix),r=t.name;return n.icons[r]||(n.missing.has(r)?null:void 0)}}function Mn(e,t){const n=Be(e,!0,Se);if(!n)return!1;const r=he(n.provider,n.prefix);return Sn(r,n.name,t)}function An(e,t){if(typeof e!="object")return!1;if(typeof t!="string"&&(t=e.provider||""),Se&&!t&&!e.prefix){let o=!1;return en(e)&&(e.prefix="",Zt(e,(s,i)=>{i&&Mn(s,i)&&(o=!0)})),o}const n=e.prefix;if(!Oe({provider:t,prefix:n,name:"a"}))return!1;const r=he(t,n);return!!lt(r,e)}const nn=Object.freeze({width:null,height:null}),on=Object.freeze({...nn,...ze}),Tn=/(-?[0-9.]*[0-9]+[0-9.]*)/g,Ln=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function Tt(e,t,n){if(t===1)return e;if(n=n||100,typeof e=="number")return Math.ceil(e*t*n)/n;if(typeof e!="string")return e;const r=e.split(Tn);if(r===null||!r.length)return e;const o=[];let s=r.shift(),i=Ln.test(s);for(;;){if(i){const l=parseFloat(s);isNaN(l)?o.push(s):o.push(Math.ceil(l*t*n)/n)}else o.push(s);if(s=r.shift(),s===void 0)return o.join("");i=!i}}const jn=e=>e==="unset"||e==="undefined"||e==="none";function Nn(e,t){const n={...Re,...e},r={...on,...t},o={left:n.left,top:n.top,width:n.width,height:n.height};let s=n.body;[n,r].forEach(I=>{const E=[],P=I.hFlip,x=I.vFlip;let m=I.rotate;P?x?m+=2:(E.push("translate("+(o.width+o.left).toString()+" "+(0-o.top).toString()+")"),E.push("scale(-1 1)"),o.top=o.left=0):x&&(E.push("translate("+(0-o.left).toString()+" "+(o.height+o.top).toString()+")"),E.push("scale(1 -1)"),o.top=o.left=0);let A;switch(m<0&&(m-=Math.floor(m/4)*4),m=m%4,m){case 1:A=o.height/2+o.top,E.unshift("rotate(90 "+A.toString()+" "+A.toString()+")");break;case 2:E.unshift("rotate(180 "+(o.width/2+o.left).toString()+" "+(o.height/2+o.top).toString()+")");break;case 3:A=o.width/2+o.left,E.unshift("rotate(-90 "+A.toString()+" "+A.toString()+")");break}m%2===1&&(o.left!==o.top&&(A=o.left,o.left=o.top,o.top=A),o.width!==o.height&&(A=o.width,o.width=o.height,o.height=A)),E.length&&(s='<g transform="'+E.join(" ")+'">'+s+"</g>")});const i=r.width,l=r.height,c=o.width,a=o.height;let f,u;i===null?(u=l===null?"1em":l==="auto"?a:l,f=Tt(u,c/a)):(f=i==="auto"?c:i,u=l===null?Tt(f,a/c):l==="auto"?a:l);const g={},_=(I,E)=>{jn(E)||(g[I]=E.toString())};return _("width",f),_("height",u),g.viewBox=o.left.toString()+" "+o.top.toString()+" "+c.toString()+" "+a.toString(),{attributes:g,body:s}}const On=/\sid="(\S+)"/g,Pn="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let Fn=0;function $n(e,t=Pn){const n=[];let r;for(;r=On.exec(e);)n.push(r[1]);if(!n.length)return e;const o="suffix"+(Math.random()*16777216|Date.now()).toString(16);return n.forEach(s=>{const i=typeof t=="function"?t(s):t+(Fn++).toString(),l=s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");e=e.replace(new RegExp('([#;"])('+l+')([")]|\\.[a-z])',"g"),"$1"+i+o+"$3")}),e=e.replace(new RegExp(o,"g"),""),e}const Xe=Object.create(null);function Dn(e,t){Xe[e]=t}function Ze(e){return Xe[e]||Xe[""]}function ct(e){let t;if(typeof e.resources=="string")t=[e.resources];else if(t=e.resources,!(t instanceof Array)||!t.length)return null;return{resources:t,path:e.path||"/",maxURL:e.maxURL||500,rotate:e.rotate||750,timeout:e.timeout||5e3,random:e.random===!0,index:e.index||0,dataAfterTimeout:e.dataAfterTimeout!==!1}}const at=Object.create(null),ke=["https://api.simplesvg.com","https://api.unisvg.com"],Pe=[];for(;ke.length>0;)ke.length===1||Math.random()>.5?Pe.push(ke.shift()):Pe.push(ke.pop());at[""]=ct({resources:["https://api.iconify.design"].concat(Pe)});function Vn(e,t){const n=ct(t);return n===null?!1:(at[e]=n,!0)}function ft(e){return at[e]}const zn=()=>{let e;try{if(e=fetch,typeof e=="function")return e}catch{}};let Lt=zn();function Bn(e,t){const n=ft(e);if(!n)return 0;let r;if(!n.maxURL)r=0;else{let o=0;n.resources.forEach(i=>{o=Math.max(o,i.length)});const s=t+".json?icons=";r=n.maxURL-o-n.path.length-s.length}return r}function Rn(e){return e===404}const qn=(e,t,n)=>{const r=[],o=Bn(e,t),s="icons";let i={type:s,provider:e,prefix:t,icons:[]},l=0;return n.forEach((c,a)=>{l+=c.length+1,l>=o&&a>0&&(r.push(i),i={type:s,provider:e,prefix:t,icons:[]},l=c.length),i.icons.push(c)}),r.push(i),r};function Un(e){if(typeof e=="string"){const t=ft(e);if(t)return t.path}return"/"}const Hn=(e,t,n)=>{if(!Lt){n("abort",424);return}let r=Un(t.provider);switch(t.type){case"icons":{const s=t.prefix,l=t.icons.join(","),c=new URLSearchParams({icons:l});r+=s+".json?"+c.toString();break}case"custom":{const s=t.uri;r+=s.slice(0,1)==="/"?s.slice(1):s;break}default:n("abort",400);return}let o=503;Lt(e+r).then(s=>{const i=s.status;if(i!==200){setTimeout(()=>{n(Rn(i)?"abort":"next",i)});return}return o=501,s.json()}).then(s=>{if(typeof s!="object"||s===null){setTimeout(()=>{s===404?n("abort",s):n("next",o)});return}setTimeout(()=>{n("success",s)})}).catch(()=>{n("next",o)})},Qn={prepare:qn,send:Hn};function Kn(e){const t={loaded:[],missing:[],pending:[]},n=Object.create(null);e.sort((o,s)=>o.provider!==s.provider?o.provider.localeCompare(s.provider):o.prefix!==s.prefix?o.prefix.localeCompare(s.prefix):o.name.localeCompare(s.name));let r={provider:"",prefix:"",name:""};return e.forEach(o=>{if(r.name===o.name&&r.prefix===o.prefix&&r.provider===o.provider)return;r=o;const s=o.provider,i=o.prefix,l=o.name,c=n[s]||(n[s]=Object.create(null)),a=c[i]||(c[i]=he(s,i));let f;l in a.icons?f=t.loaded:i===""||a.missing.has(l)?f=t.missing:f=t.pending;const u={provider:s,prefix:i,name:l};f.push(u)}),t}function rn(e,t){e.forEach(n=>{const r=n.loaderCallbacks;r&&(n.loaderCallbacks=r.filter(o=>o.id!==t))})}function Wn(e){e.pendingCallbacksFlag||(e.pendingCallbacksFlag=!0,setTimeout(()=>{e.pendingCallbacksFlag=!1;const t=e.loaderCallbacks?e.loaderCallbacks.slice(0):[];if(!t.length)return;let n=!1;const r=e.provider,o=e.prefix;t.forEach(s=>{const i=s.icons,l=i.pending.length;i.pending=i.pending.filter(c=>{if(c.prefix!==o)return!0;const a=c.name;if(e.icons[a])i.loaded.push({provider:r,prefix:o,name:a});else if(e.missing.has(a))i.missing.push({provider:r,prefix:o,name:a});else return n=!0,!0;return!1}),i.pending.length!==l&&(n||rn([e],s.id),s.callback(i.loaded.slice(0),i.missing.slice(0),i.pending.slice(0),s.abort))})}))}let Gn=0;function Yn(e,t,n){const r=Gn++,o=rn.bind(null,n,r);if(!t.pending.length)return o;const s={id:r,icons:t,callback:e,abort:o};return n.forEach(i=>{(i.loaderCallbacks||(i.loaderCallbacks=[])).push(s)}),o}function Jn(e,t=!0,n=!1){const r=[];return e.forEach(o=>{const s=typeof o=="string"?Be(o,t,n):o;s&&r.push(s)}),r}var Xn={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function Zn(e,t,n,r){const o=e.resources.length,s=e.random?Math.floor(Math.random()*o):e.index;let i;if(e.random){let k=e.resources.slice(0);for(i=[];k.length>1;){const w=Math.floor(Math.random()*k.length);i.push(k[w]),k=k.slice(0,w).concat(k.slice(w+1))}i=i.concat(k)}else i=e.resources.slice(s).concat(e.resources.slice(0,s));const l=Date.now();let c="pending",a=0,f,u=null,g=[],_=[];typeof r=="function"&&_.push(r);function I(){u&&(clearTimeout(u),u=null)}function E(){c==="pending"&&(c="aborted"),I(),g.forEach(k=>{k.status==="pending"&&(k.status="aborted")}),g=[]}function P(k,w){w&&(_=[]),typeof k=="function"&&_.push(k)}function x(){return{startTime:l,payload:t,status:c,queriesSent:a,queriesPending:g.length,subscribe:P,abort:E}}function m(){c="failed",_.forEach(k=>{k(void 0,f)})}function A(){g.forEach(k=>{k.status==="pending"&&(k.status="aborted")}),g=[]}function D(k,w,F){const H=w!=="success";switch(g=g.filter(S=>S!==k),c){case"pending":break;case"failed":if(H||!e.dataAfterTimeout)return;break;default:return}if(w==="abort"){f=F,m();return}if(H){f=F,g.length||(i.length?T():m());return}if(I(),A(),!e.random){const S=e.resources.indexOf(k.resource);S!==-1&&S!==e.index&&(e.index=S)}c="completed",_.forEach(S=>{S(F)})}function T(){if(c!=="pending")return;I();const k=i.shift();if(k===void 0){if(g.length){u=setTimeout(()=>{I(),c==="pending"&&(A(),m())},e.timeout);return}m();return}const w={status:"pending",resource:k,callback:(F,H)=>{D(w,F,H)}};g.push(w),a++,u=setTimeout(T,e.rotate),n(k,t,w.callback)}return setTimeout(T),x}function sn(e){const t={...Xn,...e};let n=[];function r(){n=n.filter(l=>l().status==="pending")}function o(l,c,a){const f=Zn(t,l,c,(u,g)=>{r(),a&&a(u,g)});return n.push(f),f}function s(l){return n.find(c=>l(c))||null}return{query:o,find:s,setIndex:l=>{t.index=l},getIndex:()=>t.index,cleanup:r}}function jt(){}const Ge=Object.create(null);function eo(e){if(!Ge[e]){const t=ft(e);if(!t)return;const n=sn(t),r={config:t,redundancy:n};Ge[e]=r}return Ge[e]}function to(e,t,n){let r,o;if(typeof e=="string"){const s=Ze(e);if(!s)return n(void 0,424),jt;o=s.send;const i=eo(e);i&&(r=i.redundancy)}else{const s=ct(e);if(s){r=sn(s);const i=e.resources?e.resources[0]:"",l=Ze(i);l&&(o=l.send)}}return!r||!o?(n(void 0,424),jt):r.query(t,o,n)().abort}const Nt="iconify2",Ce="iconify",ln=Ce+"-count",Ot=Ce+"-version",cn=36e5,no=168;function et(e,t){try{return e.getItem(t)}catch{}}function ut(e,t,n){try{return e.setItem(t,n),!0}catch{}}function Pt(e,t){try{e.removeItem(t)}catch{}}function tt(e,t){return ut(e,ln,t.toString())}function nt(e){return parseInt(et(e,ln))||0}const qe={local:!0,session:!0},an={local:new Set,session:new Set};let dt=!1;function oo(e){dt=e}let Ne=typeof window>"u"?{}:window;function fn(e){const t=e+"Storage";try{if(Ne&&Ne[t]&&typeof Ne[t].length=="number")return Ne[t]}catch{}qe[e]=!1}function un(e,t){const n=fn(e);if(!n)return;const r=et(n,Ot);if(r!==Nt){if(r){const l=nt(n);for(let c=0;c<l;c++)Pt(n,Ce+c.toString())}ut(n,Ot,Nt),tt(n,0);return}const o=Math.floor(Date.now()/cn)-no,s=l=>{const c=Ce+l.toString(),a=et(n,c);if(typeof a=="string"){try{const f=JSON.parse(a);if(typeof f=="object"&&typeof f.cached=="number"&&f.cached>o&&typeof f.provider=="string"&&typeof f.data=="object"&&typeof f.data.prefix=="string"&&t(f,l))return!0}catch{}Pt(n,c)}};let i=nt(n);for(let l=i-1;l>=0;l--)s(l)||(l===i-1?(i--,tt(n,i)):an[e].add(l))}function dn(){if(!dt){oo(!0);for(const e in qe)un(e,t=>{const n=t.data,r=t.provider,o=n.prefix,s=he(r,o);if(!lt(s,n).length)return!1;const i=n.lastModified||-1;return s.lastModifiedCached=s.lastModifiedCached?Math.min(s.lastModifiedCached,i):i,!0})}}function ro(e,t){const n=e.lastModifiedCached;if(n&&n>=t)return n===t;if(e.lastModifiedCached=t,n)for(const r in qe)un(r,o=>{const s=o.data;return o.provider!==e.provider||s.prefix!==e.prefix||s.lastModified===t});return!0}function so(e,t){dt||dn();function n(r){let o;if(!qe[r]||!(o=fn(r)))return;const s=an[r];let i;if(s.size)s.delete(i=Array.from(s).shift());else if(i=nt(o),!tt(o,i+1))return;const l={cached:Math.floor(Date.now()/cn),provider:e.provider,data:t};return ut(o,Ce+i.toString(),JSON.stringify(l))}t.lastModified&&!ro(e,t.lastModified)||Object.keys(t.icons).length&&(t.not_found&&(t=Object.assign({},t),delete t.not_found),n("local")||n("session"))}function Ft(){}function io(e){e.iconsLoaderFlag||(e.iconsLoaderFlag=!0,setTimeout(()=>{e.iconsLoaderFlag=!1,Wn(e)}))}function lo(e,t){e.iconsToLoad?e.iconsToLoad=e.iconsToLoad.concat(t).sort():e.iconsToLoad=t,e.iconsQueueFlag||(e.iconsQueueFlag=!0,setTimeout(()=>{e.iconsQueueFlag=!1;const{provider:n,prefix:r}=e,o=e.iconsToLoad;delete e.iconsToLoad;let s;if(!o||!(s=Ze(n)))return;s.prepare(n,r,o).forEach(l=>{to(n,l,c=>{if(typeof c!="object")l.icons.forEach(a=>{e.missing.add(a)});else try{const a=lt(e,c);if(!a.length)return;const f=e.pendingIcons;f&&a.forEach(u=>{f.delete(u)}),so(e,c)}catch(a){console.error(a)}io(e)})})}))}const co=(e,t)=>{const n=Jn(e,!0,tn()),r=Kn(n);if(!r.pending.length){let c=!0;return t&&setTimeout(()=>{c&&t(r.loaded,r.missing,r.pending,Ft)}),()=>{c=!1}}const o=Object.create(null),s=[];let i,l;return r.pending.forEach(c=>{const{provider:a,prefix:f}=c;if(f===l&&a===i)return;i=a,l=f,s.push(he(a,f));const u=o[a]||(o[a]=Object.create(null));u[f]||(u[f]=[])}),r.pending.forEach(c=>{const{provider:a,prefix:f,name:u}=c,g=he(a,f),_=g.pendingIcons||(g.pendingIcons=new Set);_.has(u)||(_.add(u),o[a][f].push(u))}),s.forEach(c=>{const{provider:a,prefix:f}=c;o[a][f].length&&lo(c,o[a][f])}),t?Yn(t,r,s):Ft};function ao(e,t){const n={...e};for(const r in t){const o=t[r],s=typeof o;r in nn?(o===null||o&&(s==="string"||s==="number"))&&(n[r]=o):s===typeof n[r]&&(n[r]=r==="rotate"?o%4:o)}return n}const fo=/[\s,]+/;function uo(e,t){t.split(fo).forEach(n=>{switch(n.trim()){case"horizontal":e.hFlip=!0;break;case"vertical":e.vFlip=!0;break}})}function ho(e,t=0){const n=e.replace(/^-?[0-9.]*/,"");function r(o){for(;o<0;)o+=4;return o%4}if(n===""){const o=parseInt(e);return isNaN(o)?0:r(o)}else if(n!==e){let o=0;switch(n){case"%":o=25;break;case"deg":o=90}if(o){let s=parseFloat(e.slice(0,e.length-n.length));return isNaN(s)?0:(s=s/o,s%1===0?r(s):0)}}return t}function po(e,t){let n=e.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const r in t)n+=" "+r+'="'+t[r]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+e+"</svg>"}function go(e){return e.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function mo(e){return'url("data:image/svg+xml,'+go(e)+'")'}const $t={...on,inline:!1},bo={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},vo={display:"inline-block"},ot={"background-color":"currentColor"},hn={"background-color":"transparent"},Dt={image:"var(--svg)",repeat:"no-repeat",size:"100% 100%"},Vt={"-webkit-mask":ot,mask:ot,background:hn};for(const e in Vt){const t=Vt[e];for(const n in Dt)t[e+"-"+n]=Dt[n]}function _o(e){return e+(e.match(/^[-0-9.]+$/)?"px":"")}function yo(e,t){const n=ao($t,t),r=t.mode||"svg",o=r==="svg"?{...bo}:{};e.body.indexOf("xlink:")===-1&&delete o["xmlns:xlink"];let s=typeof t.style=="string"?t.style:"";for(let x in t){const m=t[x];if(m!==void 0)switch(x){case"icon":case"style":case"onLoad":case"mode":break;case"inline":case"hFlip":case"vFlip":n[x]=m===!0||m==="true"||m===1;break;case"flip":typeof m=="string"&&uo(n,m);break;case"color":s=s+(s.length>0&&s.trim().slice(-1)!==";"?";":"")+"color: "+m+"; ";break;case"rotate":typeof m=="string"?n[x]=ho(m):typeof m=="number"&&(n[x]=m);break;case"ariaHidden":case"aria-hidden":m!==!0&&m!=="true"&&delete o["aria-hidden"];break;default:if(x.slice(0,3)==="on:")break;$t[x]===void 0&&(o[x]=m)}}const i=Nn(e,n),l=i.attributes;if(n.inline&&(s="vertical-align: -0.125em; "+s),r==="svg"){Object.assign(o,l),s!==""&&(o.style=s);let x=0,m=t.id;return typeof m=="string"&&(m=m.replace(/-/g,"_")),{svg:!0,attributes:o,body:$n(i.body,m?()=>m+"ID"+x++:"iconifySvelte")}}const{body:c,width:a,height:f}=e,u=r==="mask"||(r==="bg"?!1:c.indexOf("currentColor")!==-1),g=po(c,{...l,width:a+"",height:f+""}),I={"--svg":mo(g)},E=x=>{const m=l[x];m&&(I[x]=_o(m))};E("width"),E("height"),Object.assign(I,vo,u?ot:hn);let P="";for(const x in I)P+=x+": "+I[x]+";";return o.style=P+s,{svg:!1,attributes:o}}tn(!0);Dn("",Qn);if(typeof document<"u"&&typeof window<"u"){dn();const e=window;if(e.IconifyPreload!==void 0){const t=e.IconifyPreload,n="Invalid IconifyPreload syntax.";typeof t=="object"&&t!==null&&(t instanceof Array?t:[t]).forEach(r=>{try{(typeof r!="object"||r===null||r instanceof Array||typeof r.icons!="object"||typeof r.prefix!="string"||!An(r))&&console.error(n)}catch{console.error(n)}})}if(e.IconifyProviders!==void 0){const t=e.IconifyProviders;if(typeof t=="object"&&t!==null)for(let n in t){const r="IconifyProviders["+n+"] is invalid.";try{const o=t[n];if(typeof o!="object"||!o||o.resources===void 0)continue;Vn(n,o)||console.error(r)}catch{console.error(r)}}}}function wo(e,t,n,r,o){function s(){t.loading&&(t.loading.abort(),t.loading=null)}if(typeof e=="object"&&e!==null&&typeof e.body=="string")return t.name="",s(),{data:{...Re,...e}};let i;if(typeof e!="string"||(i=Be(e,!1,!0))===null)return s(),null;const l=Cn(i);if(!l)return n&&(!t.loading||t.loading.name!==e)&&(s(),t.name="",t.loading={name:e,abort:co([i],r)}),null;s(),t.name!==e&&(t.name=e,o&&!t.destroyed&&o(e));const c=["iconify"];return i.prefix!==""&&c.push("iconify--"+i.prefix),i.provider!==""&&c.push("iconify--"+i.provider),{data:l,classes:c}}function Io(e,t){return e?yo({...Re,...e},t):null}function zt(e){let t;function n(s,i){return s[0].svg?xo:ko}let r=n(e),o=r(e);return{c(){o.c(),t=ye()},l(s){o.l(s),t=ye()},m(s,i){o.m(s,i),J(s,t,i)},p(s,i){r===(r=n(s))&&o?o.p(s,i):(o.d(1),o=r(s),o&&(o.c(),o.m(t.parentNode,t)))},d(s){o.d(s),s&&p(t)}}}function ko(e){let t,n=[e[0].attributes],r={};for(let o=0;o<n.length;o+=1)r=Fe(r,n[o]);return{c(){t=b("span"),this.h()},l(o){t=v(o,"SPAN",{}),y(t).forEach(p),this.h()},h(){Et(t,r)},m(o,s){J(o,t,s)},p(o,s){Et(t,r=Kt(n,[s&1&&o[0].attributes]))},d(o){o&&p(t)}}}function xo(e){let t,n=e[0].body+"",r=[e[0].attributes],o={};for(let s=0;s<r.length;s+=1)o=Fe(o,r[s]);return{c(){t=bn("svg"),this.h()},l(s){t=vn(s,"svg",{});var i=y(t);i.forEach(p),this.h()},h(){St(t,o)},m(s,i){J(s,t,i),t.innerHTML=n},p(s,i){i&1&&n!==(n=s[0].body+"")&&(t.innerHTML=n),St(t,o=Kt(r,[i&1&&s[0].attributes]))},d(s){s&&p(t)}}}function Eo(e){let t,n=e[0]&&zt(e);return{c(){n&&n.c(),t=ye()},l(r){n&&n.l(r),t=ye()},m(r,o){n&&n.m(r,o),J(r,t,o)},p(r,[o]){r[0]?n?n.p(r,o):(n=zt(r),n.c(),n.m(t.parentNode,t)):n&&(n.d(1),n=null)},i:xe,o:xe,d(r){n&&n.d(r),r&&p(t)}}}function So(e,t,n){const r={name:"",loading:null,destroyed:!1};let o=!1,s=0,i;const l=a=>{typeof t.onLoad=="function"&&t.onLoad(a),_n()("load",{icon:a})};function c(){n(3,s++,s)}return Qt(()=>{n(2,o=!0)}),mn(()=>{n(1,r.destroyed=!0,r),r.loading&&(r.loading.abort(),n(1,r.loading=null,r))}),e.$$set=a=>{n(6,t=Fe(Fe({},t),xt(a)))},e.$$.update=()=>{{const a=wo(t.icon,r,o,c,l);n(0,i=a?Io(a.data,t):null),i&&a.classes&&n(0,i.attributes.class=(typeof t.class=="string"?t.class+" ":"")+a.classes.join(" "),i)}},t=xt(t),[i,r,o,s]}class Me extends pe{constructor(t){super(),ge(this,t,So,Eo,me,{})}}function Co(e){let t,n,r,o,s;return{c(){t=b("button"),n=b("a"),r=K("Contact"),this.h()},l(i){t=v(i,"BUTTON",{class:!0});var l=y(t);n=v(l,"A",{href:!0});var c=y(n);r=W(c,"Contact"),c.forEach(p),l.forEach(p),this.h()},h(){h(n,"href","/"),h(t,"class","bg-secondaryColor py-3 px-7 text-textColor rounded-full uppercase border-0 font-medium")},m(i,l){J(i,t,l),d(t,n),d(n,r),o||(s=R(n,"click",ae(e[2])),o=!0)},p:xe,i:xe,o:xe,d(i){i&&p(t),o=!1,s()}}}function Mo(e,t,n){let{closeMenu:r}=t;const o=i=>{const l=document.querySelector(i);if(!l)return;let a=l.getBoundingClientRect().top+window.pageYOffset;window.scrollTo({top:a,behavior:"smooth"}),r()},s=()=>o("#footer");return e.$$set=i=>{"closeMenu"in i&&n(1,r=i.closeMenu)},[o,r,s]}class pn extends pe{constructor(t){super(),ge(this,t,Mo,Co,me,{closeMenu:1})}}function Ao(e){let t,n,r,o,s,i,l,c,a,f,u,g,_,I,E,P,x,m,A,D,T,k,w,F,H;return m=new pn({props:{closeMenu:e[0]}}),T=new Me({props:{icon:"bi:x",class:"text-backgroundColor text-4xl font-bold z-50"}}),{c(){t=b("ul"),n=b("li"),r=b("a"),o=K("Home"),s=N(),i=b("li"),l=b("a"),c=K("About"),a=N(),f=b("li"),u=b("a"),g=K("Knowledge"),_=N(),I=b("li"),E=b("a"),P=K("Projects"),x=N(),Z(m.$$.fragment),A=N(),D=b("div"),Z(T.$$.fragment),this.h()},l(S){t=v(S,"UL",{class:!0});var M=y(t);n=v(M,"LI",{class:!0});var X=y(n);r=v(X,"A",{href:!0,class:!0});var L=y(r);o=W(L,"Home"),L.forEach(p),X.forEach(p),s=O(M),i=v(M,"LI",{class:!0});var C=y(i);l=v(C,"A",{href:!0,class:!0});var B=y(l);c=W(B,"About"),B.forEach(p),C.forEach(p),a=O(M),f=v(M,"LI",{class:!0});var V=y(f);u=v(V,"A",{href:!0,class:!0});var ie=y(u);g=W(ie,"Knowledge"),ie.forEach(p),V.forEach(p),_=O(M),I=v(M,"LI",{class:!0});var le=y(I);E=v(le,"A",{href:!0,class:!0});var G=y(E);P=W(G,"Projects"),G.forEach(p),le.forEach(p),x=O(M),ee(m.$$.fragment,M),A=O(M),D=v(M,"DIV",{class:!0});var Q=y(D);ee(T.$$.fragment,Q),Q.forEach(p),M.forEach(p),this.h()},h(){h(r,"href","/"),h(r,"class","font-medium text-xl"),h(n,"class","py-4"),h(l,"href","/"),h(l,"class","font-medium text-xl"),h(i,"class","py-4"),h(u,"href","/"),h(u,"class","font-medium text-xl"),h(f,"class","py-4"),h(E,"href","/"),h(E,"class","font-medium text-xl"),h(I,"class","py-4"),h(D,"class","absolute top-2 right-2 z-50"),h(t,"class","bg-primaryColor text-accentColor relative w-full sm:w-1/2 flex flex-col gap-2 justify-center items-center transition-all py-6 rounded-md drop-shadow-xl")},m(S,M){J(S,t,M),d(t,n),d(n,r),d(r,o),d(t,s),d(t,i),d(i,l),d(l,c),d(t,a),d(t,f),d(f,u),d(u,g),d(t,_),d(t,I),d(I,E),d(E,P),d(t,x),te(m,t,null),d(t,A),d(t,D),te(T,D,null),w=!0,F||(H=[R(r,"click",ae(e[2])),R(n,"click",function(){ce(e[0])&&e[0].apply(this,arguments)}),R(l,"click",ae(e[3])),R(i,"click",function(){ce(e[0])&&e[0].apply(this,arguments)}),R(u,"click",ae(e[4])),R(f,"click",function(){ce(e[0])&&e[0].apply(this,arguments)}),R(E,"click",ae(e[5])),R(I,"click",function(){ce(e[0])&&e[0].apply(this,arguments)}),R(D,"click",function(){ce(e[0])&&e[0].apply(this,arguments)})],F=!0)},p(S,[M]){e=S;const X={};M&1&&(X.closeMenu=e[0]),m.$set(X)},i(S){w||($(m.$$.fragment,S),$(T.$$.fragment,S),Ae(()=>{k||(k=fe(t,De,{y:-10},!0)),k.run(1)}),w=!0)},o(S){z(m.$$.fragment,S),z(T.$$.fragment,S),k||(k=fe(t,De,{y:-10},!1)),k.run(0),w=!1},d(S){S&&p(t),ne(m),ne(T),S&&k&&k.end(),F=!1,rt(H)}}}function To(e,t,n){let{closeMenu:r}=t;const o=a=>{const f=document.querySelector(a);if(!f)return;let g=f.getBoundingClientRect().top+window.pageYOffset;window.scrollTo({top:g,behavior:"smooth"})},s=()=>o("#navbar"),i=()=>o("#section2"),l=()=>o("#section3"),c=()=>o("#section4");return e.$$set=a=>{"closeMenu"in a&&n(0,r=a.closeMenu)},[r,o,s,i,l,c]}class gn extends pe{constructor(t){super(),ge(this,t,To,Ao,me,{closeMenu:0})}}function Bt(e){let t,n,r,o,s,i,l;return r=new gn({props:{closeMenu:e[2]}}),{c(){t=b("div"),n=b("div"),Z(r.$$.fragment),this.h()},l(c){t=v(c,"DIV",{class:!0});var a=y(t);n=v(a,"DIV",{class:!0});var f=y(n);ee(r.$$.fragment,f),f.forEach(p),a.forEach(p),this.h()},h(){h(n,"class","z-50 ml-5 mr-5 mt-20 relative"),h(t,"class","absolute top-0 left-0 w-screen h-screen bg-black/25")},m(c,a){J(c,t,a),d(t,n),te(r,n,null),s=!0,i||(l=[R(n,"click",Ye(function(){ce(e[2])&&e[2].apply(this,arguments)})),R(t,"click",Ye(function(){ce(e[2])&&e[2].apply(this,arguments)}))],i=!0)},p(c,a){e=c;const f={};a&4&&(f.closeMenu=e[2]),r.$set(f)},i(c){s||($(r.$$.fragment,c),Ae(()=>{o||(o=fe(t,De,{},!0)),o.run(1)}),s=!0)},o(c){z(r.$$.fragment,c),o||(o=fe(t,De,{},!1)),o.run(0),s=!1},d(c){c&&p(t),ne(r),c&&o&&o.end(),i=!1,rt(l)}}}function Lo(e){let t,n,r,o,s,i,l,c,a,f,u,g,_,I,E,P,x,m,A,D,T,k,w,F,H,S,M,X;c=new Me({props:{icon:"ri:git-branch-fill",class:"text-shadowColor text-4xl"}}),F=new pn({props:{closeMenu:e[2]}});let L=e[0]===!0&&Bt(e);return{c(){t=b("nav"),n=b("div"),r=b("div"),o=b("a"),s=K("Forrest S"),i=N(),l=b("div"),Z(c.$$.fragment),f=N(),u=b("ul"),g=b("li"),_=b("a"),I=K("About"),E=N(),P=b("li"),x=b("a"),m=K("Knowledge"),A=N(),D=b("li"),T=b("a"),k=K("Projects"),w=N(),Z(F.$$.fragment),H=N(),L&&L.c(),this.h()},l(C){t=v(C,"NAV",{id:!0,class:!0});var B=y(t);n=v(B,"DIV",{class:!0});var V=y(n);r=v(V,"DIV",{});var ie=y(r);o=v(ie,"A",{href:!0,class:!0});var le=y(o);s=W(le,"Forrest S"),le.forEach(p),ie.forEach(p),i=O(V),l=v(V,"DIV",{class:!0});var G=y(l);ee(c.$$.fragment,G),G.forEach(p),f=O(V),u=v(V,"UL",{class:!0});var Q=y(u);g=v(Q,"LI",{});var re=y(g);_=v(re,"A",{href:!0});var be=y(_);I=W(be,"About"),be.forEach(p),re.forEach(p),E=O(Q),P=v(Q,"LI",{});var ve=y(P);x=v(ve,"A",{href:!0});var oe=y(x);m=W(oe,"Knowledge"),oe.forEach(p),ve.forEach(p),A=O(Q),D=v(Q,"LI",{});var _e=y(D);T=v(_e,"A",{href:!0});var se=y(T);k=W(se,"Projects"),se.forEach(p),_e.forEach(p),w=O(Q),ee(F.$$.fragment,Q),Q.forEach(p),V.forEach(p),H=O(B),L&&L.l(B),B.forEach(p),this.h()},h(){h(o,"href","/"),h(o,"class","text-[#163A37] font-black text-2xl md:text-4xl tracking-wide"),h(l,"class",a=Ct(`transition-all md:hidden ${e[0]===!0?"hamburger-transition noclick":""}`)+" svelte-1vjugqk"),h(_,"href","/"),h(x,"href","/"),h(T,"href","/"),h(u,"class","hidden md:flex items-center space-x-10 text-primaryColor font-medium text-lg"),h(n,"class","flex items-center justify-between w-full py-6 lg:px-8"),$e(n,"blur",e[0]),h(t,"id","navbar"),h(t,"class","z-50 flex flex-col items-center absolute top-0 left-0 gutter w-full xl:top-4")},m(C,B){J(C,t,B),d(t,n),d(n,r),d(r,o),d(o,s),d(n,i),d(n,l),te(c,l,null),d(n,f),d(n,u),d(u,g),d(g,_),d(_,I),d(u,E),d(u,P),d(P,x),d(x,m),d(u,A),d(u,D),d(D,T),d(T,k),d(u,w),te(F,u,null),d(t,H),L&&L.m(t,null),S=!0,M||(X=[R(l,"click",e[4]),R(_,"click",ae(e[5])),R(x,"click",ae(e[6])),R(T,"click",ae(e[7]))],M=!0)},p(C,[B]){(!S||B&1&&a!==(a=Ct(`transition-all md:hidden ${C[0]===!0?"hamburger-transition noclick":""}`)+" svelte-1vjugqk"))&&h(l,"class",a);const V={};B&4&&(V.closeMenu=C[2]),F.$set(V),(!S||B&1)&&$e(n,"blur",C[0]),C[0]===!0?L?(L.p(C,B),B&1&&$(L,1)):(L=Bt(C),L.c(),$(L,1),L.m(t,null)):L&&(st(),z(L,1,1,()=>{L=null}),it())},i(C){S||($(c.$$.fragment,C),$(F.$$.fragment,C),$(L),S=!0)},o(C){z(c.$$.fragment,C),z(F.$$.fragment,C),z(L),S=!1},d(C){C&&p(t),ne(c),ne(F),L&&L.d(),M=!1,rt(X)}}}function jo(e,t,n){let{topNavIsActive:r}=t,{handleMenu:o}=t,{closeMenu:s}=t;const i=u=>{const g=document.querySelector(u);if(!g)return;let I=g.getBoundingClientRect().top+window.pageYOffset;window.scrollTo({top:I,behavior:"smooth"})},l=()=>o("top"),c=()=>i("#section2"),a=()=>i("#section3"),f=()=>i("#section4");return e.$$set=u=>{"topNavIsActive"in u&&n(0,r=u.topNavIsActive),"handleMenu"in u&&n(1,o=u.handleMenu),"closeMenu"in u&&n(2,s=u.closeMenu)},[r,o,s,i,l,c,a,f]}class No extends pe{constructor(t){super(),ge(this,t,jo,Lo,me,{topNavIsActive:0,handleMenu:1,closeMenu:2})}}const Oo=e=>({intersecting:e&1}),Rt=e=>({intersecting:e[0]});function Po(e){let t,n;const r=e[8].default,o=Wt(r,e,e[7],Rt);return{c(){t=b("div"),o&&o.c()},l(s){t=v(s,"DIV",{});var i=y(t);o&&o.l(i),i.forEach(p)},m(s,i){J(s,t,i),o&&o.m(t,null),e[9](t),n=!0},p(s,[i]){o&&o.p&&(!n||i&129)&&Gt(o,r,s,s[7],n?Jt(r,s[7],i,Oo):Yt(s[7]),Rt)},i(s){n||($(o,s),n=!0)},o(s){z(o,s),n=!1},d(s){s&&p(t),o&&o.d(s),e[9](null)}}}function Fo(e,t,n){let{$$slots:r={},$$scope:o}=t,{once:s=!1}=t,{top:i=0}=t,{bottom:l=0}=t,{left:c=0}=t,{right:a=0}=t,f=!1,u;Qt(()=>{if(typeof IntersectionObserver<"u"){const I=`${l}px ${c}px ${i}px ${a}px`,E=new IntersectionObserver(P=>{n(0,f=P[0].isIntersecting),f&&s&&E.unobserve(u)},{rootMargin:I});return E.observe(u),()=>E.unobserve(u)}function _(){const I=u.getBoundingClientRect();n(0,f=I.bottom+l>0&&I.right+a>0&&I.top-i<window.innerHeight&&I.left-c<window.innerWidth),f&&s&&window.removeEventListener("scroll",_)}return window.addEventListener("scroll",_),()=>window.removeEventListener("scroll",_)});function g(_){yn[_?"unshift":"push"](()=>{u=_,n(1,u)})}return e.$$set=_=>{"once"in _&&n(2,s=_.once),"top"in _&&n(3,i=_.top),"bottom"in _&&n(4,l=_.bottom),"left"in _&&n(5,c=_.left),"right"in _&&n(6,a=_.right),"$$scope"in _&&n(7,o=_.$$scope)},[f,u,s,i,l,c,a,o,r,g]}class $o extends pe{constructor(t){super(),ge(this,t,Fo,Po,me,{once:2,top:3,bottom:4,left:5,right:6})}}function qt(e){let t,n,r,o,s,i,l,c,a;r=new Me({props:{icon:"ph:git-branch-fill",class:"text-black text-xl"}});let f=e[0]===!0&&Ut(e);return{c(){t=b("div"),n=b("div"),Z(r.$$.fragment),i=N(),f&&f.c(),this.h()},l(u){t=v(u,"DIV",{class:!0});var g=y(t);n=v(g,"DIV",{class:!0});var _=y(n);ee(r.$$.fragment,_),_.forEach(p),i=O(g),f&&f.l(g),g.forEach(p),this.h()},h(){h(n,"class",o=`z-50 transition-all fixed top-[20px] right-5 rounded-full p-2 bg-white drop-shadow
        ${e[0]===!0?"hamburger-transition noclick":""}
      `),h(t,"class","fixed w-full z-50")},m(u,g){J(u,t,g),d(t,n),te(r,n,null),d(t,i),f&&f.m(t,null),l=!0,c||(a=R(n,"click",e[3]),c=!0)},p(u,g){(!l||g&1&&o!==(o=`z-50 transition-all fixed top-[20px] right-5 rounded-full p-2 bg-white drop-shadow
        ${u[0]===!0?"hamburger-transition noclick":""}
      `))&&h(n,"class",o),u[0]===!0?f?(f.p(u,g),g&1&&$(f,1)):(f=Ut(u),f.c(),$(f,1),f.m(t,null)):f&&(st(),z(f,1,1,()=>{f=null}),it())},i(u){l||($(r.$$.fragment,u),Ae(()=>{s||(s=fe(n,Ve,{x:200},!0)),s.run(1)}),$(f),l=!0)},o(u){z(r.$$.fragment,u),s||(s=fe(n,Ve,{x:200},!1)),s.run(0),z(f),l=!1},d(u){u&&p(t),ne(r),u&&s&&s.end(),f&&f.d(),c=!1,a()}}}function Ut(e){let t,n,r,o,s,i,l;return r=new gn({props:{closeMenu:e[2]}}),{c(){t=b("div"),n=b("nav"),Z(r.$$.fragment),this.h()},l(c){t=v(c,"DIV",{class:!0});var a=y(t);n=v(a,"NAV",{class:!0});var f=y(n);ee(r.$$.fragment,f),f.forEach(p),a.forEach(p),this.h()},h(){h(n,"class","mt-20 ml-5 mr-5 flex h-[80vh] items-center justify-center"),h(t,"class","-z-50 absolute top-0 right-0 w-screen h-screen bg-black/25")},m(c,a){J(c,t,a),d(t,n),te(r,n,null),s=!0,i||(l=R(t,"click",Ye(function(){ce(e[2])&&e[2].apply(this,arguments)})),i=!0)},p(c,a){e=c;const f={};a&4&&(f.closeMenu=e[2]),r.$set(f)},i(c){s||($(r.$$.fragment,c),Ae(()=>{o||(o=fe(t,Ve,{},!0)),o.run(1)}),s=!0)},o(c){z(r.$$.fragment,c),o||(o=fe(t,Ve,{},!1)),o.run(0),s=!1},d(c){c&&p(t),ne(r),c&&o&&o.end(),i=!1,l()}}}function Do(e){let t,n,r=!e[4]&&qt(e);return{c(){r&&r.c(),t=ye()},l(o){r&&r.l(o),t=ye()},m(o,s){r&&r.m(o,s),J(o,t,s),n=!0},p(o,s){o[4]?r&&(st(),z(r,1,1,()=>{r=null}),it()):r?(r.p(o,s),s&16&&$(r,1)):(r=qt(o),r.c(),$(r,1),r.m(t.parentNode,t))},i(o){n||($(r),n=!0)},o(o){z(r),n=!1},d(o){r&&r.d(o),o&&p(t)}}}function Vo(e){let t,n;return t=new $o({props:{bottom:80,$$slots:{default:[Do,({intersecting:r})=>({4:r}),({intersecting:r})=>r?16:0]},$$scope:{ctx:e}}}),{c(){Z(t.$$.fragment)},l(r){ee(t.$$.fragment,r)},m(r,o){te(t,r,o),n=!0},p(r,[o]){const s={};o&55&&(s.$$scope={dirty:o,ctx:r}),t.$set(s)},i(r){n||($(t.$$.fragment,r),n=!0)},o(r){z(t.$$.fragment,r),n=!1},d(r){ne(t,r)}}}function zo(e,t,n){let{floatingNavIsActive:r}=t,{handleMenu:o}=t,{closeMenu:s}=t;const i=()=>o("floating");return e.$$set=l=>{"floatingNavIsActive"in l&&n(0,r=l.floatingNavIsActive),"handleMenu"in l&&n(1,o=l.handleMenu),"closeMenu"in l&&n(2,s=l.closeMenu)},[r,o,s,i]}class Bo extends pe{constructor(t){super(),ge(this,t,zo,Vo,me,{floatingNavIsActive:0,handleMenu:1,closeMenu:2})}}const Ro=e=>({topNavIsActive:e&1}),Ht=e=>({topNavIsActive:e[0]});function qo(e){let t,n,r,o,s,i,l,c,a,f,u,g,_,I,E,P,x,m,A,D,T,k,w,F,H,S,M,X,L,C,B,V,ie,le,G,Q,re,be,ve,oe,_e,se,Ue,ue,He,de,Qe,ht;Ae(e[8]),n=new No({props:{topNavIsActive:e[0],closeMenu:e[4],handleMenu:e[3]}}),s=new Bo({props:{handleMenu:e[3],floatingNavIsActive:e[1],closeMenu:e[4]}});const Ke=e[7].default,Y=Wt(Ke,e,e[6],Ht);return x=new Me({props:{icon:"mdi:linkedin",class:"text-secondaryColor text-4xl"}}),T=new Me({props:{icon:"mdi:github",class:"text-secondaryColor text-4xl"}}),{c(){t=b("div"),Z(n.$$.fragment),r=N(),o=b("div"),Z(s.$$.fragment),i=N(),l=b("div"),Y&&Y.c(),c=N(),a=b("footer"),f=b("section"),u=b("div"),g=K("Forrest S"),_=N(),I=b("ul"),E=b("li"),P=b("a"),Z(x.$$.fragment),m=N(),A=b("li"),D=b("a"),Z(T.$$.fragment),k=N(),w=b("form"),F=b("p"),H=K("Feel free to contact me for any inquires or opportunities."),S=N(),M=b("label"),X=K("Name"),L=N(),C=b("input"),B=N(),V=b("label"),ie=K("E-mail"),le=N(),G=b("input"),Q=N(),re=b("label"),be=K("Message"),ve=N(),oe=b("textarea"),_e=N(),se=b("input"),Ue=N(),ue=b("button"),He=K("Submit"),this.h()},l(j){t=v(j,"DIV",{});var U=y(t);ee(n.$$.fragment,U),r=O(U),o=v(U,"DIV",{class:!0});var we=y(o);ee(s.$$.fragment,we),we.forEach(p),i=O(U),l=v(U,"DIV",{});var Ie=y(l);Y&&Y.l(Ie),Ie.forEach(p),c=O(U),a=v(U,"FOOTER",{id:!0,class:!0});var Te=y(a);f=v(Te,"SECTION",{});var Le=y(f);u=v(Le,"DIV",{class:!0});var pt=y(u);g=W(pt,"Forrest S"),pt.forEach(p),_=O(Le),I=v(Le,"UL",{class:!0});var je=y(I);E=v(je,"LI",{});var gt=y(E);P=v(gt,"A",{href:!0});var mt=y(P);ee(x.$$.fragment,mt),mt.forEach(p),gt.forEach(p),m=O(je),A=v(je,"LI",{});var bt=y(A);D=v(bt,"A",{href:!0});var vt=y(D);ee(T.$$.fragment,vt),vt.forEach(p),bt.forEach(p),je.forEach(p),Le.forEach(p),k=O(Te),w=v(Te,"FORM",{class:!0,action:!0,method:!0,"accept-charset":!0,name:!0});var q=y(w);F=v(q,"P",{});var _t=y(F);H=W(_t,"Feel free to contact me for any inquires or opportunities."),_t.forEach(p),S=O(q),M=v(q,"LABEL",{for:!0,class:!0});var yt=y(M);X=W(yt,"Name"),yt.forEach(p),L=O(q),C=v(q,"INPUT",{id:!0,name:!0,type:!0,class:!0}),B=O(q),V=v(q,"LABEL",{for:!0,class:!0});var wt=y(V);ie=W(wt,"E-mail"),wt.forEach(p),le=O(q),G=v(q,"INPUT",{id:!0,type:!0,class:!0,name:!0}),Q=O(q),re=v(q,"LABEL",{for:!0,class:!0});var It=y(re);be=W(It,"Message"),It.forEach(p),ve=O(q),oe=v(q,"TEXTAREA",{id:!0,name:!0,type:!0,class:!0}),y(oe).forEach(p),_e=O(q),se=v(q,"INPUT",{type:!0,name:!0,id:!0}),Ue=O(q),ue=v(q,"BUTTON",{type:!0,class:!0});var kt=y(ue);He=W(kt,"Submit"),kt.forEach(p),q.forEach(p),Te.forEach(p),U.forEach(p),this.h()},h(){h(o,"class","relative flex items-center"),$e(l,"blur",e[1]||e[0]),h(u,"class","ml-6 mr-6 mb-2 text-secondaryColor font-black text-2xl md:text-4xl tracking-wide text-center"),h(P,"href","https://www.linkedin.com/in/yulerik"),h(D,"href","https://www.github.com/forrest-s"),h(I,"class","flex justify-center items-center gap-6"),h(M,"for","full-name"),h(M,"class","text-tertiaryColor"),h(C,"id","full-name"),h(C,"name","name"),h(C,"type","text"),h(C,"class","bg-primaryColor border-b-2 border-black"),C.value="",h(V,"for","email-address"),h(V,"class","text-tertiaryColor"),h(G,"id","email-address"),h(G,"type","email"),h(G,"class","bg-primaryColor border-b-2 border-black"),h(G,"name","_replyto"),G.value="",h(re,"for","message"),h(re,"class","text-tertiaryColor"),h(oe,"id","message"),h(oe,"name","message"),h(oe,"type","text"),h(oe,"class","bg-primaryColor border-2 border-black rounded"),h(se,"type","hidden"),h(se,"name","_subject"),h(se,"id","email-subject"),se.value="Contact Form Submission",h(ue,"type","submit"),h(ue,"class","bg-shadowColor rounded p-1 text-center w-3/4 text-accentColor self-center mt-2 hover:bg-tertiaryColor hover:text-shadowColor font-semibold"),h(w,"class","flex flex-col p-4 rounded gap-1 text-accentColor bg-primaryColor"),h(w,"action","https://formspree.io/f/xrgvbvqr"),h(w,"method","POST"),h(w,"accept-charset","utf-8"),h(w,"name","simple-contact-form"),h(a,"id","footer"),h(a,"class","bg-shadowColor p-2 py-16 flex flex-col md:flex-row gap-8 justify-around items-center")},m(j,U){J(j,t,U),te(n,t,null),d(t,r),d(t,o),te(s,o,null),d(t,i),d(t,l),Y&&Y.m(l,null),d(t,c),d(t,a),d(a,f),d(f,u),d(u,g),d(f,_),d(f,I),d(I,E),d(E,P),te(x,P,null),d(I,m),d(I,A),d(A,D),te(T,D,null),d(a,k),d(a,w),d(w,F),d(F,H),d(w,S),d(w,M),d(M,X),d(w,L),d(w,C),d(w,B),d(w,V),d(V,ie),d(w,le),d(w,G),d(w,Q),d(w,re),d(re,be),d(w,ve),d(w,oe),d(w,_e),d(w,se),d(w,Ue),d(w,ue),d(ue,He),de=!0,Qe||(ht=R(window,"resize",e[8]),Qe=!0)},p(j,[U]){const we={};U&1&&(we.topNavIsActive=j[0]),n.$set(we);const Ie={};U&2&&(Ie.floatingNavIsActive=j[1]),s.$set(Ie),Y&&Y.p&&(!de||U&65)&&Gt(Y,Ke,j,j[6],de?Jt(Ke,j[6],U,Ro):Yt(j[6]),Ht),(!de||U&3)&&$e(l,"blur",j[1]||j[0])},i(j){de||($(n.$$.fragment,j),$(s.$$.fragment,j),$(Y,j),$(x.$$.fragment,j),$(T.$$.fragment,j),de=!0)},o(j){z(n.$$.fragment,j),z(s.$$.fragment,j),z(Y,j),z(x.$$.fragment,j),z(T.$$.fragment,j),de=!1},d(j){j&&p(t),ne(n),ne(s),Y&&Y.d(j),ne(x),ne(T),Qe=!1,ht()}}}function Uo(e,t,n){let{$$slots:r={},$$scope:o}=t,s=!1,i=!1,l=!0,c;const a=g=>{g==="top"&&n(0,s=!s),g==="floating"&&n(1,i=!i),(s===!0||i===!0)&&n(5,l=!1)},f=()=>{n(0,s=!1),n(1,i=!1),n(5,l=!0)};function u(){n(2,c=window.innerWidth)}return e.$$set=g=>{"$$scope"in g&&n(6,o=g.$$scope)},e.$$.update=()=>{e.$$.dirty&32&&document.body.classList.toggle("noscroll",!l)},[s,i,c,a,f,l,o,r,u]}class Ko extends pe{constructor(t){super(),ge(this,t,Uo,qo,me,{})}}export{Ko as default};
