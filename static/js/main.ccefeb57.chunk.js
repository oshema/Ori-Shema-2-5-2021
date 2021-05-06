(this["webpackJsonpherolo-weather-app"]=this["webpackJsonpherolo-weather-app"]||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){},103:function(e,t,a){},104:function(e,t,a){},132:function(e,t,a){},133:function(e,t,a){},136:function(e,t,a){},137:function(e,t,a){},138:function(e,t,a){},139:function(e,t,a){},140:function(e,t,a){"use strict";a.r(t);var c=a(0),r=a.n(c),n=a(8),o=a.n(n),i=(a(100),a(37)),s=a(13),l=(a(101),a(17)),u=a.n(l),j=a(24),d=a(16),b=(a(103),a(104),a(14)),O=a(27),h=a.n(O),f=function(e){return{type:"FETCH_WEATHER_FAILURE",error:e}},p=function(e,t){return function(){var a=Object(j.a)(u.a.mark((function a(c){var r;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,c({type:"FETCH_WEATHER_REQUEST"}),"SL956ifEH5G6uGpeRoa4cKqomPiIvzeM",a.next=5,h.a.get("http://dataservice.accuweather.com/currentconditions/v1/".concat(e,"?apikey=").concat("SL956ifEH5G6uGpeRoa4cKqomPiIvzeM"));case 5:r=a.sent,c({type:"FETCH_WEATHER_SUCCESS",payload:{data:r.data[0],location:t,key:e}}),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),a.t0.response?c(f(a.t0.response.data.Message)):c(f(a.t0.message));case 12:case"end":return a.stop()}}),a,null,[[0,9]])})));return function(e){return a.apply(this,arguments)}}()},m=function(e){return{type:"FETCH_FORECAST_FAILURE",error:e}},v=function(e){return function(){var t=Object(j.a)(u.a.mark((function t(a){var c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:"FETCH_FORECAST_REQUEST"}),"SL956ifEH5G6uGpeRoa4cKqomPiIvzeM",t.next=5,h.a.get("http://dataservice.accuweather.com/forecasts/v1/daily/5day/".concat(e,"?apikey=").concat("SL956ifEH5G6uGpeRoa4cKqomPiIvzeM","&details=false&metric=true"));case 5:c=t.sent,a({type:"FETCH_FORECAST_SUCCESS",payload:c.data.DailyForecasts}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),t.t0.response?a(m(t.t0.response.data.Message)):a(m(t.t0.message));case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()},x=a(172),g=a(176),y=a(143),E=a(177),S=function(e,t){return{type:"ADD_FAVORITE",payload:{locationKey:e,locationName:t}}},T=function(e){return{type:"ADD_FAVORITE_FAILURE",error:e}},N=function(e){return{type:"FETCH_FAVORITES_FAILURE",error:e}},w=a(84),I=a.n(w),F=a(83),C=a.n(F),R=a(2);var _=function(e){var t=e.locationKey,a=e.locationName,r=e.iconSize,n=Object(c.useState)(!1),o=Object(d.a)(n,2),i=o[0],s=o[1],l=Object(b.b)(),O=Object(b.c)((function(e){return e.favorites})).locationKeys;Object(c.useEffect)((function(){h(t,O)}),[t,O]);var h=function(e,t){var a=t.includes(e);s(!!a)},f=function(){var e,c;l(i?function(e,t){return{type:"REMOVE_FAVORITE",payload:{locationKey:e,locationName:t}}}(t,a):(e=t,c=a,function(){var t=Object(j.a)(u.a.mark((function t(a,r){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r().favorites.locationKeys.length>4?(a(T("You can only have 5 favorites")),setTimeout((function(){a(T(""))}),3e3)):a(S(e,c));case 1:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()))},p=Object(x.a)({emptyHeart:{fontSize:r,color:"rgb(128, 128, 128)"},fullHeart:{fontSize:r,color:"rgb(233, 48, 88);"}})();return Object(R.jsx)("div",{children:Object(R.jsx)(y.a,{onClick:function(){return f()},children:i?Object(R.jsx)(C.a,{className:p.fullHeart}):Object(R.jsx)(I.a,{className:p.emptyHeart})})})};var A=function(e){var t=e.city,a=e.country,c=e.locationKey,r=e.clearList,n=Object(b.b)(),o=Object(x.a)((function(e){return{listItem:{height:45,width:570,fontSize:"15px","&:hover":{cursor:"pointer",backgroundColor:e.palette.grey[100]},"@media (max-width: 900px)":{maxWidth:270},"@media (max-width: 600px)":{width:"100%"}}}}))();return Object(R.jsxs)(R.Fragment,{children:[Object(R.jsxs)("div",{className:"searchItemLayout",children:[Object(R.jsx)(y.a,{onClick:function(){return r(""),n(p(c,t)),void n(v(c))},children:Object(R.jsx)(g.a,{className:o.listItem,children:Object(R.jsx)("span",{children:"".concat(a," / ").concat(t)})})}),Object(R.jsx)("div",{className:"favoriteButtonLayout",children:Object(R.jsx)(_,{locationKey:c,locationName:t})})]}),Object(R.jsx)(E.a,{})]})},H=a(180),k=a(182),L=a(85),K=a.n(L),D=a(179),M=a(178),U=a(183),z=a(184);var W=function(e){var t=e.errorMessage;return Object(R.jsx)("div",{children:Object(R.jsxs)(U.a,{severity:"error",children:[Object(R.jsx)(z.a,{children:"Error"}),Object(R.jsx)("strong",{children:t})]})})};var V=function(){var e=Object(c.useState)(""),t=Object(d.a)(e,2),a=t[0],r=t[1],n=Object(c.useState)(!1),o=Object(d.a)(n,2),i=o[0],s=o[1],l=Object(c.useState)(""),b=Object(d.a)(l,2),O=b[0],f=b[1],p=Object(c.useState)(""),m=Object(d.a)(p,2),v=m[0],g=m[1],E=function(){var e=Object(j.a)(u.a.mark((function e(t){var a,c,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r(t),"SL956ifEH5G6uGpeRoa4cKqomPiIvzeM","http://dataservice.accuweather.com/locations/v1/cities/autocomplete",a="".concat("http://dataservice.accuweather.com/locations/v1/cities/autocomplete","?q=").concat(t,"&apikey=").concat("SL956ifEH5G6uGpeRoa4cKqomPiIvzeM"),!(t.length>1)){e.next=18;break}return s(!0),e.prev=6,e.next=9,h.a.get(a);case 9:c=e.sent,n=S(c.data),f(n),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(6),e.t0.response?(g(e.t0.response.data.Message),setTimeout((function(){g(!1)}),3e3)):(g(e.t0.message),setTimeout((function(){g(!1)}),3e3));case 17:s(!1);case 18:case"end":return e.stop()}}),e,null,[[6,14]])})));return function(t){return e.apply(this,arguments)}}(),S=function(e){return e.map((function(e){return{country:e.Country.LocalizedName,city:e.LocalizedName,key:e.Key}}))},T=Object(x.a)((function(){return{list:{position:"absolute",width:"100%",maxWidth:600,overflow:"auto",maxHeight:135,backgroundColor:"rgba(148, 240, 240, 0.075);","@media (max-width: 900px)":{maxWidth:300,maxHeight:100}},searchIcon:{fontSize:"50px","@media (max-width: 900px)":{display:"none"}}}}))();return Object(R.jsx)("div",{children:Object(R.jsxs)("div",{children:[Object(R.jsxs)("div",{className:"searchBarContainer",children:[Object(R.jsx)(k.a,{className:"searchBar",label:"What's The Weather In...",placeholder:"Search",variant:"outlined",value:a,onChange:function(e){E(e.target.value)}}),Object(R.jsx)(y.a,{className:T.searchIcon,onClick:function(){return E(a)},children:Object(R.jsx)(K.a,{className:T.searchIcon})})]}),v?Object(R.jsx)(W,{errorMessage:v}):i?Object(R.jsx)(D.a,{size:100,className:"loading"}):O&&Object(R.jsx)(H.a,{onClickAway:function(){return f("")},children:Object(R.jsx)(M.a,{className:T.list,children:O.map((function(e){return Object(R.jsx)(A,{city:e.city,country:e.country,locationKey:e.key,clearList:f},e.key)}))})})]})})},G=(a(132),a(133),function(e){return e<10?"https://developer.accuweather.com/sites/default/files/0".concat(e,"-s.png"):"https://developer.accuweather.com/sites/default/files/".concat(e,"-s.png")}),P=function(e){return e>29?"linear-gradient(to top, #fddb92 0%, #d1fdff 100%)":e>22&&e<30?"linear-gradient(to top, #fff1eb 0%, #ace0f9 100%)":e<23&&e>12?"linear-gradient(45deg, #93a5cf 0%, #e4efe9 100%)":e<13&&e>0?"linear-gradient(to top, #6a85b6 0%, #bac8e0 100%)":"linear-gradient(to top, #dfe9f3 0%, white 100%)"},q=a(181);var B=function(e){var t=e.location,a=e.temperature,r=e.info,n=e.imageURL,o=e.locationKey,i=e.buttonSize,l=e.isFavoriteButton,u=void 0===l||l,j=e.clickable,O=void 0!==j&&j,h=Object(s.f)(),f=Object(b.b)(),m=Object(c.useState)("linear-gradient(to top, #fff1eb 0%, #ace0f9 100%)"),g=Object(d.a)(m,2),E=g[0],S=g[1],T=Object(c.useState)(""),N=Object(d.a)(T,2),w=N[0],I=N[1];Object(c.useEffect)((function(){var e=G(n);I(e);var t=P(a);S(t)}),[n,a]);var F=Object(x.a)({card:{marginTop:"20px",width:"250px",height:"240px",backgroundImage:E,overflow:"auto","@media (max-width: 900px)":{width:"auto",maxWidth:"250px",maxHeight:"150px",marginTop:"80px",marginLeft:"20px"}},favoriteCards:{marginTop:"20px",width:"200px",height:"240px",backgroundImage:E,overflow:"auto","&:hover":{boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)"},"@media (max-width: 1000px)":{width:"150px"},"@media (max-width: 750px)":{height:"75px"}},button:{"&:hover":{cursor:"pointer"}}})();return Object(R.jsx)("div",{children:Object(R.jsx)(R.Fragment,{children:O?Object(R.jsx)(y.a,{onClick:function(){return f(p(o,t)),f(v(o)),void h.push("/")},children:Object(R.jsxs)(q.a,{className:F.favoriteCards,children:[Object(R.jsx)("div",{className:"titleFavorite",children:"".concat(t)}),Object(R.jsxs)("div",{children:[Object(R.jsxs)("div",{className:"tempAndIconLayout",children:[Object(R.jsx)("div",{className:"tempFavorite",children:"".concat(a,"\xb0")}),Object(R.jsx)("div",{children:Object(R.jsx)("img",{className:"iconFavorite",src:"".concat(w),alt:"".concat(r)})})]}),Object(R.jsx)("div",{className:"info",children:r})]})]})}):Object(R.jsxs)(q.a,{className:F.card,children:[Object(R.jsx)("div",{className:"weatherTitle",children:"".concat(t)}),Object(R.jsxs)("div",{children:[Object(R.jsxs)("div",{className:"tempAndIconLayout",children:[Object(R.jsx)("div",{className:"temp",children:"".concat(a,"\xb0")}),Object(R.jsx)("div",{children:Object(R.jsx)("img",{className:"icon",src:"".concat(w),alt:"".concat(r)})})]}),Object(R.jsx)("div",{className:"info",children:r})]}),u&&Object(R.jsx)("div",{className:"favoriteButton",children:Object(R.jsx)(_,{locationKey:o,locationName:t,iconSize:i})})]})})})};var Q=function(){var e=Object(b.b)(),t=Object(b.c)((function(e){return e.currentWeather})),a=t.loading,r=t.weatherData,n=t.location,o=t.key,i=t.error;return Object(c.useEffect)((function(){o||e(p("215854","Tel Aviv"))}),[]),Object(R.jsx)("div",{children:i?Object(R.jsx)(W,{errorMessage:i}):a?Object(R.jsx)(D.a,{size:200,color:"secondary"}):0!==r.length&&(o?Object(R.jsx)(B,{location:n,temperature:r.Temperature.Metric.Value,info:r.WeatherText,imageURL:r.WeatherIcon,locationKey:o,buttonSize:"48px"}):Object(R.jsx)(B,{location:"Tel Aviv",temperature:r.Temperature.Metric.Value,info:r.WeatherText,imageURL:r.WeatherIcon,locationKey:"215854",buttonSize:"48px"}))})};a(136),a(137);var J=function(e){var t=e.day,a=e.night,r=e.temp,n=e.date,o=Object(c.useState)(""),i=Object(d.a)(o,2),s=i[0],l=i[1],u=Object(c.useState)(""),j=Object(d.a)(u,2),b=j[0],O=j[1],h=Object(c.useState)(""),f=Object(d.a)(h,2),p=f[0],m=f[1],v=Object(c.useState)(""),g=Object(d.a)(v,2),y=g[0],S=g[1],T=Object(c.useState)(""),N=Object(d.a)(T,2),w=N[0],I=N[1],F=Object(c.useState)(""),C=Object(d.a)(F,2),_=C[0],A=C[1],H=Object(c.useState)("linear-gradient(to top, #fff1eb 0%, #ace0f9 100%)"),k=Object(d.a)(H,2),L=k[0],K=k[1];Object(c.useEffect)((function(){l(G(t.Icon)),O(G(a.Icon)),m(D(n)),S(r.Maximum.Value),I(r.Minimum.Value)}),[e]),Object(c.useEffect)((function(){var e=(y+w)/2;e=Math.round(10*e)/10,A(e);var t=P(e);K(t)}),[y,w]);var D=function(e){return new Date(e).toDateString().split(" ")[0]},M=Object(x.a)({card:{marginTop:"20px",maxWidth:"250px",height:"170px",backgroundImage:L,overflow:"auto","@media (max-width: 1060px)":{maxWidth:"150px"}}})();return Object(R.jsxs)("div",{className:"forecastCardLayout",children:[Object(R.jsx)("div",{className:"dayTitle",children:p}),Object(R.jsxs)(q.a,{className:M.card,children:[Object(R.jsx)("div",{className:"ForecastsTemp",children:"".concat(y,"\xb0 - ").concat(w,"\xb0")}),Object(R.jsx)("div",{className:"minimizeForecastTemp",children:_}),Object(R.jsxs)("div",{className:"nightAndDayLayout",children:[Object(R.jsxs)("div",{children:[Object(R.jsx)("div",{children:"".concat(t.IconPhrase)}),Object(R.jsx)("img",{src:"".concat(s),alt:"".concat(t.IconPhrase)})]}),Object(R.jsx)(E.a,{orientation:"vertical",flexItem:!0}),Object(R.jsxs)("div",{className:"nightInfo",children:[Object(R.jsx)("div",{children:"".concat(a.IconPhrase)}),Object(R.jsx)("img",{src:"".concat(b),alt:"".concat(a.IconPhrase)})]})]})]})]})};var Y=function(){var e=Object(b.b)(),t=Object(b.c)((function(e){return e.forecast})),a=t.forecastData,r=t.loading,n=t.error;return Object(c.useEffect)((function(){e(v("215854"))}),[]),n?Object(R.jsx)(W,{errorMessage:n}):Object(R.jsx)("div",{className:"forecastLayout",children:r?Object(R.jsx)(D.a,{size:200,color:"secondary"}):0!=a.length&&a.map((function(e,t){return Object(R.jsx)(J,{day:e.Day,night:e.Night,temp:e.Temperature,date:e.Date},t)}))})};var X=function(){return Object(R.jsxs)("div",{className:"mainImg",children:[Object(R.jsxs)("div",{className:"topHeroContainer",children:[Object(R.jsxs)("div",{children:[Object(R.jsxs)("div",{className:"searchLogoContainer",children:[Object(R.jsx)("img",{className:"searchImg",src:"./cloudSearch.png"}),Object(R.jsxs)("div",{children:[Object(R.jsx)("div",{className:"searchTitle",children:"Cloud Search"}),Object(R.jsx)("div",{className:"searchSubtitle",children:"Your way to get around the weather"})]})]}),Object(R.jsx)(V,{})]}),Object(R.jsx)("div",{children:Object(R.jsx)(Q,{})})]}),Object(R.jsx)(Y,{})]})};a(138);var Z=function(){var e=Object(b.b)(),t=Object(b.c)((function(e){return e.favorites})),a=t.favoritesData,r=t.locationKeys,n=t.locationNames,o=t.loading,i=t.error;return Object(c.useEffect)((function(){e(function(){var e=Object(j.a)(u.a.mark((function e(t,a){var c,r,n,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=a().favorites.locationKeys,t({type:"FETCH_FAVORITES_REQUEST"}),r=c.map(function(){var e=Object(j.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("http://dataservice.accuweather.com/currentconditions/v1/".concat(t,"?apikey=").concat("SL956ifEH5G6uGpeRoa4cKqomPiIvzeM"));case 3:return a=e.sent,e.abrupt("return",a.data[0]);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",{err:e.t0});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()),e.next=6,Promise.all(r);case 6:n=e.sent,0===(o=n.filter((function(e){return e.err}))).length?t({type:"FETCH_FAVORITES_SUCCESS",payload:n}):o[0].err.response?t(N(o[0].err.response.data.Message)):t(N(o[0].err.message));case 9:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}())}),[]),Object(R.jsxs)("div",{className:"mainImg",children:[Object(R.jsx)("div",{children:Object(R.jsx)("img",{className:"starImage",src:"./favorite_star.png"})}),i?Object(R.jsx)(W,{errorMessage:i}):Object(R.jsx)("div",{className:"favoritesItemsLayout",children:o?Object(R.jsx)(D.a,{size:200,color:"secondary"}):0!=a.length&&a.map((function(e,t){return Object(R.jsx)(B,{location:n[t],temperature:e.Temperature.Metric.Value,info:e.WeatherText,imageURL:e.WeatherIcon,locationKey:r[t],isFavoriteButton:!1,clickable:!0},r[t])}))})]})};a(139);var $=function(){var e=Object(b.c)((function(e){return e.favorites.limitError}));return Object(R.jsx)("div",{className:"nav",children:Object(R.jsxs)("div",{className:"manuContainer",children:[Object(R.jsx)(i.b,{className:"homeLink",to:"/",children:"Home"}),Object(R.jsx)(i.b,{className:"favoritesLink",to:"/favorites",children:"Favorites"}),Object(R.jsx)("span",{className:"favoritesError",children:e})]})})};var ee=function(){return Object(R.jsx)(i.a,{children:Object(R.jsxs)("div",{children:[Object(R.jsx)($,{}),Object(R.jsxs)(s.c,{children:[Object(R.jsx)(s.a,{exact:!0,path:"/",children:Object(R.jsx)(X,{})}),Object(R.jsx)(s.a,{path:"/favorites",children:Object(R.jsx)(Z,{})})]})]})})},te=a(39),ae=a(10),ce={loading:!1,weatherData:"",location:"",key:"",error:""},re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_WEATHER_REQUEST":return Object(ae.a)(Object(ae.a)({},e),{},{loading:!0});case"FETCH_WEATHER_SUCCESS":return Object(ae.a)(Object(ae.a)({},e),{},{loading:!1,weatherData:t.payload.data,location:t.payload.location,key:t.payload.key,error:""});case"FETCH_WEATHER_FAILURE":return Object(ae.a)(Object(ae.a)({},e),{},{loading:!1,weatherData:[],location:"",key:"",error:t.error});default:return e}},ne={loading:!1,forecastData:[],error:""},oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_FORECAST_REQUEST":return Object(ae.a)(Object(ae.a)({},e),{},{loading:!0});case"FETCH_FORECAST_SUCCESS":return Object(ae.a)(Object(ae.a)({},e),{},{loading:!1,forecastData:t.payload,error:""});case"FETCH_FORECAST_FAILURE":return Object(ae.a)(Object(ae.a)({},e),{},{loading:!1,forecastData:[],error:t.error});default:return e}},ie=a(66),se={loading:!1,favoritesData:[],locationKeys:[],locationNames:[],error:"",limitError:""},le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_FAVORITE":return Object(ae.a)(Object(ae.a)({},e),{},{locationKeys:[].concat(Object(ie.a)(e.locationKeys),[t.payload.locationKey]),locationNames:[].concat(Object(ie.a)(e.locationNames),[t.payload.locationName]),limitError:""});case"REMOVE_FAVORITE":return Object(ae.a)(Object(ae.a)({},e),{},{locationKeys:e.locationKeys.filter((function(e){return t.payload.locationKey!==e})),locationNames:e.locationNames.filter((function(e){return t.payload.locationName!==e})),limitError:""});case"ADD_FAVORITE_FAILURE":return Object(ae.a)(Object(ae.a)({},e),{},{limitError:t.error});case"FETCH_FAVORITES_REQUEST":return Object(ae.a)(Object(ae.a)({},e),{},{loading:!0});case"FETCH_FAVORITES_SUCCESS":return Object(ae.a)(Object(ae.a)({},e),{},{loading:!1,favoritesData:t.payload,error:""});case"FETCH_FAVORITES_FAILURE":return Object(ae.a)(Object(ae.a)({},e),{},{loading:!1,favoritesData:[],error:t.error});default:return e}},ue=Object(te.combineReducers)({currentWeather:re,forecast:oe,favorites:le}),je=a(86),de=a(87),be=Object(te.createStore)(ue,Object(de.composeWithDevTools)(Object(te.applyMiddleware)(je.a)));o.a.render(Object(R.jsx)(r.a.StrictMode,{children:Object(R.jsx)(b.a,{store:be,children:Object(R.jsx)(ee,{})})}),document.getElementById("root"))}},[[140,1,2]]]);
//# sourceMappingURL=main.ccefeb57.chunk.js.map