$(window).load(function(){
	$('.loading').fadeOut('fast');
	$('.container').fadeIn('fast');
});
$('document').ready(function(){
		var vw;
		$(window).resize(function () {
    vw = $(window).width() / 2;

    // Reposition letter balloons (if present)
    $('.letter-balloon').each(function (index) {
        $(this).stop().animate({
            top: 240,
            left: (vw - 360) + ((index + 1) * 60)
        }, 500);
    });
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
		vw = $(window).width() / 2;
		 // CLEAR previous letter balloons first
	$('.letter-balloon').remove();

	let letters = ["H","B","D","M","Y","K","A","S","M","A","L","L"];

		for (let i = 1; i <= 12; i++) {
    		let newBalloon = $('#b'+i).clone();
    		newBalloon.addClass('letter-balloon');
    		newBalloon.attr('id','letter'+i);
    
    	// Position them in the row for writing
    		newBalloon.css({
        		position: 'absolute',
        		top: '240px',
        		left: (vw - 360) + (i * 60) + 'px' });

    // Insert into DOM
    $('body').append(newBalloon);
} });
	
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
			$('#replay').fadeIn();
			$('#replay').click(function(){
				resetAll();
		    });    });
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

    // Stop ALL animations everywhere
    $('*').stop(true, true);

    // Restore original 12 main balloons
    for (let i = 1; i <= 12; i++) {
        $('#b' + i)
            .attr("style", "")
            .removeClass()
            .addClass('balloons')
            .show();
    }

    // Remove ALL cloned letter balloons
    $('.letter-balloon').remove();

    // Reset all balloon borders
    $('.balloon-border').attr("style","");

    // Restore background
    $('body').attr("style","").removeClass();

    // Turn off bulbs
    $('.bulb').attr("class", function(_, c){
        return c.replace(/bulb-glow-\S+/g,'');
    });

    // Hide cake, flames, banner, messages
    $('.cake, .fuego, .message, .bannar').hide();

    // Hide paragraphs
    $(".message p").hide();

    // Reset audio
    var audio = $('.song')[0];
    audio.pause();
    audio.currentTime = 0;

    // Reset buttons
    $('#play, #bannar_coming, #balloons_flying, #cake_fadein, #light_candle, #wish_message, #story, #replay')
        .hide();
    $('#turn_on').show();

    // Scroll to top
    $(window).scrollTop(0);
}
