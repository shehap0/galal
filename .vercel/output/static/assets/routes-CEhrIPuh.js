import{a as e,c as t,i as n,n as r,o as i,r as a,s as o,t as s}from"./index-CLQqKRd0.js";var c=t(o(),1),l=`1.3.23`;function u(e,t,n){return Math.max(e,Math.min(t,n))}function d(e,t,n){return(1-n)*e+n*t}function f(e,t,n,r){return d(e,t,1-Math.exp(-n*r))}function p(e,t){return(e%t+t)%t}var m=class{isRunning=!1;value=0;from=0;to=0;currentTime=0;lerp;duration;easing;onUpdate;advance(e){if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=e;let n=u(0,this.currentTime/this.duration,1);t=n>=1;let r=t?1:this.easing(n);this.value=this.from+(this.to-this.from)*r}else this.lerp?(this.value=f(this.value,this.to,this.lerp*60,e),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),this.onUpdate?.(this.value,t)}stop(){this.isRunning=!1}fromTo(e,t,{lerp:n,duration:r,easing:i,onStart:a,onUpdate:o}){this.from=this.value=e,this.to=t,this.lerp=n,this.duration=r,this.easing=i,this.currentTime=0,this.isRunning=!0,a?.(),this.onUpdate=o}};function h(e,t){let n;return function(...r){clearTimeout(n),n=setTimeout(()=>{n=void 0,e.apply(this,r)},t)}}var g=class{width=0;height=0;scrollHeight=0;scrollWidth=0;debouncedResize;wrapperResizeObserver;contentResizeObserver;constructor(e,t,{autoResize:n=!0,debounce:r=250}={}){this.wrapper=e,this.content=t,n&&(this.debouncedResize=h(this.resize,r),this.wrapper instanceof Window?window.addEventListener(`resize`,this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener(`resize`,this.debouncedResize)}resize=()=>{this.onWrapperResize(),this.onContentResize()};onWrapperResize=()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)};onContentResize=()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)};get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},_=class{events={};emit(e,...t){let n=this.events[e]||[];for(let e=0,r=n.length;e<r;e++)n[e]?.(...t)}on(e,t){return this.events[e]?this.events[e].push(t):this.events[e]=[t],()=>{this.events[e]=this.events[e]?.filter(e=>t!==e)}}off(e,t){this.events[e]=this.events[e]?.filter(e=>t!==e)}destroy(){this.events={}}},v=100/6,y={passive:!1};function b(e,t){return e===1?v:e===2?t:1}var x=class{touchStart={x:0,y:0};lastDelta={x:0,y:0};window={width:0,height:0};emitter=new _;constructor(e,t={wheelMultiplier:1,touchMultiplier:1}){this.element=e,this.options=t,window.addEventListener(`resize`,this.onWindowResize),this.onWindowResize(),this.element.addEventListener(`wheel`,this.onWheel,y),this.element.addEventListener(`touchstart`,this.onTouchStart,y),this.element.addEventListener(`touchmove`,this.onTouchMove,y),this.element.addEventListener(`touchend`,this.onTouchEnd,y)}on(e,t){return this.emitter.on(e,t)}destroy(){this.emitter.destroy(),window.removeEventListener(`resize`,this.onWindowResize),this.element.removeEventListener(`wheel`,this.onWheel,y),this.element.removeEventListener(`touchstart`,this.onTouchStart,y),this.element.removeEventListener(`touchmove`,this.onTouchMove,y),this.element.removeEventListener(`touchend`,this.onTouchEnd,y)}onTouchStart=e=>{let{clientX:t,clientY:n}=e.targetTouches?e.targetTouches[0]:e;this.touchStart.x=t,this.touchStart.y=n,this.lastDelta={x:0,y:0},this.emitter.emit(`scroll`,{deltaX:0,deltaY:0,event:e})};onTouchMove=e=>{let{clientX:t,clientY:n}=e.targetTouches?e.targetTouches[0]:e,r=-(t-this.touchStart.x)*this.options.touchMultiplier,i=-(n-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=n,this.lastDelta={x:r,y:i},this.emitter.emit(`scroll`,{deltaX:r,deltaY:i,event:e})};onTouchEnd=e=>{this.emitter.emit(`scroll`,{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:e})};onWheel=e=>{let{deltaX:t,deltaY:n,deltaMode:r}=e,i=b(r,this.window.width),a=b(r,this.window.height);t*=i,n*=a,t*=this.options.wheelMultiplier,n*=this.options.wheelMultiplier,this.emitter.emit(`scroll`,{deltaX:t,deltaY:n,event:e})};onWindowResize=()=>{this.window={width:window.innerWidth,height:window.innerHeight}}},S=e=>Math.min(1,1.001-2**(-10*e)),C=class{_isScrolling=!1;_isStopped=!1;_isLocked=!1;_preventNextNativeScrollEvent=!1;_resetVelocityTimeout=null;_rafId=null;isTouching;time=0;userData={};lastVelocity=0;velocity=0;direction=0;options;targetScroll;animatedScroll;animate=new m;emitter=new _;dimensions;virtualScroll;constructor({wrapper:e=window,content:t=document.documentElement,eventsTarget:n=e,smoothWheel:r=!0,syncTouch:i=!1,syncTouchLerp:a=.075,touchInertiaExponent:o=1.7,duration:s,easing:c,lerp:u=.1,infinite:d=!1,orientation:f=`vertical`,gestureOrientation:p=f===`horizontal`?`both`:`vertical`,touchMultiplier:m=1,wheelMultiplier:h=1,autoResize:_=!0,prevent:v,virtualScroll:y,overscroll:b=!0,autoRaf:C=!1,anchors:w=!1,autoToggle:T=!1,allowNestedScroll:E=!1,__experimental__naiveDimensions:D=!1,naiveDimensions:O=D,stopInertiaOnNavigate:k=!1}={}){window.lenisVersion=l,window.lenis||(window.lenis={}),window.lenis.version=l,f===`horizontal`&&(window.lenis.horizontal=!0),i===!0&&(window.lenis.touch=!0),(!e||e===document.documentElement)&&(e=window),typeof s==`number`&&typeof c!=`function`?c=S:typeof c==`function`&&typeof s!=`number`&&(s=1),this.options={wrapper:e,content:t,eventsTarget:n,smoothWheel:r,syncTouch:i,syncTouchLerp:a,touchInertiaExponent:o,duration:s,easing:c,lerp:u,infinite:d,gestureOrientation:p,orientation:f,touchMultiplier:m,wheelMultiplier:h,autoResize:_,prevent:v,virtualScroll:y,overscroll:b,autoRaf:C,anchors:w,autoToggle:T,allowNestedScroll:E,naiveDimensions:O,stopInertiaOnNavigate:k},this.dimensions=new g(e,t,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener(`scroll`,this.onNativeScroll),this.options.wrapper.addEventListener(`scrollend`,this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener(`click`,this.onClick),this.options.wrapper.addEventListener(`pointerdown`,this.onPointerDown),this.virtualScroll=new x(n,{touchMultiplier:m,wheelMultiplier:h}),this.virtualScroll.on(`scroll`,this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener(`transitionend`,this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener(`scroll`,this.onNativeScroll),this.options.wrapper.removeEventListener(`scrollend`,this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener(`pointerdown`,this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener(`click`,this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(e,t){return this.emitter.on(e,t)}off(e,t){return this.emitter.off(e,t)}onScrollEnd=e=>{e instanceof CustomEvent||(this.isScrolling===`smooth`||this.isScrolling===!1)&&e.stopPropagation()};dispatchScrollendEvent=()=>{this.options.wrapper.dispatchEvent(new CustomEvent(`scrollend`,{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))};get overflow(){let e=this.isHorizontal?`overflow-x`:`overflow-y`;return getComputedStyle(this.rootElement)[e]}checkOverflow(){[`hidden`,`clip`].includes(this.overflow)?this.internalStop():this.internalStart()}onTransitionEnd=e=>{e.propertyName?.includes(`overflow`)&&e.target===this.rootElement&&this.checkOverflow()};setScroll(e){this.isHorizontal?this.options.wrapper.scrollTo({left:e,behavior:`instant`}):this.options.wrapper.scrollTo({top:e,behavior:`instant`})}onClick=e=>{let t=e.composedPath().filter(e=>e instanceof HTMLAnchorElement&&e.href).map(e=>new URL(e.href)),n=new URL(window.location.href);if(this.options.anchors){let e=t.find(e=>n.host===e.host&&n.pathname===e.pathname&&e.hash);if(e){let t=typeof this.options.anchors==`object`&&this.options.anchors?this.options.anchors:void 0,n=`#${e.hash.split(`#`)[1]}`;this.scrollTo(n,t);return}}if(this.options.stopInertiaOnNavigate&&t.some(e=>n.host===e.host&&n.pathname!==e.pathname)){this.reset();return}};onPointerDown=e=>{e.button===1&&this.reset()};onVirtualScroll=e=>{if(typeof this.options.virtualScroll==`function`&&this.options.virtualScroll(e)===!1)return;let{deltaX:t,deltaY:n,event:r}=e;if(this.emitter.emit(`virtual-scroll`,{deltaX:t,deltaY:n,event:r}),r.ctrlKey||r.lenisStopPropagation)return;let i=r.type.includes(`touch`),a=r.type.includes(`wheel`);this.isTouching=r.type===`touchstart`||r.type===`touchmove`;let o=t===0&&n===0;if(this.options.syncTouch&&i&&r.type===`touchstart`&&o&&!this.isStopped&&!this.isLocked){this.reset();return}let s=this.options.gestureOrientation===`vertical`&&n===0||this.options.gestureOrientation===`horizontal`&&t===0;if(o||s)return;let c=r.composedPath();c=c.slice(0,c.indexOf(this.rootElement));let l=this.options.prevent,u=Math.abs(t)>=Math.abs(n)?`horizontal`:`vertical`;if(c.find(e=>e instanceof HTMLElement&&(typeof l==`function`&&l?.(e)||e.hasAttribute?.(`data-lenis-prevent`)||u===`vertical`&&e.hasAttribute?.(`data-lenis-prevent-vertical`)||u===`horizontal`&&e.hasAttribute?.(`data-lenis-prevent-horizontal`)||i&&e.hasAttribute?.(`data-lenis-prevent-touch`)||a&&e.hasAttribute?.(`data-lenis-prevent-wheel`)||this.options.allowNestedScroll&&this.hasNestedScroll(e,{deltaX:t,deltaY:n}))))return;if(this.isStopped||this.isLocked){r.cancelable&&r.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&a)){this.isScrolling=`native`,this.animate.stop(),r.lenisStopPropagation=!0;return}let d=n;this.options.gestureOrientation===`both`?d=Math.abs(n)>Math.abs(t)?n:t:this.options.gestureOrientation===`horizontal`&&(d=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&n>0||this.animatedScroll===this.limit&&n<0))&&(r.lenisStopPropagation=!0),r.cancelable&&r.preventDefault();let f=i&&this.options.syncTouch,p=i&&r.type===`touchend`;p&&(d=Math.sign(d)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+d,{programmatic:!1,...f?{lerp:p?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})};resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit(`scroll`,this)}onNativeScroll=()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling===`native`){let e=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-e,this.direction=Math.sign(this.animatedScroll-e),this.isStopped||(this.isScrolling=`native`),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}};reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty(`overflow`);return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty(`overflow`,`clip`);return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}raf=e=>{let t=e-(this.time||e);this.time=e,this.animate.advance(t*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))};scrollTo(e,{offset:t=0,immediate:n=!1,lock:r=!1,programmatic:i=!0,lerp:a=i?this.options.lerp:void 0,duration:o=i?this.options.duration:void 0,easing:s=i?this.options.easing:void 0,onStart:c,onComplete:l,force:d=!1,userData:f}={}){if((this.isStopped||this.isLocked)&&!d)return;let p=e,m=t;if(typeof p==`string`&&[`top`,`left`,`start`,`#`].includes(p))p=0;else if(typeof p==`string`&&[`bottom`,`right`,`end`].includes(p))p=this.limit;else{let e=null;if(typeof p==`string`?(e=document.querySelector(p),e||(p===`#top`?p=0:console.warn(`Lenis: Target not found`,p))):p instanceof HTMLElement&&p?.nodeType&&(e=p),e){if(this.options.wrapper!==window){let e=this.rootElement.getBoundingClientRect();m-=this.isHorizontal?e.left:e.top}let t=e.getBoundingClientRect(),n=getComputedStyle(e),r=this.isHorizontal?Number.parseFloat(n.scrollMarginLeft):Number.parseFloat(n.scrollMarginTop),i=getComputedStyle(this.rootElement),a=this.isHorizontal?Number.parseFloat(i.scrollPaddingLeft):Number.parseFloat(i.scrollPaddingTop);p=(this.isHorizontal?t.left:t.top)+this.animatedScroll-(Number.isNaN(r)?0:r)-(Number.isNaN(a)?0:a)}}if(typeof p==`number`){if(p+=m,this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;let e=p-this.animatedScroll;e>this.limit/2?p-=this.limit:e<-this.limit/2&&(p+=this.limit)}}else p=u(0,p,this.limit);if(p===this.targetScroll){c?.(this),l?.(this);return}if(this.userData=f??{},n){this.animatedScroll=this.targetScroll=p,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),l?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=p),typeof o==`number`&&typeof s!=`function`?s=S:typeof s==`function`&&typeof o!=`number`&&(o=1),this.animate.fromTo(this.animatedScroll,p,{duration:o,easing:s,lerp:a,onStart:()=>{r&&(this.isLocked=!0),this.isScrolling=`smooth`,c?.(this)},onUpdate:(e,t)=>{this.isScrolling=`smooth`,this.lastVelocity=this.velocity,this.velocity=e-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=e,this.setScroll(this.scroll),i&&(this.targetScroll=e),t||this.emit(),t&&(this.reset(),this.emit(),l?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(e,{deltaX:t,deltaY:n}){let r=Date.now();e._lenis||={};let i=e._lenis,a,o,s,c,l,u,d,f,p,m;if(r-(i.time??0)>2e3){i.time=Date.now();let t=window.getComputedStyle(e);if(i.computedStyle=t,a=[`auto`,`overlay`,`scroll`].includes(t.overflowX),o=[`auto`,`overlay`,`scroll`].includes(t.overflowY),l=[`auto`].includes(t.overscrollBehaviorX),u=[`auto`].includes(t.overscrollBehaviorY),i.hasOverflowX=a,i.hasOverflowY=o,!(a||o))return!1;d=e.scrollWidth,f=e.scrollHeight,p=e.clientWidth,m=e.clientHeight,s=d>p,c=f>m,i.isScrollableX=s,i.isScrollableY=c,i.scrollWidth=d,i.scrollHeight=f,i.clientWidth=p,i.clientHeight=m,i.hasOverscrollBehaviorX=l,i.hasOverscrollBehaviorY=u}else s=i.isScrollableX,c=i.isScrollableY,a=i.hasOverflowX,o=i.hasOverflowY,d=i.scrollWidth,f=i.scrollHeight,p=i.clientWidth,m=i.clientHeight,l=i.hasOverscrollBehaviorX,u=i.hasOverscrollBehaviorY;if(!(a&&s||o&&c))return!1;let h=Math.abs(t)>=Math.abs(n)?`horizontal`:`vertical`,g,_,v,y,b,x;if(h===`horizontal`)g=Math.round(e.scrollLeft),_=d-p,v=t,y=a,b=s,x=l;else if(h===`vertical`)g=Math.round(e.scrollTop),_=f-m,v=n,y=o,b=c,x=u;else return!1;return!x&&(g>=_||g<=0)?!0:(v>0?g<_:g>0)&&y&&b}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?`x`:`y`]}get isHorizontal(){return this.options.orientation===`horizontal`}get actualScroll(){let e=this.options.wrapper;return this.isHorizontal?e.scrollX??e.scrollLeft:e.scrollY??e.scrollTop}get scroll(){return this.options.infinite?p(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(e){this._isScrolling!==e&&(this._isScrolling=e,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(e){this._isStopped!==e&&(this._isStopped=e,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(e){this._isLocked!==e&&(this._isLocked=e,this.updateClassName())}get isSmooth(){return this.isScrolling===`smooth`}get className(){let e=`lenis`;return this.options.autoToggle&&(e+=` lenis-autoToggle`),this.isStopped&&(e+=` lenis-stopped`),this.isLocked&&(e+=` lenis-locked`),this.isScrolling&&(e+=` lenis-scrolling`),this.isScrolling===`smooth`&&(e+=` lenis-smooth`),e}updateClassName(){this.cleanUpClassName(),this.className.split(` `).forEach(e=>{this.rootElement.classList.add(e)})}cleanUpClassName(){for(let e of Array.from(this.rootElement.classList))(e===`lenis`||e.startsWith(`lenis-`))&&this.rootElement.classList.remove(e)}},w=`/assets/beans-B9NHRpxq.jpg`,T=`/assets/roast-Cbz1XM96.jpg`,E=`/assets/ritual-BsQ4I75X.png`,D=`/assets/portsaid-CKvebLJH.mp4`,O=`/assets/galal-background-DKvhO6sz.jpg`,k=`/assets/grind-ZAErx6tl.jpg`,ee=`/assets/pour-9CFgizMa.jpg`,A=e(),j=e=>{let t=(0,c.useRef)(null);return(0,c.useEffect)(()=>{let r=t.current;if(!r)return;let i=n.to(r,{yPercent:-50,duration:e.duration||10,repeat:-1,ease:`none`});return()=>{i.kill()}},[e.duration]),(0,A.jsx)(`div`,{className:e.className,children:(0,A.jsx)(`div`,{ref:t,className:`flex flex-col gap-6 pb-6`,children:[...[,,]].map((t,n)=>(0,A.jsx)(`div`,{className:`flex flex-col gap-6`,children:e.testimonials.map(({text:e,image:t,name:n,role:r},i)=>(0,A.jsxs)(`div`,{className:`p-8 rounded-3xl border border-cream/10 shadow-lg shadow-brand/5 max-w-xs w-full bg-charcoal/60`,children:[(0,A.jsxs)(`p`,{className:`text-cream/80 text-sm leading-relaxed`,children:[`“`,e,`”`]}),(0,A.jsxs)(`div`,{className:`flex items-center gap-3 mt-5`,children:[(0,A.jsx)(`img`,{width:40,height:40,src:t,alt:n,className:`h-10 w-10 rounded-full object-cover`}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`div`,{className:`text-cream text-sm font-medium leading-tight`,children:n}),(0,A.jsx)(`div`,{className:`text-cream/50 text-xs leading-tight mt-0.5`,children:r})]})]})]},i))},n))})})};n.registerPlugin(a);var M=[{text:`The best coffee quality in Egypt right now. I've been following their journey since the car in Port Said, and they still maintain the same incredible standard.`,image:`https://randomuser.me/api/portraits/men/2.jpg`,name:`Omar H.`,role:`Coffee Enthusiast`},{text:`Finally, an Egyptian brand that understands specialty coffee. Their V60 is perfect, and the atmosphere in the Sheraton branch is very cozy for working.`,image:`https://randomuser.me/api/portraits/women/3.jpg`,name:`Sara M.`,role:`Remote Worker`},{text:`Amazing experience! The history of this place makes the coffee taste better. A true Port Saidi success story that we are all proud of.`,image:`https://randomuser.me/api/portraits/men/4.jpg`,name:`Ahmed Z.`,role:`Local Business Owner`},{text:`I love the consistency of the beans. Whether I'm in Port Said or Cairo, the taste is exactly the same. Highly recommended for real coffee addicts.`,image:`https://randomuser.me/api/portraits/women/5.jpg`,name:`Mariam E.`,role:`Home Barista`},{text:`Great service and even better coffee. It's inspiring to see a local brand grow like this. The signature blends are a must-try!`,image:`https://randomuser.me/api/portraits/men/7.jpg`,name:`Khaled W.`,role:`Brand Fan`},{text:`The Port Said blend is something else. Rich, smooth, and full of character. Perfect for my morning ritual.`,image:`https://randomuser.me/api/portraits/women/1.jpg`,name:`Nour K.`,role:`Morning Regular`},{text:`I drive 20 minutes just to get my Galal fix. The Spanish Latte is the best I have had anywhere in Egypt.`,image:`https://randomuser.me/api/portraits/men/9.jpg`,name:`Youssef A.`,role:`Devoted Customer`},{text:`The staff remembers your order, the beans are always fresh, and the vibe is unmatched. This is what Egyptian coffee culture should be.`,image:`https://randomuser.me/api/portraits/women/6.jpg`,name:`Dina L.`,role:`Coffee Explorer`},{text:`From bean to cup, everything is intentional. You can taste the Bousaidi spirit in every sip. Proud to be a regular since 2019.`,image:`https://randomuser.me/api/portraits/women/8.jpg`,name:`Karim F.`,role:`Long-time Regular`}],te=M.slice(0,3),ne=M.slice(3,6),re=M.slice(6,9),ie=()=>{let e=(0,c.useRef)(null);return(0,c.useEffect)(()=>{let t=e.current;if(!t)return;let r=n.fromTo(t,{opacity:0,y:24},{opacity:1,y:0,duration:.8,ease:`power3.out`,scrollTrigger:{trigger:t,start:`top 85%`,once:!0}});return()=>{r.kill()}},[]),(0,A.jsx)(`section`,{className:`py-32 md:py-48 px-6 bg-charcoal relative overflow-hidden`,children:(0,A.jsxs)(`div`,{className:`max-w-7xl mx-auto`,children:[(0,A.jsxs)(`div`,{ref:e,className:`flex flex-col items-center text-center max-w-xl mx-auto`,children:[(0,A.jsx)(`span`,{className:`inline-block text-brand-accent text-xs tracking-[0.3em] uppercase border border-brand-accent/20 rounded-full px-4 py-1.5 mb-6`,children:`Testimonials`}),(0,A.jsxs)(`h2`,{className:`font-display font-light text-cream leading-[0.95]`,style:{fontSize:`clamp(2.5rem, 6vw, 5rem)`},children:[`The cup speaks.`,(0,A.jsx)(`br`,{}),(0,A.jsx)(`span`,{className:`italic text-brand-accent`,children:`The city replies.`})]}),(0,A.jsx)(`p`,{className:`mt-5 text-cream/60 max-w-md`,children:`Real words from the people who drink Galal Coffee every day.`})]}),(0,A.jsxs)(`div`,{className:`flex justify-center gap-6 mt-16 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[700px] overflow-hidden`,children:[(0,A.jsx)(j,{testimonials:te,duration:15}),(0,A.jsx)(j,{testimonials:ne,className:`hidden md:block`,duration:19}),(0,A.jsx)(j,{testimonials:re,className:`hidden lg:block`,duration:17})]})]})})},ae=`/assets/cup%20review-VvTxNW06.png`,N=`/assets/bean001-BA0-OYYh.png`,P=`/assets/bean002-Bvp30fsf.png`,F=`/assets/bean003-D3KwPboL.png`,I=`/assets/bean005-CIh66Gfb.png`,L=`/assets/bean006-Bv8x-CgP.png`,R=`/assets/bean007-7N0oDHj1.png`,oe=`/assets/cinnamon-CZpqj1WJ.png`,z=`/assets/chocolate1-pWk_JC_e.png`,B=`/assets/chocolate2-nq1xLJDD.png`,V=[{src:N,cls:`top-[12%] left-[7%]  w-[35px]`,rot:-12},{src:P,cls:`top-[28%] left-[16%] w-[50px]`,rot:18},{src:F,cls:`top-[62%] left-[8%]  w-[28px]`,rot:-28},{src:I,cls:`top-[8%]  right-[10%] w-[44px]`,rot:15},{src:L,cls:`top-[30%] right-[6%]  w-[22px]`,rot:-18},{src:R,cls:`top-[55%] right-[10%] w-[52px]`,rot:32},{src:N,cls:`top-[78%] left-[20%] w-[40px]`,rot:-8},{src:F,cls:`top-[72%] right-[20%] w-[30px]`,rot:20},{src:I,cls:`top-[18%] left-[35%] w-[24px]`,rot:-22},{src:P,cls:`top-[82%] right-[30%] w-[28px]`,rot:10},{src:L,cls:`top-[42%] left-[3%]  w-[36px]`,rot:14},{src:R,cls:`top-[40%] right-[3%]  w-[40px]`,rot:-14}],H=()=>{let e=(0,c.useRef)(null);return r(()=>{n.from(`.hero-cup`,{scale:.9,opacity:0,duration:1.2,ease:`power3.out`}),n.from(`.hero-text-child`,{y:40,opacity:0,duration:.8,stagger:.15,delay:.5,ease:`power3.out`}),n.utils.toArray(`.bean`).forEach(e=>{n.to(e,{y:n.utils.random(-30,-10),rotation:n.utils.random(-15,15),duration:n.utils.random(1.5,3),repeat:-1,yoyo:!0,delay:n.utils.random(0,2),ease:`sine.inOut`})}),n.utils.toArray(`.heavy`).forEach(e=>{n.to(e,{y:n.utils.random(-15,-8),rotation:n.utils.random(-5,5),duration:n.utils.random(4,6),repeat:-1,yoyo:!0,delay:n.utils.random(0,2),ease:`sine.inOut`})})},{scope:e}),(0,A.jsxs)(`section`,{ref:e,className:`relative h-screen bg-[#0D0A07] overflow-hidden flex flex-col items-center justify-center px-6`,children:[(0,A.jsx)(`div`,{className:`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none`,style:{background:`radial-gradient(circle, rgba(180,100,20,0.12) 0%, transparent 70%)`}}),(0,A.jsxs)(`div`,{className:`absolute inset-0 pointer-events-none`,children:[V.map((e,t)=>(0,A.jsx)(`img`,{src:e.src,alt:``,className:`bean absolute ${e.cls}`,style:{transform:`rotate(${e.rot}deg)`},draggable:!1},t)),(0,A.jsx)(`img`,{src:oe,alt:``,className:`heavy absolute top-[38%] left-[2%] w-[130px] hidden sm:block`,draggable:!1}),(0,A.jsx)(`img`,{src:z,alt:``,className:`heavy absolute top-[32%] right-[2%] w-[140px] hidden sm:block`,draggable:!1}),(0,A.jsx)(`img`,{src:B,alt:``,className:`heavy absolute top-[55%] right-[1%] w-[110px] hidden sm:block`,draggable:!1})]}),(0,A.jsx)(`img`,{src:ae,alt:`Galal Coffee cup`,className:`hero-cup relative z-10 w-[280px] sm:w-[340px] md:w-[400px] drop-shadow-[0_20px_60px_rgba(180,100,20,0.15)]`,draggable:!1}),(0,A.jsxs)(`div`,{className:`hero-text relative z-10 text-center mt-10 max-w-xl`,children:[(0,A.jsxs)(`h1`,{className:`hero-text-child font-display text-cream font-light leading-[1.05]`,style:{fontSize:`clamp(2.5rem, 6vw, 5.5rem)`},children:[`Every sip tells`,(0,A.jsx)(`br`,{}),(0,A.jsx)(`span`,{className:`italic text-brand-accent`,children:`a story.`})]}),(0,A.jsx)(`p`,{className:`hero-text-child mt-5 text-cream/60 text-base md:text-lg leading-relaxed max-w-md mx-auto`,children:`Hand-selected beans, slow-roasted to perfection. From our family to your cup.`}),(0,A.jsxs)(`a`,{href:`#collection`,className:`hero-text-child inline-flex items-center gap-2 mt-8 rounded-full bg-cream text-charcoal px-8 py-4 text-sm font-medium hover:bg-brand-accent hover:text-charcoal transition-colors`,children:[`Explore our menu`,(0,A.jsx)(`span`,{"aria-hidden":!0,children:`→`})]})]})]})},U=i(),W=`/assets/milkshake-CG5PfHhh.png`,G=`/assets/rest-grind-Dpq5yvjl.png`,K=`/assets/the-ritual-BWQqiwVd.png`,q=`/assets/menu-SF96eIi3.png`,se=[{id:1,name:`MILK SHAKE`,price:80,offerLabel:`New`,img:W},{id:2,name:`ICE DRINKS`,price:80,offerLabel:`Best Seller`,img:s},{id:3,name:`Frappuccino`,price:50,offerLabel:`Popular`,img:G},{id:4,name:`WAFFLE/DONUT`,price:60,offerLabel:`Cozy`,img:K}],J={"MILK SHAKE":[{name:`M.S Caramel Basbousa (New)`,price:20},{name:`M.S Mix`,price:15},{name:`M.S Vanilla`,price:15},{name:`M.S Chocolate`,price:15},{name:`M.S Caramel`,price:20},{name:`M.S Strawberry`,price:20},{name:`M.S Peach`,price:20},{name:`M.S Pineapple`,price:20},{name:`M.S Blueberry`,price:20},{name:`M.S Kiwi`,price:20},{name:`M.S Mango`,price:20}],"SOFT DRINKS":[{name:`Jelly Cola`,price:15},{name:`Blueberry Cola`,price:15},{name:`Strawberry Cola`,price:15},{name:`Strawberry Mint`,price:15},{name:`Blue Taste`,price:15},{name:`Green Apple Lemon`,price:15},{name:`Red Berry`,price:15},{name:`Mint Kiwi`,price:15},{name:`Mango Kiwi`,price:15},{name:`Strawberry Kiwi`,price:15},{name:`Pineapple Mix`,price:15},{name:`Mango Mix`,price:15},{name:`Cherry Cola`,price:15},{name:`Conta Lamer`,price:15},{name:`Benacolada`,price:15},{name:`Blue Passion`,price:15},{name:`Pink Colada`,price:15},{name:`Lemon Mint`,price:15},{name:`Lemonada`,price:15},{name:`Blueberry`,price:15},{name:`Happiness Drink`,price:15}],"NEW (Healthy Drinks)":[{name:`Ice Tea (Green Tea Mint / Strawberry / Blueberry / Mango / Peach)`,price:15},{name:`Light Milk Shake`,price:15}],"FRAPPUCCINO & FARABEH":[{name:`Frappuccino`,price:20},{name:`Frappuccino with Flavors`,price:25},{name:`Frappuccino Dolce`,price:25},{name:`Frappuccino Chocolate`,price:25},{name:`Ice Dolce`,price:20},{name:`Ice Latte`,price:20},{name:`Ice Mocha`,price:20},{name:`Ice Coffee`,price:25},{name:`illy Cream`,price:15},{name:`Ice Golden Oreo`,price:20},{name:`Ice Mocha Dolce`,price:25},{name:`Ice White Mocha`,price:25},{name:`Caramel Macchiato`,price:20},{name:`illy Cream Biscuits`,price:30},{name:`Nutella Lovers`,price:30}],"WINTER DRINKS":[{name:`Hot Dolce`,price:15},{name:`Golden Oreo`,price:15},{name:`Hot Chocolate`,price:15},{name:`Gersy`,price:15},{name:`Hot Lotus Cinnamon`,price:15},{name:`Corn Flakes`,price:15}],"COFFEE CORNER":[{name:`Turkey Coffee`,price:10},{name:`French Coffee`,price:10},{name:`Cappuccino Bonjourno`,price:10},{name:`Cappuccino Biscuits Vanilla`,price:10},{name:`Nescafe`,price:10},{name:`Flavors Tea`,price:6},{name:`Single Espresso`,price:10},{name:`Double Espresso`,price:15},{name:`American Coffee`,price:15}],"FLAVORS COFFEE":[{name:`Hazelnut Coffee (Regular)`,price:10},{name:`Vanilla Coffee`,price:10},{name:`Chocolate Coffee`,price:10},{name:`Banana Coffee`,price:10},{name:`Hazelnut Coffee (Special/Large)`,price:15},{name:`Almonds Coffee`,price:15},{name:`Shesha Apple Coffee`,price:15},{name:`Cookies Coffee`,price:15},{name:`Nutella Hazelnut`,price:15}],"CAPPUCCINO DRINKS":[{name:`Es. Cappuccino`,price:15},{name:`Special Cappuccino`,price:15},{name:`Cappuccino Espresso Flavors`,price:17},{name:`Hot Mocha`,price:20},{name:`Hot Flavors Mocha`,price:22},{name:`White Mocha`,price:20},{name:`Flat White`,price:15},{name:`Michato Espresso`,price:15},{name:`Irish Cream`,price:20}]},Y=[{id:`cream`,label:`Add Cream`,price:5},{id:`marshmello`,label:`Add Marshmello`,price:5},{id:`skimmed`,label:`Skimmed Milk / Diet Sugar`,price:5}],ce=()=>(0,A.jsx)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,style:{flexShrink:0},children:(0,A.jsx)(`polyline`,{points:`6 9 12 15 18 9`})});function X({label:e,value:t,onChange:n,options:r,placeholder:i}){let[a,o]=(0,c.useState)(!1),s=(0,c.useRef)(null),l=(0,c.useRef)(null),u=t?r.find(e=>e.value===t)?.label??t:null;return(0,c.useEffect)(()=>{if(!a)return;let e=e=>{e.key===`Escape`&&(o(!1),l.current?.focus())};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[a]),(0,c.useEffect)(()=>{if(!a||!s.current)return;let e=s.current.querySelector(`[aria-selected=true]`);e&&e.scrollIntoView({block:`nearest`})},[a]),(0,A.jsxs)(`div`,{style:{marginBottom:24},onKeyDown:e=>{if(!a){(e.key===`Enter`||e.key===` `||e.key===`ArrowDown`)&&(e.preventDefault(),o(!0));return}let r=s.current?.querySelectorAll(`[role=option]`);if(!r)return;let i=Array.from(r).findIndex(e=>e.dataset.value===t),c=i;e.key===`ArrowDown`?(e.preventDefault(),c=Math.min(i+1,r.length-1)):e.key===`ArrowUp`?(e.preventDefault(),c=Math.max(i-1,0)):e.key===`Enter`||e.key===` `?(e.preventDefault(),i>=0&&n(r[i].dataset.value),o(!1),l.current?.focus()):e.key===`Escape`&&(o(!1),l.current?.focus()),c!==i&&c>=0&&(r[c]?.focus(),n(r[c].dataset.value))},children:[(0,A.jsx)(`p`,{className:`aw-micro-label`,id:`${e}-label`,children:e}),(0,A.jsxs)(`div`,{style:{position:`relative`},children:[(0,A.jsxs)(`button`,{ref:l,type:`button`,role:`combobox`,"aria-expanded":a,"aria-haspopup":`listbox`,"aria-labelledby":`${e}-label`,onClick:()=>o(e=>!e),className:`aw-select ${a?`aw-select-open`:``}`,style:{width:`100%`,padding:`14px 16px`,backgroundColor:`rgba(255,255,255,0.02)`,color:u?`#fff`:`#666`,border:`1px solid rgba(255,255,255,${a?`0.3`:`0.08`})`,borderRadius:8,fontSize:14,outline:`none`,cursor:`pointer`,display:`flex`,alignItems:`center`,justifyContent:`space-between`,gap:8,textAlign:`left`,transition:`border-color 0.25s, background-color 0.25s`},children:[(0,A.jsx)(`span`,{children:u??i}),(0,A.jsx)(`span`,{style:{display:`flex`,transition:`transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)`,transform:a?`rotate(180deg)`:`rotate(0deg)`},children:(0,A.jsx)(ce,{})})]}),a&&(0,A.jsxs)(`ul`,{ref:s,role:`listbox`,tabIndex:-1,"aria-label":e,style:{position:`absolute`,top:`calc(100% + 4px)`,left:0,right:0,zIndex:50,backgroundColor:`#16181a`,border:`1px solid rgba(255,255,255,0.1)`,borderRadius:8,padding:4,margin:0,listStyle:`none`,maxHeight:220,overflowY:`auto`,boxShadow:`0 12px 40px rgba(0,0,0,0.5)`,animation:`awFadeIn 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards`},children:[(0,A.jsx)(`li`,{role:`option`,"aria-selected":t===``,"data-value":``,tabIndex:-1,onClick:()=>{n(``),o(!1),l.current?.focus()},style:{padding:`10px 14px`,borderRadius:6,fontSize:13,cursor:`pointer`,color:`#666`,backgroundColor:t===``?`rgba(255,255,255,0.04)`:`transparent`},children:i}),r.map(e=>(0,A.jsx)(`li`,{role:`option`,"aria-selected":t===e.value,"data-value":e.value,tabIndex:-1,onClick:()=>{n(e.value),o(!1),l.current?.focus()},style:{padding:`10px 14px`,borderRadius:6,fontSize:13,cursor:`pointer`,color:`#fff`,backgroundColor:t===e.value?`rgba(255,255,255,0.06)`:`transparent`},onMouseEnter:e=>{e.currentTarget.style.backgroundColor=`rgba(255,255,255,0.04)`},onMouseLeave:n=>{n.currentTarget.style.backgroundColor=t===e.value?`rgba(255,255,255,0.06)`:`transparent`},children:e.label},e.value))]})]})]})}function le(){let[e,t]=(0,c.useState)(``),[n,r]=(0,c.useState)(``),[i,a]=(0,c.useState)(1),[o,s]=(0,c.useState)([]),[l,u]=(0,c.useState)(!1),d=e?J[e]:[],f=d.find(e=>e.name===n),p=o.reduce((e,t)=>e+(Y.find(e=>e.id===t)?.price??0),0),m=((f?.price??0)+p)*i,h=e=>s(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e]);return(0,A.jsxs)(`div`,{className:`aw-order-panel`,children:[(0,A.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12,marginBottom:32},children:[(0,A.jsx)(`div`,{style:{width:8,height:8,borderRadius:`50%`,backgroundColor:`var(--accent)`}}),(0,A.jsx)(`h3`,{className:`aw-panel-title`,children:`Interactive Request`})]}),(0,A.jsx)(X,{label:`01. Category Selection`,value:e,onChange:e=>{t(e),r(``),s([])},placeholder:`Select class...`,options:Object.keys(J).map(e=>({value:e,label:e}))}),e&&(0,A.jsx)(`div`,{style:{animation:`awFadeIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards`},children:(0,A.jsx)(X,{label:`02. Product Selection`,value:n,onChange:e=>{r(e),s([])},placeholder:`Select item...`,options:d.map(e=>({value:e.name,label:`${e.name} — ${e.price} EGP`}))})}),n&&(0,A.jsxs)(`div`,{style:{animation:`awFadeIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards`},children:[(0,A.jsx)(`p`,{className:`aw-micro-label`,children:`03. Optional Enhancements`}),(0,A.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8,marginBottom:28},children:Y.map(e=>{let t=o.includes(e.id);return(0,A.jsxs)(`label`,{className:`aw-extra-item ${t?`active`:``}`,children:[(0,A.jsx)(`input`,{type:`checkbox`,checked:t,onChange:()=>h(e.id),style:{display:`none`}}),(0,A.jsx)(`div`,{className:`aw-custom-checkbox`,children:t&&(0,A.jsx)(`div`,{className:`aw-custom-checkbox-dot`})}),(0,A.jsx)(`span`,{style:{fontSize:13,flex:1,letterSpacing:`-0.01em`},children:e.label}),(0,A.jsxs)(`span`,{style:{fontSize:13,opacity:.8,fontFamily:`monospace`},children:[`+`,e.price,` EGP`]})]},e.id)})}),(0,A.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,marginBottom:32},children:[(0,A.jsx)(`p`,{className:`aw-micro-label`,style:{margin:0},children:`04. Quantity`}),(0,A.jsxs)(`div`,{className:`aw-qty-selector`,children:[(0,A.jsx)(`button`,{onClick:()=>a(e=>Math.max(1,e-1)),className:`aw-qty-btn`,children:`−`}),(0,A.jsx)(`span`,{style:{fontSize:15,fontWeight:500,minWidth:32,textAlign:`center`,fontFamily:`monospace`},children:i.toString().padStart(2,`0`)}),(0,A.jsx)(`button`,{onClick:()=>a(e=>e+1),className:`aw-qty-btn`,children:`+`})]})]}),(0,A.jsxs)(`div`,{className:`aw-receipt`,children:[(0,A.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,marginBottom:10},children:[(0,A.jsxs)(`span`,{style:{opacity:.6},children:[n,` × `,i]}),(0,A.jsxs)(`span`,{style:{fontFamily:`monospace`},children:[(f?.price??0)*i,` EGP`]})]}),o.map(e=>{let t=Y.find(t=>t.id===e);return t?(0,A.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,marginBottom:10,fontSize:13},children:[(0,A.jsxs)(`span`,{style:{opacity:.6},children:[t.label,` × `,i]}),(0,A.jsxs)(`span`,{style:{fontFamily:`monospace`},children:[`+`,t.price*i,` EGP`]})]},e):null}),(0,A.jsxs)(`div`,{className:`aw-receipt-total`,children:[(0,A.jsx)(`span`,{children:`ESTIMATED TOTAL`}),(0,A.jsxs)(`span`,{style:{fontFamily:`monospace`,fontSize:20},children:[m,` `,(0,A.jsx)(`span`,{style:{fontSize:11},children:`EGP`})]})]})]}),(0,A.jsx)(`button`,{onClick:()=>{f&&(u(!0),setTimeout(()=>{u(!1),t(``),r(``),a(1),s([])},2800))},disabled:!f,className:`aw-place-btn ${l?`success`:``}`,children:l?`TRANSACTION SECURED`:`CONFIRM SELECTION`})]})]})}function ue({src:e,alt:t}){let[n,r]=(0,c.useState)({x:50,y:50}),[i,a]=(0,c.useState)(!1);return(0,A.jsxs)(`div`,{onMouseMove:e=>{let{left:t,top:n,width:i,height:a}=e.currentTarget.getBoundingClientRect();r({x:(e.clientX-t)/i*100,y:(e.clientY-n)/a*100})},onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),style:{position:`relative`,width:`100%`,borderRadius:16,overflow:`hidden`,border:`1px solid rgba(255, 255, 255, 0.06)`,background:`#0e0f11`,cursor:`zoom-in`},children:[(0,A.jsx)(`div`,{style:{position:`absolute`,bottom:16,left:`50%`,transform:`translateX(-50%)`,zIndex:10,backgroundColor:`rgba(10, 11, 13, 0.85)`,backdropFilter:`blur(12px)`,WebkitBackdropFilter:`blur(12px)`,padding:`8px 16px`,borderRadius:`100px`,fontSize:`11px`,color:`rgba(255, 255, 255, 0.8)`,pointerEvents:`none`,letterSpacing:`0.08em`,textTransform:`uppercase`,opacity:+!i,transition:`opacity 0.25s ease`,border:`1px solid rgba(255, 255, 255, 0.08)`},children:`Hover over to read`}),(0,A.jsx)(`img`,{src:e,alt:t,style:{width:`100%`,display:`block`,transformOrigin:`${n.x}% ${n.y}%`,transform:i?`scale(2.2)`:`scale(1)`,transition:i?`transform 0.1s ease-out, transform-origin 0.1s ease-out`:`transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), transform-origin 0.45s cubic-bezier(0.16, 1, 0.3, 1)`}})]})}function de({onClose:e}){return(0,U.createPortal)((0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(`style`,{children:`
        .aw-backdrop {
          position: fixed;
          inset: 0;
          z-index: 9998;
          background-color: rgba(4, 4, 5, 0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          animation: awBackdropIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .aw-dialog {
          width: 100%;
          max-width: 1320px;
          max-height: 92vh;
          background-color: #0b0c0e;
          border-radius: 24px;
          border: 1px solid rgba(255, 255, 255, 0.07);
          overflow: hidden;
          display: grid;
          grid-template-columns: 1fr;
          box-shadow: 0 40px 100px rgba(0, 0, 0, 0.9);
          animation: awDialogIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @media (min-width: 768px) {
          .aw-dialog {
            grid-template-columns: 1.5fr 0.9fr;
          }
        }
        .aw-scroll-area {
          overflow-y: auto;
          max-height: 90vh;
          padding: 40px;
        }
        .aw-scroll-area::-webkit-scrollbar {
          width: 4px;
        }
        .aw-scroll-area::-webkit-scrollbar-track {
          background: transparent;
        }
        .aw-scroll-area::-webkit-scrollbar-thumb {
          background: rgba(255,255,255,0.1);
          border-radius: 99px;
        }
        .aw-close-circle {
          position: absolute;
          top: 30px;
          right: 30px;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: #fff;
          font-size: 18px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 100;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .aw-close-circle:hover {
          background: #fff;
          color: #000;
          transform: rotate(90deg);
        }
        .aw-dialog-left {
          border-right: 1px solid rgba(255, 255, 255, 0.07);
          display: flex;
          flex-direction: column;
          position: relative;
        }
        @keyframes awBackdropIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes awDialogIn {
          from { opacity: 0; transform: translateY(30px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}),(0,A.jsx)(`div`,{onClick:e,onWheel:e=>e.stopPropagation(),onTouchMove:e=>e.stopPropagation(),className:`aw-backdrop`,children:(0,A.jsxs)(`div`,{onClick:e=>e.stopPropagation(),className:`aw-dialog`,children:[(0,A.jsxs)(`div`,{className:`aw-dialog-left aw-scroll-area`,style:{padding:`28px 28px 40px`},children:[(0,A.jsx)(`button`,{onClick:e,"aria-label":`Close dialog`,className:`aw-close-circle`,children:`×`}),(0,A.jsxs)(`div`,{style:{marginBottom:20},children:[(0,A.jsx)(`span`,{className:`aw-micro-label`,style:{color:`var(--accent)`,marginBottom:6},children:`ARCHIVED BOARD`}),(0,A.jsx)(`h2`,{className:`aw-poster-title`,style:{color:`#fff`,margin:0,fontSize:20,letterSpacing:`-0.03em`},children:`Galal Coffee Menu`})]}),(0,A.jsx)(ue,{src:q,alt:`Menu list visualization`})]}),(0,A.jsx)(`div`,{className:`aw-scroll-area`,style:{backgroundColor:`#0b0c0e`},children:(0,A.jsx)(le,{})})]})})]}),document.body)}function fe(){let[e,t]=(0,c.useState)(!1);return(0,c.useEffect)(()=>(document.body.style.overflow=e?`hidden`:``,()=>{document.body.style.overflow=``}),[e]),(0,A.jsxs)(`section`,{className:`aw-section`,children:[(0,A.jsx)(`style`,{children:`
        :root {
          --accent: #10b981;
        }
        .aw-section {
          background-color: #050506;
          padding: 120px 24px;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          color: #ffffff;
          overflow: hidden;
        }
        .aw-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 40px;
          margin-bottom: 72px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          padding-bottom: 32px;
        }
        .aw-tag {
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.25em;
          color: var(--accent);
          display: inline-block;
          margin-bottom: 16px;
        }
        .aw-title {
          font-size: clamp(34px, 5vw, 56px);
          font-weight: 400;
          line-height: 1.05;
          letter-spacing: -0.04em;
          margin: 0;
          color: #f3f4f6;
        }
        .aw-title-italic {
          font-style: italic;
          font-family: Georgia, serif;
          color: #9ca3af;
        }
        .aw-nav-btn {
          padding: 14px 28px;
          border-radius: 100px;
          border: 1px solid rgba(255,255,255,0.15);
          background-color: transparent;
          color: #fff;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 12px;
          overflow: hidden;
          position: relative;
          transition: border-color 0.3s;
        }
        .aw-nav-btn::before {
          content: "";
          position: absolute;
          inset: 0;
          background: #fff;
          transform: translateY(100%);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 1;
        }
        .aw-nav-btn:hover {
          border-color: #fff;
        }
        .aw-nav-btn:hover::before {
          transform: translateY(0);
        }
        .aw-nav-btn-text {
          position: relative;
          z-index: 2;
          transition: color 0.3s;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .aw-nav-btn:hover .aw-nav-btn-text {
          color: #000;
        }

        /* Grid system styling */
        .aw-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 24px;
        }

        /* Card design inspired by editorial layouts */
        .aw-card {
          background-color: #0e0f11;
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          overflow: hidden;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1),
                      border-color 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
        }
        .aw-card:hover {
          border-color: rgba(255, 255, 255, 0.2);
          transform: translateY(-4px);
        }
        .aw-card-img-wrap {
          width: 100%;
          height: 260px;
          position: relative;
          overflow: hidden;
          background-color: #121316;
        }
        .aw-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.75;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s;
        }
        .aw-card:hover .aw-card-img {
          transform: scale(1.05);
          opacity: 0.9;
        }
        .aw-card-tag {
          position: absolute;
          top: 16px;
          left: 16px;
          background: rgba(10, 11, 13, 0.8);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: #fff;
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          padding: 6px 12px;
          border-radius: 100px;
        }
        .aw-card-body {
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .aw-card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }
        .aw-card-num {
          font-size: 11px;
          font-family: monospace;
          opacity: 0.3;
        }
        .aw-card-title {
          font-size: 18px;
          font-weight: 500;
          color: #fff;
          margin: 0;
          letter-spacing: -0.01em;
        }
        .aw-card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 12px;
          border-top: 1px solid rgba(255, 255, 255, 0.04);
        }
        .aw-price {
          font-family: monospace;
          font-size: 16px;
          font-weight: 500;
        }
        .aw-card-btn {
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #fff;
          background: transparent;
          border: none;
          padding: 0;
          cursor: pointer;
          position: relative;
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .aw-card-btn::after {
          content: "";
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          height: 1px;
          background-color: var(--accent);
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .aw-card:hover .aw-card-btn::after {
          transform: scaleX(1);
          transform-origin: left;
        }

        /* Order panel specific internal UI classes */
        .aw-order-panel {
          background-color: transparent;
        }
        .aw-panel-title {
          font-size: 16px;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin: 0;
          color: #9ca3af;
        }
        .aw-micro-label {
          color: rgba(255, 255, 255, 0.4);
          font-size: 11px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          margin-bottom: 10px;
        }
        .aw-select {
          width: 100%;
          padding: 14px 16px;
          background-color: rgba(255,255,255,0.02);
          color: #fff;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 8px;
          font-size: 14px;
          outline: none;
          cursor: pointer;
          appearance: none;
          transition: border-color 0.25s, background-color 0.25s;
        }
        .aw-select:focus {
          border-color: rgba(255, 255, 255, 0.3);
          background-color: rgba(255,255,255,0.04);
        }
        .aw-select-icon {
          position: absolute;
          right: 16px;
          top: 50%;
          transform: translateY(-50%);
          pointer-events: none;
          color: rgba(255,255,255,0.4);
        }
        .aw-extra-item {
          display: flex;
          align-items: center;
          gap: 16px;
          cursor: pointer;
          padding: 12px 16px;
          border-radius: 8px;
          background-color: rgba(255,255,255,0.01);
          border: 1px solid rgba(255, 255, 255, 0.04);
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .aw-extra-item:hover {
          background-color: rgba(255,255,255,0.03);
          border-color: rgba(255, 255, 255, 0.1);
        }
        .aw-extra-item.active {
          background-color: rgba(16, 185, 129, 0.06);
          border-color: rgba(16, 185, 129, 0.3);
        }
        .aw-custom-checkbox {
          width: 16px;
          height: 16px;
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
        }
        .aw-extra-item.active .aw-custom-checkbox {
          border-color: var(--accent);
          background-color: var(--accent);
        }
        .aw-custom-checkbox-dot {
          width: 6px;
          height: 6px;
          background-color: #000;
          border-radius: 50%;
        }
        .aw-qty-selector {
          display: flex;
          align-items: center;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 8px;
          padding: 4px;
        }
        .aw-qty-btn {
          width: 32px;
          height: 32px;
          background: transparent;
          border: none;
          color: #fff;
          font-size: 16px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: opacity 0.2s;
        }
        .aw-qty-btn:hover {
          opacity: 0.6;
        }
        .aw-receipt {
          padding: 24px;
          background-color: rgba(255,255,255,0.01);
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 12px;
          margin-bottom: 24px;
          font-size: 14px;
        }
        .aw-receipt-total {
          border-top: 1px solid rgba(255,255,255,0.08);
          padding-top: 18px;
          margin-top: 14px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          letter-spacing: 0.05em;
          font-weight: 500;
        }
        .aw-place-btn {
          width: 100%;
          padding: 16px 0;
          border-radius: 8px;
          background-color: #ffffff;
          color: #000000;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.08em;
          border: none;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .aw-place-btn:hover {
          background-color: #eaeaea;
          transform: translateY(-2px);
        }
        .aw-place-btn.success {
          background-color: var(--accent);
          color: #fff;
        }
        @keyframes awFadeIn {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}),(0,A.jsxs)(`div`,{style:{maxWidth:1200,margin:`0 auto`},children:[(0,A.jsxs)(`div`,{className:`aw-header`,children:[(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`span`,{className:`aw-tag`,children:`SELECTED OFFERS`}),(0,A.jsxs)(`h2`,{className:`aw-title`,children:[`Our menu, `,(0,A.jsx)(`span`,{className:`aw-title-italic`,children:`crafted to perfection.`})]})]}),(0,A.jsx)(`button`,{onClick:()=>t(!0),className:`aw-nav-btn`,children:(0,A.jsxs)(`span`,{className:`aw-nav-btn-text`,children:[`Launch Menu `,(0,A.jsx)(`span`,{children:`→`})]})})]}),(0,A.jsx)(`div`,{className:`aw-grid`,children:se.map((e,n)=>(0,A.jsxs)(`div`,{className:`aw-card`,children:[(0,A.jsxs)(`div`,{className:`aw-card-img-wrap`,children:[(0,A.jsx)(`img`,{src:e.img,alt:e.name,className:`aw-card-img`}),(0,A.jsx)(`span`,{className:`aw-card-tag`,children:e.offerLabel})]}),(0,A.jsxs)(`div`,{className:`aw-card-body`,children:[(0,A.jsxs)(`div`,{className:`aw-card-header`,children:[(0,A.jsx)(`h3`,{className:`aw-card-title`,children:e.name}),(0,A.jsxs)(`span`,{className:`aw-card-num`,children:[`[ 0`,n+1,` ]`]})]}),(0,A.jsxs)(`div`,{className:`aw-card-footer`,children:[(0,A.jsxs)(`span`,{className:`aw-price`,children:[e.price,`.00 `,(0,A.jsx)(`span`,{style:{fontSize:11,opacity:.5},children:`EGP`})]}),(0,A.jsx)(`button`,{onClick:()=>t(!0),className:`aw-card-btn`,children:`Order ↗`})]})]})]},e.id))})]}),e&&(0,A.jsx)(de,{onClose:()=>t(!1)})]})}function Z({className:e=``}){return(0,A.jsxs)(`svg`,{viewBox:`0 0 64 40`,className:e,"aria-hidden":`true`,children:[(0,A.jsx)(`path`,{d:`M4 36 L8 10 L20 24 L32 4 L44 24 L56 10 L60 36 Z`,fill:`currentColor`,stroke:`currentColor`,strokeLinejoin:`round`,strokeWidth:`1.5`}),(0,A.jsx)(`rect`,{x:`4`,y:`34`,width:`56`,height:`4`,fill:`currentColor`}),(0,A.jsx)(`circle`,{cx:`8`,cy:`10`,r:`2.5`,fill:`currentColor`}),(0,A.jsx)(`circle`,{cx:`32`,cy:`4`,r:`2.5`,fill:`currentColor`}),(0,A.jsx)(`circle`,{cx:`56`,cy:`10`,r:`2.5`,fill:`currentColor`})]})}function pe(){let e=(0,c.useRef)(null);return(0,c.useEffect)(()=>{let t=e.current;if(!t)return;let n=0,r=0,i=0,a=0,o=e=>{i=e.clientX,a=e.clientY},s=()=>{n+=(i-n)*.18,r+=(a-r)*.18,t.style.transform=`translate(${n}px, ${r}px) translate(-50%, -50%)`,requestAnimationFrame(s)},c=e=>{e.target.closest(`a, button, [data-cursor='hover']`)?t.classList.add(`hover`):t.classList.remove(`hover`)};return window.addEventListener(`mousemove`,o),window.addEventListener(`mouseover`,c),requestAnimationFrame(s),()=>{window.removeEventListener(`mousemove`,o),window.removeEventListener(`mouseover`,c)}},[]),(0,A.jsx)(`div`,{ref:e,className:`cursor-dot`})}function me(){return(0,c.useRef)(null)}function he(e){(0,c.useEffect)(()=>{let t=new C({duration:1.2,smoothWheel:!0});e.current=t,t.on(`scroll`,a.update);let r=e=>{let n=e.target.closest(`a[href^='#']`);n&&n.getAttribute(`href`)!==`#`&&(e.preventDefault(),t.scrollTo(n.getAttribute(`href`)))};document.addEventListener(`click`,r);let i=e=>{t.raf(e*1e3)};return n.ticker.add(i),n.ticker.lagSmoothing(0),()=>{document.removeEventListener(`click`,r),n.ticker.remove(i),t.destroy()}},[])}function Q({children:e,className:t=``}){let r=(0,c.useRef)(null);return(0,c.useEffect)(()=>{let e=r.current;if(!e)return;let t=t=>{let r=e.getBoundingClientRect(),i=t.clientX-(r.left+r.width/2),a=t.clientY-(r.top+r.height/2);n.to(e,{x:i*.25,y:a*.25,duration:.5,ease:`power3.out`})},i=()=>n.to(e,{x:0,y:0,duration:.7,ease:`elastic.out(1,0.4)`});return e.addEventListener(`mousemove`,t),e.addEventListener(`mouseleave`,i),()=>{e.removeEventListener(`mousemove`,t),e.removeEventListener(`mouseleave`,i)}},[]),(0,A.jsx)(`div`,{ref:r,className:`inline-block magnetic ${t}`,children:e})}function ge(){he(me());let e=(0,c.useRef)(null),[t,i]=(0,c.useState)(0);return(0,c.useEffect)(()=>{let e=()=>{let e=document.documentElement;i(e.scrollTop/(e.scrollHeight-e.clientHeight))};return window.addEventListener(`scroll`,e,{passive:!0}),()=>window.removeEventListener(`scroll`,e)},[]),r(()=>{n.from(`.hero-word`,{yPercent:110,opacity:0,duration:1.1,ease:`power4.out`,stagger:.08,delay:.2}),n.from(`.hero-sub`,{y:30,opacity:0,duration:1,delay:1,ease:`power3.out`}),n.from(`.hero-cta`,{y:20,opacity:0,duration:.8,delay:1.2,stagger:.1,ease:`power3.out`}),n.from(`.hero-meta`,{opacity:0,duration:1,delay:1.4,stagger:.1}),n.to(`.hero-cup`,{yPercent:-20,scale:1.1,ease:`none`,scrollTrigger:{trigger:`.hero`,start:`top top`,end:`bottom top`,scrub:!0}}),n.utils.toArray(`.manifesto-word`).forEach(e=>{n.fromTo(e,{opacity:.12},{opacity:1,ease:`none`,scrollTrigger:{trigger:e,start:`top 80%`,end:`top 45%`,scrub:!0}})}),n.utils.toArray(`.scale-img`).forEach(e=>{n.fromTo(e,{scale:.85},{scale:1,ease:`none`,scrollTrigger:{trigger:e,start:`top 90%`,end:`top 30%`,scrub:!0}})});let e=document.querySelector(`.heritage-title`);e&&n.to(e,{opacity:0,ease:`none`,scrollTrigger:{trigger:`.heritage-pin`,start:`top top`,end:`bottom top`,scrub:!0}}),n.utils.toArray(`.stat-num`).forEach(e=>{let t=Number(e.dataset.value||0),r={v:0};a.create({trigger:e,start:`top 80%`,once:!0,onEnter:()=>{n.to(r,{v:t,duration:2,ease:`power3.out`,onUpdate:()=>{e.textContent=Math.round(r.v).toLocaleString()}})}})});let t=document.querySelector(`.journey-track`),r=document.querySelector(`.journey-wrap`);if(t&&r){let e=t.scrollWidth-window.innerWidth;n.to(t,{x:-e,ease:`none`,scrollTrigger:{trigger:r,start:`top top`,end:()=>`+=${e}`,pin:!0,scrub:1,invalidateOnRefresh:!0}})}n.utils.toArray(`.reveal-up`).forEach(e=>{n.fromTo(e,{y:40,opacity:0},{y:0,opacity:1,duration:.8,ease:`power3.out`,scrollTrigger:{trigger:e,start:`top 85%`,once:!0}})}),n.utils.toArray(`.bento-card`).forEach((e,t)=>{n.fromTo(e,{y:30,opacity:0,scale:.98},{y:0,opacity:1,scale:1,duration:.7,delay:t*.1,ease:`power3.out`,scrollTrigger:{trigger:e,start:`top 88%`,once:!0}})})},{scope:e}),(0,A.jsxs)(`main`,{ref:e,className:`overflow-x-hidden w-full max-w-full bg-charcoal text-cream selection:bg-brand-accent`,children:[(0,A.jsx)(pe,{}),(0,A.jsx)(`div`,{className:`fixed top-0 left-0 right-0 h-px z-[100] bg-cream/5`,children:(0,A.jsx)(`div`,{className:`h-full bg-brand-accent origin-left`,style:{transform:`scaleX(${t})`}})}),(0,A.jsx)(_e,{}),(0,A.jsx)(H,{}),(0,A.jsx)($,{}),(0,A.jsx)(ve,{}),(0,A.jsx)(fe,{}),(0,A.jsx)(ye,{}),(0,A.jsx)(be,{}),(0,A.jsx)(xe,{}),(0,A.jsx)(ie,{}),(0,A.jsx)(Se,{}),(0,A.jsx)(Ce,{})]})}function _e(){let e=(0,c.useRef)(null);return(0,c.useEffect)(()=>{let t=e.current;if(!t)return;let n=a.create({trigger:document.body,start:`top -60px`,onEnter:()=>t.classList.add(`nav-compact`),onLeaveBack:()=>t.classList.remove(`nav-compact`)});return()=>n.kill()},[]),(0,A.jsx)(`header`,{className:`fixed top-0 left-0 right-0 z-50`,children:(0,A.jsxs)(`nav`,{ref:e,className:`flex items-center justify-between px-5 md:px-10 py-6 max-w-[2000px] mx-auto transition-all duration-1000 ease-in-out`,children:[(0,A.jsxs)(`a`,{href:`#top`,className:`flex items-center gap-2.5 text-cream`,children:[(0,A.jsx)(Z,{className:`w-7 h-5 text-brand-accent`}),(0,A.jsx)(`span`,{className:`font-display text-lg tracking-tight`,children:`Galal`})]}),(0,A.jsxs)(`ul`,{className:`hidden md:flex items-center gap-8 text-sm text-cream/70`,children:[(0,A.jsx)(`li`,{children:(0,A.jsx)(`a`,{href:`#story`,className:`hover:text-cream transition`,children:`Story`})}),(0,A.jsx)(`li`,{children:(0,A.jsx)(`a`,{href:`#collection`,className:`hover:text-cream transition`,children:`Collection`})}),(0,A.jsx)(`li`,{children:(0,A.jsx)(`a`,{href:`#heritage`,className:`hover:text-cream transition`,children:`Heritage`})}),(0,A.jsx)(`li`,{children:(0,A.jsx)(`a`,{href:`#journey`,className:`hover:text-cream transition`,children:`Craft`})})]}),(0,A.jsx)(Q,{children:(0,A.jsxs)(`a`,{href:`#collection`,className:`inline-flex items-center gap-2 rounded-full bg-cream text-charcoal px-5 py-2.5 text-sm font-medium hover:bg-brand-accent hover:text-charcoal transition-colors`,children:[`Shop coffee`,(0,A.jsx)(`span`,{"aria-hidden":!0,children:`→`})]})})]})})}function $(){let e=[`Port Said Pride`,`Slow Roast`,`Cairo Crafted`,`ISO Certified`,`Premium Arabica`,`Hand Sorted`];return(0,A.jsx)(`section`,{className:`border-y border-cream/10 bg-brand-dark/40 py-8 overflow-hidden`,children:(0,A.jsx)(`div`,{className:`flex w-max animate-marquee gap-16 px-8 text-cream/70 font-display text-3xl md:text-5xl italic font-light`,children:[...e,...e,...e].map((e,t)=>(0,A.jsxs)(`span`,{className:`flex items-center gap-16 whitespace-nowrap`,children:[e,(0,A.jsx)(Z,{className:`w-8 h-5 text-brand-accent`})]},t))})})}function ve(){return(0,A.jsx)(`section`,{id:`story`,className:`relative py-40 md:py-56 px-6 bg-charcoal`,children:(0,A.jsxs)(`div`,{className:`max-w-5xl mx-auto`,children:[(0,A.jsxs)(`div`,{className:`flex items-center gap-3 text-cream/40 text-xs tracking-[0.3em] uppercase mb-12 reveal-up`,children:[(0,A.jsx)(Z,{className:`w-5 h-3 text-brand-accent`}),`How it started`]}),(0,A.jsx)(`div`,{className:`space-y-10`,children:[`It began in Port Said. A young man named Mohamed Galal, a small car, and a dream. No shop, no investors — just Bousaidi grit and a perfect brew.`,`Word spread. The car became a landmark. Today, Galal Coffee spans Port Said to Cairo, Ismailia, Damietta, and beyond.`].map((e,t)=>(0,A.jsx)(`p`,{className:`font-display text-balance leading-[1.2] text-cream`,style:{fontSize:`clamp(1.5rem, 3.6vw, 3.25rem)`},children:e.split(` `).map((e,t)=>(0,A.jsx)(`span`,{className:`manifesto-word inline-block mr-[0.2em]`,children:e},t))},t))})]})})}function ye(){return(0,A.jsx)(`section`,{id:`heritage`,className:`heritage-pin relative bg-brand-dark overflow-hidden`,children:(0,A.jsxs)(`div`,{className:`grid md:grid-cols-12 gap-0 min-h-screen`,children:[(0,A.jsxs)(`div`,{className:`heritage-title md:col-span-5 px-6 md:px-12 py-24 flex flex-col justify-center`,children:[(0,A.jsxs)(`div`,{className:`text-brand-accent text-xs tracking-[0.3em] uppercase mb-8 flex items-center gap-3 reveal-up`,children:[(0,A.jsx)(Z,{className:`w-5 h-3`}),` Heritage`]}),(0,A.jsxs)(`h2`,{className:`font-display font-light text-cream leading-[0.95]`,style:{fontSize:`clamp(2.5rem, 5.5vw, 5rem)`},children:[`A decade`,(0,A.jsx)(`br`,{}),(0,A.jsx)(`span`,{className:`italic text-brand-accent`,children:`in a single sip.`})]}),(0,A.jsx)(`p`,{className:`mt-8 max-w-md text-cream/70 leading-relaxed`,children:`From a single coffee car on a Port Said street to a nationwide brand with ISO-certified roasteries. The same passion, the same Bousaidi spirit, served every day since 2015.`})]}),(0,A.jsxs)(`div`,{className:`md:col-span-7 relative`,children:[(0,A.jsx)(`img`,{src:O,alt:`Galal Coffee heritage`,loading:`lazy`,width:1536,height:1920,className:`h-full w-full object-cover min-h-[60vh]`}),(0,A.jsx)(`div`,{className:`absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-brand-dark/40`}),(0,A.jsx)(`ul`,{className:`absolute bottom-8 left-8 right-8 grid grid-cols-2 md:grid-cols-4 gap-3 text-cream`,children:[{y:`2015`,l:`The First Spark`,d:`Mohamed Galal starts his coffee car in Port Said`},{y:`2018`,l:`From Wheels to Walls`,d:`First physical roastery in Port Said`},{y:`2021`,l:`The Cairo Conquest`,d:`Expands to Sheraton and Nasr City`},{y:`2023`,l:`ISO Certified`,d:`9001 & 22000 global quality standards`}].map(e=>(0,A.jsxs)(`li`,{className:`rounded-2xl border border-cream/15 bg-charcoal/40 backdrop-blur-md p-4`,children:[(0,A.jsx)(`div`,{className:`font-display text-xl md:text-2xl text-brand-accent`,children:e.y}),(0,A.jsx)(`div`,{className:`text-cream/90 text-xs uppercase tracking-widest mt-1`,children:e.l}),(0,A.jsx)(`div`,{className:`text-cream/50 text-[10px] mt-1 leading-relaxed`,children:e.d})]},e.y))})]})]})})}function be(){let e=[{n:`I`,t:`Bean Selection`,d:`Premium Arabica beans, hand-sorted for consistency and quality.`,img:w},{n:`II`,t:`Slow Roast`,d:`Drum-roasted in copper. The crackle, the curl, the second crack.`,img:T},{n:`III`,t:`Rest & Grind`,d:`Beans rest 14 days. Then ground to order, never before.`,img:k},{n:`IV`,t:`The Pour`,d:`A 25-second extraction. Crema like silk. Body like velvet.`,img:ee},{n:`V`,t:`The Ritual`,d:`Poured in porcelain. Served with a moment of quiet.`,img:E}];return(0,A.jsx)(`section`,{id:`journey`,className:`journey-wrap relative h-screen overflow-hidden bg-charcoal`,children:(0,A.jsxs)(`div`,{className:`journey-track flex h-full will-change-transform`,children:[(0,A.jsx)(`div`,{className:`shrink-0 w-screen h-full flex items-center px-8 md:px-24`,children:(0,A.jsxs)(`div`,{className:`max-w-2xl`,children:[(0,A.jsxs)(`div`,{className:`text-brand-accent text-xs tracking-[0.3em] uppercase mb-6 flex items-center gap-3`,children:[(0,A.jsx)(Z,{className:`w-5 h-3`}),` The craft`]}),(0,A.jsxs)(`h2`,{className:`font-display font-light text-cream leading-[0.95] reveal-up`,style:{fontSize:`clamp(2.5rem, 6vw, 5.5rem)`},children:[`Five movements.`,(0,A.jsx)(`br`,{}),(0,A.jsx)(`span`,{className:`italic text-brand-accent`,children:`One cup.`})]}),(0,A.jsx)(`p`,{className:`mt-6 text-cream/70 max-w-md`,children:`From bean selection to your cup. Each step shaped by the Bousaidi spirit of doing things right.`}),(0,A.jsx)(`div`,{className:`mt-10 text-cream/40 text-xs tracking-widest uppercase`,children:`Scroll →`})]})}),e.map((t,n)=>(0,A.jsx)(`article`,{className:`shrink-0 w-[88vw] md:w-[56vw] h-full px-6 md:px-10 py-20 flex flex-col`,children:(0,A.jsxs)(`div`,{className:`grow rounded-3xl overflow-hidden relative bg-brand-dark grain`,children:[(0,A.jsx)(`img`,{src:t.img,alt:t.t,loading:`lazy`,width:1280,height:1600,className:`absolute inset-0 h-full w-full object-cover opacity-70`}),(0,A.jsx)(`div`,{className:`absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/30 to-transparent`}),(0,A.jsxs)(`div`,{className:`absolute top-8 left-8 right-8 flex items-start justify-between`,children:[(0,A.jsx)(`span`,{className:`font-display text-cream/80 text-7xl md:text-8xl leading-none`,children:t.n}),(0,A.jsxs)(`span`,{className:`text-cream/60 text-xs tracking-widest uppercase`,children:[`Step `,n+1,` of `,e.length]})]}),(0,A.jsxs)(`div`,{className:`absolute bottom-8 left-8 right-8`,children:[(0,A.jsx)(`h3`,{className:`font-display text-cream leading-tight`,style:{fontSize:`clamp(2rem, 3.6vw, 3.25rem)`},children:t.t}),(0,A.jsx)(`p`,{className:`mt-3 text-cream/70 max-w-md`,children:t.d})]})]})},t.n))]})})}function xe(){return(0,A.jsx)(`section`,{className:`py-32 md:py-48 px-6 border-y border-cream/10 bg-charcoal`,children:(0,A.jsx)(`div`,{className:`max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-px bg-cream/10`,children:[{value:`9+`,suffix:``,label:`Years of Passion`,desc:`Since 2015, perfecting every cup`},{value:``,suffix:``,label:`Growing Across Egypt`,desc:`From Port Said to Cairo and beyond`,icon:!0},{value:``,suffix:``,label:`Millions of Cups Shared`,desc:`Served with the Bousaidi spirit`,icon:!0},{value:``,suffix:``,label:`ISO Certified`,desc:`9001 & 22000 quality standards`,icon:!0}].map(e=>(0,A.jsxs)(`div`,{className:`bg-charcoal p-8 md:p-10`,children:[e.value?(0,A.jsxs)(`div`,{className:`font-display text-cream leading-none flex items-baseline gap-1`,style:{fontSize:`clamp(3rem, 6vw, 5.5rem)`},children:[(0,A.jsx)(`span`,{className:`stat-num`,"data-value":9,children:`0`}),(0,A.jsx)(`span`,{className:`text-brand-accent text-3xl md:text-4xl`,children:`+`})]}):(0,A.jsx)(Z,{className:`w-8 h-5 text-brand-accent mb-4`}),(0,A.jsx)(`div`,{className:`mt-4 text-cream/60 text-sm tracking-wide max-w-[12rem]`,children:e.label}),(0,A.jsx)(`div`,{className:`mt-1 text-cream/40 text-xs leading-relaxed`,children:e.desc})]},e.label))})})}function Se(){return(0,A.jsxs)(`section`,{className:`relative py-40 md:py-56 px-6 overflow-hidden`,children:[(0,A.jsx)(`video`,{autoPlay:!0,muted:!0,loop:!0,playsInline:!0,className:`absolute inset-0 h-full w-full object-cover`,src:D}),(0,A.jsx)(`div`,{className:`absolute inset-0 bg-charcoal/40`}),(0,A.jsx)(`div`,{className:`absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent`}),(0,A.jsxs)(`div`,{className:`relative z-[1] max-w-6xl mx-auto text-center`,children:[(0,A.jsx)(Z,{className:`mx-auto w-14 h-9 text-brand-accent mb-10 animate-float`}),(0,A.jsxs)(`h2`,{className:`font-display font-light leading-[0.95] text-balance`,style:{fontSize:`clamp(2.75rem, 8vw, 7.5rem)`,color:`var(--brand-accent)`},children:[`From Port Said`,(0,A.jsx)(`br`,{}),(0,A.jsx)(`span`,{className:`italic text-cream`,children:`to Your Neighborhood.`})]}),(0,A.jsx)(`p`,{className:`mt-6 max-w-xl mx-auto text-cream/80 text-lg leading-relaxed`,children:`Find us across Egypt from our original home in Port Said to Cairo, Ismailia, and Damietta.`}),(0,A.jsxs)(`div`,{className:`mt-12 flex flex-wrap items-center justify-center gap-4`,children:[(0,A.jsx)(Q,{children:(0,A.jsxs)(`a`,{href:`https://www.talabat.com/egypt/restaurants?s=Galal%20Coffee`,target:`_blank`,rel:`noopener noreferrer`,className:`group inline-flex items-center gap-3 rounded-full bg-[#FF5A00] text-white px-8 py-4 text-sm font-medium min-w-[220px] justify-center transition-all duration-300 hover:brightness-110 hover:shadow-lg hover:shadow-[#FF5A00]/30`,children:[(0,A.jsxs)(`svg`,{width:`18`,height:`18`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":`true`,children:[(0,A.jsx)(`path`,{d:`M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z`}),(0,A.jsx)(`line`,{x1:`3`,y1:`6`,x2:`21`,y2:`6`}),(0,A.jsx)(`path`,{d:`M16 10a4 4 0 0 1-8 0`})]}),`Order on Talabat`]})}),(0,A.jsx)(Q,{children:(0,A.jsxs)(`a`,{href:`https://www.google.com/maps/search/Galal+Coffee/`,target:`_blank`,rel:`noopener noreferrer`,className:`group relative inline-flex items-center gap-3 rounded-full min-w-[220px] justify-center px-8 py-4 text-sm font-medium text-white border border-white/15 overflow-hidden transition-all duration-300`,children:[(0,A.jsx)(`span`,{className:`absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110`,style:{backgroundImage:`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23111'/%3E%3Cpath d='M0 35 Q30 15 90 35 T200 25' stroke='%23222' stroke-width='2.5' fill='none'/%3E%3Cpath d='M0 90 Q50 70 110 95 T200 80' stroke='%23222' stroke-width='2' fill='none'/%3E%3Cpath d='M0 145 Q70 125 130 160 T200 140' stroke='%23222' stroke-width='2.5' fill='none'/%3E%3Cpath d='M50 0 Q30 40 55 90 T45 200' stroke='%23222' stroke-width='2' fill='none'/%3E%3Cpath d='M110 0 Q90 50 130 110 T105 200' stroke='%23222' stroke-width='2.5' fill='none'/%3E%3Cpath d='M170 0 Q155 30 180 80 T160 200' stroke='%23222' stroke-width='2' fill='none'/%3E%3Ccircle cx='90' cy='35' r='3' fill='%23333'/%3E%3Ccircle cx='55' cy='95' r='2' fill='%23333'/%3E%3Ccircle cx='160' cy='145' r='2.5' fill='%23333'/%3E%3C/svg%3E")`}}),(0,A.jsx)(`span`,{className:`absolute inset-0 bg-black/40`}),(0,A.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`,className:`relative z-10`,"aria-hidden":`true`,children:[(0,A.jsx)(`path`,{d:`M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z`}),(0,A.jsx)(`circle`,{cx:`12`,cy:`10`,r:`3`})]}),(0,A.jsx)(`span`,{className:`relative z-10`,children:`Find a Location`})]})})]})]})]})}function Ce(){return(0,A.jsx)(`footer`,{className:`border-t border-cream/10 bg-charcoal px-6 pt-20 pb-10`,children:(0,A.jsxs)(`div`,{className:`max-w-7xl mx-auto`,children:[(0,A.jsxs)(`div`,{className:`grid md:grid-cols-12 gap-12`,children:[(0,A.jsxs)(`div`,{className:`md:col-span-5`,children:[(0,A.jsxs)(`div`,{className:`flex items-center gap-3 text-cream`,children:[(0,A.jsx)(Z,{className:`w-9 h-6 text-brand-accent`}),(0,A.jsx)(`span`,{className:`font-display text-3xl`,children:`Galal Coffee`})]}),(0,A.jsx)(`p`,{className:`mt-6 text-cream/60 max-w-sm leading-relaxed`,children:`Born on the streets of Port Said. Crafted with passion. From a single car to an Egyptian icon since 2015.`})]}),(0,A.jsxs)(`div`,{className:`md:col-span-2`,children:[(0,A.jsx)(`div`,{className:`text-cream/40 text-xs tracking-widest uppercase mb-4`,children:`Shop`}),(0,A.jsxs)(`ul`,{className:`space-y-2 text-cream/80 text-sm`,children:[(0,A.jsx)(`li`,{children:(0,A.jsx)(`a`,{href:`#`,className:`hover:text-brand-accent`,children:`Signature`})}),(0,A.jsx)(`li`,{children:(0,A.jsx)(`a`,{href:`#`,className:`hover:text-brand-accent`,children:`Espresso`})}),(0,A.jsx)(`li`,{children:(0,A.jsx)(`a`,{href:`#`,className:`hover:text-brand-accent`,children:`Reserve`})}),(0,A.jsx)(`li`,{children:(0,A.jsx)(`a`,{href:`#`,className:`hover:text-brand-accent`,children:`Equipment`})})]})]}),(0,A.jsxs)(`div`,{className:`md:col-span-2`,children:[(0,A.jsx)(`div`,{className:`text-cream/40 text-xs tracking-widest uppercase mb-4`,children:`House`}),(0,A.jsxs)(`ul`,{className:`space-y-2 text-cream/80 text-sm`,children:[(0,A.jsx)(`li`,{children:(0,A.jsx)(`a`,{href:`#story`,className:`hover:text-brand-accent`,children:`Our story`})}),(0,A.jsx)(`li`,{children:(0,A.jsx)(`a`,{href:`#journey`,className:`hover:text-brand-accent`,children:`The Journey`})}),(0,A.jsx)(`li`,{children:(0,A.jsx)(`a`,{href:`#`,className:`hover:text-brand-accent`,children:`Press`})}),(0,A.jsx)(`li`,{children:(0,A.jsx)(`a`,{href:`#`,className:`hover:text-brand-accent`,children:`Careers`})})]})]})]}),(0,A.jsxs)(`div`,{className:`mt-16 pt-8 border-t border-cream/10 flex flex-wrap items-center justify-between gap-4 text-cream/40 text-xs tracking-wide`,children:[(0,A.jsxs)(`div`,{children:[`Made with ❤️ love by`,` `,(0,A.jsx)(`a`,{href:`https://www.facebook.com/people/Auto-synapse/61590422384756/`,target:`_blank`,rel:`noopener noreferrer`,className:`shehap-link`,children:`Auto synapse`}),` `,`· Port Said · Cairo · Ismailia · Damietta, Egypt`]}),(0,A.jsxs)(`div`,{className:`flex items-center gap-6`,children:[(0,A.jsx)(`a`,{href:`https://www.facebook.com/Galalcoffee1/?locale=ar_AR`,target:`_blank`,rel:`noopener noreferrer`,className:`hover:text-cream`,children:`Facebook`}),(0,A.jsx)(`a`,{href:`https://www.instagram.com/galal_coffee/?hl=ar`,target:`_blank`,rel:`noopener noreferrer`,className:`hover:text-cream`,children:`Instagram`})]})]})]})})}export{ge as component};