(this["webpackJsonpquiz-app"]=this["webpackJsonpquiz-app"]||[]).push([[0],{19:function(e,s,t){},20:function(e,s,t){},21:function(e,s,t){},23:function(e,s,t){},24:function(e,s,t){},26:function(e,s,t){"use strict";t.r(s);var c=t(1),n=t.n(c),r=t(7),o=t.n(r),a=(t(19),t.p,t(20),t(8)),i=t(9),l=t(13),d=t(11),h=(t(21),t(0)),u=function(e){var s=Object.keys(e.answer).map((function(s){return Object(h.jsx)("li",{className:e.correctAnswer===s?"correct":e.clickedAnswer===s?"incorrect":"",onClick:function(){return e.checkAnswer(s)},children:e.answer[s]},s)}));return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("ul",{disabled:!!e.clickedAnswer,className:"Answers",children:[console.log(e.clickedAnswer),s]}),Object(h.jsx)("div",{className:"Response",children:e.correctAnswer?"Correct Answer!":e.clickedAnswer?"Incorrect Answer!":""})]})},j=(t(23),function(e){return Object(h.jsx)("div",{children:Object(h.jsx)("h1",{children:e.question})})}),b=(t(24),t(12)),w=t(10),O=t(14),p=function(e){Object(l.a)(t,e);var s=Object(d.a)(t);function t(){var e;Object(a.a)(this,t);for(var c=arguments.length,n=new Array(c),r=0;r<c;r++)n[r]=arguments[r];return(e=s.call.apply(s,[this].concat(n))).state={questions:{1:'How is COVID-19 passed on?"?',2:"What are the common symptoms of COVID-19?",3:"Can you always tell if someone has COVID-19? ",4:"Can washing your hands protect you from COVID-19? ",5:"When should fabric face masks be worn?"},answers:{1:{1:"Through droplets that come from your mouth and nose when you cough or breathe out",2:"In sexual fluids, including semen, vaginal fluids or anal mucous",3:"By drinking unclean water",4:"All of the above"},2:{1:"A new and continuous cough",2:"Fever",3:"Tiredness",4:"All of the above"},3:{1:"No \u2013 not everyone with COVID-19 has symptoms",2:"Yes \u2013 it will be obvious, a person with COVID-19 coughs a lot",3:"Yes \u2013 you can tell just by where a person comes from, their race and ethnicity",4:"None of the above"},4:{1:"Yes \u2013 but only if you use a strong bleach",2:"Yes \u2013 normal soap and water or hand sanitizer is enough",3:"No \u2013 Washing your hands doesn\u2019t stop COVID-19",4:"None of the above"},5:{1:"On public transport",2:"In confined or crowded spaces",3:"In small shops",4:"All of the above"}},correctAnswers:{1:"1",2:"4",3:"1",4:"2",5:"4"},clickedAns:{1:"0",2:"0",3:"0",4:"0",5:"0"},correctAnswer:0,score:0,step:1,clickedAnswer:0,view:!1},e.checkAnswer=function(s){var t=e.state,c=t.correctAnswers,n=t.step,r=t.score,o=(t.clickedAnswer,t.correctAnswer,t.clickedAns);console.log(c[n]),o[n]=s,console.log(o[n]),s===c[n]?e.setState({score:r+1,correctAnswer:c[n]}):e.setState({correctAnswer:0}),e.setState({clickedAnswer:s})},e.nextStep=function(s){e.setState({step:s+1,clickedAnswer:0,correctAnswer:0})},e.viewResult=function(){e.setState({view:!0}),console.log(e.state.clickedAns[1]),console.log(e.state.clickedAns[2]),console.log(e.state.clickedAns[3])},e}return Object(i.a)(t,[{key:"render",value:function(){var e=this,s=this.state,t=s.step,c=s.questions,n=s.answers,r=s.correctAnswer,o=s.clickedAnswer,a=s.score,i=s.clickedAns,l=s.view;return Object(h.jsx)("div",{className:"Content",children:t<=Object.keys(c).length?Object(h.jsxs)(h.Fragment,{children:["  ",Object(h.jsx)(O.a,{variant:"warning",className:"progressBar",now:t/Object.keys(c).length*100,label:"".concat(0,"%"),srOnly:!0}),Object(h.jsx)(j,{question:c[t]}),Object(h.jsx)(u,{answer:n[t],checkAnswer:this.checkAnswer,correctAnswer:r,clickedAnswer:o}),Object(h.jsx)("button",{className:"NextStep",disabled:!(o&&Object.keys(c).length>=t),onClick:function(){return e.nextStep(t)},children:"Next"})]}):Object(h.jsxs)("div",{className:"finalPage",children:[Object(h.jsx)("h1",{children:"Congratulations!"})," ",Object(h.jsx)("h3",{children:"You have Successfully Completed the Quiz"}),Object(h.jsxs)("p",{children:["You Scored   ",a," / ",Object.keys(c).length]}),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(b.a,{disabled:!!l,className:"resultButton",variant:"success",size:"lg",onClick:this.viewResult,active:!0,children:"View Result"}),l?Object(h.jsx)("div",{children:Object.keys(i).map((function(s){return Object(h.jsx)("div",{children:Object(h.jsxs)(w.a,{striped:!0,bordered:!0,hover:!0,className:"responseTable",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{className:"thead",children:[Object(h.jsx)("th",{children:"#"}),Object(h.jsx)("th",{children:"Status"})]})}),Object(h.jsx)("tbody",{className:"tbody",children:i[s]===e.state.correctAnswers[s]?Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:s}),Object(h.jsx)("td",{className:"correct",children:"Correct Answer !"})]}):Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:s}),Object(h.jsx)("td",{className:"incorrect",children:"Incorrect Answer!"})]})})]})})}))}):null]})]})})}}]),t}(c.Component);var A=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(p,{})})},f=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,27)).then((function(s){var t=s.getCLS,c=s.getFID,n=s.getFCP,r=s.getLCP,o=s.getTTFB;t(e),c(e),n(e),r(e),o(e)}))};t(25);o.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(A,{})}),document.getElementById("root")),f()}},[[26,1,2]]]);
//# sourceMappingURL=main.6fc8e3b4.chunk.js.map