(()=>{"use strict";var e={3866:(e,t,r)=>{r.r(t),r.d(t,{default:()=>h});var o=r(5861),n=r(885),a=r(9766),l=r(3936),d=r(7901),i=r(838),s=r(4239),u=r(3535),c=r(5770),f=u.default.create({container:{flex:1,padding:20},header:{backgroundColor:"#f0f0f0",padding:10,borderRadius:5,shadowColor:"#000",shadowOffset:{width:0,height:2},shadowOpacity:.25,shadowRadius:3.84,elevation:5},headerText:{fontSize:18,fontWeight:"bold",color:"#004d40"},input:{borderWidth:1,borderColor:"#000",padding:10,marginVertical:10,height:100,textAlignVertical:"top"},buttonContainer:{flexDirection:"row",justifyContent:"space-between",marginVertical:10},emotionsHeader:{backgroundColor:"#e0f2f1",padding:10,marginTop:20},emotionsHeaderText:{fontSize:20,fontWeight:"bold",color:"#00695c"},table:{borderWidth:1,borderColor:"#ddd",marginTop:10},tableHeader:{flexDirection:"row",backgroundColor:"#f0f0f0",borderBottomWidth:1,borderBottomColor:"#ddd"},tableHeaderText:{flex:1,fontWeight:"bold",padding:10},tableRow:{flexDirection:"row",borderBottomWidth:1,borderBottomColor:"#ddd"},tableCell:{flex:1,padding:10},recommendationHeader:{marginTop:20},recommendationHeaderText:{fontSize:20,fontWeight:"bold"},recommendationText:{fontSize:18,fontWeight:"bold",marginTop:5,color:"#2e7d32"},errorContainer:{backgroundColor:"#ffcccb",padding:10,marginTop:10,borderRadius:5},errorText:{color:"red",textAlign:"center"}});const h=function(){var e=(0,a.useState)(""),t=(0,n.default)(e,2),r=t[0],u=t[1],h=(0,a.useState)({Angry:0,Frustration:0,Disappointment:0,Helplessness:0,Anxiety:0}),p=(0,n.default)(h,2),x=p[0],b=p[1],m=(0,a.useState)(""),y=(0,n.default)(m,2),g=y[0],v=y[1],j=(0,a.useState)([]),C=(0,n.default)(j,2),T=(C[0],C[1]),O=(0,a.useState)(null),S=(0,n.default)(O,2),H=S[0],w=S[1],_=function(){var e=(0,o.default)((function*(){var e={text:r};try{var t=yield fetch("http://104.199.214.195:5001/analyze",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(200===t.status){var o=yield t.json();b({Angry:o.emotion_scores["1_Anger"],Frustration:o.emotion_scores["2_Frustration"],Disappointment:o.emotion_scores["3_Disappointment"],Helplessness:o.emotion_scores["4_Helplessness"],Anxiety:o.emotion_scores["5_Anxiety"]}),v(o.recovery_strategy),w(null)}else{var n=yield t.text();w(`Failed to connect to the API. Status code: ${t.status}, Response: ${n}`)}}catch(a){w(`Error connecting to the API: ${a}`)}}));return function(){return e.apply(this,arguments)}}();return(0,c.jsxs)(l.default,{style:f.container,children:[(0,c.jsx)(l.default,{style:f.header,children:(0,c.jsx)(d.default,{style:f.headerText,children:"Paste Customers' Complaints Texts here"})}),(0,c.jsx)(i.default,{style:f.input,multiline:!0,placeholder:"Type the complaint here...",value:r,onChangeText:u}),(0,c.jsxs)(l.default,{style:f.buttonContainer,children:[(0,c.jsx)(s.default,{title:"Calculation and Diagnose",onPress:_}),(0,c.jsx)(s.default,{title:"Clear",onPress:function(){u(""),b({Angry:0,Frustration:0,Disappointment:0,Helplessness:0,Anxiety:0}),v(""),T([])},color:"red"})]}),(0,c.jsx)(l.default,{style:f.emotionsHeader,children:(0,c.jsx)(d.default,{style:f.emotionsHeaderText,children:"Negative Emotions"})}),(0,c.jsxs)(l.default,{style:f.table,children:[(0,c.jsxs)(l.default,{style:f.tableHeader,children:[(0,c.jsx)(d.default,{style:f.tableHeaderText,children:"Emotion"}),(0,c.jsx)(d.default,{style:f.tableHeaderText,children:"Score"})]}),Object.entries(x).map((function(e){var t=(0,n.default)(e,2),r=t[0],o=t[1];return(0,c.jsxs)(l.default,{style:f.tableRow,children:[(0,c.jsx)(d.default,{style:f.tableCell,children:r}),(0,c.jsx)(d.default,{style:f.tableCell,children:o.toFixed(2)})]},r)}))]}),(0,c.jsx)(l.default,{style:f.recommendationHeader,children:(0,c.jsx)(d.default,{style:f.recommendationHeaderText,children:"Recommendation:"})}),(0,c.jsx)(d.default,{style:f.recommendationText,children:g}),H&&(0,c.jsx)(l.default,{style:f.errorContainer,children:(0,c.jsx)(d.default,{style:f.errorText,children:H})})]})}}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,r),a.exports}r.m=e,(()=>{var e=[];r.O=(t,o,n,a)=>{if(!o){var l=1/0;for(u=0;u<e.length;u++){for(var[o,n,a]=e[u],d=!0,i=0;i<o.length;i++)(!1&a||l>=a)&&Object.keys(r.O).every((e=>r.O[e](o[i])))?o.splice(i--,1):(d=!1,a<l&&(l=a));if(d){e.splice(u--,1);var s=n();void 0!==s&&(t=s)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[o,n,a]}})(),r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={179:0};r.O.j=t=>0===e[t];var t=(t,o)=>{var n,a,[l,d,i]=o,s=0;if(l.some((t=>0!==e[t]))){for(n in d)r.o(d,n)&&(r.m[n]=d[n]);if(i)var u=i(r)}for(t&&t(o);s<l.length;s++)a=l[s],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(u)},o=self.webpackChunkweb=self.webpackChunkweb||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var o=r.O(void 0,[95],(()=>r(1150)));o=r.O(o)})();
//# sourceMappingURL=main.befa5a72.js.map