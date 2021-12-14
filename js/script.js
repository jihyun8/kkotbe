$(function(){
	$(".notice_text> li> ul").click(function(){
		$(this).next().slideToggle();
	});
});
$(function(){
	$(".notice_text> li> ul").click(function(){
		$(this).children().children("img").toggleClass("turn");
	});
});

$( document ).ready( function() {
        var jbOffset = $( '#nav' ).offset();
        $( window ).scroll( function() {
          if ( $( document ).scrollTop() > 229) {
            $( '.fixed_nav' ).addClass( 'on1' );
          }
          else {
            $( '.fixed_nav' ).removeClass( 'on1' );
          }
        });
      });
$(function(){
	$(".btn").click(function(){
		alert('다운되었습니다.');
		return false;
	});
});



