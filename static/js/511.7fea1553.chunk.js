"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[511],{511:function(e,s,n){n.r(s),n.d(s,{default:function(){return F}});var r=n(8683),t=n(3433),o=n(5861),c=n(9439),i=n(7757),a=n.n(i),l=n(1087),u=n(7689),d=n(2791),m=n(3881),h=n.n(m),p=n(5553),f=n(8747),v=n(808),_=n(7861),x="LessonsList_lessons-list__7gLFD",g="LessonsList_lesson__Z-4Uc",w="LessonsList_lesson-number-wrapp__s2-02",j="LessonsList_lesson-number__YgwAy",k="LessonsList_img-wrapp__q1Hdu",L="LessonsList_image__t6tpn",C="LockedMessage_locked-message__AsiJ9",b=n(184),N=function(e){var s=e.children;return(0,b.jsx)("b",{className:C,children:s})},Z=function(e){var s=e.lessons,n=e.onChangeCurrenLesson,r=(0,l.lr)(),t=(0,c.Z)(r,2),o=t[0],i=t[1],a=o.get("course");return(0,b.jsx)("ul",{className:x,children:s.map((function(e){var s=e.id,r=e.previewImageLink,t=e.status,o=e.title,c=e.order;return(0,b.jsxs)("li",{className:g,onClick:function(){n(e),i({course:a,lesson:c})},children:[(0,b.jsx)("p",{className:w,children:(0,b.jsx)("span",{className:j,children:c})}),(0,b.jsx)("div",{children:(0,b.jsxs)("div",{className:k,children:[(0,b.jsx)("img",{className:L,src:"".concat(r,"/lesson-").concat(c,".webp"),alt:"Preview of the lesson"})," ","locked"===t&&(0,b.jsx)(N,{children:"Locked"})]})}),(0,b.jsx)(v.D,{tag:"h3",children:o})]},s)}))})},y=n(4881),E=n(3717),I=n(6992),A=n(379),D="CurrentCourse_description__9mAng",S="CurrentCourse_video-wrapp__gosmS",U="CurrentCourse_video__xtcYf",F=function(){var e=(0,d.useState)(null),s=(0,c.Z)(e,2),n=s[0],i=s[1],m=(0,d.useState)(null),x=(0,c.Z)(m,2),g=x[0],w=x[1],j=(0,d.useState)("idle"),k=(0,c.Z)(j,2),L=k[0],C=k[1],F=(0,u.UO)().courseId,T=(0,l.lr)(),K=(0,c.Z)(T,1)[0].get("lesson"),M=(0,E.o)((function(e){return e.openModal})),O=(0,E.o)((function(e){return e.addLesson}));(0,d.useEffect)((function(){var e=function(){var e=(0,o.Z)(a().mark((function e(){var s,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return C("pending"),e.prev=1,e.next=4,(0,p.X)(F);case 4:s=e.sent,n=(0,t.Z)(s.lessons).sort((function(e,s){return e.order-s.order})),i((0,r.Z)((0,r.Z)({},s),{},{lessons:(0,t.Z)(n)})),C("resolved"),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),C("rejected"),console.log(e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(){return e.apply(this,arguments)}}();e()}),[F]),(0,d.useEffect)((function(){n&&w(K?n.lessons[Number(K)-1]:n.lessons[0])}),[n,K]),(0,d.useEffect)((function(){var e=document.getElementById({courseId:F}),s=function(s){s.ctrlKey&&"ArrowUp"===s.code?e.playbackRate+=.1:s.ctrlKey&&"ArrowDown"===s.code&&(e.playbackRate-=.1)};return window.addEventListener("keydown",s),function(){return window.removeEventListener("keydown",s)}}),[F]);var R=(0,f.d)(g).saveCurrentTimeVideo;return(0,b.jsxs)(b.Fragment,{children:["resolved"===L&&g&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)("div",{className:S,children:[(0,b.jsx)("video",{className:U,id:F,controls:"unlocked"===g.status,width:"100%",poster:"".concat(null===g||void 0===g?void 0:g.previewImageLink,"/lesson-").concat(g.order,".webp"),onTimeUpdate:h()((function(e){return R(e)}),1e3)}),g&&"locked"===g.status&&(0,b.jsx)(N,{children:"This video is blocked"})]}),(0,b.jsxs)(v.D,{tag:"h2",children:["Current lesson: ".concat(g.order," - ").concat(g.title)," ","unlocked"===g.status&&(0,b.jsx)(A.E,{onClick:function(){M(),O(g)},children:(0,b.jsx)(I.nOw,{})})," "]}),(0,b.jsxs)("div",{children:["resolved"===L&&n&&(0,b.jsx)(v.D,{main:!0,children:"Course: ".concat(n.title)}),(0,b.jsx)(_.$,{lessonsCount:n.lessons.length,rating:n.rating,metaInfo:n.meta,children:(0,b.jsx)("b",{className:D,children:n.description})})]})]}),"resolved"===L&&n&&(0,b.jsx)(Z,{lessons:n.lessons,onChangeCurrenLesson:w}),"pending"===L&&(0,b.jsx)(y.a,{})]})}}}]);
//# sourceMappingURL=511.7fea1553.chunk.js.map