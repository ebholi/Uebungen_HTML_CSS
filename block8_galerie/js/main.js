$(document).ready(function() {
    $(".regular").click(function(e) {
        e.stopPropagation();
        let src = $(this).attr("src");
        $("#image-close").attr("src", src);
        $("#image-enlarge").fadeIn(300);
    });
    $("#close-buton").click(function(e) {
        e.stopPropagation();
        $("#image-enlarge").fadeOut(300);
    });
    $("#image-enlarge").click(function() {
        $(this).fadeOut(300);
    });
    $("#image-close").click(function(e) {
        e.stopPropagation();
    });
});
