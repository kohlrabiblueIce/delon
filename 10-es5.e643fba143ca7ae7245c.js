function _defineProperties(n,l){for(var e=0;e<l.length;e++){var a=l[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,a.key,a)}}function _createClass(n,l,e){return l&&_defineProperties(n.prototype,l),e&&_defineProperties(n,e),n}function _classCallCheck(n,l){if(!(n instanceof l))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{Px8c:function(n,l,e){"use strict";e.d(l,"a",(function(){return u})),e.d(l,"b",(function(){return t}));var a=e("8Y7J"),u=(e("v1Dh"),e("SVse"),e("vZwM"),e("SCoL"),e("0YeR"),a.zb({encapsulation:2,styles:[],data:{}}));function t(n){return a.dc(2,[a.Wb(402653184,1,{fixedEl:0}),(n()(),a.Bb(1,0,[[1,0],["fixedEl",1]],null,1,"div",[],null,null,null,null,null)),a.Pb(null,0)],null,null)}},ywcF:function(n,l,e){"use strict";e.r(l),e.d(l,"DevTestModuleNgFactory",(function(){return na}));var a=e("8Y7J"),u=function n(){_classCallCheck(this,n),this.source={type:"video",sources:[{src:"https://blz-videos.nosdn.127.net/1/OverWatch/AnimatedShots/Overwatch_AnimatedShot_Bastion_TheLastBastion.mp4"}],tracks:[]},this.options={debug:!0,i18n:{play:"\u64ad\u653e",pause:"\u6682\u505c",speed:"\u901f\u5ea6",normal:"\u6b63\u5e38"}}},t=function n(){_classCallCheck(this,n)},b=e("D4Yc");e("xw4t");var i=[b.V,b.X,b.db,b.eb,b.J,b.I,b.c,b.T,b.Z,b.ob,b.U,b.A,b.L,b.K,b.a],o=function(){function n(l,e,a,u,t){_classCallCheck(this,n),this.menuSrv=e,this.settings=a,this.msgSrv=u,this.i18n=t,this.lang="zh-CN",this.menus=[{text:"test",group:!0,children:[{text:"Dashboard-DISABLED",link:"/dev",icon:"anticon anticon-dashboard",i18n:"app.header.menu.home",badge:5,disabled:!0},{text:"Level1",link:"#",icon:"anticon anticon-appstore",children:[{text:"Level2",link:"#",children:[{text:"Level3A",link:"/dev/l1"},{text:"Level3B-DISABLED",link:"/dev/l1",disabled:!0}]},{text:"Level2-DISABLED",link:"/dev/l2",disabled:!0}]},{text:"ABC",icon:"anticon anticon-appstore",children:[{text:"Reuse Tab1",link:"/dev/l1",i18n:"app.header.menu.docs"},{text:"Reuse Tab2",link:"/dev/l2"},{text:"Reuse Tab3",link:"/dev/l3"},{text:"Reuse Tab4",link:"/dev/l4"},{text:"Reuse Tab5",link:"/dev/l5"},{text:"Reuse Tab6",link:"/dev/l6"},{text:"Reuse Tab7",link:"/dev/l7"},{text:"Ellipsis",link:"/dev/l8"}]}]}],this.customContextMenu=[{id:"custom1",title:"\u81ea\u5b9a\u4e491",fn:function(n,l){console.log("\u81ea\u5b9a\u4e491",n,l)}},{id:"custom2",title:"\u81ea\u5b9a\u4e492",disabled:function(){return!0},fn:function(n,l){console.log("\u81ea\u5b9a\u4e492",n,l)}}],l.addIcon.apply(l,i)}return _createClass(n,[{key:"toggleCollapsedSideabar",value:function(){this.settings.setLayout("collapsed",!this.settings.layout.collapsed)}},{key:"toggleLang",value:function(){this.lang="zh-CN"===this.lang?"en-US":"zh-CN",this.i18n.use(this.lang)}},{key:"ngOnInit",value:function(){this.menuSrv.add(this.menus)}},{key:"isFixed",get:function(){return this.settings.layout.fixed}},{key:"isBoxed",get:function(){return this.settings.layout.boxed}},{key:"isCollapsed",get:function(){return this.settings.layout.collapsed}}]),n}(),c=function(){function n(l){_classCallCheck(this,n),this.router=l,this.now=+new Date}return _createClass(n,[{key:"ngOnInit",value:function(){console.log("ngoninit")}},{key:"_onReuseInit",value:function(){this.now=+new Date,console.log("by _onReuseInit",this.router.snapshot.url.toString())}}]),n}(),s=function n(){_classCallCheck(this,n)},r=e("pMnS"),d=e("Ed4d"),p=e("QfCi"),m=e("R6D3"),z=e("WP5L"),h=e("71F0"),O=e("fE+l"),f=e("0RMT"),g=e("QcbP"),Q=e("0D9X"),k=e("SpJI"),v=e("hBP+"),D=e("QPFe"),y=e("RdGh"),w=e("D9vs"),S=e("DyZ0"),x=e("TY3c"),B=e("u+Cy"),I=e("8+8K"),M=e("YVZs"),T=e("F/j7"),_=e("/EOF"),C=e("ZKYL"),A=e("SZk1"),E=e("5eO6"),L=e("CghO"),R=e("EdU/"),P=e("JRKe"),W=e("Sq/J"),N=e("/Yna"),F=e("9BMt"),Y=e("kRch"),j=e("QkPN"),J=e("Irb3"),V=e("WJhm"),Z=e("Jp/u"),G=e("omvX"),q=e("GaVp"),K=e("0YeR"),H=e("2Fjd"),U=e("EjzE"),X=e("1ziU"),$=a.zb({encapsulation:2,styles:[],data:{}});function nn(n){return a.dc(0,[(n()(),a.Bb(0,0,null,null,18,"div",[["class","mb-sm"]],null,null,null,null,null)),(n()(),a.Bb(1,0,null,null,5,"button",[["nz-button",""]],[[2,"ant-btn",null],[2,"ant-btn-primary",null],[2,"ant-btn-dashed",null],[2,"ant-btn-link",null],[2,"ant-btn-danger",null],[2,"ant-btn-circle",null],[2,"ant-btn-round",null],[2,"ant-btn-lg",null],[2,"ant-btn-sm",null],[2,"ant-btn-dangerous",null],[2,"ant-btn-loading",null],[2,"ant-btn-background-ghost",null],[2,"ant-btn-block",null],[2,"ant-input-search-button",null]],[[null,"click"]],(function(n,l,e){var u=!0;return"click"===l&&(u=!1!==a.Qb(n,20).player.play()&&u),u}),J.c,J.a)),a.Ab(2,4734976,null,0,V.a,[a.l,a.E],null,null),a.Ab(3,212992,null,0,Z.b,[a.z,a.l,[2,Z.a],[2,G.a]],null,null),a.Ab(4,5947392,null,1,q.a,[a.l,a.h,a.E,K.b],null,null),a.Wb(603979776,1,{nzIconDirectiveElement:0}),(n()(),a.ac(-1,0,["Play"])),(n()(),a.Bb(7,0,null,null,5,"button",[["nz-button",""]],[[2,"ant-btn",null],[2,"ant-btn-primary",null],[2,"ant-btn-dashed",null],[2,"ant-btn-link",null],[2,"ant-btn-danger",null],[2,"ant-btn-circle",null],[2,"ant-btn-round",null],[2,"ant-btn-lg",null],[2,"ant-btn-sm",null],[2,"ant-btn-dangerous",null],[2,"ant-btn-loading",null],[2,"ant-btn-background-ghost",null],[2,"ant-btn-block",null],[2,"ant-input-search-button",null]],[[null,"click"]],(function(n,l,e){var u=!0;return"click"===l&&(u=!1!==a.Qb(n,20).player.pause()&&u),u}),J.c,J.a)),a.Ab(8,4734976,null,0,V.a,[a.l,a.E],null,null),a.Ab(9,212992,null,0,Z.b,[a.z,a.l,[2,Z.a],[2,G.a]],null,null),a.Ab(10,5947392,null,1,q.a,[a.l,a.h,a.E,K.b],null,null),a.Wb(603979776,2,{nzIconDirectiveElement:0}),(n()(),a.ac(-1,0,["Pause"])),(n()(),a.Bb(13,0,null,null,5,"button",[["nz-button",""]],[[2,"ant-btn",null],[2,"ant-btn-primary",null],[2,"ant-btn-dashed",null],[2,"ant-btn-link",null],[2,"ant-btn-danger",null],[2,"ant-btn-circle",null],[2,"ant-btn-round",null],[2,"ant-btn-lg",null],[2,"ant-btn-sm",null],[2,"ant-btn-dangerous",null],[2,"ant-btn-loading",null],[2,"ant-btn-background-ghost",null],[2,"ant-btn-block",null],[2,"ant-input-search-button",null]],[[null,"click"]],(function(n,l,e){var u=!0;return"click"===l&&(u=!1!==a.Qb(n,20).player.restart()&&u),u}),J.c,J.a)),a.Ab(14,4734976,null,0,V.a,[a.l,a.E],null,null),a.Ab(15,212992,null,0,Z.b,[a.z,a.l,[2,Z.a],[2,G.a]],null,null),a.Ab(16,5947392,null,1,q.a,[a.l,a.h,a.E,K.b],null,null),a.Wb(603979776,3,{nzIconDirectiveElement:0}),(n()(),a.ac(-1,0,["Restart"])),(n()(),a.Bb(19,0,null,null,1,"media",[["style","height: 200px"]],[[4,"display",null]],null,null,H.b,H.a)),a.Ab(20,4898816,[["media",4]],0,U.a,[a.l,a.E,X.a,a.z],{source:[0,"source"],options:[1,"options"]},null)],(function(n,l){var e=l.component;n(l,3,0),n(l,9,0),n(l,15,0),n(l,20,0,e.source,e.options)}),(function(n,l){n(l,1,1,[!0,"primary"===a.Qb(l,4).nzType,"dashed"===a.Qb(l,4).nzType,"link"===a.Qb(l,4).nzType,"danger"===a.Qb(l,4).nzType,"circle"===a.Qb(l,4).nzShape,"round"===a.Qb(l,4).nzShape,"large"===a.Qb(l,4).nzSize,"small"===a.Qb(l,4).nzSize,a.Qb(l,4).nzDanger,a.Qb(l,4).nzLoading,a.Qb(l,4).nzGhost,a.Qb(l,4).nzBlock,a.Qb(l,4).nzSearch]),n(l,7,1,[!0,"primary"===a.Qb(l,10).nzType,"dashed"===a.Qb(l,10).nzType,"link"===a.Qb(l,10).nzType,"danger"===a.Qb(l,10).nzType,"circle"===a.Qb(l,10).nzShape,"round"===a.Qb(l,10).nzShape,"large"===a.Qb(l,10).nzSize,"small"===a.Qb(l,10).nzSize,a.Qb(l,10).nzDanger,a.Qb(l,10).nzLoading,a.Qb(l,10).nzGhost,a.Qb(l,10).nzBlock,a.Qb(l,10).nzSearch]),n(l,13,1,[!0,"primary"===a.Qb(l,16).nzType,"dashed"===a.Qb(l,16).nzType,"link"===a.Qb(l,16).nzType,"danger"===a.Qb(l,16).nzType,"circle"===a.Qb(l,16).nzShape,"round"===a.Qb(l,16).nzShape,"large"===a.Qb(l,16).nzSize,"small"===a.Qb(l,16).nzSize,a.Qb(l,16).nzDanger,a.Qb(l,16).nzLoading,a.Qb(l,16).nzGhost,a.Qb(l,16).nzBlock,a.Qb(l,16).nzSearch]),n(l,19,0,"block")}))}var ln=a.xb("app-demo",u,(function(n){return a.dc(0,[(n()(),a.Bb(0,0,null,null,1,"app-demo",[],null,null,null,nn,$)),a.Ab(1,49152,null,0,u,[],null,null)],null,null)}),{},{},[]),en=e("iInd"),an=e("SVse"),un=e("66zS"),tn=e("phDe"),bn=e("1O3W"),on=e("rrJY"),cn=e("anqq"),sn=e("SCoL"),rn=e("/L1H"),dn=e("TSSN"),pn=e("PVvb"),mn=e("CCNn"),zn=e("y9FJ"),hn=e("CJNZ"),On=e("cUpR"),fn=e("iocW"),gn=e("rb8S"),Qn=e("Ezlx"),kn=e("JzE0"),vn=e("1+nf"),Dn=e("1wTm"),yn=a.zb({encapsulation:2,styles:[],data:{}});function wn(n){return a.dc(0,[],null,null)}var Sn=e("UKzi"),xn=e("DOs6"),Bn=e("uU7u"),In=a.zb({encapsulation:2,styles:[],data:{}});function Mn(n){return a.dc(0,[(n()(),a.Bb(0,0,null,null,1,"i",[["class","reuse-tab__op"],["nz-icon",""],["nzType","close"]],[[2,"anticon",null]],[[null,"click"]],(function(n,l,e){var a=!0;return"click"===l&&(a=!1!==n.component._close(e,n.parent.parent.context.index,!1)&&a),a}),null,null)),a.Ab(1,2703360,null,0,un.a,[a.l,un.d,a.E,[2,un.c]],{nzType:[0,"nzType"]},null)],(function(n,l){n(l,1,0,"close")}),(function(n,l){n(l,0,0,!0)}))}function Tn(n){return a.dc(0,[(n()(),a.Bb(0,0,null,null,3,"div",[["class","reuse-tab__name"]],[[1,"title",0]],[[null,"contextmenu"]],(function(n,l,e){var u=!0;return"contextmenu"===l&&(u=!1!==a.Qb(n,1)._onContextMenu(e)&&u),u}),null,null)),a.Ab(1,16384,null,0,gn.a,[Qn.a],{item:[0,"item"],customContextMenu:[1,"customContextMenu"]},null),(n()(),a.Bb(2,0,null,null,1,"span",[],[[2,"reuse-tab__name-width",null],[4,"max-width","px"]],null,null,null,null)),(n()(),a.ac(3,null,[" "," "])),(n()(),a.kb(16777216,null,null,1,null,Mn)),a.Ab(5,16384,null,0,an.n,[a.R,a.N],{ngIf:[0,"ngIf"]},null),(n()(),a.kb(0,null,null,0))],(function(n,l){n(l,1,0,l.parent.context.$implicit,l.component.customContextMenu),n(l,5,0,l.parent.context.$implicit.closable)}),(function(n,l){var e=l.component;n(l,0,0,l.parent.context.$implicit.title),n(l,2,0,e.tabMaxWidth,e.tabMaxWidth),n(l,3,0,l.parent.context.$implicit.title)}))}function _n(n){return a.dc(0,[(n()(),a.Bb(0,0,null,null,4,"nz-tab",[],null,[[null,"nzClick"]],(function(n,l,e){var a=!0;return"nzClick"===l&&(a=!1!==n.component._to(n.context.index)&&a),a}),kn.c,kn.a)),a.Ab(1,704512,[[1,4]],2,vn.b,[a.l,a.E],{nzTitle:[0,"nzTitle"]},{nzClick:"nzClick"}),a.Wb(603979776,2,{template:0}),a.Wb(603979776,3,{linkDirective:0}),(n()(),a.kb(0,[["titleTemplate",2]],1,0,null,Tn))],(function(n,l){n(l,1,0,a.Qb(l,4))}),null)}function Cn(n){return a.dc(2,[(n()(),a.Bb(0,0,null,null,4,"nz-tabset",[],[[2,"ant-tabs",null],[2,"ant-tabs-no-animation",null],[2,"ant-tabs-line",null],[2,"ant-tabs-card",null],[2,"ant-tabs-top",null],[2,"ant-tabs-bottom",null],[2,"ant-tabs-left",null],[2,"ant-tabs-right",null],[2,"ant-tabs-vertical",null],[2,"ant-tabs-large",null],[2,"ant-tabs-small",null]],null,null,kn.d,kn.b)),a.Ab(1,3850240,null,1,vn.d,[K.b,a.E,a.l,a.h,[2,en.n]],{nzTabBarExtraContent:[0,"nzTabBarExtraContent"],nzAnimated:[1,"nzAnimated"],nzTabBarGutter:[2,"nzTabBarGutter"],nzTabBarStyle:[3,"nzTabBarStyle"],nzType:[4,"nzType"],nzSelectedIndex:[5,"nzSelectedIndex"]},null),a.Wb(603979776,1,{listOfNzTabComponent:1}),(n()(),a.kb(16777216,null,null,1,null,_n)),a.Ab(4,278528,null,0,an.m,[a.R,a.N,a.s],{ngForOf:[0,"ngForOf"]},null),(n()(),a.Bb(5,0,null,null,1,"reuse-tab-context",[],null,[[null,"change"]],(function(n,l,e){var a=!0;return"change"===l&&(a=!1!==n.component.contextMenuChange(e)&&a),a}),wn,yn)),a.Ab(6,180224,null,0,Dn.a,[Qn.a],{i18n:[0,"i18n"]},{change:"change"})],(function(n,l){var e=l.component;n(l,1,0,e.tabBarExtraContent,!1,e.tabBarGutter,e.tabBarStyle,e.tabType,e.pos),n(l,4,0,e.list),n(l,6,0,e.i18n)}),(function(n,l){n(l,0,1,[!0,a.Qb(l,1).isAnimationDisabled,"line"===a.Qb(l,1).nzType,"card"===a.Qb(l,1).nzType,"top"===a.Qb(l,1).nzTabPosition,"bottom"===a.Qb(l,1).nzTabPosition,"left"===a.Qb(l,1).nzTabPosition,"right"===a.Qb(l,1).nzTabPosition,"left"===a.Qb(l,1).nzTabPosition||"right"===a.Qb(l,1).nzTabPosition,"large"===a.Qb(l,1).nzSize,"small"===a.Qb(l,1).nzSize])}))}var An=e("JXeA"),En=a.zb({encapsulation:2,styles:[],data:{}});function Ln(n){return a.dc(0,[(n()(),a.Bb(0,0,null,null,16,"div",[["class","alain-default__header"]],null,null,null,null,null)),(n()(),a.Bb(1,0,null,null,5,"div",[["class","alain-default__header-logo"]],null,null,null,null,null)),(n()(),a.Bb(2,0,null,null,4,"a",[["class","alain-default__header-logo-link"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(n,l,e){var u=!0;return"click"===l&&(u=!1!==a.Qb(n,3).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&u),u}),null,null)),a.Ab(3,671744,null,0,en.q,[en.n,en.a,an.k],{routerLink:[0,"routerLink"]},null),a.Rb(4,1),(n()(),a.Bb(5,0,null,null,0,"img",[["class","alain-default__header-logo-expanded"],["src","./assets/img/logo-full.svg"],["style","max-height:40px;"]],[[8,"alt",0]],null,null,null,null)),(n()(),a.Bb(6,0,null,null,0,"img",[["class","alain-default__header-logo-collapsed"],["src","./assets/img/logo.svg"],["style","max-height:30px;"]],[[8,"alt",0]],null,null,null,null)),(n()(),a.Bb(7,0,null,null,9,"div",[["class","alain-default__nav-wrap"]],null,null,null,null,null)),(n()(),a.Bb(8,0,null,null,8,"ul",[["class","alain-default__nav"]],null,null,null,null,null)),(n()(),a.Bb(9,0,null,null,4,"li",[],null,null,null,null,null)),(n()(),a.Bb(10,0,null,null,3,"div",[["class","alain-default__nav-item"]],null,[[null,"click"]],(function(n,l,e){var a=!0;return"click"===l&&(a=!1!==n.component.toggleCollapsedSideabar()&&a),a}),null,null)),(n()(),a.Bb(11,0,null,null,2,"i",[["nz-icon",""]],[[2,"anticon",null]],null,null,null,null)),a.Ab(12,4734976,null,0,V.a,[a.l,a.E],null,null),a.Ab(13,2703360,null,0,un.a,[a.l,un.d,a.E,[2,un.c]],{nzType:[0,"nzType"]},null),(n()(),a.Bb(14,0,null,null,2,"li",[],null,null,null,null,null)),(n()(),a.Bb(15,0,null,null,1,"div",[["class","alain-default__nav-item"]],null,[[null,"click"]],(function(n,l,e){var a=!0;return"click"===l&&(a=!1!==n.component.toggleLang()&&a),a}),null,null)),(n()(),a.ac(16,null,[" "," "])),(n()(),a.Bb(17,0,null,null,44,"div",[["class","alain-default__aside"]],null,null,null,null,null)),(n()(),a.Bb(18,0,null,null,43,"div",[["class","alain-default__aside-inner"]],null,null,null,null,null)),(n()(),a.Bb(19,16777216,null,null,8,"div",[["class","alain-default__aside-user"],["nz-dropdown",""],["nzTrigger","click"]],[[1,"disabled",0],[2,"ant-dropdown-trigger",null]],null,null,null,null)),a.Ab(20,4931584,null,0,tn.c,[a.l,bn.d,a.R],{nzDropdownMenu:[0,"nzDropdownMenu"],nzTrigger:[1,"nzTrigger"]},null),(n()(),a.Bb(21,0,null,null,1,"nz-avatar",[["class","alain-default__aside-user-avatar"],["nzIcon","anticon anticon-user"]],[[2,"ant-avatar",null],[2,"ant-avatar-lg",null],[2,"ant-avatar-sm",null],[2,"ant-avatar-square",null],[2,"ant-avatar-circle",null],[2,"ant-avatar-icon",null],[2,"ant-avatar-image",null],[4,"width",null],[4,"height",null],[4,"line-height",null],[4,"font-size",null]],null,null,on.b,on.a)),a.Ab(22,573440,null,0,cn.a,[K.b,a.l,a.h,sn.a],{nzSize:[0,"nzSize"],nzIcon:[1,"nzIcon"]},null),(n()(),a.Bb(23,0,null,null,4,"div",[["class","alain-default__aside-user-info"]],null,null,null,null,null)),(n()(),a.Bb(24,0,null,null,1,"strong",[],null,null,null,null,null)),(n()(),a.ac(25,null,["",""])),(n()(),a.Bb(26,0,null,null,1,"p",[["class","text-truncate mb0"]],null,null,null,null,null)),(n()(),a.ac(27,null,["",""])),(n()(),a.Bb(28,16777216,null,null,31,"nz-dropdown-menu",[],null,null,null,R.c,R.b)),a.Vb(512,null,rn.c,rn.c,[]),a.Ab(30,1097728,[["userMenu",4]],0,tn.f,[a.h,a.l,a.E,a.R,rn.c,[8,null]],null,null),a.Vb(256,null,rn.e,!0,[]),(n()(),a.Bb(32,0,null,0,27,"ul",[["nz-menu",""]],[[2,"ant-dropdown-menu",null],[2,"ant-dropdown-menu-root",null],[2,"ant-dropdown-menu-light",null],[2,"ant-dropdown-menu-dark",null],[2,"ant-dropdown-menu-vertical",null],[2,"ant-dropdown-menu-horizontal",null],[2,"ant-dropdown-menu-inline",null],[2,"ant-dropdown-menu-inline-collapsed",null],[2,"ant-menu",null],[2,"ant-menu-root",null],[2,"ant-menu-light",null],[2,"ant-menu-dark",null],[2,"ant-menu-vertical",null],[2,"ant-menu-horizontal",null],[2,"ant-menu-inline",null],[2,"ant-menu-inline-collapsed",null]],null,null,null,null)),a.Vb(512,null,rn.k,rn.c,[]),a.Vb(1024,null,rn.c,rn.d,[[3,rn.c],rn.k]),a.Vb(1024,null,rn.e,rn.a,[[3,rn.e]]),a.Ab(36,1785856,null,2,rn.f,[rn.c,rn.e,a.h],null,null),a.Wb(603979776,1,{listOfNzMenuItemDirective:1}),a.Wb(603979776,2,{listOfNzSubMenuComponent:1}),(n()(),a.Bb(39,0,null,null,6,"li",[["nz-menu-item",""]],[[2,"ant-dropdown-menu-item",null],[2,"ant-dropdown-menu-item-selected",null],[2,"ant-dropdown-menu-item-disabled",null],[2,"ant-menu-item",null],[2,"ant-menu-item-selected",null],[2,"ant-menu-item-disabled",null],[4,"paddingLeft","px"]],[[null,"click"]],(function(n,l,e){var u=!0,t=n.component;return"click"===l&&(u=!1!==a.Qb(n,41).clickMenuItem(e)&&u),"click"===l&&(u=!1!==t.msgSrv.success("profile")&&u),u}),null,null)),a.Ab(40,4734976,null,0,V.a,[a.l,a.E],null,null),a.Ab(41,1785856,[[1,4]],2,rn.i,[rn.c,a.h,[2,rn.p],rn.e,[2,en.o],[2,en.q],[2,en.n]],null,null),a.Wb(603979776,3,{listOfRouterLink:1}),a.Wb(603979776,4,{listOfRouterLinkWithHref:1}),(n()(),a.ac(44,null,["",""])),a.Sb(131072,dn.k,[dn.l,a.h]),(n()(),a.Bb(46,0,null,null,6,"li",[["nz-menu-item",""]],[[2,"ant-dropdown-menu-item",null],[2,"ant-dropdown-menu-item-selected",null],[2,"ant-dropdown-menu-item-disabled",null],[2,"ant-menu-item",null],[2,"ant-menu-item-selected",null],[2,"ant-menu-item-disabled",null],[4,"paddingLeft","px"]],[[null,"click"]],(function(n,l,e){var u=!0,t=n.component;return"click"===l&&(u=!1!==a.Qb(n,48).clickMenuItem(e)&&u),"click"===l&&(u=!1!==t.msgSrv.success("settings")&&u),u}),null,null)),a.Ab(47,4734976,null,0,V.a,[a.l,a.E],null,null),a.Ab(48,1785856,[[1,4]],2,rn.i,[rn.c,a.h,[2,rn.p],rn.e,[2,en.o],[2,en.q],[2,en.n]],null,null),a.Wb(603979776,5,{listOfRouterLink:1}),a.Wb(603979776,6,{listOfRouterLinkWithHref:1}),(n()(),a.ac(51,null,["",""])),a.Sb(131072,dn.k,[dn.l,a.h]),(n()(),a.Bb(53,0,null,null,6,"li",[["nz-menu-item",""]],[[2,"ant-dropdown-menu-item",null],[2,"ant-dropdown-menu-item-selected",null],[2,"ant-dropdown-menu-item-disabled",null],[2,"ant-menu-item",null],[2,"ant-menu-item-selected",null],[2,"ant-menu-item-disabled",null],[4,"paddingLeft","px"]],[[null,"click"]],(function(n,l,e){var u=!0,t=n.component;return"click"===l&&(u=!1!==a.Qb(n,55).clickMenuItem(e)&&u),"click"===l&&(u=!1!==t.msgSrv.success("logout")&&u),u}),null,null)),a.Ab(54,4734976,null,0,V.a,[a.l,a.E],null,null),a.Ab(55,1785856,[[1,4]],2,rn.i,[rn.c,a.h,[2,rn.p],rn.e,[2,en.o],[2,en.q],[2,en.n]],null,null),a.Wb(603979776,7,{listOfRouterLink:1}),a.Wb(603979776,8,{listOfRouterLinkWithHref:1}),(n()(),a.ac(58,null,["",""])),a.Sb(131072,dn.k,[dn.l,a.h]),(n()(),a.Bb(60,0,null,null,1,"sidebar-nav",[["class","d-block py-lg"]],null,[[null,"click"],["document","click"]],(function(n,l,e){var u=!0;return"click"===l&&(u=!1!==a.Qb(n,61)._click()&&u),"document:click"===l&&(u=!1!==a.Qb(n,61)._docClick()&&u),u}),pn.b,pn.a)),a.Ab(61,245760,null,0,mn.a,[zn.a,hn.a,en.n,a.E,a.h,a.z,On.b,an.e,fn.a],null,null),(n()(),a.Bb(62,0,null,null,5,"section",[["class","alain-default__content"]],null,null,null,null,null)),(n()(),a.Bb(63,0,null,null,2,"reuse-tab",[],[[2,"reuse-tab",null],[2,"reuse-tab__line",null],[2,"reuse-tab__card",null]],null,null,Cn,In)),a.Vb(4608,null,Qn.a,Qn.a,[bn.d]),a.Ab(65,770048,null,0,Sn.a,[xn.a,a.h,en.n,en.a,[2,Bn.a],an.e],{mode:[0,"mode"],customContextMenu:[1,"customContextMenu"]},null),(n()(),a.Bb(66,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),a.Ab(67,212992,null,0,en.s,[en.b,a.R,a.j,[8,null],a.h],null,null)],(function(n,l){var e=l.component,u=n(l,4,0,"/dev");n(l,3,0,u),n(l,13,0,a.Ib(1,"menu-",e.settings.layout.collapsed?"unfold":"fold","")),n(l,20,0,a.Qb(l,30),"click"),n(l,22,0,"large","anticon anticon-user"),n(l,36,0),n(l,41,0),n(l,48,0),n(l,55,0),n(l,61,0),n(l,65,0,2,e.customContextMenu),n(l,67,0)}),(function(n,l){var e=l.component;n(l,2,0,a.Qb(l,3).target,a.Qb(l,3).href),n(l,5,0,a.Ib(1,"",e.settings.app.name,"")),n(l,6,0,a.Ib(1,"",e.settings.app.name,"")),n(l,11,0,!0),n(l,16,0,e.lang),n(l,19,0,a.Qb(l,20).nzDisabled?"":null,!0),n(l,21,1,[!0,"large"===a.Qb(l,22).nzSize,"small"===a.Qb(l,22).nzSize,"square"===a.Qb(l,22).nzShape,"circle"===a.Qb(l,22).nzShape,a.Qb(l,22).nzIcon,a.Qb(l,22).hasSrc,a.Qb(l,22).customSize,a.Qb(l,22).customSize,a.Qb(l,22).customSize,a.Qb(l,22).hasIcon&&a.Qb(l,22).customSize?a.Qb(l,22).nzSize/2+"px":null]),n(l,25,0,e.settings.user.name),n(l,27,0,e.settings.user.email),n(l,32,1,[a.Qb(l,36).isMenuInsideDropDown,a.Qb(l,36).isMenuInsideDropDown,a.Qb(l,36).isMenuInsideDropDown&&"light"===a.Qb(l,36).nzTheme,a.Qb(l,36).isMenuInsideDropDown&&"dark"===a.Qb(l,36).nzTheme,a.Qb(l,36).isMenuInsideDropDown&&"vertical"===a.Qb(l,36).actualMode,a.Qb(l,36).isMenuInsideDropDown&&"horizontal"===a.Qb(l,36).actualMode,a.Qb(l,36).isMenuInsideDropDown&&"inline"===a.Qb(l,36).actualMode,a.Qb(l,36).isMenuInsideDropDown&&a.Qb(l,36).nzInlineCollapsed,!a.Qb(l,36).isMenuInsideDropDown,!a.Qb(l,36).isMenuInsideDropDown,!a.Qb(l,36).isMenuInsideDropDown&&"light"===a.Qb(l,36).nzTheme,!a.Qb(l,36).isMenuInsideDropDown&&"dark"===a.Qb(l,36).nzTheme,!a.Qb(l,36).isMenuInsideDropDown&&"vertical"===a.Qb(l,36).actualMode,!a.Qb(l,36).isMenuInsideDropDown&&"horizontal"===a.Qb(l,36).actualMode,!a.Qb(l,36).isMenuInsideDropDown&&"inline"===a.Qb(l,36).actualMode,!a.Qb(l,36).isMenuInsideDropDown&&a.Qb(l,36).nzInlineCollapsed]),n(l,39,0,a.Qb(l,41).isMenuInsideDropDown,a.Qb(l,41).isMenuInsideDropDown&&a.Qb(l,41).nzSelected,a.Qb(l,41).isMenuInsideDropDown&&a.Qb(l,41).nzDisabled,!a.Qb(l,41).isMenuInsideDropDown,!a.Qb(l,41).isMenuInsideDropDown&&a.Qb(l,41).nzSelected,!a.Qb(l,41).isMenuInsideDropDown&&a.Qb(l,41).nzDisabled,a.Qb(l,41).nzPaddingLeft||a.Qb(l,41).inlinePaddingLeft),n(l,44,0,a.bc(l,44,0,a.Qb(l,45).transform("profile"))),n(l,46,0,a.Qb(l,48).isMenuInsideDropDown,a.Qb(l,48).isMenuInsideDropDown&&a.Qb(l,48).nzSelected,a.Qb(l,48).isMenuInsideDropDown&&a.Qb(l,48).nzDisabled,!a.Qb(l,48).isMenuInsideDropDown,!a.Qb(l,48).isMenuInsideDropDown&&a.Qb(l,48).nzSelected,!a.Qb(l,48).isMenuInsideDropDown&&a.Qb(l,48).nzDisabled,a.Qb(l,48).nzPaddingLeft||a.Qb(l,48).inlinePaddingLeft),n(l,51,0,a.bc(l,51,0,a.Qb(l,52).transform("settings"))),n(l,53,0,a.Qb(l,55).isMenuInsideDropDown,a.Qb(l,55).isMenuInsideDropDown&&a.Qb(l,55).nzSelected,a.Qb(l,55).isMenuInsideDropDown&&a.Qb(l,55).nzDisabled,!a.Qb(l,55).isMenuInsideDropDown,!a.Qb(l,55).isMenuInsideDropDown&&a.Qb(l,55).nzSelected,!a.Qb(l,55).isMenuInsideDropDown&&a.Qb(l,55).nzDisabled,a.Qb(l,55).nzPaddingLeft||a.Qb(l,55).inlinePaddingLeft),n(l,58,0,a.bc(l,58,0,a.Qb(l,59).transform("logout"))),n(l,63,0,!0,"line"===a.Qb(l,65).tabType,"card"===a.Qb(l,65).tabType)}))}var Rn=a.xb("dev-layout",o,(function(n){return a.dc(0,[(n()(),a.Bb(0,0,null,null,1,"dev-layout",[],[[2,"alain-default",null],[2,"alain-default__fixed",null],[2,"alain-default__boxed",null],[2,"alain-default__collapsed",null]],null,null,Ln,En)),a.Ab(1,114688,null,0,o,[un.d,zn.a,hn.a,An.d,Bn.a],null,null)],(function(n,l){n(l,1,0)}),(function(n,l){n(l,0,0,!0,a.Qb(l,1).isFixed,a.Qb(l,1).isBoxed,a.Qb(l,1).isCollapsed)}))}),{},{},[]),Pn=e("IR+z"),Wn=e("ByMC"),Nn=e("GLyH"),Fn=e("ppRt"),Yn=a.zb({encapsulation:2,styles:[],data:{}});function jn(n){return a.dc(0,[(n()(),a.Bb(0,0,null,null,1,"page-header",[],null,null,null,Pn.b,Pn.a)),a.Ab(1,4964352,null,0,Wn.a,[hn.a,a.E,en.n,zn.a,[2,Bn.a],[2,Nn.a],[2,xn.a],a.h,Fn.a],{autoBreadcrumb:[0,"autoBreadcrumb"]},null),(n()(),a.ac(-1,null,[" home "]))],(function(n,l){n(l,1,0,!1)}),null)}var Jn=a.xb("dev-home",t,(function(n){return a.dc(0,[(n()(),a.Bb(0,0,null,null,1,"dev-home",[],null,null,null,jn,Yn)),a.Ab(1,49152,null,0,t,[],null,null)],null,null)}),{},{},[]),Vn=a.zb({encapsulation:2,styles:[],data:{}});function Zn(n){return a.dc(0,[(n()(),a.Bb(0,0,null,null,1,"page-header",[],null,null,null,Pn.b,Pn.a)),a.Ab(1,4964352,null,0,Wn.a,[hn.a,a.E,en.n,zn.a,[2,Bn.a],[2,Nn.a],[2,xn.a],a.h,Fn.a],null,null),(n()(),a.Bb(2,0,null,null,2,"p",[],null,null,null,null,null)),(n()(),a.ac(3,null,["now: ",""])),a.Sb(0,an.h,[]),(n()(),a.ac(5,null,[" page: "," "])),a.Sb(0,an.h,[])],(function(n,l){n(l,1,0)}),(function(n,l){var e=l.component;n(l,3,0,a.bc(l,3,0,a.Qb(l,4).transform(e.now))),n(l,5,0,a.bc(l,5,0,a.Qb(l,6).transform(e.router.url)))}))}var Gn=a.xb("dev-page",c,(function(n){return a.dc(0,[(n()(),a.Bb(0,0,null,null,1,"dev-page",[],null,null,null,Zn,Vn)),a.Ab(1,114688,null,0,c,[en.a],null,null)],(function(n,l){n(l,1,0)}),null)}),{},{},[]),qn=e("s7LF"),Kn=e("9gLZ"),Hn=e("sAdM"),Un=e("ekcc"),Xn=e("9b/N"),$n=e("NFMk"),nl=e("pQl/"),ll=e("f/Zj"),el=e("vZwM"),al=e("g+Fz"),ul=e("Ybye"),tl=e("10Ig"),bl=e("iC8E"),il=e("1z/I"),ol=e("7KAL"),cl=e("Rgb0"),sl=e("+YBk"),rl=e("9J0+"),dl=e("vIiB"),pl=e("dZIx"),ml=e("PgQK"),zl=e("W0Pu"),hl=e("px0D"),Ol=e("r19J"),fl=e("YdS3"),gl=e("mW00"),Ql=e("JidZ"),kl=e("jQCg"),vl=e("3ZFI"),Dl=e("YEUz"),yl=e("CYS+"),wl=e("YRt3"),Sl=e("lAiz"),xl=e("HeVh"),Bl=e("tYkK"),Il=e("wf2+"),Ml=e("eCGT"),Tl=e("JK0T"),_l=e("Rki0"),Cl=e("kS4m"),Al=e("W4B1"),El=e("NDed"),Ll=e("jTf7"),Rl=e("ozKM"),Pl=e("DQmg"),Wl=e("XFzh"),Nl=e("HhpN"),Fl=e("SN7N"),Yl=e("fwnu"),jl=e("RVNi"),Jl=e("gaRz"),Vl=e("XYAa"),Zl=e("sbFH"),Gl=e("EWQH"),ql=e("YQXl"),Kl=e("k5cy"),Hl=e("hS58"),Ul=e("aq9g"),Xl=e("SHEi"),$l=e("vZsH"),ne=e("fb/r"),le=e("haRT"),ee=e("EcpC"),ae=e("SBNi"),ue=e("1Cev"),te=e("2bDw"),be=e("Ogil"),ie=e("34DM"),oe=e("+ndR"),ce=e("G1y0"),se=e("MNSj"),re=e("CGSU"),de=e("ekmu"),pe=e("5CFV"),me=e("7Dpl"),ze=e("v1Dh"),he=e("N2O2"),Oe=e("rJp6"),fe=e("l/Xz"),ge=e("sRo1"),Qe=e("BQzg"),ke=e("zTFG"),ve=e("vjj7"),De=e("ev4S"),ye=e("GTZx"),we=e("vrge"),Se=e("nMAq"),xe=e("5PV9"),Be=e("nIn3"),Ie=e("xo13"),Me=e("CnVV"),Te=e("5p8d"),_e=e("qYUw"),Ce=e("JpOc"),Ae=e("ye40"),Ee=e("VRoF"),Le=e("Uto7"),Re=e("/p+U"),Pe=e("qcxY"),We=e("T+Em"),Ne=e("WNQ9"),Fe=e("pv0S"),Ye=e("IYs4"),je=e("wQFA"),Je=e("FPpa"),Ve=e("5Izy"),Ze=e("z+yo"),Ge=e("76lH"),qe=e("Fg/6"),Ke=e("kzz5"),He=e("YgDb"),Ue=e("Wl7g"),Xe=e("+TYD"),$e=e("PCNd"),na=a.yb(s,[],(function(n){return a.Nb([a.Ob(512,a.j,a.bb,[[8,[r.a,d.b,d.a,p.a,m.a,z.a,h.a,O.a,f.a,g.a,Q.a,k.a,v.a,D.a,y.a,w.a,S.a,x.a,B.a,I.a,M.a,T.a,_.a,C.a,A.a,E.a,L.a,R.a,P.a,W.a,N.a,F.a,Y.a,j.a,ln,Rn,Jn,Gn]],[3,a.j],a.x]),a.Ob(4608,an.p,an.o,[a.u]),a.Ob(4608,qn.x,qn.x,[]),a.Ob(4608,qn.e,qn.e,[]),a.Ob(4608,bn.d,bn.d,[bn.k,bn.f,a.j,bn.i,bn.g,a.r,a.z,an.e,Kn.b,[2,an.j]]),a.Ob(5120,bn.l,bn.m,[bn.d]),a.Ob(5120,Hn.b,Hn.a,[[3,Hn.b],Un.a]),a.Ob(4608,Xn.c,Xn.c,[]),a.Ob(135680,$n.i,$n.i,[bn.d,a.r,[3,$n.i]]),a.Ob(4608,nl.d,nl.d,[a.z]),a.Ob(4608,ll.c,ll.c,[]),a.Ob(5120,el.e,el.g,[an.e,[3,el.e]]),a.Ob(4608,al.d,al.d,[an.e]),a.Ob(4608,ul.a,ul.a,[$n.i]),a.Ob(4608,tl.a,tl.a,[bl.d]),a.Ob(1073742336,an.c,an.c,[]),a.Ob(1073742336,qn.w,qn.w,[]),a.Ob(1073742336,qn.j,qn.j,[]),a.Ob(1073742336,en.r,en.r,[[2,en.w],[2,en.n]]),a.Ob(1073742336,qn.t,qn.t,[]),a.Ob(1073742336,Kn.a,Kn.a,[]),a.Ob(1073742336,il.f,il.f,[]),a.Ob(1073742336,sn.b,sn.b,[]),a.Ob(1073742336,ol.c,ol.c,[]),a.Ob(1073742336,ol.g,ol.g,[]),a.Ob(1073742336,bn.h,bn.h,[]),a.Ob(1073742336,cl.b,cl.b,[]),a.Ob(1073742336,sl.a,sl.a,[]),a.Ob(1073742336,rl.a,rl.a,[un.d]),a.Ob(1073742336,dl.a,dl.a,[]),a.Ob(1073742336,pl.a,pl.a,[]),a.Ob(1073742336,ml.a,ml.a,[]),a.Ob(1073742336,zl.b,zl.b,[]),a.Ob(1073742336,un.b,un.b,[]),a.Ob(1073742336,hl.f,hl.f,[]),a.Ob(1073742336,Ol.b,Ol.b,[]),a.Ob(1073742336,Z.c,Z.c,[]),a.Ob(1073742336,V.b,V.b,[]),a.Ob(1073742336,q.c,q.c,[]),a.Ob(1073742336,fl.d,fl.d,[]),a.Ob(1073742336,gl.d,gl.d,[]),a.Ob(1073742336,Ql.a,Ql.a,[]),a.Ob(1073742336,kl.f,kl.f,[]),a.Ob(1073742336,vl.b,vl.b,[]),a.Ob(1073742336,Xn.d,Xn.d,[]),a.Ob(1073742336,Dl.a,Dl.a,[Dl.d]),a.Ob(1073742336,yl.c,yl.c,[]),a.Ob(1073742336,wl.b,wl.b,[]),a.Ob(1073742336,Sl.a,Sl.a,[]),a.Ob(1073742336,Sl.c,Sl.c,[]),a.Ob(1073742336,xl.b,xl.b,[]),a.Ob(1073742336,Bl.b,Bl.b,[]),a.Ob(1073742336,Il.e,Il.e,[]),a.Ob(1073742336,Ml.b,Ml.b,[]),a.Ob(1073742336,Tl.b,Tl.b,[]),a.Ob(1073742336,_l.a,_l.a,[]),a.Ob(1073742336,$n.g,$n.g,[]),a.Ob(1073742336,Cl.d,Cl.d,[]),a.Ob(1073742336,Al.b,Al.b,[]),a.Ob(1073742336,El.c,El.c,[]),a.Ob(1073742336,Ll.j,Ll.j,[]),a.Ob(1073742336,Rl.b,Rl.b,[]),a.Ob(1073742336,Pl.b,Pl.b,[]),a.Ob(1073742336,Wl.b,Wl.b,[]),a.Ob(1073742336,Nl.c,Nl.c,[]),a.Ob(1073742336,Fl.c,Fl.c,[]),a.Ob(1073742336,Yl.b,Yl.b,[]),a.Ob(1073742336,jl.b,jl.b,[]),a.Ob(1073742336,Jl.d,Jl.d,[]),a.Ob(1073742336,Vl.a,Vl.a,[]),a.Ob(1073742336,Zl.a,Zl.a,[]),a.Ob(1073742336,cn.b,cn.b,[]),a.Ob(1073742336,Gl.a,Gl.a,[]),a.Ob(1073742336,nl.c,nl.c,[]),a.Ob(1073742336,ql.a,ql.a,[]),a.Ob(1073742336,Kl.a,Kl.a,[]),a.Ob(1073742336,Hl.a,Hl.a,[]),a.Ob(1073742336,Ul.a,Ul.a,[]),a.Ob(1073742336,Xl.c,Xl.c,[]),a.Ob(1073742336,rn.j,rn.j,[]),a.Ob(1073742336,tn.a,tn.a,[]),a.Ob(1073742336,tn.d,tn.d,[]),a.Ob(1073742336,$l.d,$l.d,[]),a.Ob(1073742336,ll.b,ll.b,[]),a.Ob(1073742336,ne.b,ne.b,[]),a.Ob(1073742336,le.m,le.m,[]),a.Ob(1073742336,ee.b,ee.b,[]),a.Ob(1073742336,ae.b,ae.b,[]),a.Ob(1073742336,ue.a,ue.a,[]),a.Ob(1073742336,te.a,te.a,[]),a.Ob(1073742336,be.a,be.a,[]),a.Ob(1073742336,ie.a,ie.a,[]),a.Ob(1073742336,oe.a,oe.a,[]),a.Ob(1073742336,ce.a,ce.a,[]),a.Ob(1073742336,se.a,se.a,[]),a.Ob(1073742336,re.a,re.a,[]),a.Ob(1073742336,de.a,de.a,[]),a.Ob(1073742336,pe.a,pe.a,[]),a.Ob(1073742336,me.a,me.a,[]),a.Ob(1073742336,ze.b,ze.b,[]),a.Ob(1073742336,he.f,he.f,[]),a.Ob(1073742336,Oe.c,Oe.c,[]),a.Ob(1073742336,fe.a,fe.a,[]),a.Ob(1073742336,ge.a,ge.a,[]),a.Ob(1073742336,Qe.a,Qe.a,[]),a.Ob(1073742336,ke.m,ke.m,[]),a.Ob(1073742336,vn.f,vn.f,[]),a.Ob(1073742336,ve.a,ve.a,[]),a.Ob(1073742336,De.a,De.a,[]),a.Ob(1073742336,ye.a,ye.a,[]),a.Ob(1073742336,we.a,we.a,[]),a.Ob(1073742336,Se.a,Se.a,[]),a.Ob(1073742336,xe.a,xe.a,[]),a.Ob(1073742336,Be.a,Be.a,[]),a.Ob(1073742336,Ie.a,Ie.a,[]),a.Ob(1073742336,Me.a,Me.a,[]),a.Ob(1073742336,Te.a,Te.a,[]),a.Ob(1073742336,_e.a,_e.a,[]),a.Ob(1073742336,Ce.a,Ce.a,[]),a.Ob(1073742336,Ae.a,Ae.a,[]),a.Ob(1073742336,Ee.a,Ee.a,[]),a.Ob(1073742336,Le.a,Le.a,[]),a.Ob(1073742336,Re.a,Re.a,[]),a.Ob(1073742336,Pe.a,Pe.a,[]),a.Ob(1073742336,We.a,We.a,[]),a.Ob(1073742336,Ne.a,Ne.a,[]),a.Ob(1073742336,Fe.a,Fe.a,[]),a.Ob(1073742336,An.e,An.e,[]),a.Ob(1073742336,An.c,An.c,[]),a.Ob(1073742336,Ye.b,Ye.b,[]),a.Ob(1073742336,je.d,je.d,[]),a.Ob(1073742336,Je.c,Je.c,[]),a.Ob(1073742336,Ve.b,Ve.b,[]),a.Ob(1073742336,bl.e,bl.e,[]),a.Ob(1073742336,bl.b,bl.b,[]),a.Ob(1073742336,Ze.c,Ze.c,[]),a.Ob(1073742336,Ge.a,Ge.a,[]),a.Ob(1073742336,dn.i,dn.i,[]),a.Ob(1073742336,qe.b,qe.b,[]),a.Ob(1073742336,Ke.a,Ke.a,[]),a.Ob(1073742336,al.c,al.c,[]),a.Ob(1073742336,He.c,He.c,[]),a.Ob(1073742336,Ue.d,Ue.d,[]),a.Ob(1073742336,Ue.h,Ue.h,[]),a.Ob(1073742336,Ue.b,Ue.b,[]),a.Ob(1073742336,Ue.j,Ue.j,[]),a.Ob(1073742336,Ue.l,Ue.l,[]),a.Ob(1073742336,Ue.p,Ue.p,[]),a.Ob(1073742336,Ue.t,Ue.t,[]),a.Ob(1073742336,Xe.a,Xe.a,[]),a.Ob(1073742336,$e.a,$e.a,[]),a.Ob(1073742336,s,s,[]),a.Ob(256,Un.a,sl.b,[]),a.Ob(1024,en.l,(function(){return[[{path:"demo",component:u},{path:"",component:o,children:[{path:"",component:t},{path:"l1",component:c},{path:"l2",component:c},{path:"l3",component:c},{path:"l4",component:c},{path:"l5",component:c},{path:"l6",component:c},{path:"l7",component:c},{path:"l8",component:c},{path:"login",component:c}]}]]}),[])])}))}}]);