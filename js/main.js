var $loading = $('#flowerLoader').hide(500);
$(document)
.ajaxStart(function () {
    $loading.show();    
    
})
.ajaxStop(function () {
    $loading;
});