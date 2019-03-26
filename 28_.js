/*! layer-v3.0.1 Web弹层组件 MIT License  http://layer.layui.com/  By 贤心 */
;!function(m,u){var j,g,q=m.layui&&layui.define,d={getPath:function(){var f=document.scripts,c=f[f.length-1],a=c.src;if(!c.getAttribute("merge")){return a.substring(0,a.lastIndexOf("/")+1)}}(),config:{},end:{},minIndex:0,minLeft:[],btn:["&#x786E;&#x5B9A;","&#x53D6;&#x6D88;"],type:["dialog","page","iframe","loading","tips"]},b={v:"3.0.1",ie:function(){var a=navigator.userAgent.toLowerCase();return !!(m.ActiveXObject||"ActiveXObject" in m)&&((a.match(/msie\s(\d+)/)||[])[1]||"11")}(),index:m.layer&&m.layer.v?100000:0,path:d.getPath,config:function(c,a){return c=c||{},b.cache=d.config=j.extend({},d.config,c),b.path=d.config.path||b.path,"string"==typeof c.extend&&(c.extend=[c.extend]),d.config.path&&b.ready(),c.extend?(q?layui.addcss("modules/layer/"+c.extend):b.link("skin/"+c.extend),this):this},link:function(A,i,z){if(b.path){var e=j("head")[0],r=document.createElement("link");"string"==typeof i&&(z=i);var B=(z||A).replace(/\.|\//g,""),w="layuicss-"+B,y=0;r.rel="stylesheet",r.href=b.path+A,r.id=w,j("#"+w)[0]||e.appendChild(r),"function"==typeof i&&!function x(){return ++y>80?m.console&&console.error("layer.css: Invalid"):void (1989===parseInt(j("#"+w).css("width"))?i():setTimeout(x,100))}()}},ready:function(f){var c="skinlayercss",a="1110";return q?layui.addcss("modules/layer/default/layer.css?v="+b.v+a,f,c):b.link("skin/default/layer.css?v="+b.v+a,f,c),this},alert:function(i,f,l){var c="function"==typeof f;return c&&(l=f),b.open(j.extend({content:i,yes:l},c?{}:f))},confirm:function(o,i,r,f){var c="function"==typeof i;return c&&(f=r,r=i),b.open(j.extend({content:o,btn:d.btn,yes:r,btn2:f},c?{}:i))},msg:function(s,x,o){var i="function"==typeof x,r=d.config.skin,w=(r?r+" "+r+"-msg":"")||"layui-layer-msg",t=v.anim.length-1;return i&&(o=x),b.open(j.extend({content:s,time:3000,shade:!1,skin:w,title:!1,closeBtn:!1,btn:!1,resize:!1,end:o},i&&!d.config.skin?{skin:w+" layui-layer-hui",anim:t}:function(){return x=x||{},(x.icon===-1||x.icon===u&&!d.config.skin)&&(x.skin=w+" "+(x.skin||"layui-layer-hui")),x}()))},load:function(c,a){return b.open(j.extend({type:3,icon:c||0,resize:!1,shade:0.01},a))},tips:function(c,a,f){return b.open(j.extend({type:4,content:[c,a],closeBtn:!1,time:3000,shade:!1,resize:!1,fixed:!1,maxWidth:210},f))}},h=function(c){var a=this;a.index=++b.index,a.config=j.extend({},a.config,d.config,c),document.body?a.creat():setTimeout(function(){a.creat()},50)};h.pt=h.prototype;var v=["layui-layer",".layui-layer-title",".layui-layer-main",".layui-layer-dialog","layui-layer-iframe","layui-layer-content","layui-layer-btn","layui-layer-close"];v.anim=["layer-anim","layer-anim-01","layer-anim-02","layer-anim-03","layer-anim-04","layer-anim-05","layer-anim-06"],h.pt.config={type:0,shade:0.3,fixed:!0,move:v[1],title:"&#x4FE1;&#x606F;",offset:"auto",area:"auto",closeBtn:1,time:0,zIndex:19891014,maxWidth:360,anim:0,icon:-1,moveType:1,resize:!0,scrollbar:!0,tips:2},h.pt.vessel=function(x,B){var o=this,A=o.index,i=o.config,s=i.zIndex+A,w="object"==typeof i.title,z=i.maxmin&&(1===i.type||2===i.type),y=i.title?'<div class="layui-layer-title" style="'+(w?i.title[1]:"")+'">'+(w?i.title[0]:i.title)+"</div>":"";return i.zIndex=s,B([i.shade?'<div class="layui-layer-shade" id="layui-layer-shade'+A+'" times="'+A+'" style="'+("z-index:"+(s-1)+"; background-color:"+(i.shade[1]||"#000")+"; opacity:"+(i.shade[0]||i.shade)+"; filter:alpha(opacity="+(100*i.shade[0]||100*i.shade)+");")+'"></div>':"",'<div class="'+v[0]+(" layui-layer-"+d.type[i.type])+(0!=i.type&&2!=i.type||i.shade?"":" layui-layer-border")+" "+(i.skin||"")+'" id="'+v[0]+A+'" type="'+d.type[i.type]+'" times="'+A+'" showtime="'+i.time+'" conType="'+(x?"object":"string")+'" style="z-index: '+s+"; width:"+i.area[0]+";height:"+i.area[1]+(i.fixed?"":";position:absolute;")+'">'+(x&&2!=i.type?"":y)+'<div id="'+(i.id||"")+'" class="layui-layer-content'+(0==i.type&&i.icon!==-1?" layui-layer-padding":"")+(3==i.type?" layui-layer-loading"+i.icon:"")+'">'+(0==i.type&&i.icon!==-1?'<i class="layui-layer-ico layui-layer-ico'+i.icon+'"></i>':"")+(1==i.type&&x?"":i.content||"")+'</div><span class="layui-layer-setwin">'+function(){var a=z?'<a class="layui-layer-min" href="javascript:;"><cite></cite></a><a class="layui-layer-ico layui-layer-max" href="javascript:;"></a>':"";return i.closeBtn&&(a+='<a class="layui-layer-ico '+v[7]+" "+v[7]+(i.title?i.closeBtn:4==i.type?"1":"2")+'" href="javascript:;"></a>'),a}()+"</span>"+(i.btn?function(){var f="";"string"==typeof i.btn&&(i.btn=[i.btn]);for(var c=0,a=i.btn.length;c<a;c++){f+='<a class="'+v[6]+c+'">'+i.btn[c]+"</a>"}return'<div class="'+v[6]+" layui-layer-btn-"+(i.btnAlign||"")+'">'+f+"</div>"}():"")+(i.resize?'<span class="layui-layer-resize"></span>':"")+"</div>"],y,j('<div class="layui-layer-move"></div>')),o},h.pt.creat=function(){var s=this,o=s.config,n=s.index,i=o.content,r="object"==typeof i,w=j("body");if(!j("#"+o.id)[0]){switch("string"==typeof o.area&&(o.area="auto"===o.area?["",""]:[o.area,""]),o.shift&&(o.anim=o.shift),6==b.ie&&(o.fixed=!1),o.type){case 0:o.btn="btn" in o?o.btn:d.btn[0],b.closeAll("dialog");break;case 2:var i=o.content=r?o.content:[o.content||"http://layer.layui.com","auto"];o.content='<iframe scrolling="'+(o.content[1]||"auto")+'" allowtransparency="true" id="'+v[4]+n+'" name="'+v[4]+n+'" onload="this.className=\'\';" class="layui-layer-load" frameborder="0" src="'+o.content[0]+'"></iframe>';break;case 3:delete o.title,delete o.closeBtn,o.icon===-1&&0===o.icon,b.closeAll("loading");break;case 4:r||(o.content=[o.content,"body"]),o.follow=o.content[1],o.content=o.content[0]+'<i class="layui-layer-TipsG"></i>',delete o.title,o.tips="object"==typeof o.tips?o.tips:[o.tips,!0],o.tipsMore||b.closeAll("tips")}s.vessel(r,function(e,a,c){w.append(e[0]),r?function(){2==o.type||4==o.type?function(){j("body").append(e[1])}():function(){i.parents("."+v[0])[0]||(i.data("display",i.css("display")).show().addClass("layui-layer-wrap").wrap(e[1]),j("#"+v[0]+n).find("."+v[5]).before(a))}()}():w.append(e[1]),j(".layui-layer-move")[0]||w.append(d.moveElem=c),s.layero=j("#"+v[0]+n),o.scrollbar||v.html.css("overflow","hidden").attr("layer-full",n)}).auto(n),2==o.type&&6==b.ie&&s.layero.find("iframe").attr("src",i[0]),4==o.type?s.tips():s.offset(),o.fixed&&g.on("resize",function(){s.offset(),(/^\d+%$/.test(o.area[0])||/^\d+%$/.test(o.area[1]))&&s.auto(n),4==o.type&&s.tips()}),o.time<=0||setTimeout(function(){b.close(s.index)},o.time),s.move().callback(),v.anim[o.anim]&&s.layero.addClass(v.anim[o.anim]).data("anim",!0)}},h.pt.auto=function(w){function r(a){a=i.find(a),a.height(s[1]-z-x-2*(0|parseFloat(a.css("padding"))))}var n=this,y=n.config,i=j("#"+v[0]+w);""===y.area[0]&&y.maxWidth>0&&(b.ie&&b.ie<8&&y.btn&&i.width(i.innerWidth()),i.outerWidth()>y.maxWidth&&i.width(y.maxWidth));var s=[i.innerWidth(),i.innerHeight()],z=i.find(v[1]).outerHeight()||0,x=i.find("."+v[6]).outerHeight()||0;switch(y.type){case 2:r("iframe");break;default:""===y.area[1]?y.fixed&&s[1]>=g.height()&&(s[1]=g.height(),r("."+v[5])):r("."+v[5])}return n},h.pt.offset=function(){var n=this,l=n.config,f=n.layero,c=[f.outerWidth(),f.outerHeight()],r="object"==typeof l.offset;n.offsetTop=(g.height()-c[1])/2,n.offsetLeft=(g.width()-c[0])/2,r?(n.offsetTop=l.offset[0],n.offsetLeft=l.offset[1]||n.offsetLeft):"auto"!==l.offset&&("t"===l.offset?n.offsetTop=0:"r"===l.offset?n.offsetLeft=g.width()-c[0]:"b"===l.offset?n.offsetTop=g.height()-c[1]:"l"===l.offset?n.offsetLeft=0:"lt"===l.offset?(n.offsetTop=0,n.offsetLeft=0):"lb"===l.offset?(n.offsetTop=g.height()-c[1],n.offsetLeft=0):"rt"===l.offset?(n.offsetTop=0,n.offsetLeft=g.width()-c[0]):"rb"===l.offset?(n.offsetTop=g.height()-c[1],n.offsetLeft=g.width()-c[0]):n.offsetTop=l.offset),l.fixed||(n.offsetTop=/%$/.test(n.offsetTop)?g.height()*parseFloat(n.offsetTop)/100:parseFloat(n.offsetTop),n.offsetLeft=/%$/.test(n.offsetLeft)?g.width()*parseFloat(n.offsetLeft)/100:parseFloat(n.offsetLeft),n.offsetTop+=g.scrollTop(),n.offsetLeft+=g.scrollLeft()),f.attr("minLeft")&&(n.offsetTop=g.height()-(f.find(v[1]).outerHeight()||0),n.offsetLeft=f.css("left")),f.css({top:n.offsetTop,left:n.offsetLeft})},h.pt.tips=function(){var y=this,s=y.config,n=y.layero,z=[n.outerWidth(),n.outerHeight()],w=j(s.follow);w[0]||(w=j("body"));var i={width:w.outerWidth(),height:w.outerHeight(),top:w.offset().top,left:w.offset().left},x=n.find(".layui-layer-TipsG"),A=s.tips[0];s.tips[1]||x.remove(),i.autoLeft=function(){i.left+z[0]-g.width()>0?(i.tipLeft=i.left+i.width-z[0],x.css({right:12,left:"auto"})):i.tipLeft=i.left},i.where=[function(){i.autoLeft(),i.tipTop=i.top-z[1]-10,x.removeClass("layui-layer-TipsB").addClass("layui-layer-TipsT").css("border-right-color",s.tips[1])},function(){i.tipLeft=i.left+i.width+10,i.tipTop=i.top,x.removeClass("layui-layer-TipsL").addClass("layui-layer-TipsR").css("border-bottom-color",s.tips[1])},function(){i.autoLeft(),i.tipTop=i.top+i.height+10,x.removeClass("layui-layer-TipsT").addClass("layui-layer-TipsB").css("border-right-color",s.tips[1])},function(){i.tipLeft=i.left-z[0]-10,i.tipTop=i.top,x.removeClass("layui-layer-TipsR").addClass("layui-layer-TipsL").css("border-bottom-color",s.tips[1])}],i.where[A-1](),1===A?i.top-(g.scrollTop()+z[1]+16)<0&&i.where[2]():2===A?g.width()-(i.left+i.width+z[0]+16)>0||i.where[3]():3===A?i.top-g.scrollTop()+i.height+z[1]+16-g.height()>0&&i.where[0]():4===A&&z[0]+16-i.left>0&&i.where[1](),n.find("."+v[5]).css({"background-color":s.tips[1],"padding-right":s.closeBtn?"30px":""}),n.css({left:i.tipLeft-(s.fixed?g.scrollLeft():0),top:i.tipTop-(s.fixed?g.scrollTop():0)})},h.pt.move=function(){var x=this,o=x.config,n=j(document),i=x.layero,r=i.find(o.move),w=i.find(".layui-layer-resize"),y={};return o.move&&r.css("cursor","move"),r.on("mousedown",function(a){a.preventDefault(),o.move&&(y.moveStart=!0,y.offset=[a.clientX-parseFloat(i.css("left")),a.clientY-parseFloat(i.css("top"))],d.moveElem.css("cursor","move").show())}),w.on("mousedown",function(a){a.preventDefault(),y.resizeStart=!0,y.offset=[a.clientX,a.clientY],y.area=[i.outerWidth(),i.outerHeight()],d.moveElem.css("cursor","se-resize").show()}),n.on("mousemove",function(e){if(y.moveStart){var c=e.clientX-y.offset[0],A=e.clientY-y.offset[1],l="fixed"===i.css("position");if(e.preventDefault(),y.stX=l?0:g.scrollLeft(),y.stY=l?0:g.scrollTop(),!o.moveOut){var t=g.width()-i.outerWidth()+y.stX,z=g.height()-i.outerHeight()+y.stY;c<y.stX&&(c=y.stX),c>t&&(c=t),A<y.stY&&(A=y.stY),A>z&&(A=z)}i.css({left:c,top:A})}if(o.resize&&y.resizeStart){var c=e.clientX-y.offset[0],A=e.clientY-y.offset[1];e.preventDefault(),b.style(x.index,{width:y.area[0]+c,height:y.area[1]+A}),y.isResize=!0}}).on("mouseup",function(a){y.moveStart&&(delete y.moveStart,d.moveElem.hide(),o.moveEnd&&o.moveEnd()),y.resizeStart&&(delete y.resizeStart,d.moveElem.hide())}),x},h.pt.callback=function(){function i(){var a=c.cancel&&c.cancel(f.index,l);a===!1||b.close(f.index)}var f=this,l=f.layero,c=f.config;f.openLayer(),c.success&&(2==c.type?l.find("iframe").on("load",function(){c.success(l,f.index)}):c.success(l,f.index)),6==b.ie&&f.IE6(l),l.find("."+v[6]).children("a").on("click",function(){var a=j(this).index();if(0===a){c.yes?c.yes(f.index,l):c.btn1?c.btn1(f.index,l):b.close(f.index)}else{var n=c["btn"+(a+1)]&&c["btn"+(a+1)](f.index,l);n===!1||b.close(f.index)}}),l.find("."+v[7]).on("click",i),c.shadeClose&&j("#layui-layer-shade"+f.index).on("click",function(){b.close(f.index)}),l.find(".layui-layer-min").on("click",function(){var a=c.min&&c.min(l);a===!1||b.min(f.index,c)}),l.find(".layui-layer-max").on("click",function(){j(this).hasClass("layui-layer-maxmin")?(b.restore(f.index),c.restore&&c.restore(l)):(b.full(f.index,c),setTimeout(function(){c.full&&c.full(l)},100))}),c.end&&(d.end[f.index]=c.end)},d.reselect=function(){j.each(j("select"),function(c,a){var f=j(this);f.parents("."+v[0])[0]||1==f.attr("layer")&&j("."+v[0]).length<1&&f.removeAttr("layer").show(),f=null})},h.pt.IE6=function(a){j("select").each(function(f,c){var i=j(this);i.parents("."+v[0])[0]||"none"===i.css("display")||i.attr({layer:"1"}).hide(),i=null})},h.pt.openLayer=function(){var a=this;b.zIndex=a.config.zIndex,b.setTop=function(f){var c=function(){b.zIndex++,f.css("z-index",b.zIndex+1)};return b.zIndex=parseInt(f[0].style.zIndex),f.on("mousedown",c),b.zIndex}},d.record=function(c){var a=[c.width(),c.height(),c.position().top,c.position().left+parseFloat(c.css("margin-left"))];c.find(".layui-layer-max").addClass("layui-layer-maxmin"),c.attr({area:a})},d.rescollbar=function(a){v.html.attr("layer-full")==a&&(v.html[0].style.removeProperty?v.html[0].style.removeProperty("overflow"):v.html[0].style.removeAttribute("overflow"),v.html.removeAttr("layer-full"))},m.layer=b,b.getChildFrame=function(c,a){return a=a||j("."+v[4]).attr("times"),j("#"+v[0]+a).find("iframe").contents().find(c)},b.getFrameIndex=function(a){return j("#"+a).parents("."+v[4]).attr("times")},b.iframeAuto=function(i){if(i){var f=b.getChildFrame("html",i).outerHeight(),r=j("#"+v[0]+i),c=r.find(v[1]).outerHeight()||0,l=r.find("."+v[6]).outerHeight()||0;r.css({height:f+c+l}),r.find("iframe").css({height:f})}},b.iframeSrc=function(c,a){j("#"+v[0]+c).find("iframe").attr("src",a)},b.style=function(y,s,A){var o=j("#"+v[0]+y),w=o.find(".layui-layer-content"),i=o.attr("type"),x=o.find(v[1]).outerHeight()||0,z=o.find("."+v[6]).outerHeight()||0;o.attr("minLeft");i!==d.type[3]&&i!==d.type[4]&&(A||(parseFloat(s.width)<=260&&(s.width=260),parseFloat(s.height)-x-z<=64&&(s.height=64+x+z)),o.css(s),z=o.find("."+v[6]).outerHeight(),i===d.type[2]?o.find("iframe").css({height:parseFloat(s.height)-x-z}):w.css({height:parseFloat(s.height)-x-z-parseFloat(w.css("padding-top"))-parseFloat(w.css("padding-bottom"))}))},b.min=function(s,o){var n=j("#"+v[0]+s),i=n.find(v[1]).outerHeight()||0,r=n.attr("minLeft")||181*d.minIndex+"px",w=n.css("position");d.record(n),d.minLeft[0]&&(r=d.minLeft[0],d.minLeft.shift()),n.attr("position",w),b.style(s,{width:180,height:i,left:r,top:g.height()-i,position:"fixed",overflow:"hidden"},!0),n.find(".layui-layer-min").hide(),"page"===n.attr("type")&&n.find(v[4]).hide(),d.rescollbar(s),n.attr("minLeft")||d.minIndex++,n.attr("minLeft",r)},b.restore=function(c){var a=j("#"+v[0]+c),f=a.attr("area").split(",");a.attr("type");b.style(c,{width:parseFloat(f[0]),height:parseFloat(f[1]),top:parseFloat(f[2]),left:parseFloat(f[3]),position:a.attr("position"),overflow:"visible"},!0),a.find(".layui-layer-max").removeClass("layui-layer-maxmin"),a.find(".layui-layer-min").show(),"page"===a.attr("type")&&a.find(v[4]).show(),d.rescollbar(c)},b.full=function(i){var f,c=j("#"+v[0]+i);d.record(c),v.html.attr("layer-full")||v.html.css("overflow","hidden").attr("layer-full",i),clearTimeout(f),f=setTimeout(function(){var a="fixed"===c.css("position");b.style(i,{top:a?0:g.scrollTop(),left:a?0:g.scrollLeft(),width:g.width(),height:g.height()},!0),c.find(".layui-layer-min").hide()},100)},b.title=function(c,a){var f=j("#"+v[0]+(a||b.index)).find(v[1]);f.html(c)},b.close=function(s){var o=j("#"+v[0]+s),w=o.attr("type"),i="layer-anim-close";if(o[0]){var c="layui-layer-wrap",r=function(){if(w===d.type[1]&&"object"===o.attr("conType")){o.children(":not(."+v[5]+")").remove();for(var e=o.find("."+c),l=0;l<2;l++){e.unwrap()}e.css("display",e.data("display")).removeClass(c)}else{if(w===d.type[2]){try{var n=j("#"+v[4]+s)[0];n.contentWindow.document.write(""),n.contentWindow.close(),o.find("."+v[5])[0].removeChild(n)}catch(t){}}o[0].innerHTML="",o.remove()}"function"==typeof d.end[s]&&d.end[s](),delete d.end[s]};o.data("anim")&&o.addClass(i),j("#layui-layer-moves, #layui-layer-shade"+s).remove(),6==b.ie&&d.reselect(),d.rescollbar(s),o.attr("minLeft")&&(d.minIndex--,d.minLeft.push(o.attr("minLeft"))),setTimeout(function(){r()},b.ie&&b.ie<10||!o.data("anim")?0:200)}},b.closeAll=function(a){j.each(j("."+v[0]),function(){var c=j(this),e=a?c.attr("type")===a:1;e&&b.close(c.attr("times")),e=null})};var k=b.cache||{},p=function(a){return k.skin?" "+k.skin+" "+k.skin+"-"+a:""};b.prompt=function(r,i){var f="";if(r=r||{},"function"==typeof r&&(i=r),r.area){var w=r.area;f='style="width: '+w[0]+"; height: "+w[1]+';"',delete r.area}var c,n=2==r.formType?'<textarea class="layui-layer-input"'+f+">"+(r.value||"")+"</textarea>":function(){return'<input type="'+(1==r.formType?"password":"text")+'" class="layui-layer-input" value="'+(r.value||"")+'">'}();return b.open(j.extend({type:1,btn:["&#x786E;&#x5B9A;","&#x53D6;&#x6D88;"],content:n,skin:"layui-layer-prompt"+p("prompt"),maxWidth:g.width(),success:function(a){c=a.find(".layui-layer-input"),c.focus()},resize:!1,yes:function(a){var e=c.val();""===e?c.focus():e.length>(r.maxlength||500)?b.tips("&#x6700;&#x591A;&#x8F93;&#x5165;"+(r.maxlength||500)+"&#x4E2A;&#x5B57;&#x6570;",c,{tips:1}):i&&i(e,a,c)}},r))},b.tab=function(c){c=c||{};var a=c.tab||{};return b.open(j.extend({type:1,skin:"layui-layer-tab"+p("tab"),resize:!1,title:function(){var l=a.length,f=1,o="";if(l>0){for(o='<span class="layui-layer-tabnow">'+a[0].title+"</span>";f<l;f++){o+="<span>"+a[f].title+"</span>"}}return o}(),content:'<ul class="layui-layer-tabmain">'+function(){var l=a.length,f=1,o="";if(l>0){for(o='<li class="layui-layer-tabli xubox_tab_layer">'+(a[0].content||"no content")+"</li>";f<l;f++){o+='<li class="layui-layer-tabli">'+(a[f].content||"no  content")+"</li>"}}return o}()+"</ul>",success:function(f){var i=f.find(".layui-layer-title").children(),e=f.find(".layui-layer-tabmain").children();i.on("mousedown",function(l){l.stopPropagation?l.stopPropagation():l.cancelBubble=!0;var s=j(this),r=s.index();s.addClass("layui-layer-tabnow").siblings().removeClass("layui-layer-tabnow"),e.eq(r).show().siblings().hide(),"function"==typeof c.change&&c.change(r)})}},c))},b.photos=function(C,i,A){function e(l,f,a){var o=new Image;return o.src=l,o.complete?f(o):(o.onload=function(){o.onload=null,f(o)},void (o.onerror=function(n){o.onerror=null,a(n)}))}var r={};if(C=C||{},C.photos){var D=C.photos.constructor===Object,w=D?C.photos:{},x=w.data||[],B=w.start||0;if(r.imgIndex=(0|B)+1,C.img=C.img||"img",D){if(0===x.length){return b.msg("&#x6CA1;&#x6709;&#x56FE;&#x7247;")}}else{var z=j(C.photos),c=function(){x=[],z.find(C.img).each(function(f){var a=j(this);a.attr("layer-index",f),x.push({alt:a.attr("alt"),pid:a.attr("layer-pid"),src:a.attr("layer-src")||a.attr("src"),thumb:a.attr("src")})})};if(c(),0===x.length){return}if(i||z.on("click",C.img,function(){var a=j(this),f=a.attr("layer-index");b.photos(j.extend(C,{photos:{start:f,data:x,tab:C.tab},full:C.full}),!0),c()}),!i){return}}r.imgprev=function(a){r.imgIndex--,r.imgIndex<1&&(r.imgIndex=x.length),r.tabimg(a)},r.imgnext=function(f,a){r.imgIndex++,r.imgIndex>x.length&&(r.imgIndex=1,a)||r.tabimg(f)},r.keyup=function(f){if(!r.end){var a=f.keyCode;f.preventDefault(),37===a?r.imgprev(!0):39===a?r.imgnext(!0):27===a&&b.close(r.index)}},r.tabimg=function(a){x.length<=1||(w.start=r.imgIndex-1,b.close(r.index),b.photos(C,!0,a))},r.event=function(){r.bigimg.hover(function(){r.imgsee.show()},function(){r.imgsee.hide()}),r.bigimg.find(".layui-layer-imgprev").on("click",function(a){a.preventDefault(),r.imgprev()}),r.bigimg.find(".layui-layer-imgnext").on("click",function(a){a.preventDefault(),r.imgnext()}),j(document).on("keyup",r.keyup)},r.loadi=b.load(1,{shade:!("shade" in C)&&0.9,scrollbar:!1}),e(x[B].src,function(a){b.close(r.loadi),r.index=b.open(j.extend({type:1,area:function(){var f=[a.width,a.height],n=[j(m).width()-100,j(m).height()-100];if(!C.full&&(f[0]>n[0]||f[1]>n[1])){var l=[f[0]/n[0],f[1]/n[1]];l[0]>l[1]?(f[0]=f[0]/l[0],f[1]=f[1]/l[0]):l[0]<l[1]&&(f[0]=f[0]/l[1],f[1]=f[1]/l[1])}return[f[0]+"px",f[1]+"px"]}(),title:!1,shade:0.9,shadeClose:!0,closeBtn:!1,move:".layui-layer-phimg img",moveType:1,scrollbar:!1,moveOut:!0,anim:5*Math.random()|0,skin:"layui-layer-photos"+p("photos"),content:'<div class="layui-layer-phimg"><img src="'+x[B].src+'" alt="'+(x[B].alt||"")+'" layer-pid="'+x[B].pid+'"><div class="layui-layer-imgsee">'+(x.length>1?'<span class="layui-layer-imguide"><a href="javascript:;" class="layui-layer-iconext layui-layer-imgprev"></a><a href="javascript:;" class="layui-layer-iconext layui-layer-imgnext"></a></span>':"")+'<div class="layui-layer-imgbar" style="display:'+(A?"block":"")+'"><span class="layui-layer-imgtit"><a href="javascript:;">'+(x[B].alt||"")+"</a><em>"+r.imgIndex+"/"+x.length+"</em></span></div></div></div>",success:function(l,f){r.bigimg=l.find(".layui-layer-phimg"),r.imgsee=l.find(".layui-layer-imguide,.layui-layer-imgbar"),r.event(l),C.tab&&C.tab(x[B],l)},end:function(){r.end=!0,j(document).off("keyup",r.keyup)}},C))},function(){b.close(r.loadi),b.msg("&#x5F53;&#x524D;&#x56FE;&#x7247;&#x5730;&#x5740;&#x5F02;&#x5E38;<br>&#x662F;&#x5426;&#x7EE7;&#x7EED;&#x67E5;&#x770B;&#x4E0B;&#x4E00;&#x5F20;&#xFF1F;",{time:30000,btn:["&#x4E0B;&#x4E00;&#x5F20;","&#x4E0D;&#x770B;&#x4E86;"],yes:function(){x.length>1&&r.imgnext(!0,!0)}})})}},d.run=function(a){j=a,g=j(m),v.html=j("html"),b.open=function(f){var c=new h(f);return c.index}},m.layui&&layui.define?(b.ready(),layui.define("jquery",function(a){b.path=layui.cache.dir,d.run(layui.jquery),m.layer=b,a("layer",b)})):"function"==typeof define?define(["jquery"],function(){return d.run(m.jQuery),b}):function(){d.run(m.jQuery),b.ready()}()}(window);