var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function u(t,n){t.appendChild(n)}function s(t){t.parentNode.removeChild(t)}function a(t){return document.createElement(t)}function i(t){return document.createTextNode(t)}function f(){return i(" ")}function l(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function d(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}let h;function m(t){h=t}const p=[],$=[],g=[],b=[],y=Promise.resolve();let _=!1;function x(t){g.push(t)}const k=new Set;let v=0;function E(){const t=h;do{for(;v<p.length;){const t=p[v];v++,m(t),j(t.$$)}for(m(null),p.length=0,v=0;$.length;)$.pop()();for(let t=0;t<g.length;t+=1){const n=g[t];k.has(n)||(k.add(n),n())}g.length=0}while(p.length);for(;b.length;)b.pop()();_=!1,k.clear(),m(t)}function j(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(x)}}const w=new Set;function A(t,n){-1===t.$$.dirty[0]&&(p.push(t),_||(_=!0,y.then(E)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function C(c,u,a,i,f,l,d,p=[-1]){const $=h;m(c);const g=c.$$={fragment:null,ctx:null,props:l,update:t,not_equal:f,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(u.context||($?$.$$.context:[])),callbacks:e(),dirty:p,skip_bound:!1,root:u.target||$.$$.root};d&&d(g.root);let b=!1;if(g.ctx=a?a(c,u.props||{},((t,n,...e)=>{const o=e.length?e[0]:n;return g.ctx&&f(g.ctx[t],g.ctx[t]=o)&&(!g.skip_bound&&g.bound[t]&&g.bound[t](o),b&&A(c,t)),n})):[],g.update(),b=!0,o(g.before_update),g.fragment=!!i&&i(g.ctx),u.target){if(u.hydrate){const t=function(t){return Array.from(t.childNodes)}(u.target);g.fragment&&g.fragment.l(t),t.forEach(s)}else g.fragment&&g.fragment.c();u.intro&&((y=c.$$.fragment)&&y.i&&(w.delete(y),y.i(_))),function(t,e,c,u){const{fragment:s,on_mount:a,on_destroy:i,after_update:f}=t.$$;s&&s.m(e,c),u||x((()=>{const e=a.map(n).filter(r);i?i.push(...e):o(e),t.$$.on_mount=[]})),f.forEach(x)}(c,u.target,u.anchor,u.customElement),E()}var y,_;m($)}function M(n){let e,o,r,c,h,m,p,$,g,b;return{c(){e=a("main"),o=a("h1"),r=i(n[0]),c=f(),h=a("button"),h.textContent="Push your luck",m=f(),p=a("h1"),$=i(n[1]),l(o,"class","svelte-1tky8bj"),l(p,"class","svelte-1tky8bj"),l(e,"class","svelte-1tky8bj")},m(t,s){var a,i,f,l;!function(t,n,e){t.insertBefore(n,e||null)}(t,e,s),u(e,o),u(o,r),u(e,c),u(e,h),u(e,m),u(e,p),u(p,$),g||(a=h,i="click",f=n[2],a.addEventListener(i,f,l),b=()=>a.removeEventListener(i,f,l),g=!0)},p(t,[n]){1&n&&d(r,t[0]),2&n&&d($,t[1])},i:t,o:t,d(t){t&&s(e),g=!1,b()}}}function N(t,n,e){let{name:o}=n,r="Random";return t.$$set=t=>{"name"in t&&e(0,o=t.name)},[o,r,function(){e(1,r=Math.floor(100*Math.random()))}]}return new class extends class{$destroy(){!function(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),C(this,t,N,M,c,{name:0})}}({target:document.body,props:{name:"Yet Another Randomizer"}})}();
//# sourceMappingURL=bundle.js.map
