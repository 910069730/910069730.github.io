
$(function(){

//页面整体生成
$('.outer').fadeIn(2000,"linear",function(){
  $('.starsBox').css({opacity:0.1});
});
$('#footer').fadeIn(2000);

// 打赏监听
$('#btn_donate').on('click',function(){
  $('#donate_board').addClass('hidden');
  $('#donate_guide').removeClass('hidden');
});

// Mobile nav(移动端侧边栏)
var $container = $('#container'),
isMobileNavAnim = false,
mobileNavAnimDuration = 200;

var startMobileNavAnim = function(){
isMobileNavAnim = true;
};

var stopMobileNavAnim = function(){
setTimeout(function(){
  isMobileNavAnim = false;
}, mobileNavAnimDuration);
}

$('#main-nav-toggle').on('click', function(){
if (isMobileNavAnim) return;

startMobileNavAnim();
$container.toggleClass('mobile-nav-on');
$('#mobile-nav').css({display:"block",transition:"0.5s"});
$('html,body,#wrap').css({transition:"0.5s"});
$('body > canvas').stop().fadeOut();
$('#outer > canvas').stop().fadeOut();
stopMobileNavAnim();
});

$('#wrap').on('click', function(){
if (isMobileNavAnim || !$container.hasClass('mobile-nav-on')) return;

$container.removeClass('mobile-nav-on');
$('body > canvas').stop().fadeIn();
$('#outer > canvas').stop().fadeIn();
});

// Share(分享)
$('body').on('click', function(){
 $('.article-share-box.on').removeClass('on');
}).on('click', '.article-share-link', function(e){
 e.stopPropagation();

 var $this = $(this),
   url = $this.attr('data-url'),
   encodedUrl = encodeURIComponent(url),
   id = 'article-share-box-' + $this.attr('data-id'),
   offset = $this.offset();

 if ($('#' + id).length){
   var box = $('#' + id);

   if (box.hasClass('on')){
     box.removeClass('on');
     return;
   }
 } else {
   var html = [
     '<div id="' + id + '" class="article-share-box">',
       '<input class="article-share-input" value="' + url + '">',
       '<div class="article-share-links">',
         '<a href="https://twitter.com/intent/tweet?url=' + encodedUrl + '" class="article-share-twitter" target="_blank" title="Twitter"></a>',
         '<a href="https://www.facebook.com/sharer.php?u=' + encodedUrl + '" class="article-share-facebook" target="_blank" title="Facebook"></a>',
         '<a href="http://pinterest.com/pin/create/button/?url=' + encodedUrl + '" class="article-share-pinterest" target="_blank" title="Pinterest"></a>',
         '<a href="https://plus.google.com/share?url=' + encodedUrl + '" class="article-share-google" target="_blank" title="Google+"></a>',
       '</div>',
     '</div>'
   ].join('');

   var box = $(html);

   $('body').append(box);
 }

 $('.article-share-box.on').hide();

 box.css({
   top: offset.top + 25,
   left: offset.left
 }).addClass('on');
}).on('click', '.article-share-box', function(e){
 e.stopPropagation();
}).on('click', '.article-share-box-input', function(){
 $(this).select();
}).on('click', '.article-share-box-link', function(e){
 e.preventDefault();
 e.stopPropagation();

 window.open(this.href, 'article-share-box-window-' + Date.now(), 'width=500,height=450');
});

// Caption(图片说明)
$('.article-entry').each(function(i){
 $(this).find('img').each(function(){
   if ($(this).parent().hasClass('fancybox')) return;

   var alt = this.alt;

   if (alt) $(this).after('<span class="caption">' + alt + '</span>');

   $(this).wrap('<a href="' + this.src + '" title="' + alt + '" class="fancybox"></a>');
 });

 $(this).find('.fancybox').each(function(){
   $(this).attr('rel', 'article' + i);
 });
});

if ($.fancybox){
 $('.fancybox').fancybox();
}

//分类页事件监听
$('.article-entry .category-list-item').on('click',function(){
  location.href="https://910069730.github.io"+$(this).find('a').attr('href');
});

//鼠标点击显示文字上浮特效 */
var click_count=0;
$(document).click(function(e){ 
        var text=new Array("HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "Swiper", "Animate" ,"PHP", "MYSQL", "NodeJS", "Vue", "React"); 
        var color=new Array(//颜色数组
            "#C01E22",
            "#0088cc",
            "#FF5E52",
            "#2CDB87",
            "#00D6AC",
            "#EA84FF",
            "#FDAC5F",
            "#FD77B2",
            "#0DAAEA",
            "#C38CFF",
            "#FF926F",
            "#8AC78F",
            "#C7C183",
            "#9370DB",
            "#2f889a",
            "#9e5ae2");
        var n=Math.floor(Math.random()*color.length+1)-1;
        click_count=(click_count+1)%text.length;
        var $i=$("<span>").text(text[click_count]);
        var x=e.clientX,y=e.clientY;//鼠标点击坐标
        $i.css({
            "position":"fixed",
            "z-index":"10000",
            "top":y-15,
            "left":x,
            "color":color[n],
            "font-size":"14px",
            "font-weight":"700",
            "cursor":"default",
            "textShadow":"0px 0px 5px"+color[n]
        });
        $("body").append($i);
        $i.animate({
            "top":y-180,//纵向偏移量
            "opacity":"0"},2000,function(){
        $i.remove();//移除显示的文字
        });
        e.stopPropagation();//防止冒泡})
});

//TOP(返回顶部)
$(".returnTop").click(function(){
  $("html,body").animate({scrollTop:0},1000,function(){
    $(this).css({ boxShadow: "0 0 5px 5px #999", color:"#999",textShadow: "none"});
  });
});

});
console.log("\n %c 相互交流学习一下😀 %c QQ:%c910069730 \n","color: orange; background: #112233; padding:5px 0;text-shadow: 0px 0px 2px yellow;","background: #334455; padding:5px 0;color:#fff;text-shadow: 0px 0px 2px #fff;","background: #334455; padding:5px 0;color:rgb(11,234,235);text-shadow: 0px 0px 5px #258fb8;");
