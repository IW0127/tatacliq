$(document).ready(function () {
    $(".subCategory").hide();
    $(".category").mouseenter(function () {
        let id = $(this).data('id');
        i = $("#" + id).show();
    });
    $(".category").mouseleave(function () {
        $(".subCategory").hide();
    });

    $(".catBrad").mouseenter(function () {
        let id = $(this).data('id');
        i = $("#" + id).show();
    });

    $(".subCategory").mouseenter(function () {
        $(this).show();
    });
});

