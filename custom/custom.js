$(function() {
  // Sidebar toggle behavior
  $('#sidebarCollapse').on('click', function() {
    $('#sidebar, #content').toggleClass('active');
  });
    /**
    * Smooth scrolling to page anchor on click
    **/
    $("a[href*='#']:not([href='#'])").click(function() {
        if (
            location.hostname == this.hostname
            && this.pathname.replace(/^\//,"") == location.pathname.replace(/^\//,"")
        ) {
            var anchor = $(this.hash);
            anchor = anchor.length ? anchor : $("[name=" + this.hash.slice(1) +"]");
            if ( anchor.length ) {
                $("html, body").animate( { scrollTop: anchor.offset().top }, 1500);
            }
        }
    });
    //affix
    $(window).on('scroll', function (event) {
    var scrollValue = $(window).scrollTop();
    var offset = $('[data-spy="affix"]').attr('data-offset-top');
       if (scrollValue > offset) {
         $('[data-spy="affix"]').addClass('affix-top');
         var width = $('[data-spy="affix"]').parent().width();
         $('.affix-top').css('width', width);
       } else{
         $('[data-spy="affix"]').removeClass('affix-top');
       }
    }); 
});
