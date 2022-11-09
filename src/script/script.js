$(document).ready(() => {
    $(document).scroll(() => {
        $(".navbar").toggleClass("nav-scroll", $(this).scrollTop() > $(".navbar").height())
    })
})
