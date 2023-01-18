var $loading = $('#flowerLoader').hide(500);
$(document)
.ajaxStart(function () {
    $loading.show();    
    
})
.ajaxStop(function () {
    $loading;
});

$(document).ready(function() { 
    $('#word1, #word2, #word3, #word4, #word5, #word6').each(function(fadeInDiv) {
        $(this).delay(fadeInDiv * 1200).fadeIn(1000);
      });
});