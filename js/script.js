"use strict";$(function(){var a=$("#container"),t=!1,e=!0;$("#main-nav-toggle").on("click",function(){if(e){if(t)return;t=!0,$("html,body").animate({scrollTop:$("#topAll").height()-60}),$("#main-nav-toggle").get(0).style.opacity="1",a.toggleClass("mobile-nav-on"),$("#mobile-nav").css({left:0,transition:"0.5s"}),$("html,body,#wrap").css({transition:"0.5s"}),$("body > canvas").stop().fadeOut(),$("#outer > canvas").stop().fadeOut(),setTimeout(function(){t=!1},200),e=!1}else{if(t||!a.hasClass("mobile-nav-on"))return;a.removeClass("mobile-nav-on"),$("#main-nav-toggle").css({opacity:.6}),$("#mobile-nav").css({left:"-30%"}),$("body > canvas").stop().fadeIn(),$("#outer > canvas").stop().fadeIn(),e=!0}}),$("#wrap").on("click",function(){!t&&a.hasClass("mobile-nav-on")&&(a.removeClass("mobile-nav-on"),$("#main-nav-toggle").css({opacity:.6}),$("#mobile-nav").css({left:"-30%"}),$("body > canvas").stop().fadeIn(),$("#outer > canvas").stop().fadeIn(),e=!0)}),$("#nav-search-btn").on("click",function(){$("#dplayerClose").css({display:"none"}),$("#dplayerCBtn").hasClass("dplayer-c2-btn")&&($("#dplayerCBtn").removeClass("dplayer-c2-btn").addClass("dplayer-c1-btn"),$(".aplayer").css({display:"block"}),$(".dplayer-play-icon").click()),$("#daodream-launcher").css({height:"0",transition:"none"}),$("#webTop").css({display:"none"}),$("#dplayer-video-container").css({opacity:1})}),$(".popup-btn-close").on("click",function(){$("#daodream-launcher").css({height:"48px",transition:"none"}),$("#webTop").css({display:"block"}),$("#authorMessageBox").css({display:"block"}),$("#dplayer-video-container").css({opacity:0})}),$("#downIT").on("click",function(){$("html,body").animate({scrollTop:$("#topAll").height()-60})}),(new Object).talkShow=void setInterval(function(){$("html,body").scrollTop()>=$("#topAll").height()-64?($("#daodream-launcher").css({display:"block"}),$("#live2d-widget").css({opacity:1,transition:".5s"})):($("#daodream-launcher").css({display:"none"}),$("#live2d-widget").css({opacity:0,transition:".5s"}))},10),$("#theme-cut").on("click",function(){$("#all").css({transition:"1s"}).toggleClass("theme-a")}),$("#btn_donate").on("click",function(){$("#donate_board").addClass("hidden"),$("#donate_guide").removeClass("hidden")}),$("body").on("click",function(){$(".article-share-box.on").removeClass("on")}).on("click",".article-share-link",function(a){a.stopPropagation();var t=$(this),e=t.attr("data-url"),o=encodeURIComponent(e),n="article-share-box-"+t.attr("data-id"),i=t.offset();if($("#"+n).length){if((c=$("#"+n)).hasClass("on"))return void c.removeClass("on")}else{var s=['<div id="'+n+'" class="article-share-box">','<input class="article-share-input" value="'+e+'">','<div class="article-share-links">','<a href="https://twitter.com/intent/tweet?url='+o+'" class="article-share-twitter" target="_blank" title="Twitter"></a>','<a href="https://www.facebook.com/sharer.php?u='+o+'" class="article-share-facebook" target="_blank" title="Facebook"></a>','<a href="http://pinterest.com/pin/create/button/?url='+o+'" class="article-share-pinterest" target="_blank" title="Pinterest"></a>','<a href="https://plus.google.com/share?url='+o+'" class="article-share-google" target="_blank" title="Google+"></a>',"</div>","</div>"].join(""),c=$(s);$("body").append(c)}$(".article-share-box.on").hide(),c.css({top:i.top+25,left:i.left}).addClass("on")}).on("click",".article-share-box",function(a){a.stopPropagation()}).on("click",".article-share-box-input",function(){$(this).select()}).on("click",".article-share-box-link",function(a){a.preventDefault(),a.stopPropagation(),window.open(this.href,"article-share-box-window-"+Date.now(),"width=500,height=450")}),$(".article-entry").each(function(a){$(this).find("img[data-original]").each(function(){var a;$(this).parent().hasClass("fancybox")||((a=this.alt)&&$(this).after('<span class="caption">'+a+"</span>"),$(this).wrap('<a href="'+$(this).attr("data-original")+'" title="'+a+'" class="fancybox"></a>'))}),$(this).find(".fancybox").each(function(){$(this).attr("rel","article"+a)})}),$.fancybox&&$(".fancybox").fancybox(),$(".article-entry .category-list-item").on("click",function(){location.href=location.protocol+"//"+location.host+$(this).find("a").attr("href")});var c=0;$(document).click(function(a){var t=new Array("HTML","CSS","JavaScript","jQuery","Bootstrap","Swiper","Animate","PHP","MYSQL","NodeJS","Vue","React"),e=new Array("#C01E22","#0088cc","#FF5E52","#2CDB87","#00D6AC","#EA84FF","#FDAC5F","#FD77B2","#0DAAEA","#C38CFF","#FF926F","#8AC78F","#C7C183","#9370DB","#2f889a","#9e5ae2"),o=Math.floor(Math.random()*e.length+1)-1;c=(c+1)%t.length;var n=$("<span>").text(t[c]),i=a.clientX,s=a.clientY;n.css({position:"fixed","z-index":"10000",top:s-15,left:i,color:e[o],"font-size":"14px","font-weight":"700",cursor:"default",textShadow:"0px 0px 5px"+e[o]}),$("body").append(n),n.animate({top:s-180,opacity:"0"},2e3,function(){n.remove()}),a.stopPropagation()})});