(this.webpackJsonpcryptodash=this.webpackJsonpcryptodash||[]).push([[0],{24:function(e,t,n){e.exports=n(40)},29:function(e,t,n){},30:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(7),i=n.n(o),c=(n(29),n(30),n(8)),l=n(14),u=n(5),s=n(3),f=n.n(s),v=n(6),m=n(17),d=n(18),p=n(21),b=n(22),h=n(4),C=n.n(h),g=n(9),y=n.n(g),E=n(33),x=a.a.createContext(),O=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(e){var r;return Object(m.a)(this,n),(r=t.call(this,e)).componentDidMount=function(){r.fetchCoins(),r.fetchPrices(),r.fetchHistorical()},r.fetchCoins=Object(v.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.coinList();case 2:t=e.sent.Data,r.setState({coinList:t});case 4:case"end":return e.stop()}}),e)}))),r.fetchPrices=Object(v.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r.state.firstVisit){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,r.prices();case 4:t=(t=e.sent).filter((function(e){return Object.keys(e).length})),r.setState({prices:t});case 7:case"end":return e.stop()}}),e)}))),r.fetchHistorical=Object(v.a)(f.a.mark((function e(){var t,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r.state.firstVisit){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,r.historical();case 4:t=e.sent,n=[{name:r.state.currentFavorite,data:t.map((function(e,t){return[y()().subtract(Object(u.a)({},r.state.timeInterval,10-t)).valueOf(),e.USD]}))}],r.setState({historical:n});case 7:case"end":return e.stop()}}),e)}))),r.prices=Object(v.a)(f.a.mark((function e(){var t,n,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=[],n=0;case 2:if(!(n<r.state.favorites.length)){e.next=16;break}return e.prev=3,e.next=6,E.priceFull(r.state.favorites[n],"USD");case 6:a=e.sent,t.push(a),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),console.warn("Fetch price error",e.t0);case 13:n++,e.next=2;break;case 16:return e.abrupt("return",t);case 17:case"end":return e.stop()}}),e,null,[[3,10]])}))),r.historical=function(){for(var e=[],t=10;t>0;t--)e.push(E.priceHistorical(r.state.currentFavorite,["USD"],y()().subtract(Object(u.a)({},r.state.timeInterval,t)).toDate()));return Promise.all(e)},r.addCoin=function(e){var t=Object(l.a)(r.state.favorites);t.length<10&&(t.push(e),r.setState({favorites:t}))},r.removeCoin=function(e){var t=Object(l.a)(r.state.favorites);r.setState({favorites:C.a.pull(t,e)})},r.isInFavorites=function(e){return C.a.includes(r.state.favorites,e)},r.confirmFavorites=function(){var e=r.state.favorites[0];r.setState({firstVisit:!1,page:"dashboard",currentFavorite:e,prices:null,historical:null},(function(){r.fetchPrices(),r.fetchCoins(),r.fetchHistorical()})),localStorage.setItem("cryptoDash",JSON.stringify({favorites:r.state.favorites,currentFavorite:e}))},r.setCurrentFavorite=function(e){r.setState({currentFavorite:e,historical:null},r.fetchHistorical),localStorage.setItem("cryptoDash",JSON.stringify(Object(c.a)({},JSON.parse(localStorage.getItem("cryptoDash")),{currentFavorite:e})))},r.setPage=function(e){return r.setState({page:e})},r.setFilteredCoins=function(e){return r.setState({filteredCoins:e})},r.changeChartSelect=function(e){r.setState({timeInterval:e,historical:null},r.fetchHistorical)},r.state=Object(c.a)({page:"dashboard",favorites:["BTC","ETH","XMR","DOGE"],timeInterval:"months"},r.savedSettings(),{setPage:r.setPage,addCoin:r.addCoin,removeCoin:r.removeCoin,isInFavorites:r.isInFavorites,confirmFavorites:r.confirmFavorites,setCurrentFavorite:r.setCurrentFavorite,setFilteredCoins:r.setFilteredCoins,changeChartSelect:r.changeChartSelect}),r}return Object(d.a)(n,[{key:"savedSettings",value:function(){var e=JSON.parse(localStorage.getItem("cryptoDash"));return e?{favorites:e.favorites,currentFavorite:e.currentFavorite}:{page:"settings",firstVisit:!0}}},{key:"render",value:function(){return a.a.createElement(x.Provider,{value:this.state},this.props.children)}}]),n}(a.a.Component),j=function(e){e.firstVisit;return a.a.createElement(x.Consumer,null,(function(e){return e.firstVisit?a.a.createElement("div",null,"Welcome to CryptoDash, please select your favorite coins to begin."," "):null}))},k=n(1),S=n(2);var F="background-color: ".concat("#061a44"),A="background-color: ".concat("#010e2c",";"),w=("background-color: ".concat("#42ff3a",";"),"box-shadow: 0px 0px 5px 1px ".concat("#121d5b")),D="box-shadow: 0px 0px 4px 2px #5fff17";function B(){var e=Object(k.a)(["\n  display: grid;\n  justify-content: center;\n"]);return B=function(){return e},e}function I(){var e=Object(k.a)(["\n  margin: 20px;\n  color: ","\n  ","\n  padding: 5px;\n  cursor: pointer; \n  &:hover {\n    ","\n  }\n \n"]);return I=function(){return e},e}var H=S.b.div(I(),"#42ff3a","font-size: 1.5em;",D),L=S.b.div(B()),P=function(){return a.a.createElement(x.Consumer,null,(function(e){var t=e.confirmFavorites;return a.a.createElement(L,null,a.a.createElement(H,{onClick:t},"Confirm Favorites"))}))},V=function(e){var t=e.name,n=e.children;return a.a.createElement(x.Consumer,null,(function(e){return e.page!==t?null:a.a.createElement("div",null," ",n," ")}))};function W(){var e=Object(k.a)(["\n  pointer-events: none;\n  opacity: 0.4;\n"]);return W=function(){return e},e}function T(){var e=Object(k.a)(["\n  &:hover {\n  cursor: pointer;\n  ","\n  }\n"]);return T=function(){return e},e}function N(){var e=Object(k.a)(["\n  &:hover {\n  cursor: pointer;\n  ","\n  }\n"]);return N=function(){return e},e}function G(){var e=Object(k.a)(["\n  ","\n  ","\n  padding: 10px;\n"]);return G=function(){return e},e}var z=S.b.div(G(),w,F),M=Object(S.b)(z)(N(),D),U=Object(S.b)(M)(T(),"box-shadow: 0px 0px 2px 2px #e41111"),J=Object(S.b)(M)(W());function R(){var e=Object(k.a)(["\n  justify-self: right;\n  display: none;\n  ",": hover & {\n    display: block;\n    color: red;\n  }\n"]);return R=function(){return e},e}function K(){var e=Object(k.a)(["\n  justify-self: right;\n"]);return K=function(){return e},e}function $(){var e=Object(k.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n"]);return $=function(){return e},e}var X=S.b.div($()),q=S.b.div(K()),Q=S.b.div(R(),U),Y=function(e){var t=e.name,n=e.symbol,r=e.topSection;return a.a.createElement(X,null,a.a.createElement("div",null,t),r?a.a.createElement(Q,null," X "):a.a.createElement(q,null,n))};function Z(){var e=Object(k.a)(["\n      height: 200px;\n      margin: auto;\n      display: block;\n    "]);return Z=function(){return e},e}function _(){var e=Object(k.a)(["\n  height: 50px;\n  ","\n"]);return _=function(){return e},e}var ee=S.b.img(_(),(function(e){return e.spotlight&&Object(S.a)(Z())})),te=function(e){var t=e.coin,n=e.spotlight;return a.a.createElement(ee,{spotlight:n,alt:t.CoinSymbol,src:"http://cryptocompare.com/".concat(t.ImageUrl)})};function ne(e,t,n,r){return e?function(){r(t)}:function(){n(t)}}var re=function(e){var t=e.coinKey,n=e.topSection;return a.a.createElement(x.Consumer,null,(function(e){var r=e.coinList,o=e.addCoin,i=e.removeCoin,c=e.isInFavorites,l=r[t],u=M;return n?u=U:c(t)&&(u=J),a.a.createElement(u,{onClick:ne(n,t,o,i)},a.a.createElement(Y,{topSection:n,name:l.CoinName,symbol:l.Symbol}),a.a.createElement(te,{coin:l}))}))};function ae(){var e=Object(k.a)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));\n  grid-gap: 15px;\n  margin-top: 40px;\n"]);return ae=function(){return e},e}var oe=S.b.div(ae());function ie(e,t,n,r){return t?n:function(e,t){return t&&Object.keys(t)||Object.keys(e).slice(0,100)}(e,r)}var ce=function(e){var t=e.topSection;return a.a.createElement(x.Consumer,null,(function(e){var n=e.coinList,r=e.favorites,o=e.filteredCoins;return a.a.createElement(oe,null,ie(n,t,r,o).map((function(e){return a.a.createElement(re,{key:e,topSection:t,coinKey:e})})))}))},le=n(20),ue=n.n(le);function se(){var e=Object(k.a)(["\n  ","\n  ","\n  border: 1px solid;\n  height: 25px;\n  color: #1163c9;\n  place-self: center left;\n"]);return se=function(){return e},e}function fe(){var e=Object(k.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n"]);return fe=function(){return e},e}var ve=S.b.div(fe()),me=S.b.input(se(),A,"font-size: 1.0em"),de=C.a.debounce((function(e,t,n){var r=Object.keys(n),a=r.map((function(e){return n[e].CoinName})),o=r.concat(a),i=ue.a.filter(e,o,{}).map((function(e){return e.string}));t(C.a.pickBy(n,(function(e,t){var n=e.CoinName;return C.a.includes(i,n)||C.a.includes(i,t)})))}),500);var pe=function(){return a.a.createElement(x.Consumer,null,(function(e){var t=e.setFilteredCoins,n=e.coinList;return a.a.createElement(ve,null,a.a.createElement("h2",null,"Search all coins"),a.a.createElement(me,{onKeyUp:function(e){return function(e,t,n){var r=e.target.value;r?de(r,t,n):t(null)}(e,t,n)}}))}))},be=function(){return a.a.createElement(V,{name:"settings"},a.a.createElement(j,null),a.a.createElement(ce,{topSection:!0}),a.a.createElement(P,null),a.a.createElement(pe,null),a.a.createElement(ce,null))};function he(){var e=Object(k.a)(["\n      ","\n      pointer-events: none;\n    "]);return he=function(){return e},e}function Ce(){var e=Object(k.a)(["\n      display: grid;\n      ","\n      grid-gap: 5px;\n      grid-template-columns: repeat(3, 1fr);\n      justify-items: right;\n    "]);return Ce=function(){return e},e}function ge(){var e=Object(k.a)(["\n  ","\n  ","\n"]);return ge=function(){return e},e}function ye(){var e=Object(k.a)(["\n  ",";\n"]);return ye=function(){return e},e}function Ee(){var e=Object(k.a)(["\n      color: red;\n    "]);return Ee=function(){return e},e}function xe(){var e=Object(k.a)(["\n  color: green;\n  ","\n"]);return xe=function(){return e},e}function Oe(){var e=Object(k.a)(["\n  justify-self: left;\n"]);return Oe=function(){return e},e}function je(){var e=Object(k.a)(["\n  justify-self: right;\n"]);return je=function(){return e},e}var ke=S.b.div(je()),Se=S.b.div(Oe()),Fe=S.b.div(xe(),(function(e){return e.red&&Object(S.a)(Ee())})),Ae=function(e){return+(e+"").slice(0,7)},we=S.b.div(ye(),"font-size: 2em"),De=Object(S.b)(M)(ge(),(function(e){return e.compact&&Object(S.a)(Ce(),"font-size: .75em")}),(function(e){return e.currentFavorite&&Object(S.a)(he(),D)}));function Be(e){var t=e.data;return a.a.createElement(ke,null,a.a.createElement(Fe,{red:t.CHANGEPCT24HOUR<0},Ae(t.CHANGEPCT24HOUR),"%"))}function Ie(e){var t=e.sym,n=e.data,r=e.currentFavorite,o=e.setCurrentFavorite;return a.a.createElement(De,{onClick:o,currentFavorite:r},a.a.createElement(X,null,a.a.createElement("div",null,t),a.a.createElement(Be,{data:n})),a.a.createElement(we,null,"$",Ae(n.PRICE)))}function He(e){var t=e.sym,n=e.data,r=e.currentFavorite,o=e.setCurrentFavorite;return a.a.createElement(De,{onClick:o,compact:!0,currentFavorite:r},a.a.createElement(Se,null,t),a.a.createElement(Be,{data:n}),a.a.createElement("div",null,"$",Ae(n.PRICE)))}var Le=function(e){var t=e.price,n=e.index,r=Object.keys(t)[0],o=t[r].USD,i=n<5?Ie:He;return a.a.createElement(x.Consumer,null,(function(e){var t=e.currentFavorite,n=e.setCurrentFavorite;return a.a.createElement(i,{sym:r,data:o,currentFavorite:t===r,setCurrentFavorite:function(){return n(r)}})}))};function Pe(){var e=Object(k.a)(["\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  grid-gap: 15px;\n  margin-top: 40px;\n"]);return Pe=function(){return e},e}var Ve=S.b.div(Pe()),We=function(){return a.a.createElement(x.Consumer,null,(function(e){var t=e.prices;return a.a.createElement(Ve,null,t.map((function(e,t){return a.a.createElement(Le,{key:"priceTile-".concat(t),index:t,price:e})})))}))};function Te(){var e=Object(k.a)(["\n  text-align: center;\n"]);return Te=function(){return e},e}var Ne=S.b.h2(Te()),Ge=function(){return a.a.createElement(x.Consumer,null,(function(e){var t=e.currentFavorite,n=e.coinList;return a.a.createElement(z,null,a.a.createElement(Ne,null,n[t].CoinName),a.a.createElement(te,{spotlight:!0,coin:n[t]}))}))},ze=n(13),Me=n.n(ze),Ue=function(e){return{title:{text:""},yAxis:{title:{text:"Price"}},xAxis:{type:"datetime"},legend:{layout:"vertical",align:"right",verticalAlign:"middle"},plotOptions:{series:{label:{connectorAllowed:!1},pointStart:2010}},series:e,responsive:{rules:[{condition:{maxWidth:500},chartOptions:{legend:{layout:"horizontal",align:"center",verticalAlign:"bottom"}}}]}}};function Je(){var e=Object(k.a)(["\n  ","\n  ","\n  color: #1163c9;\n  border: 1px solid;\n  float: right;\n"]);return Je=function(){return e},e}var Re=S.b.select(Je(),A,"font-size: 1.0em"),Ke={colors:["#61d936","#552ccb","#1163c9","#04A1EE","#08C6E0","#146B9E","#F376C1","#1B2839"],chart:{backgroundColor:"#061a44",borderColor:"#000000",borderWidth:0,className:"dark-container",plotBackgroundColor:"#061a44",plotBorderWidth:0},title:{style:{color:"#C0C0C0",font:'bold 16px "Trebuchet MS", Verdana, sans-serif'}},subtitle:{style:{color:"#666666",font:'bold 12px "Trebuchet MS", Verdana, sans-serif'}},xAxis:{gridLineColor:"#333333",gridLineWidth:0,labels:{style:{color:"#A0A0A0"}},lineColor:"#A0A0A0",tickColor:"#A0A0A0",title:{style:{color:"#CCC",fontWeight:"bold",fontSize:"12px",fontFamily:"Trebuchet MS, Verdana, sans-serif"}}},yAxis:{gridLineWidth:0,gridLineColor:"#333333",labels:{style:{color:"#A0A0A0"}},lineColor:"#A0A0A0",minorTickInterval:null,tickColor:"#A0A0A0",tickWidth:1,title:{style:{color:"#CCC",fontWeight:"bold",fontSize:"12px",fontFamily:"Trebuchet MS, Verdana, sans-serif"}}},tooltip:{backgroundColor:"rgba(0, 0, 0, 0.75)",style:{color:"#F0F0F0"}},toolbar:{itemStyle:{color:"silver"}},plotOptions:{line:{dataLabels:{color:"#CCC"},marker:{lineColor:"#333"}},spline:{marker:{lineColor:"#333"}},scatter:{marker:{lineColor:"#333"}},candlestick:{lineColor:"white"}},legend:{backgroundColor:"rgba(0, 0, 0, 0.5)",itemStyle:{font:"9pt Trebuchet MS, Verdana, sans-serif",color:"#A0A0A0"},itemHoverStyle:{color:"#FFF"},itemHiddenStyle:{color:"#444"},title:{style:{color:"#C0C0C0"}}},credits:{enabled:!1},labels:{style:{color:"#CCC"}},navigation:{buttonOptions:{symbolStroke:"#DDDDDD",theme:{fill:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[.4,"#606060"],[.6,"#333333"]]},stroke:"#000000"}}},rangeSelector:{buttonTheme:{fill:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[.4,"#888"],[.6,"#555"]]},stroke:"#000000",style:{color:"#CCC",fontWeight:"bold"},states:{hover:{fill:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[.4,"#BBB"],[.6,"#888"]]},stroke:"#000000",style:{color:"white"}},select:{fill:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[.1,"#000"],[.3,"#333"]]},stroke:"#000000",style:{color:"yellow"}}}},inputStyle:{backgroundColor:"#333",color:"silver"},labelStyle:{color:"silver"}},navigator:{handles:{backgroundColor:"#666",borderColor:"#AAA"},outlineColor:"#CCC",maskFill:"rgba(16, 16, 16, 0.5)",series:{color:"#7798BF",lineColor:"#A6C7ED"}},scrollbar:{barBackgroundColor:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[.4,"#888"],[.6,"#555"]]},barBorderColor:"#CCC",buttonArrowColor:"#CCC",buttonBackgroundColor:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[.4,"#888"],[.6,"#555"]]},buttonBorderColor:"#CCC",rifleColor:"#FFF",trackBackgroundColor:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[0,"#000"],[1,"#333"]]},trackBorderColor:"#666"}};Me.a.Highcharts.setOptions(Ke);var $e=function(){return a.a.createElement(x.Consumer,null,(function(e){var t=e.historical,n=e.changeChartSelect;return a.a.createElement(z,null,a.a.createElement(Re,{defaultValue:"months",onChange:function(e){return n(e.target.value)}},a.a.createElement("option",{value:"days"}," Days "),a.a.createElement("option",{value:"weeks"}," Weeks "),a.a.createElement("option",{value:"months"}," Months ")),t?a.a.createElement(Me.a,{config:Ue(t)}):a.a.createElement("div",null," Loading Historical Data "))}))};function Xe(){var e=Object(k.a)(["\n  display: grid;\n  margin-top: 20px;\n  grid-gap: 15px;\n  grid-template-columns: 1fr 3fr;\n"]);return Xe=function(){return e},e}var qe=S.b.div(Xe()),Qe=function(){return a.a.createElement(V,{name:"dashboard"},a.a.createElement(We,null),a.a.createElement(qe,null,a.a.createElement(Ge,null),a.a.createElement($e,null)))};function Ye(){var e=Object(k.a)(["\n  padding: 40px;\n"]);return Ye=function(){return e},e}var Ze=S.b.div(Ye());function _e(){var e=Object(k.a)(["\n      display: none;\n    "]);return _e=function(){return e},e}function et(){var e=Object(k.a)(["\n      text-shadow: 0px 0px 50px aquamarine;\n    "]);return et=function(){return e},e}function tt(){var e=Object(k.a)(["\n  cursor: pointer;\n  ","\n  ","\n"]);return tt=function(){return e},e}function nt(){var e=Object(k.a)(["\n  display: grid;\n  margin-bottom: 40px\n  grid-template-columns: 180px auto 100px 100px;\n"]);return nt=function(){return e},e}function rt(){var e=Object(k.a)(["\n  font-size: 1.5em;\n"]);return rt=function(){return e},e}var at=S.b.div(rt()),ot=S.b.div(nt()),it=S.b.div(tt(),(function(e){return e.active&&Object(S.a)(et())}),(function(e){return e.hidden&&Object(S.a)(_e())}));function ct(e){var t=e.name;return a.a.createElement(x.Consumer,null,(function(e){var n,r=e.firstVisit,o=e.page,i=e.setPage;return a.a.createElement(it,{active:o===t,onClick:function(){return i(t)},hidden:r&&"dashboard"===t},(n=t).charAt(0).toUpperCase()+n.substr(1))}))}var lt=function(){return a.a.createElement(ot,null,a.a.createElement(at,null," CryptoDash "),a.a.createElement("div",null),a.a.createElement(ct,{active:!0,name:"dashboard"}),a.a.createElement(ct,{name:"settings"}))},ut=function(e){return a.a.createElement(x.Consumer,null,(function(t){var n=t.coinList,r=t.prices,o=t.firstVisit;return n?o||r?a.a.createElement("div",null," ",e.children," "):a.a.createElement("div",null," Loading prices "):a.a.createElement("div",null," Loading Coins ")}))};var st=function(){return a.a.createElement(Ze,null,a.a.createElement(O,null,a.a.createElement(lt,null),a.a.createElement(ut,null,a.a.createElement(be,null),a.a.createElement(Qe,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(st,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.423eeb90.chunk.js.map