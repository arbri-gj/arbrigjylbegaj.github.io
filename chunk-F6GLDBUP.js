var m=Object.defineProperty,q=Object.defineProperties;var r=Object.getOwnPropertyDescriptors;var k=Object.getOwnPropertySymbols;var n=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;var l=(c,a,b)=>a in c?m(c,a,{enumerable:!0,configurable:!0,writable:!0,value:b}):c[a]=b,s=(c,a)=>{for(var b in a||={})n.call(a,b)&&l(c,b,a[b]);if(k)for(var b of k(a))o.call(a,b)&&l(c,b,a[b]);return c},t=(c,a)=>q(c,r(a));var u=(c,a)=>{var b={};for(var d in c)n.call(c,d)&&a.indexOf(d)<0&&(b[d]=c[d]);if(c!=null&&k)for(var d of k(c))a.indexOf(d)<0&&o.call(c,d)&&(b[d]=c[d]);return b};var v=(c,a)=>{for(var b in a)m(c,b,{get:a[b],enumerable:!0})};var w=(c,a,b)=>new Promise((d,f)=>{var g=e=>{try{j(b.next(e))}catch(h){f(h)}},i=e=>{try{j(b.throw(e))}catch(h){f(h)}},j=e=>e.done?d(e.value):Promise.resolve(e.value).then(g,i);j((b=b.apply(c,a)).next())});var x=(()=>{for(var c=new Uint8Array(128),a=0;a<64;a++)c[a<26?a+65:a<52?a+71:a<62?a-4:a*4-205]=a;return b=>{for(var d=b.length,f=new Uint8Array((d-(b[d-1]=="=")-(b[d-2]=="="))*3/4|0),g=0,i=0;g<d;){var j=c[b.charCodeAt(g++)],e=c[b.charCodeAt(g++)],h=c[b.charCodeAt(g++)],p=c[b.charCodeAt(g++)];f[i++]=j<<2|e>>4,f[i++]=e<<4|h>>2,f[i++]=h<<6|p}return f}})();export{s as a,t as b,u as c,v as d,w as e,x as f};
