// JavaScript Document

$(document).ready(function(){
	"use strict";
    setTimeout(function() {
		$('.header .subhead').addClass('fadeInDown animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      		$(this).removeClass('fadeInDown');
    	});
		setInterval(function(){
			$('.header .subhead').addClass('pulse').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      			$(this).removeClass('pulse');
    		});
		}, 5000);
	},1500);
	
  	
	if($(window).width() < 767) {
		$('.schedulePod img').attr('src','_img/calender-icon-blue.png');	
	}
	var slideNum = 0;
	$('.headerImg img').each(function(){
		var imgDelay = slideNum * 200;
		$(this).delay(imgDelay).animate({'opacity':'1'}, 800);	
		slideNum++;
	});
	$('.nav .services, .nav .doctors').click(function(e){
		$('.menuBlock').hide();
		if($(this).hasClass('services')){$('.menuServices').show();}else{$('.menuDoctors').show();}
		e.preventDefault();
		$('#menu').animate({'bottom':'0%'});
	});
	$('.closeMenu').click(function(){
		$('#menu').animate({'bottom':'100%'});
	});
	$('.accord .title').click(function(){
		$(this).toggleClass('active').siblings('.slide').slideToggle();
	});
	
	$('select').each(function(){
		var $this = $(this), numberOfOptions = $(this).children('option').length;
	  
		$this.addClass('select-hidden'); 
		$this.wrap('<div class="select"></div>');
		$this.after('<div class="select-styled"></div>');
	
		var $styledSelect = $this.next('div.select-styled');
		$styledSelect.text($this.children('option').eq(0).text());
	  
		var $list = $('<ul />', {
			'class': 'select-options'
		}).insertAfter($styledSelect);
	  
		for (var i = 0; i < numberOfOptions; i++) {
			$('<li />', {
				text: $this.children('option').eq(i).text(),
				rel: $this.children('option').eq(i).val()
			}).appendTo($list);
		}
	  
		var $listItems = $list.children('li');
	  
		$styledSelect.click(function(e) {
			e.stopPropagation();
			$('div.select-styled.active').each(function(){
				$(this).removeClass('active').next('ul.select-options').hide();
			});
			$(this).toggleClass('active').next('ul.select-options').toggle();
		});
	  
		$listItems.click(function(e) {
			e.stopPropagation();
			$styledSelect.text($(this).text()).removeClass('active');
			$this.val($(this).attr('rel'));
			$list.hide();
			//console.log($this.val());
		});
	  
		$(document).click(function() {
			$styledSelect.removeClass('active');
			$list.hide();
		});
	
	});
	
});