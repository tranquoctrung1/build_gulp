'use strict'



$(".demo").on('click',() =>
{
	$("#demo").slideToggle("slow")
})
$("#res").on('click',function()
{
	$(this).attr('href','./about.html')
})


$('.owl-carousel').owlCarousel({
	loop:true,
	margin:10,
	animateIn:"bounceInLeft",
	rtl:true,
	nav:true,
	autoplay: true,
	autoplayTimeout: 3000,
	autoplayHoverPause: true,
	center: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})