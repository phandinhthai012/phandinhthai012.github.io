$(document).ready(function () {
    $("a").on("click", function () {
        if (this.hash !== "") {
            let hash = this.hash
            $("html,body").animate({
                scrollTop: $(hash).offset().top
            }, 500)
        }
    })
})



//  mở menu responsive
$(".open-menu").on("click", function () {
    $(".responsive-menu").show("slow")
})

// đóng menu responsive 

$(".close-responsive-menu").on("click", function () {
    $(".responsive-menu").hide("slow")
})


//  đóng menu khi scroll 
$(".responsive-menu .item").on("click", function () {
    $(".responsive-menu").hide("slow")
})