(function(){	

	$.fn.myScroll = function(options){
		
		var defaults = { 	
			item :"",
			header : "",
			navi : "",
			duration: 500,
			ease : "swing",
			isOn : "on",			
			full_screen_box :"",
			base_line : 0,
			target_base_line : 0,
			enable_pos_header : false,
			enable_change_header : false			
		};	
		var ext = $.extend( {}, defaults, options); 
		
		var arr; 
		var posH; 
		var scroll; 
		var baseLine=ext.base_line; 
		var duration = ext.duration; 
		var ease = ext.ease; 	
		var isOn = ext.isOn;
		var matchBox = ext.full_screen_box;
		var baseLine = ext.base_line;
		var targetLine = ext.target_base_line; //추가
		var headerPosOn = ext.enable_pos_header;
		var headerChangeOn = ext.enable_change_header;		
		var wrapName ="#"+$(this).attr("id");
		
		var $header = $(ext.header);
		var $navi = $(ext.navi);
		var $navi_li = $navi.children("li");
		var $navi_li_a = $navi_li.children("a");
		var $doc = $("html,body");
		var $window = $(window);
		//var $wrap_div = $(this).children("div");
        var $wrap_div = $(ext.item); 
        
		
		
		
		init();			

		$window.bind("resize",function(){
			init();
		});
		
		
		$window.bind("scroll",function(){
			activeBtn();				
			if(headerChangeOn){ changeHeader();  }
		});	
		

		$navi_li.bind("click",function(e){
			e.preventDefault();
			var $this = $(this);
			doScroll($this); 
			mask(duration);
		});	
		
		
		function init(){
			matchH(matchBox); 
			regH(); 			 
			if(headerPosOn){ posHeader(); }
		}	
		

		function regH(){
			var len = $wrap_div.length;
			arr = [];	
			for(var i =0; i<len; i++){
				arr.push(  $wrap_div.eq(i).offset().top  );	
			}	
			arr.push( $wrap_div.eq(len-1).offset().top +  $wrap_div.eq(len-1).height() );
		}	
		

		function activeBtn(){		
            scroll = $(this).scrollTop();	
            var len = $wrap_div.length;
            console.log(len);
			for(var i=0; i<len; i++){
				if( scroll>=arr[i]+baseLine && scroll<arr[i+1]+baseLine ){
					$navi_li_a.removeClass(isOn);
					$navi_li.eq(i).children("a").addClass(isOn);
					$wrap_div.removeClass(isOn);
					$wrap_div.eq(i).addClass(isOn);
				}
			}		
		}	

		
		function doScroll(abc){
			var target = abc.children("a").attr("href");
			var posTarget = $(target).offset().top +targetLine; //헤더 높이값만큼 덜 움직여야됨 (컨텐츠가 헤더에 가리지 않게)	
			$doc.stop().animate({"scrollTop":posTarget},duration,ease);	
		}	
		

		function matchH(item){
			var winH = $(window).height();
			$(item).height(winH);
		}	
		
		
		function posHeader(){		
			posH = arr[1] - $header.height();			
			$header.css({"top":posH});			
		}	
		
		
		function changeHeader(){
			if(headerPosOn){
				if(scroll>posH){
					$header.css({"position":"fixed", "top":"0px"});
					$header.addClass(isOn);			
				}else{
					$header.css({"position":"absolute", "top":posH});
					$header.removeClass(isOn);
				}
			}else{
				if(scroll>0){
					$header.css({"position":"fixed"});
					$header.addClass(isOn);			
				}else{
					$header.css({"position":"absolute"});
					$header.removeClass(isOn);
				}
			}
		
		}	
		
		
		function mask(duration){
			$('<div class="mask"></div>').appendTo("body");
			$(".mask").css({
				"position":"fixed",
				"width":"100%",
				"height":"100%",
				"top":"0px", 
				"left":"0px",
				"z-index":"9999"
			});	
			setTimeout(function(){
				$(".mask").remove();
				
			},duration);	
		}
		
	};
	
	
	
	
	
	
	
	
})(jQuery);















