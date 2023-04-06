"use strict";(self.webpackChunkchat_client=self.webpackChunkchat_client||[]).push([[799],{6799:function(t,e,n){n.r(e),n.d(e,{diagram:function(){return H}});var i=n(9439),r=n(7762),a=n(754),s=n(8225),c=n(5873),o=n(5726),l=n(6213),h=(n(7892),n(504),n(8703),n(8584),n(8433),n(7351),n(3188),n(6930),n(8808),n(776),function(){var t=function(t,e,n,i){for(n=n||{},i=t.length;i--;n[t[i]]=e);return n},e=[1,2],n=[1,5],i=[6,9,11,17,18,20,22,23,26,27,28],r=[1,15],a=[1,16],s=[1,17],c=[1,18],o=[1,19],l=[1,23],h=[1,24],d=[1,27],u=[4,6,9,11,17,18,20,22,23,26,27,28],p={trace:function(){},yy:{},symbols_:{error:2,start:3,timeline:4,document:5,EOF:6,directive:7,line:8,SPACE:9,statement:10,NEWLINE:11,openDirective:12,typeDirective:13,closeDirective:14,":":15,argDirective:16,title:17,acc_title:18,acc_title_value:19,acc_descr:20,acc_descr_value:21,acc_descr_multiline_value:22,section:23,period_statement:24,event_statement:25,period:26,event:27,open_directive:28,type_directive:29,arg_directive:30,close_directive:31,$accept:0,$end:1},terminals_:{2:"error",4:"timeline",6:"EOF",9:"SPACE",11:"NEWLINE",15:":",17:"title",18:"acc_title",19:"acc_title_value",20:"acc_descr",21:"acc_descr_value",22:"acc_descr_multiline_value",23:"section",26:"period",27:"event",28:"open_directive",29:"type_directive",30:"arg_directive",31:"close_directive"},productions_:[0,[3,3],[3,2],[5,0],[5,2],[8,2],[8,1],[8,1],[8,1],[7,4],[7,6],[10,1],[10,2],[10,2],[10,1],[10,1],[10,1],[10,1],[10,1],[24,1],[25,1],[12,1],[13,1],[16,1],[14,1]],performAction:function(t,e,n,i,r,a,s){var c=a.length-1;switch(r){case 1:return a[c-1];case 3:case 7:case 8:this.$=[];break;case 4:a[c-1].push(a[c]),this.$=a[c-1];break;case 5:case 6:this.$=a[c];break;case 11:i.getCommonDb().setDiagramTitle(a[c].substr(6)),this.$=a[c].substr(6);break;case 12:this.$=a[c].trim(),i.getCommonDb().setAccTitle(this.$);break;case 13:case 14:this.$=a[c].trim(),i.getCommonDb().setAccDescription(this.$);break;case 15:i.addSection(a[c].substr(8)),this.$=a[c].substr(8);break;case 19:i.addTask(a[c],0,""),this.$=a[c];break;case 20:i.addEvent(a[c].substr(2)),this.$=a[c];break;case 21:i.parseDirective("%%{","open_directive");break;case 22:i.parseDirective(a[c],"type_directive");break;case 23:a[c]=a[c].trim().replace(/'/g,'"'),i.parseDirective(a[c],"arg_directive");break;case 24:i.parseDirective("}%%","close_directive","timeline")}},table:[{3:1,4:e,7:3,12:4,28:n},{1:[3]},t(i,[2,3],{5:6}),{3:7,4:e,7:3,12:4,28:n},{13:8,29:[1,9]},{29:[2,21]},{6:[1,10],7:22,8:11,9:[1,12],10:13,11:[1,14],12:4,17:r,18:a,20:s,22:c,23:o,24:20,25:21,26:l,27:h,28:n},{1:[2,2]},{14:25,15:[1,26],31:d},t([15,31],[2,22]),t(i,[2,8],{1:[2,1]}),t(i,[2,4]),{7:22,10:28,12:4,17:r,18:a,20:s,22:c,23:o,24:20,25:21,26:l,27:h,28:n},t(i,[2,6]),t(i,[2,7]),t(i,[2,11]),{19:[1,29]},{21:[1,30]},t(i,[2,14]),t(i,[2,15]),t(i,[2,16]),t(i,[2,17]),t(i,[2,18]),t(i,[2,19]),t(i,[2,20]),{11:[1,31]},{16:32,30:[1,33]},{11:[2,24]},t(i,[2,5]),t(i,[2,12]),t(i,[2,13]),t(u,[2,9]),{14:34,31:d},{31:[2,23]},{11:[1,35]},t(u,[2,10])],defaultActions:{5:[2,21],7:[2,2],27:[2,24],33:[2,23]},parseError:function(t,e){if(!e.recoverable){var n=new Error(t);throw n.hash=e,n}this.trace(t)},parse:function(t){var e=this,n=[0],i=[],r=[null],a=[],s=this.table,c="",o=0,l=0,h=1,d=a.slice.call(arguments,1),u=Object.create(this.lexer),p={yy:{}};for(var y in this.yy)Object.prototype.hasOwnProperty.call(this.yy,y)&&(p.yy[y]=this.yy[y]);u.setInput(t,p.yy),p.yy.lexer=u,p.yy.parser=this,"undefined"==typeof u.yylloc&&(u.yylloc={});var g=u.yylloc;a.push(g);var f=u.options&&u.options.ranges;function m(){var t;return"number"!==typeof(t=i.pop()||u.lex()||h)&&(t instanceof Array&&(t=(i=t).pop()),t=e.symbols_[t]||t),t}"function"===typeof p.yy.parseError?this.parseError=p.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;for(var _,v,b,k,x,S,w,E,I={};;){if(v=n[n.length-1],this.defaultActions[v]?b=this.defaultActions[v]:(null!==_&&"undefined"!=typeof _||(_=m()),b=s[v]&&s[v][_]),"undefined"===typeof b||!b.length||!b[0]){var T="";for(x in E=[],s[v])this.terminals_[x]&&x>2&&E.push("'"+this.terminals_[x]+"'");T=u.showPosition?"Parse error on line "+(o+1)+":\n"+u.showPosition()+"\nExpecting "+E.join(", ")+", got '"+(this.terminals_[_]||_)+"'":"Parse error on line "+(o+1)+": Unexpected "+(_==h?"end of input":"'"+(this.terminals_[_]||_)+"'"),this.parseError(T,{text:u.match,token:this.terminals_[_]||_,line:u.yylineno,loc:g,expected:E})}if(b[0]instanceof Array&&b.length>1)throw new Error("Parse Error: multiple actions possible at state: "+v+", token: "+_);switch(b[0]){case 1:n.push(_),r.push(u.yytext),a.push(u.yylloc),n.push(b[1]),_=null,l=u.yyleng,c=u.yytext,o=u.yylineno,g=u.yylloc;break;case 2:if(S=this.productions_[b[1]][1],I.$=r[r.length-S],I._$={first_line:a[a.length-(S||1)].first_line,last_line:a[a.length-1].last_line,first_column:a[a.length-(S||1)].first_column,last_column:a[a.length-1].last_column},f&&(I._$.range=[a[a.length-(S||1)].range[0],a[a.length-1].range[1]]),"undefined"!==typeof(k=this.performAction.apply(I,[c,l,o,p.yy,b[1],r,a].concat(d))))return k;S&&(n=n.slice(0,-1*S*2),r=r.slice(0,-1*S),a=a.slice(0,-1*S)),n.push(this.productions_[b[1]][0]),r.push(I.$),a.push(I._$),w=s[n[n.length-2]][n[n.length-1]],n.push(w);break;case 3:return!0}}return!0}},y={EOF:1,parseError:function(t,e){if(!this.yy.parser)throw new Error(t);this.yy.parser.parseError(t,e)},setInput:function(t,e){return this.yy=e||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},unput:function(t){var e=t.length,n=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e),this.offset-=e;var i=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),n.length-1&&(this.yylineno-=n.length-1);var r=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:n?(n.length===i.length?this.yylloc.first_column:0)+i[i.length-n.length].length-n[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[r[0],r[0]+this.yyleng-e]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},less:function(t){this.unput(this.match.slice(t))},pastInput:function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var t=this.pastInput(),e=new Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"},test_match:function(t,e){var n,i,r;if(this.options.backtrack_lexer&&(r={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(r.yylloc.range=this.yylloc.range.slice(0))),(i=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=i.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:i?i[i.length-1].length-i[i.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],n=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),n)return n;if(this._backtrack){for(var a in r)this[a]=r[a];return!1}return!1},next:function(){if(this.done)return this.EOF;var t,e,n,i;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var r=this._currentRules(),a=0;a<r.length;a++)if((n=this._input.match(this.rules[r[a]]))&&(!e||n[0].length>e[0].length)){if(e=n,i=a,this.options.backtrack_lexer){if(!1!==(t=this.test_match(n,r[a])))return t;if(this._backtrack){e=!1;continue}return!1}if(!this.options.flex)break}return e?!1!==(t=this.test_match(e,r[i]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var t=this.next();return t||this.lex()},begin:function(t){this.conditionStack.push(t)},popState:function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(t){return(t=this.conditionStack.length-1-Math.abs(t||0))>=0?this.conditionStack[t]:"INITIAL"},pushState:function(t){this.begin(t)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(t,e,n,i){switch(n){case 0:return this.begin("open_directive"),28;case 1:return this.begin("type_directive"),29;case 2:return this.popState(),this.begin("arg_directive"),15;case 3:return this.popState(),this.popState(),31;case 4:return 30;case 5:case 6:case 8:case 9:break;case 7:return 11;case 10:return 4;case 11:return 17;case 12:return this.begin("acc_title"),18;case 13:return this.popState(),"acc_title_value";case 14:return this.begin("acc_descr"),20;case 15:return this.popState(),"acc_descr_value";case 16:this.begin("acc_descr_multiline");break;case 17:this.popState();break;case 18:return"acc_descr_multiline_value";case 19:return 23;case 20:return 27;case 21:return 26;case 22:return 6;case 23:return"INVALID"}},rules:[/^(?:%%\{)/i,/^(?:((?:(?!\}%%)[^:.])*))/i,/^(?::)/i,/^(?:\}%%)/i,/^(?:((?:(?!\}%%).|\n)*))/i,/^(?:%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:#[^\n]*)/i,/^(?:timeline\b)/i,/^(?:title\s[^#\n;]+)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:section\s[^#:\n;]+)/i,/^(?::\s[^#:\n;]+)/i,/^(?:[^#:\n;]+)/i,/^(?:$)/i,/^(?:.)/i],conditions:{open_directive:{rules:[1],inclusive:!1},type_directive:{rules:[2,3],inclusive:!1},arg_directive:{rules:[3,4],inclusive:!1},acc_descr_multiline:{rules:[17,18],inclusive:!1},acc_descr:{rules:[15],inclusive:!1},acc_title:{rules:[13],inclusive:!1},INITIAL:{rules:[0,5,6,7,8,9,10,11,12,14,16,19,20,21,22,23],inclusive:!0}}};function g(){this.yy={}}return p.lexer=y,g.prototype=p,p.Parser=g,new g}());h.parser=h;var d=h,u="",p=0,y=[],g=[],f=[],m=function(){return a.j},_=function(t,e,n){(0,a.k)(globalThis,t,e,n)},v=function(){y.length=0,g.length=0,u="",f.length=0,(0,a.m)()},b=function(t){u=t,y.push(t)},k=function(){return y},x=function(){for(var t=I(),e=0;!t&&e<100;)t=I(),e++;return g.push.apply(g,f),g},S=function(t,e,n){var i={id:p++,section:u,type:u,task:t,score:e||0,events:n?[n]:[]};f.push(i)},w=function(t){f.find((function(t){return t.id===p-1})).events.push(t)},E=function(t){var e={section:u,type:u,description:t,task:t,classes:[]};g.push(e)},I=function(){var t,e=!0,n=(0,r.Z)(f.entries());try{for(n.s();!(t=n.n()).done;){var a=(0,i.Z)(t.value,2),s=a[0],c=a[1];f[s].processed,e=e&&c.processed}}catch(o){n.e(o)}finally{n.f()}return e},T={clear:v,getCommonDb:m,addSection:b,getSections:k,getTasks:x,addTask:S,addTaskOrg:E,addEvent:w,parseDirective:_},D=Object.freeze(Object.defineProperty({__proto__:null,addEvent:w,addSection:b,addTask:S,addTaskOrg:E,clear:v,default:T,getCommonDb:m,getSections:k,getTasks:x,parseDirective:_},Symbol.toStringTag,{value:"Module"}));!function(){function t(t,e,n,r,a,s,c,o){i(e.append("text").attr("x",n+a/2).attr("y",r+s/2+5).style("font-color",o).style("text-anchor","middle").text(t),c)}function e(t,e,n,r,a,s,c,o,l){for(var h=o.taskFontSize,d=o.taskFontFamily,u=t.split(/<br\s*\/?>/gi),p=0;p<u.length;p++){var y=p*h-h*(u.length-1)/2,g=e.append("text").attr("x",n+a/2).attr("y",r).attr("fill",l).style("text-anchor","middle").style("font-size",h).style("font-family",d);g.append("tspan").attr("x",n+a/2).attr("dy",y).text(u[p]),g.attr("y",r+s/2).attr("dominant-baseline","central").attr("alignment-baseline","central"),i(g,c)}}function n(t,n,r,a,s,c,o,l){var h=n.append("switch"),d=h.append("foreignObject").attr("x",r).attr("y",a).attr("width",s).attr("height",c).attr("position","fixed").append("xhtml:div").style("display","table").style("height","100%").style("width","100%");d.append("div").attr("class","label").style("display","table-cell").style("text-align","center").style("vertical-align","middle").text(t),e(t,h,r,a,s,c,o,l),i(d,o)}function i(t,e){for(var n in e)n in e&&t.attr(n,e[n])}}();function L(t,e){t.each((function(){for(var t,n=(0,s.Ys)(this),i=n.text().split(/(\s+|<br>)/).reverse(),r=[],a=n.attr("y"),c=parseFloat(n.attr("dy")),o=n.text(null).append("tspan").attr("x",0).attr("y",a).attr("dy",c+"em"),l=0;l<i.length;l++)t=i[i.length-1-l],r.push(t),o.text(r.join(" ").trim()),(o.node().getComputedTextLength()>e||"<br>"===t)&&(r.pop(),o.text(r.join(" ").trim()),r="<br>"===t?[""]:[t],o=n.append("tspan").attr("x",0).attr("y",a).attr("dy","1.1em").text(t))}))}var C=function(t,e,n){t.append("path").attr("id","node-"+e.id).attr("class","node-bkg node-"+e.type).attr("d","M0 ".concat(e.height-5," v").concat(10-e.height," q0,-5 5,-5 h").concat(e.width-10," q5,0 5,5 v").concat(e.height-5," H0 Z")),t.append("line").attr("class","node-line-"+n).attr("x1",0).attr("y1",e.height).attr("x2",e.width).attr("y2",e.height)},M=function(t){t.append("defs").append("marker").attr("id","arrowhead").attr("refX",5).attr("refY",2).attr("markerWidth",6).attr("markerHeight",4).attr("orient","auto").append("path").attr("d","M 0,0 V 4 L6,2 Z")},O=function(t,e,n,i){var r=n%12-1,a=t.append("g");e.section=r,a.attr("class",(e.class?e.class+" ":"")+"timeline-node section-"+r);var s=a.append("g"),c=a.append("g"),o=c.append("text").text(e.descr).attr("dy","1em").attr("alignment-baseline","middle").attr("dominant-baseline","middle").attr("text-anchor","middle").call(L,e.width).node().getBBox(),l=i.fontSize&&i.fontSize.replace?i.fontSize.replace("px",""):i.fontSize;return e.height=o.height+1.1*l*.5+e.padding,e.height=Math.max(e.height,e.maxHeight),e.width=e.width+2*e.padding,c.attr("transform","translate("+e.width/2+", "+e.padding/2+")"),C(s,e,r),e},A=function(t,e,n){var i=t.append("g"),r=i.append("text").text(e.descr).attr("dy","1em").attr("alignment-baseline","middle").attr("dominant-baseline","middle").attr("text-anchor","middle").call(L,e.width).node().getBBox(),a=n.fontSize&&n.fontSize.replace?n.fontSize.replace("px",""):n.fontSize;return i.remove(),r.height+1.1*a*.5+e.padding},$=function(t,e,n,i,s,c,o,l,h,d,u){var p,y=(0,r.Z)(e);try{for(y.s();!(p=y.n()).done;){var g=p.value,f={descr:g.task,section:n,number:n,width:150,padding:20,maxHeight:c};a.l.debug("taskNode",f);var m=t.append("g").attr("class","taskWrapper"),_=O(m,f,n,o).height;if(a.l.debug("taskHeight after draw",_),m.attr("transform","translate(".concat(i,", ").concat(s,")")),c=Math.max(c,_),g.events){var v=t.append("g").attr("class","lineWrapper");s+=100,Z(t,g.events,n,i,s,o),s-=100,v.append("line").attr("x1",i+95).attr("y1",s+c).attr("x2",i+95).attr("y2",s+c+(u?c:d)+h+120).attr("stroke-width",2).attr("stroke","black").attr("marker-end","url(#arrowhead)").attr("stroke-dasharray","5,5")}i+=200,u&&!(0,a.g)().timeline.disableMulticolor&&n++}}catch(b){y.e(b)}finally{y.f()}s-=10},Z=function(t,e,n,i,s,c){var o=0,l=s;s+=100;var h,d=(0,r.Z)(e);try{for(d.s();!(h=d.n()).done;){var u={descr:h.value,section:n,number:n,width:150,padding:20,maxHeight:50};a.l.debug("eventNode",u);var p=t.append("g").attr("class","eventWrapper"),y=O(p,u,n,c).height;o+=y,p.attr("transform","translate(".concat(i,", ").concat(s,")")),s=s+10+y}}catch(g){d.e(g)}finally{d.f()}return s=l,o},H={db:D,renderer:{setConf:function(t){Object.keys(t).forEach((function(e){conf[e]=t[e]}))},draw:function(t,e,n,c){var o=(0,a.g)(),l=o.leftMargin?o.leftMargin:50;c.db.clear(),c.parser.parse(t+"\n"),a.l.debug("timeline",c.db);var h,d=o.securityLevel;"sandbox"===d&&(h=(0,s.Ys)("#i"+e));var u=("sandbox"===d?(0,s.Ys)(h.nodes()[0].contentDocument.body):(0,s.Ys)("body")).select("#"+e);u.append("g");var p=c.db.getTasks(),y=c.db.getCommonDb().getDiagramTitle();a.l.debug("task",p),M(u);var g=c.db.getSections();a.l.debug("sections",g);var f,m=0,_=0,v=50+l,b=50;var k=0,x=!0;g.forEach((function(t){var e=A(u,{number:k,descr:t,section:k,width:150,padding:20,maxHeight:m},o);a.l.debug("sectionHeight before draw",e),m=Math.max(m,e+20)}));var S=0,w=0;a.l.debug("tasks.length",p.length);var E,I=(0,r.Z)(p.entries());try{for(I.s();!(E=I.n()).done;){var T=(0,i.Z)(E.value,2),D=T[0],L=T[1],C={number:D,descr:L,section:L.section,width:150,padding:20,maxHeight:_},Z=A(u,C,o);a.l.debug("taskHeight before draw",Z),_=Math.max(_,Z+20),S=Math.max(S,L.events.length);for(var H=0,j=0;j<L.events.length;j++){var z={descr:L.events[j],section:L.section,number:L.section,width:150,padding:20,maxHeight:50};H+=A(u,z,o)}w=Math.max(w,H)}}catch(N){I.e(N)}finally{I.f()}a.l.debug("maxSectionHeight before draw",m),a.l.debug("maxTaskHeight before draw",_),g&&g.length>0?g.forEach((function(t){var e={number:k,descr:t,section:k,width:150,padding:20,maxHeight:m};a.l.debug("sectionNode",e);var n=u.append("g"),i=O(n,e,k,o);a.l.debug("sectionNode output",i),n.attr("transform","translate(".concat(v,", ").concat(50,")")),b+=m+50;var r=p.filter((function(e){return e.section===t}));r.length>0&&$(u,r,k,v,b,_,o,S,w,m,!1),v+=200*Math.max(r.length,1),b=50,k++})):(x=!1,$(u,p,k,v,b,_,o,S,w,m,!0));var P=u.node().getBBox();a.l.debug("bounds",P),y&&u.append("text").text(y).attr("x",P.width/2-l).attr("font-size","4ex").attr("font-weight","bold").attr("y",20),f=x?m+_+150:_+100,u.append("g").attr("class","lineWrapper").append("line").attr("x1",l).attr("y1",f).attr("x2",P.width+3*l).attr("y2",f).attr("stroke-width",4).attr("stroke","black").attr("marker-end","url(#arrowhead)"),(0,a.s)(void 0,u,o.timeline.padding?o.timeline.padding:50,!!o.timeline.useMaxWidth&&o.timeline.useMaxWidth)}},parser:d,styles:function(t){return"\n  .edge {\n    stroke-width: 3;\n  }\n  ".concat(function(t){for(var e="",n=0;n<t.THEME_COLOR_LIMIT;n++)t["lineColor"+n]=t["lineColor"+n]||t["cScaleInv"+n],(0,c.Z)(t["lineColor"+n])?t["lineColor"+n]=(0,o.Z)(t["lineColor"+n],20):t["lineColor"+n]=(0,l.Z)(t["lineColor"+n],20);for(var i=0;i<t.THEME_COLOR_LIMIT;i++){var r=""+(17-3*i);e+="\n    .section-".concat(i-1," rect, .section-").concat(i-1," path, .section-").concat(i-1," circle, .section-").concat(i-1," path  {\n      fill: ").concat(t["cScale"+i],";\n    }\n    .section-").concat(i-1," text {\n     fill: ").concat(t["cScaleLabel"+i],";\n    }\n    .node-icon-").concat(i-1," {\n      font-size: 40px;\n      color: ").concat(t["cScaleLabel"+i],";\n    }\n    .section-edge-").concat(i-1,"{\n      stroke: ").concat(t["cScale"+i],";\n    }\n    .edge-depth-").concat(i-1,"{\n      stroke-width: ").concat(r,";\n    }\n    .section-").concat(i-1," line {\n      stroke: ").concat(t["cScaleInv"+i]," ;\n      stroke-width: 3;\n    }\n\n    .lineWrapper line{\n      stroke: ").concat(t["cScaleLabel"+i]," ;\n    }\n\n    .disabled, .disabled circle, .disabled text {\n      fill: lightgray;\n    }\n    .disabled text {\n      fill: #efefef;\n    }\n    ")}return e}(t),"\n  .section-root rect, .section-root path, .section-root circle  {\n    fill: ").concat(t.git0,";\n  }\n  .section-root text {\n    fill: ").concat(t.gitBranchLabel0,";\n  }\n  .icon-container {\n    height:100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  .edge {\n    fill: none;\n  }\n  .eventWrapper  {\n   filter: brightness(120%);\n  }\n")}}},5873:function(t,e,n){n.d(e,{Z:function(){return c}});var i=n(6046),r=n(6697),a=function(t){var e=r.Z.parse(t),n=e.r,a=e.g,s=e.b,c=.2126*i.Z.channel.toLinear(n)+.7152*i.Z.channel.toLinear(a)+.0722*i.Z.channel.toLinear(s);return i.Z.lang.round(c)},s=function(t){return a(t)>=.5},c=function(t){return!s(t)}}}]);
//# sourceMappingURL=799.chunk.js.map