'use strict'



$(".demo").on('click',() =>
{
	$("#demo").slideToggle("slow")
})
$("#res").on('click',function()
{
	$(this).attr('href','./about.html')
})

$("#show1").on('click',(e) =>{
	var x = e.target.src.slice(21);
	$("#show").attr('src',`.${x}`)
})
$("#show2").on('click',(e) =>{
	var x = e.target.src.slice(21);
	$("#show").attr('src',`.${x}`)
})
$("#show3").on('click',(e) =>{
	var x = e.target.src.slice(21);
	$("#show").attr('src',`.${x}`).css({
		"width":"30%"
	})	
})
function MySlider()
{
	var i = 0 ;
	var index =["1","2","3"]
	setInterval(() => {
		$('#show').attr('src',`./img/img${index[i++%3]}.png`)
	}, 1000);
}


// this function make a tag don't switch when click it 
// $('a').on('click',(e) =>
// {
// 	e.preventDefault()
// 	$('a').append("  Hello !")
// })


$('.owl-carousel').owlCarousel({
	loop:true,
	margin:10,
	rtl:true,
	nav:true,
	autoplay: true,
	autoplayTimeout: 3000,
	autoplaySpeed: 2000,
	autoplayHoverPause: true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:4
        },
        1000:{
            items:5
        }
    }
})