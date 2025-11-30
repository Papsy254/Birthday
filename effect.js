var stopBalloons = false;
var vw = window.innerWidth / 2;

$(window).load(function () {
    $('.loading').fadeOut('fast');
    $('.container').fadeIn('fast');
});

$(document).ready(function () {

    $(window).resize(function () {
        vw = window.innerWidth / 2;
    });

    /* ------------------------------------
       TURN ON LIGHTS
    ------------------------------------ */
    $('#turn_on').click(function () {
        $('#bulb_yellow').addClass('bulb-glow-yellow');
        $('#bulb_red').addClass('bulb-glow-red');
        $('#bulb_blue').addClass('bulb-glow-blue');
        $('#bulb_green').addClass('bulb-glow-green');
        $('#bulb_pink').addClass('bulb-glow-pink');
        $('#bulb_orange').addClass('bulb-glow-orange');
        $('body').addClass('peach');

        $(this).fadeOut('slow').delay(5000).promise().done(function () {
            $('#play').fadeIn('slow');
        });
    });

    /* ------------------------------------
       PLAY MUSIC
    ------------------------------------ */
    $('#play').click(function () {
        var audio = $('.song')[0];
        audio.play();

        $('.bulb').addClass('after-glow');
        $('body').addClass('peach-after');

        $(this).fadeOut('slow').delay(6000).promise().done(function () {
            $('#bannar_coming').fadeIn('slow');
        });
    });

    /* ------------------------------------
       BANNER COMING
    ------------------------------------ */
    $('#bannar_coming').click(function () {
        $('.bannar').addClass('bannar-come');

        $(this).fadeOut('slow').delay(6000).promise().done(function () {
            $('#balloons_flying').fadeIn('slow');
        });
    });

    /* ------------------------------------
       BALLOON FLOATING LOOPS
    ------------------------------------ */
    function balloonLoop(num) {
        if (stopBalloons) return;

        var randleft = Math.random() * 1000;
        var randtop = Math.random() * 500;

        $('#b' + num).animate({
            left: randleft,
            bottom: randtop
        }, 10000, function () {
            balloonLoop(num);
        });
    }

    /* ------------------------------------
       BALLOONS FLYING
    ------------------------------------ */
    $('#balloons_flying').click(function () {

        $('.balloon-border').animate({ top: -500 }, 8000);
        $('#b1,#b3,#b5,#b7,#b9,#b11').addClass('balloons-rotate-behaviour-one');
        $('#b2,#b4,#b6,#b8,#b10,#b12').addClass('balloons-rotate-behaviour-two');

        for (let i = 1; i <= 12; i++) {
            balloonLoop(i);
        }

        $(this).fadeOut('slow').delay(5000).promise().done(function () {
            $('#cake_fadein').fadeIn('slow');
        });
    });

    /* ------------------------------------
       CAKE FADE IN
    ------------------------------------ */
    $('#cake_fadein').click(function () {
        $('.cake').fadeIn('slow');

        $(this).fadeOut('slow').delay(3000).promise().done(function () {
            $('#light_candle').fadeIn('slow');
        });
    });

    /* ------------------------------------
       LIGHT CANDLES
    ------------------------------------ */
    $('#light_candle').click(function () {
        $('.fuego').fadeIn('slow');

        $(this).fadeOut('slow').promise().done(function () {
            $('#wish_message').fadeIn('slow');
        });
    });

    /* ------------------------------------
       SWITCH BALLOONS → LETTER BALLOONS
    ------------------------------------ */
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
		$('#b8').attr('id','b104');
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

    /* ------------------------------------
       MESSAGE STORY
    ------------------------------------ */
    $('#story').click(function () {

        $(this).fadeOut('slow');
        $('.cake').fadeOut('fast').promise().done(function () {
            $('.message').fadeIn('slow');
        });

        var i = 1;

        function msgLoop(i) {
            $("p:nth-child(" + i + ")").fadeOut(2000).delay(1700).promise().done(function () {

                i = i + 1;
                $("p:nth-child(" + i + ")").fadeIn(2000).delay(2500);

                if (i === 50) {

                    $("p:nth-child(49)").fadeOut('slow').promise().done(function () {

                        $('.message').fadeOut(1500, function () {

                            $('#replay').fadeIn().click(function () {
                                resetAll();
                            });

                        });
                    });

                } else {
                    msgLoop(i);
                }

            });

        }

        msgLoop(1);
    });

});

/* ------------------------------------
   FULL RESET FROM BEGINNING
------------------------------------ */
function resetAll() {

    stopBalloons = true;
    $('*').stop(true, true);

    for (let i = 1; i <= 12; i++) {
        $('#b' + i)
            .attr("style", "")
            .removeClass()
            .addClass('balloons')
            .show();
    }

    $('.letter-balloon').remove();
    $('.balloon-border').attr("style", "").show();
    $('.cake, .fuego, .message, .bannar').hide();
    $(".message p").hide();

    $('.bulb').removeClass(function (_, c) {
        return (c.match(/bulb-\S+/g) || []).join(' ');
    });

    $('body').removeClass().attr("style", "");

    var audio = $('.song')[0];
    audio.pause();
    audio.currentTime = 0;

    $('#play, #bannar_coming, #balloons_flying, #cake_fadein, #light_candle, #wish_message, #story, #replay')
        .hide();

    $('#turn_on').show();

    stopBalloons = false;
    $(window).scrollTop(0);
}
