	// Define object containing your Raphael path data.
	// goto http://lazylinepainter.info to convert your svg into a svgData object.
	
	//preLogo svg paint
	var svgData = { 
		"preLogo" :
		{ 
			"strokepath" :
			[ 
				{   
					"path": "M32.922.31L16.529 7.358v-.02l-.02.011-.022-.01v.02L.095.31v29.333h10.808v-2.221l5.584 2.219.023-.01.02.01 5.584-2.22v2.222h10.808z",
					"duration": 300
				},
		
				{   
					"path": "M34.382 29.644h34.75L51.756.311 34.382 29.644zm17.374-9.898l1.756 3.358H50l1.756-3.358z",
					"duration": 300
				},
				{   
					"path": "M103.419.31L87.026 7.358v-.02l-.02.011-.023-.01v.02L70.591.31v29.333H81.4v-2.221l5.583 2.219.023-.01.02.01 5.584-2.22v2.222H103.42z",
					"duration": 300
				},
				{   
					"path": "M104.877 29.644h34.752L122.252.311l-17.375 29.333zm17.376-9.898l1.756 3.358h-3.512l1.756-3.358z",
					"duration": 300
				},
				{
					"path": "M0 51.887v-9.186h3.842c.495 0 .939.068 1.335.204.395.134.713.304.957.511.243.205.444.448.605.73.162.279.273.552.333.82.06.266.09.535.09.805 0 .35-.054.695-.162 1.031a3.363 3.363 0 0 1-.521.984c-.239.32-.586.577-1.041.774-.456.197-.989.296-1.596.296H2.553v3.031H0zm2.553-7.166v2.112h.729c.833 0 1.25-.352 1.25-1.062 0-.699-.417-1.05-1.25-1.05h-.729zM33.755 51.888h2.553V42.7h-2.553zM63.327 42.7h7.384l-4.102 6.981h3.737v2.206h-7.748l4.194-6.982h-3.465zM97.098 42.7h7.384l-4.102 6.981h3.737v2.206h-7.748l4.194-6.982h-3.465zM130.137 51.887l3.243-9.186h3.099l3.243 9.186h-2.735l-.508-1.59h-3.099l-.508 1.59h-2.735zm4.793-6.994l-1.043 3.386h2.084l-1.041-3.386z",
					"duration": 700
				}
			],  
			"dimensions": {
				"width": 140,
				"height": 52
			}
		}
	}
	//preLogo svg paint END
	
	
	//FUNCTIONS WITHOUT JQUERY
	
	//function hex to rgb
	function hexToRgbNew(hex) {
		var arrBuff = new ArrayBuffer(4);
		var vw = new DataView(arrBuff);
		vw.setUint32(0,parseInt(hex, 16),false);
		var arrByte = new Uint8Array(arrBuff);
		return arrByte[1] + "," + arrByte[2] + "," + arrByte[3];
	}
	//function hex to rgb	
	
	
	
	
	
	
	
	//FUNCTIONS WITHOUT JQUERY END
	
$(document).ready(function(){
	
	//FUNCTIONS WITH JQUERY
	
	//function hight == highest element
	function max_height(block, height_block){
		var mh = 0;
		block.each(function () {
			var h_block = parseInt($(this).height());
			if(h_block > mh) {
				mh = h_block;
			};
		});
		height_block.height(mh);		
	}
	//function height == highest element END
	
	//function child height == parent height
	function parent_height(child, parent){
		var child_height = child.height();
		parent.height(child_height);
	}
	//function child height == parent height END
	
	//FUNCTIONS WITH JQUERY
	
	//preLogo svg animate
	$('#preLogo').lazylinepainter({
		"svgData": svgData,
		"strokeWidth": 1,
		'onStart' : function(){
			$('#preLogo path:nth-of-type(1)').addClass('first');
			$('#preLogo path:nth-of-type(2)').addClass('second');
			$('#preLogo path:nth-of-type(3)').addClass('third');
			$('#preLogo path:nth-of-type(4)').addClass('fourth');
			$('#preLogo path:nth-of-type(5)').addClass('fifth');
		},
		'onComplete' : function(){
			$('#preLogo').addClass('preLogo-ready');
			function func() {
				$('#preLogo').addClass('preLogo-readyNext');
			}
			setTimeout(func, 280);
		}	
	})
	$('#preLogo').lazylinepainter('paint');
	//preLogo svg animate END
	
	//main slider
	$('.owl-carousel').owlCarousel({
		loop:true,
		nav:false,
		items: 1
	})
	//main slider END
	
	
	
	
	//цвет фильтра и bg.active == data-color.parents
	$('.category-filter-list>li>a').each(function(){
		var color = $(this).parents('[data-color]').data('color');
		$(this).css('color', '#' + color);
		if($(this).parent('li').hasClass('active')){
			$(this).css('background-color', 'rgba(' + hexToRgbNew(color) + ', 1)');
		}
	})
	//цвет фильтра == data-color.parents END
	
	//цвет фона карточки товара == data-background
	$('.cat-product-img').each(function(){
		var bg = $(this).parents('[data-background]').data('background');
		$(this).css('background', '#' + bg);
	})
	//цвет фона карточки товара == data-background END
	
	
	//цвет фона кнопки в корзину == data-color
	$('.cat-product-bas').each(function(){
		var color = $(this).parents('[data-color]').data('color');
		$(this).css('background-color', '#' + color);
	})
	//цвет фона кнопки в корзину == data-color END
	
	$('.cat-product-box').matchHeight();
	
	
	
	
	$(window).on('resize', function(){
		max_height($('.promo-img img'), $('.promo-box-in'));
		parent_height($('.t-header-in'), $('.t-header'));
		$('.category-left-box').each(function(){
			parent_height($(this), $(this).parent('.category-left'));
		})
		
		
		
		if($(window).width() >= 768) {
			$(window).scroll(function(){
				var scrolled = window.pageYOffset || document.documentElement.scrollTop;
				//fixed menu
				var element_top = $('.t-header').offset().top;
				if(scrolled >= element_top){
					$('.t-header-in').addClass('fixed-menu');
				}
				else{
					$('.t-header-in').removeClass('fixed-menu');
				}
				//fixed menu END
				
				//fixed left filter
				$('.category-in').each(function(){
					var cat_list_top = $(this).offset().top;
					var cat_list_bottom = $(this).offset().top + $(this).outerHeight();
					cat_list_bottom = cat_list_bottom - $(this).find('.category-left-box').outerHeight() - $('.t-header-in.fixed-menu').height();
					if(scrolled >= cat_list_top - $('.t-header-in.fixed-menu').height() - 20){
						if(scrolled <= cat_list_bottom){
							$(this).find('.category-left-box').css('top', scrolled - cat_list_top + $('.t-header-in.fixed-menu').height() + 20);
						}
						else{
							
						}
					}
					else{
						$(this).find('.category-left-box').css('top', 0);
					}
				})
				//fixed left filter END
			}).scroll();
			$(document).on('click', '.t-header-in nav>ul>li>a', function(){
				
				var go_cat = $(this).data('menu');
				
				if($('[data-category=' + go_cat + ']').length > 0){
					$('.meal-menu nav>ul>li>a').parent('li').removeClass('active');
					$(this).parent('li').addClass('active');
					$('html, body').animate({
						scrollTop: $('[data-category=' + go_cat + ']').offset().top - $('.t-header-in.fixed-menu').height()
					}, 500)
				}
				else{
					alert('такой категории еще нет');
				}
				
			})
		}
	}).resize();
	window.onscroll = function() {
		var scrolled = window.pageYOffset || document.documentElement.scrollTop;
		/* console.log(scrolled); */
		$('.t-header-in').innerHTML = scrolled + 'px';
	}
	
})
	 
	  
