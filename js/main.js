var $loading = $('#flowerLoader').hide(1000);
$(document)
.ajaxStart(function () {
    $loading.show();
})
.ajaxStop(function () {
    $loading;
});