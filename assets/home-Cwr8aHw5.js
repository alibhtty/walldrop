import{r,c as R,j as e,L as _,_ as st,a as G,P as ct,b as N,T as ot}from"./index-BKZJ9Os_.js";import{T as q}from"./playlist-card-m-B75OGrfJ.js";import{T as z}from"./text-bold-l-BURaB4hB.js";const rt="Left",lt="Right",dt="Up",ut="Down",$={delta:10,preventScrollOnSwipe:!1,rotationAngle:0,trackMouse:!1,trackTouch:!0,swipeDuration:1/0,touchEventOptions:{passive:!0}},K={first:!0,initial:[0,0],start:0,swiping:!1,xy:[0,0]},J="mousemove",Q="mouseup",mt="touchend",gt="touchmove",ht="touchstart";function xt(t,o,i,n){return t>o?i>0?lt:rt:n>0?ut:dt}function Z(t,o){if(o===0)return t;const i=Math.PI/180*o,n=t[0]*Math.cos(i)+t[1]*Math.sin(i),s=t[1]*Math.cos(i)-t[0]*Math.sin(i);return[n,s]}function ft(t,o){const i=a=>{const c="touches"in a;c&&a.touches.length>1||t((l,m)=>{m.trackMouse&&!c&&(document.addEventListener(J,n),document.addEventListener(Q,f));const{clientX:h,clientY:y}=c?a.touches[0]:a,S=Z([h,y],m.rotationAngle);return m.onTouchStartOrOnMouseDown&&m.onTouchStartOrOnMouseDown({event:a}),Object.assign(Object.assign(Object.assign({},l),K),{initial:S.slice(),xy:S,start:a.timeStamp||0})})},n=a=>{t((c,l)=>{const m="touches"in a;if(m&&a.touches.length>1)return c;if(a.timeStamp-c.start>l.swipeDuration)return c.swiping?Object.assign(Object.assign({},c),{swiping:!1}):c;const{clientX:h,clientY:y}=m?a.touches[0]:a,[S,I]=Z([h,y],l.rotationAngle),P=S-c.xy[0],B=I-c.xy[1],T=Math.abs(P),j=Math.abs(B),D=(a.timeStamp||0)-c.start,L=Math.sqrt(T*T+j*j)/(D||1),U=[P/(D||1),B/(D||1)],O=xt(T,j,P,B),k=typeof l.delta=="number"?l.delta:l.delta[O.toLowerCase()]||$.delta;if(T<k&&j<k&&!c.swiping)return c;const p={absX:T,absY:j,deltaX:P,deltaY:B,dir:O,event:a,first:c.first,initial:c.initial,velocity:L,vxvy:U};p.first&&l.onSwipeStart&&l.onSwipeStart(p),l.onSwiping&&l.onSwiping(p);let E=!1;return(l.onSwiping||l.onSwiped||l[`onSwiped${O}`])&&(E=!0),E&&l.preventScrollOnSwipe&&l.trackTouch&&a.cancelable&&a.preventDefault(),Object.assign(Object.assign({},c),{first:!1,eventData:p,swiping:!0})})},s=a=>{t((c,l)=>{let m;if(c.swiping&&c.eventData){if(a.timeStamp-c.start<l.swipeDuration){m=Object.assign(Object.assign({},c.eventData),{event:a}),l.onSwiped&&l.onSwiped(m);const h=l[`onSwiped${m.dir}`];h&&h(m)}}else l.onTap&&l.onTap({event:a});return l.onTouchEndOrOnMouseUp&&l.onTouchEndOrOnMouseUp({event:a}),Object.assign(Object.assign(Object.assign({},c),K),{eventData:m})})},u=()=>{document.removeEventListener(J,n),document.removeEventListener(Q,f)},f=a=>{u(),s(a)},d=(a,c)=>{let l=()=>{};if(a&&a.addEventListener){const m=Object.assign(Object.assign({},$.touchEventOptions),c.touchEventOptions),h=[[ht,i,m],[gt,n,Object.assign(Object.assign({},m),c.preventScrollOnSwipe?{passive:!1}:{})],[mt,s,m]];h.forEach(([y,S,I])=>a.addEventListener(y,S,I)),l=()=>h.forEach(([y,S])=>a.removeEventListener(y,S))}return l},x={ref:a=>{a!==null&&t((c,l)=>{if(c.el===a)return c;const m={};return c.el&&c.el!==a&&c.cleanUpTouch&&(c.cleanUpTouch(),m.cleanUpTouch=void 0),l.trackTouch&&a&&(m.cleanUpTouch=d(a,l)),Object.assign(Object.assign(Object.assign({},c),{el:a}),m)})}};return o.trackMouse&&(x.onMouseDown=i),[x,d]}function yt(t,o,i,n){return!o.trackTouch||!t.el?(t.cleanUpTouch&&t.cleanUpTouch(),Object.assign(Object.assign({},t),{cleanUpTouch:void 0})):t.cleanUpTouch?o.preventScrollOnSwipe!==i.preventScrollOnSwipe||o.touchEventOptions.passive!==i.touchEventOptions.passive?(t.cleanUpTouch(),Object.assign(Object.assign({},t),{cleanUpTouch:n(t.el,o)})):t:Object.assign(Object.assign({},t),{cleanUpTouch:n(t.el,o)})}function _t(t){const{trackMouse:o}=t,i=r.useRef(Object.assign({},K)),n=r.useRef(Object.assign({},$)),s=r.useRef(Object.assign({},n.current));s.current=Object.assign({},n.current),n.current=Object.assign(Object.assign({},$),t);let u;for(u in $)n.current[u]===void 0&&(n.current[u]=$[u]);const[f,d]=r.useMemo(()=>ft(v=>i.current=v(i.current,n.current),{trackMouse:o}),[o]);return i.current=yt(i.current,n.current,s.current,d),f}/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var b=function(){return b=Object.assign||function(o){for(var i,n=1,s=arguments.length;n<s;n++){i=arguments[n];for(var u in i)Object.prototype.hasOwnProperty.call(i,u)&&(o[u]=i[u])}return o},b.apply(this,arguments)};function vt(t,o){var i={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&o.indexOf(n)<0&&(i[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(t);s<n.length;s++)o.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(t,n[s])&&(i[n[s]]=t[n[s]]);return i}var St=function(){return Math.random().toString(36).substring(6)},jt=function(t){var o=t.animate,i=o===void 0?!0:o,n=t.backgroundColor,s=n===void 0?"#f5f6f7":n,u=t.backgroundOpacity,f=u===void 0?1:u,d=t.baseUrl,v=d===void 0?"":d,x=t.children,a=t.foregroundColor,c=a===void 0?"#eee":a,l=t.foregroundOpacity,m=l===void 0?1:l,h=t.gradientRatio,y=h===void 0?2:h,S=t.uniqueKey,I=t.rtl,P=I===void 0?!1:I,B=t.speed,T=B===void 0?1.2:B,j=t.style,D=j===void 0?{}:j,L=t.title,U=L===void 0?"Loading...":L,O=t.beforeMask,k=O===void 0?null:O,p=vt(t,["animate","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","uniqueKey","rtl","speed","style","title","beforeMask"]),E=S||St(),X="".concat(E,"-diff"),Y="".concat(E,"-animated-diff"),F="".concat(E,"-aria"),nt=P?{transform:"scaleX(-1)"}:null,at="".concat(T,"s"),W="".concat(y*-1," 0"),it="".concat(y," 0");return r.createElement("svg",b({"aria-labelledby":F,role:"img",style:b(b({},D),nt)},p),U?r.createElement("title",{id:F},U):null,k&&r.isValidElement(k)?k:null,r.createElement("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url(".concat(v,"#").concat(X,")"),style:{fill:"url(".concat(v,"#").concat(Y,")")}}),r.createElement("defs",null,r.createElement("clipPath",{id:X},x),r.createElement("linearGradient",{id:Y,gradientTransform:"translate(".concat(W,")")},r.createElement("stop",{offset:"0%",stopColor:s,stopOpacity:f}),r.createElement("stop",{offset:"50%",stopColor:c,stopOpacity:m}),r.createElement("stop",{offset:"100%",stopColor:s,stopOpacity:f}),i&&r.createElement("animateTransform",{attributeName:"gradientTransform",type:"translate",values:"".concat(W,"; 0 0; ").concat(it),dur:at,repeatCount:"indefinite"}))))},V=function(t){return t.children?r.createElement(jt,b({},t)):r.createElement(bt,b({},t))},bt=function(t){return r.createElement(V,b({viewBox:"0 0 476 124"},t),r.createElement("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),r.createElement("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),r.createElement("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),r.createElement("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),r.createElement("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),r.createElement("circle",{cx:"20",cy:"20",r:"20"}))};const Bt="_fadeIn_ufma0_1",Tt="_PlaylistCardGBox_ufma0_12",Ct="_PlaylistCardG_ufma0_12",It="_ImgBox_ufma0_61",Pt="_Title_ufma0_79",Ot="_Tag_ufma0_118",kt="_IconBox_ufma0_167",pt="_ImgBoxArtist_ufma0_179",Et="_ActiveIconBox_ufma0_198",A={"fade-in":"_fade-in_ufma0_6",fadeIn:Bt,PlaylistCardGBox:Tt,PlaylistCardG:Ct,ImgBox:It,Title:Pt,Tag:Ot,IconBox:kt,ImgBoxArtist:pt,ActiveIconBox:Et};function wt(t){const[o,i]=r.useState(!1),[n,s]=r.useState(0),[u,f]=r.useState(!1),[d,v]=r.useState([]),x=[t.data.imgUrl,t.data.imgUrlB,t.data.imgUrlC,t.data.imgUrlD],a=_t({onSwipedLeft:()=>{f(!0),s((n+1)%x.length)},onSwipedRight:()=>{f(!0),s((n-1+x.length)%x.length)},preventDefaultTouchmoveEvent:!0,trackMouse:!0});r.useEffect(()=>{const h=setInterval(()=>{f(!0),s((n+1)%x.length)},13e3);return()=>clearInterval(h)},[n,x.length]),r.useEffect(()=>{if(u){const h=setTimeout(()=>{f(!1)},11e3);return()=>clearTimeout(h)}},[u]),r.useEffect(()=>{i(parseInt(t.data.index)===t.trackData.trackKey[0])},[t.data.index,t.trackData.trackKey]);function c(h){v(y=>[...y,h])}function l(h){h.target.src="./assets/icons/share.jpg"}function m(h){return d.includes(h)?h:null}return e.jsx("div",{className:A.PlaylistCardGBox,...a,children:e.jsxs(_,{to:"/scroll",children:[" ",e.jsxs("div",{className:A.PlaylistCardG,children:[e.jsxs("div",{className:A.ImgBox,style:{position:"relative"},children:[!d.includes(x[n])&&e.jsx(V,{speed:8,width:340,height:130,viewBox:"0 0 340 130",backgroundColor:"rgba(107, 183, 242,.05)",foregroundColor:"rgba(107, 183, 242,.15)",style:{position:"absolute",width:"100%",height:"100%",top:0,left:0},children:e.jsx("rect",{x:"0",y:"0",rx:"8",ry:"8",width:"340",height:"130"})}),e.jsx("img",{className:u?"fade-in":"",src:m(x[n])||x[n],alt:`${t.data.title}`,onError:l,onLoad:()=>c(x[n]),style:d.includes(x[n])?{position:"absolute",top:0,left:0}:{display:"none"}}),e.jsx("div",{style:{position:"absolute",display:"flex",bottom:"-1.3rem",left:"0px"},children:x.map((h,y)=>e.jsx("div",{style:{position:"relative",display:"flex",height:"10px",width:"4px",backgroundColor:y===n?"#396fbf":"#555555",margin:"2px",borderRadius:"1px"}},y))})]}),e.jsx("div",{className:A.Title,children:e.jsx(st,{speed:20,children:e.jsxs(z,{children:[" ",t.data.comentario,"   ",t.data.title," – ",t.data.artist,"   "]})})}),e.jsx("div",{className:A.Tag,children:e.jsx("img",{src:t.data.artistImgUrl,alt:`${t.data.title}`})})]})]})})}const Nt=t=>({trackData:t.trackData,isPlaying:t.isPlaying});R(Nt,{changeTrack:G})(wt);const $t="_PlaylistCardABox_1mzyu_1",Dt="_PlaylistCardA_1mzyu_1",At="_ImgBox_1mzyu_89",Mt="_Title_1mzyu_100",Lt="_IconBox_1mzyu_134",Ut="_ActiveIconBox_1mzyu_195",w={PlaylistCardABox:$t,PlaylistCardA:Dt,ImgBox:At,Title:Mt,IconBox:Lt,ActiveIconBox:Ut};function Rt(t){const[o,i]=r.useState(!1);function n(){document.documentElement.style.setProperty("--hover-home-bg",t.data.hoverColor)}return r.useEffect(()=>{i(parseInt(t.data.index)===t.trackData.trackKey[0])}),e.jsxs("div",{className:w.PlaylistCardABox,children:[e.jsx(_,{to:`/playlist/${t.data.link}`,onMouseOver:n,children:e.jsxs("div",{className:w.PlaylistCardA,children:[e.jsx("div",{className:w.ImgBox,children:e.jsx("img",{src:t.data.imgUrl,alt:`${t.data.title}`})}),e.jsx("div",{className:w.Title,children:e.jsx(z,{children:t.data.title})})]})}),e.jsx("div",{onClick:()=>t.changeTrack([parseInt(t.data.index),0]),className:`${w.IconBox} ${o&&t.isPlaying?w.ActiveIconBox:""}`,children:e.jsx(ct,{isthisplay:o})})]})}const Gt=t=>({trackData:t.trackData,isPlaying:t.isPlaying}),qt=document.querySelectorAll(".PlaylistCardA");let tt;qt.forEach(t=>{t.addEventListener("mouseover",()=>{t.style.opacity=.5,clearTimeout(tt)}),t.addEventListener("mouseout",()=>{tt=setTimeout(()=>{t.style.opacity=1},400)})});R(Gt,{changeTrack:G})(Rt);const Ht="_PlaylistCardBBox_1otv0_1",Kt="_PlaylistCardB_1otv0_1",zt="_ImgBox_1otv0_25",Vt="_Title_1otv0_37",Xt="_artist_1otv0_50",Yt="_IconBox_1otv0_61",Ft="_ActiveIconBox_1otv0_105",M={PlaylistCardBBox:Ht,PlaylistCardB:Kt,ImgBox:zt,Title:Vt,artist:Xt,IconBox:Yt,ActiveIconBox:Ft};function Wt(t){const[o,i]=r.useState(!1);function n(){document.documentElement.style.setProperty("--hover-home-bg",t.data.hoverColor)}r.useEffect(()=>{i(parseInt(t.data.index)===t.trackData.trackKey[0])},[t.data.index,t.trackData.trackKey]);function s(d){d.target.src="./../image/set/selection.jpg"}function u(d){if(d.startsWith("rgb"))return d.replace(/[^\d,]/g,"");let v=0,x=0,a=0;return d.length===4?(v=parseInt(d[1]+d[1],16),x=parseInt(d[2]+d[2],16),a=parseInt(d[3]+d[3],16)):d.length===7&&(v=parseInt(d[1]+d[2],16),x=parseInt(d[3]+d[4],16),a=parseInt(d[5]+d[6],16)),`${v}, ${x}, ${a}`}const f=u(t.data.playlistBg);return e.jsxs("div",{className:M.PlaylistCardBBox,children:[e.jsx(_,{to:`/playlist/${t.data.link}`,onMouseOver:n,children:e.jsx("div",{className:M.PlaylistCardB,children:e.jsx("div",{className:M.ImgBox,style:{"--playlist-bg-rgb":f},children:e.jsx("img",{src:t.data.imgUrl,alt:`${t.data.title}`,onError:s})})})}),e.jsx("div",{onClick:()=>t.changeTrack([parseInt(t.data.index),0]),className:`${M.IconBox} ${o&&t.isPlaying?M.ActiveIconBox:""}`})]})}const Jt=t=>({trackData:t.trackData,isPlaying:t.isPlaying}),et=R(Jt,{changeTrack:G})(Wt),Qt="_PlaylistCardSBox_iq8xb_1",Zt="_PlaylistCardS_iq8xb_1",te="_ImgBox_iq8xb_84",ee="_Title_iq8xb_98",ne="_IconBox_iq8xb_148",ae="_ActiveIconBox_iq8xb_187",C={PlaylistCardSBox:Qt,PlaylistCardS:Zt,ImgBox:te,Title:ee,IconBox:ne,ActiveIconBox:ae},ie=t=>{const[o,i]=t.split(":").map(Number);return(o||0)*60+(i||0)},se=t=>{const o=t.reduce((n,s)=>{const u=s.trackTime||"0:00";return n+ie(u)},0);return`${Math.round(o/60)}m`};function ce(t){const[o,i]=r.useState(!1),[n,s]=r.useState(!1);function u(){document.documentElement.style.setProperty("--hover-home-bg",t.data.hoverColor)}function f(){t.changeTrack([parseInt(t.data.index),0]),i(parseInt(t.data.index)===t.trackData.trackKey[0])}function d(){s(!0)}function v(c){c.target.src="./../image/set/selection.jpg"}const x=N.find(c=>c.link===t.data.link),a=x?se(x.playlistData):"0m";return e.jsxs("div",{className:C.PlaylistCardSBox,children:[e.jsx(_,{to:`/playlist/${t.data.link}`,onMouseOver:u,children:e.jsxs("div",{className:C.PlaylistCardS,children:[e.jsxs("div",{className:C.ImgBox,children:[!n&&e.jsx(V,{speed:4,width:140,height:210,viewBox:"0 0 200 300",backgroundColor:"rgba(30,30,30,.7)",foregroundColor:"rgba(50,50,50,.5)",children:e.jsx("rect",{x:"0",y:"0",rx:"12",ry:"12",width:"200",height:"300"})}),e.jsx("img",{src:t.data.imgUrl,alt:`${t.data.title}`,onError:v,onLoad:d,style:n?{}:{display:"none"}})]}),e.jsxs("div",{className:C.Title,children:[e.jsx(z,{children:t.data.title}),e.jsx("b",{className:C.Count,children:a})]})]})}),e.jsx("div",{onClick:f,className:`${C.IconBox} ${o&&t.isPlaying?C.ActiveIconBox:""}`})]})}const oe=t=>({trackData:t.trackData,isPlaying:t.isPlaying}),re=R(oe,{changeTrack:G})(ce),le=({image:t,text:o,subtitle:i,description:n,url:s})=>e.jsx("div",{children:e.jsxs("div",{className:"banner-url",children:[e.jsx("img",{src:t,alt:"Banner"}),e.jsx("div",{className:"banner-text-container",children:e.jsx("div",{className:"banner-text",children:o})})]})}),de="_Home_cgneu_33",ue="_HoverBg_cgneu_40",me="_Bg_cgneu_53",ge="_Content_cgneu_62",he="_SectionTitle_cgneu_69",xe="_SectionCards_cgneu_80",fe="_SectionCardsA_cgneu_88",ye="_SectionCardsG_cgneu_98",_e="_SectionCardsB_cgneu_109",ve="_PlaylistCardB_cgneu_140",Se="_albumColor_cgneu_165",je="_SectionCardsMedium_cgneu_182",be="_SectionCorp_cgneu_203",Be="_SectionCred_cgneu_211",Te="_SectionTerms_cgneu_220",Ce="_SectionTermsTitle_cgneu_235",Ie="_LinkSubtitle_cgneu_241",Pe="_SectionTermsItem_cgneu_256",Oe="_SectionVersionItem_cgneu_268",ke="_socialBox_cgneu_336",pe="_BtnContainer_cgneu_389",Ee="_ProfileBtn_cgneu_396",we="_ProfileBtn2_cgneu_424",Ne="_TextoProfileBtn2_cgneu_441",$e="_BannerDescripcion_cgneu_446",De="_TextoDescripcion_cgneu_479",Ae="_SectionTitle2_cgneu_551",Me="_marquee_cgneu_580",g={Home:de,HoverBg:ue,Bg:me,Content:ge,SectionTitle:he,SectionCards:xe,SectionCardsA:fe,SectionCardsG:ye,SectionCardsB:_e,PlaylistCardB:ve,albumColor:Se,SectionCardsMedium:je,SectionCorp:be,SectionCred:Be,SectionTerms:Te,SectionTermsTitle:Ce,LinkSubtitle:Ie,SectionTermsItem:Pe,SectionVersionItem:Oe,socialBox:ke,BtnContainer:pe,ProfileBtn:Ee,ProfileBtn2:we,TextoProfileBtn2:Ne,BannerDescripcion:$e,TextoDescripcion:De,SectionTitle2:Ae,marquee:Me};function H(t){return t.sort(()=>Math.random()-.5)}function Ge(){const t=N.slice(0,10),o=H([...t]),i=N.slice(21,28);H([...i]);const n=N.slice(31,32);return H([...n]),e.jsxs("div",{className:g.Home,children:[e.jsx("div",{className:g.HoverBg}),e.jsx("div",{className:g.Bg}),e.jsx(ot,{}),e.jsxs("div",{className:g.Content,children:[e.jsxs("section",{children:[e.jsx("div",{className:g.SectionTitle,children:e.jsxs(_,{className:g.LinkSubtitle,to:"/library",children:[e.jsx(q,{children:"Populares"}),e.jsx("box-icon",{name:"chevron-right"})]})}),e.jsx("div",{className:g.SectionCards,children:o.filter(s=>s.type!=="album"&&s.type!=="djs").map((s,u)=>e.jsx("div",{style:{animationDelay:`${u*.15}s`},className:"fade-in",children:e.jsx(re,{data:s})},s.title))})]}),e.jsx("section",{className:g.addSection,children:e.jsx(_,{to:"/start",children:e.jsx(le,{image:"./assets/icons/meta-mixtape.jpg",text:"mixtaperadio.web.app",subtitle:"🔗 Versión beta disponible",description:"Promocionado",url:"https://alibhtty.github.io/mixtape-install/"})})}),e.jsxs("section",{className:g.albumColor,children:[e.jsx("div",{className:g.SectionTitle,children:e.jsxs(_,{className:g.LinkSubtitle,to:"/library/albums",children:[e.jsx(q,{children:"Books"}),e.jsx("box-icon",{name:"chevron-right"})]})}),e.jsx("div",{className:g.SectionCardsB,children:N.slice(8,12).map(s=>e.jsx(et,{data:s},s.title))})]}),e.jsxs("section",{className:g.albumColor,children:[e.jsx("div",{className:g.SectionTitle,children:e.jsxs(_,{className:g.LinkSubtitle,to:"/library/albums",children:[e.jsx(q,{children:"Discos"}),e.jsx("box-icon",{name:"chevron-right"})]})}),e.jsx("div",{className:g.SectionCardsB,children:N.slice(8,12).map(s=>e.jsx(et,{data:s},s.title))})]}),e.jsx("section",{children:e.jsxs("div",{className:g.SectionCred,children:[e.jsxs("div",{className:g.SectionCorp,children:["4B & CO. ",e.jsx("br",{})," ",e.jsx("b",{children:"v4.1"}),"  "]}),e.jsxs("div",{className:g.SectionTerms,children:[e.jsx(_,{className:g.SectionTermsItem,to:"/news",children:" Noticias"}),e.jsx(_,{className:g.SectionTermsItem,to:"/ajustes",children:" Mi Cuenta "}),e.jsx(_,{className:g.SectionTermsItem,to:"/djs",children:" DJs "}),e.jsx(_,{className:g.SectionTermsItem,to:"/4b",children:" 4B-SO"}),e.jsx(_,{className:g.SectionTermsItem,to:"/promote",children:" Publicar"}),e.jsx(_,{className:g.SectionTermsItem,to:"/terms",children:" Políticas & Terminos"})]})]})})]})]})}export{Ge as default};
//# sourceMappingURL=home-Cwr8aHw5.js.map
