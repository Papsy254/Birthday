$(window).load(function(){
	$('.loading').fadeOut('fast');
	$('.container').fadeIn('fast');
});
$('document').ready(function(){
		var vw;
		$(window).resize(function(){
			 vw = $(window).width()/2;
			$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
			$('#b11').animate({top:240, left: vw-350},500);
			$('#b22').animate({top:240, left: vw-250},500);
			$('#b33').animate({top:240, left: vw-150},500);
			$('#b44').animate({top:240, left: vw-50},500);
			$('#b55').animate({top:240, left: vw+50},500);
			$('#b66').animate({top:240, left: vw+150},500);
			$('#b77').animate({top:240, left: vw+250},500);
		});

	$('#turn_on').click(function(){
		$('#bulb_yellow').addClass('bulb-glow-yellow');
		$('#bulb_red').addClass('bulb-glow-red');
		$('#bulb_blue').addClass('bulb-glow-blue');
		$('#bulb_green').addClass('bulb-glow-green');
		$('#bulb_pink').addClass('bulb-glow-pink');
		$('#bulb_orange').addClass('bulb-glow-orange');
		$('body').addClass('peach');
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#play').fadeIn('slow');
		});
	});
	$('#play').click(function(){
		var audio = $('.song')[0];
        audio.play();
        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
		$('#bulb_red').addClass('bulb-glow-red-after');
		$('#bulb_blue').addClass('bulb-glow-blue-after');
		$('#bulb_green').addClass('bulb-glow-green-after');
		$('#bulb_pink').addClass('bulb-glow-pink-after');
		$('#bulb_orange').addClass('bulb-glow-orange-after');
		$('body').css('background-color','#FFF');
		$('body').addClass('peach-after');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#bannar_coming').fadeIn('slow');
		});
	});

	$('#bannar_coming').click(function(){
		$('.bannar').addClass('bannar-come');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#balloons_flying').fadeIn('slow');
		});
	});

	function loopOne() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b1').animate({left:randleft,bottom:randtop},10000,function(){
			loopOne();
		});
	}
	function loopTwo() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b2').animate({left:randleft,bottom:randtop},10000,function(){
			loopTwo();
		});
	}
	function loopThree() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b3').animate({left:randleft,bottom:randtop},10000,function(){
			loopThree();
		});
	}
	function loopFour() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b4').animate({left:randleft,bottom:randtop},10000,function(){
			loopFour();
		});
	}
	function loopFive() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b5').animate({left:randleft,bottom:randtop},10000,function(){
			loopFive();
		});
	}

	function loopSix() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b6').animate({left:randleft,bottom:randtop},10000,function(){
			loopSix();
		});
	}
	function loopSeven() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b7').animate({left:randleft,bottom:randtop},10000,function(){
			loopSeven();
		});
	}

		function loopEight() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b8').animate({left:randleft,bottom:randtop},10000,function(){
			loopEight();
		});
	}

		function loopNine() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b9').animate({left:randleft,bottom:randtop},10000,function(){
			loopNine();
		});
	}

		function loopTen() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b10').animate({left:randleft,bottom:randtop},10000,function(){
			loopTen();
		});
	}

			function loopEleven() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b11').animate({left:randleft,bottom:randtop},10000,function(){
			loopEleven();
		});
	}

			function loopTwelve() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b12').animate({left:randleft,bottom:randtop},10000,function(){
			loopTwelve();
		});
	}

	$('#balloons_flying').click(function(){
		$('.balloon-border').animate({top:-500},8000);
		$('#b1,#b3,#b5,#b7,#b9,#b11').addClass('balloons-rotate-behaviour-one');
		$('#b2,#b4,#b6,#b8,#b10,#b12').addClass('balloons-rotate-behaviour-two');
		// $('#b3').addClass('balloons-rotate-behaviour-one');
		// $('#b4').addClass('balloons-rotate-behaviour-two');
		// $('#b5').addClass('balloons-rotate-behaviour-one');
		// $('#b6').addClass('balloons-rotate-behaviour-two');
		// $('#b7').addClass('balloons-rotate-behaviour-one');
		// $('#b8').addClass('balloons-rotate-behaviour-two');
		// $('#b9').addClass('balloons-rotate-behaviour-one');
		// $('#b10').addClass('balloons-rotate-behaviour-two');
		// $('#b11').addClass('balloons-rotate-behaviour-one');
		// $('#b12').addClass('balloons-rotate-behaviour-two');

		loopOne();
		loopTwo();
		loopThree();
		loopFour();
		loopFive();
		loopSix();
		loopSeven();
		loopEight();
		loopNine();
		loopTen();
		loopEleven();
		loopTwelve();
		
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#cake_fadein').fadeIn('slow');
		});
	});	

	$('#cake_fadein').click(function(){
		$('.cake').fadeIn('slow');
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#light_candle').fadeIn('slow');
		});
	});

	$('#light_candle').click(function(){
		$('.fuego').fadeIn('slow');
		$(this).fadeOut('slow').promise().done(function(){
			$('#wish_message').fadeIn('slow');
		});
	});

		
	$('#wish_message').click(function(){
		 vw = $(window).width()/2;

		$('#b1,#b2,#b3,#b4,#b5,#b6,#b7,#b8,#b9,#b10,#b11,#b12').stop();
		$('#b1').attr('id','b13');
		$('#b2').attr('id','b26')
		$('#b3').attr('id','b39')
		$('#b4').attr('id','b52')
		$('#b5').attr('id','b65')
		$('#b6').attr('id','b78')
		$('#b7').attr('id','b91')
		$('#b8').attr('id','b104')
		$('#b9').attr('id','b117')
		$('#b10').attr('id','b130')
		$('#b11').attr('id','b143')
		$('#b12').attr('id','b156')
		$('#b13').animate({top:240, left: vw-360},500);
		$('#b26').animate({top:240, left: vw-300},500);
		$('#b39').animate({top:240, left: vw-240},500);
		$('#b52').animate({top:240, left: vw-180},500);
		$('#b65').animate({top:240, left: vw-120},500);
		$('#b78').animate({top:240, left: vw-60},500);
		$('#b91').animate({top:240, left: vw+60},500);
		$('#b104').animate({top:240, left: vw+120},500);
		$('#b117').animate({top:240, left: vw+180},500);
		$('#b130').animate({top:240, left: vw+240},500);
		$('#b143').animate({top:240, left: vw+300},500);
		$('#b156').animate({top:240, left: vw+360},500);
		$('.balloons').css('opacity','0.9');
		$('.balloons h2').fadeIn(3000);
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#story').fadeIn('slow');
		});
	});
	
	$('#story').click(function(){
		$(this).fadeOut('slow');
		$('.cake').fadeOut('fast').promise().done(function(){
			$('.message').fadeIn('slow');
		});
		
		var i;

		function msgLoop (i) {
			$("p:nth-child("+i+")").fadeOut(2000).delay(1700).promise().done(function(){
			i=i+1;
			$("p:nth-child("+i+")").fadeIn(2000).delay(2500);
if(i == 50){
    $("p:nth-child(49)").fadeOut('slow').promise().done(function () {
        
        // After the last message, restart automatically
        $('.message').fadeOut(1500, function(){
            resetAll(); // <-- restart beginning
        });

    });
}

			else{
				msgLoop(i);
			}			

		});
			// body...
		}
		
		msgLoop(0);
		
	});
});

//alert('hello');

function resetAll() {
    // Stop animations
    $('.balloons').stop(true, true);

    // Reset balloon positions
    for (let i = 1; i <= 12; i++) {
        $('#b' + i).removeClass().removeAttr("style");
    }

    // Reset body color
    $('body').removeClass('peach peach-after').css('background-color', '');

    // Reset bulbs
    $('.bulb').removeClass(function(index, className) {
        return (className.match(/(^|\s)bulb-glow-\S+/g) || []).join(' ');
    });

    // Hide elements
    $('.cake').hide();
    $('.fuego').hide();
    $('.message').hide();
    $('.balloon-border').css({top: 0});

    // Reset banner
    $('.bannar').removeClass('bannar-come');

    // Reset paragraphs
    $(".message p").hide();

    // Audio reset
    var audio = $('.song')[0];
    audio.pause();
    audio.currentTime = 0;

    // Reset buttons
    $('#play, #bannar_coming, #balloons_flying, #cake_fadein, #light_candle, #wish_message, #story')
        .hide();
    $('#turn_on').show();

    // Reset balloon IDs changed by wish_message
    $("#b13").attr("id", "b1");
    $("#b26").attr("id", "b2");
    $("#b39").attr("id", "b3");
    $("#b52").attr("id", "b4");
    $("#b65").attr("id", "b5");
    $("#b78").attr("id", "b6");
    $("#b91").attr("id", "b7");
    $("#b104").attr("id", "b8");
    $("#b117").attr("id", "b9");
    $("#b130").attr("id", "b10");
    $("#b143").attr("id", "b11");
    $("#b156").attr("id", "b12");

    // Scroll to top (optional)
    window.scrollTo(0, 0);
}
