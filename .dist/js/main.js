"use strict";function MySlider(){var t=0,e=["1","2","3"];setInterval(()=>{$("#show").attr("src",`./img/img${e[t++%3]}.png`)},1e3)}$(".demo").on("click",()=>{$("#demo").slideToggle("slow")}),$("#res").on("click",function(){$(this).attr("href","./about.html")}),$("#show1").on("click",t=>{var e=t.target.src.slice(21);$("#show").attr("src",`.${e}`)}),$("#show2").on("click",t=>{var e=t.target.src.slice(21);$("#show").attr("src",`.${e}`)}),$("#show3").on("click",t=>{var e=t.target.src.slice(21);$("#show").attr("src",`.${e}`).css({width:"30%"})}),$(".owl-carousel").owlCarousel({loop:!0,margin:10,rtl:!0,nav:!0,autoplay:!0,autoplayTimeout:3e3,autoplaySpeed:2e3,autoplayHoverPause:!0,responsive:{0:{items:2},600:{items:4},1000:{items:5}}}),$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(t){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var e=$(this.hash);(e=e.length?e:$("[name="+this.hash.slice(1)+"]")).length&&(t.preventDefault(),$("html, body").animate({scrollTop:e.offset().top},1e3,function(){var t=$(e);if(t.focus(),t.is(":focus"))return!1;t.attr("tabindex","-1"),t.focus()}))}});
if(navigator.userAgent.match(/IEMobile\/10\.0/)){var msViewportStyle=document.createElement("style");msViewportStyle.appendChild(document.createTextNode("@-ms-viewport{width:auto!important}")),document.head.appendChild(msViewportStyle)}$(function(){var e=navigator.userAgent;e.indexOf("Mozilla/5.0")>-1&&e.indexOf("Android ")>-1&&e.indexOf("AppleWebKit")>-1&&-1===e.indexOf("Chrome")&&$("select.form-control").removeClass("form-control").css("width","100%")});