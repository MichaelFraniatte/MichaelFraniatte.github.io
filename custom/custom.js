$(function() {

    // Sidebar toggle behavior
    $('#sidebarCollapse').on('click', function() {
        $('#sidebar, #content').toggleClass('active');
    });

    /**
    * Smooth scrolling to page anchor on click
    **/
    $("a[href*='#']:not([href='#'])").click(function() {
        if (location.hostname == this.hostname && this.pathname.replace(/^\//,"") == location.pathname.replace(/^\//,"")) 
	{
            var anchor = $(this.hash);
            anchor = anchor.length ? anchor : $("[name=" + this.hash.slice(1) +"]");
            if ( anchor.length ) {
                $("html, body").animate( { scrollTop: anchor.offset().top }, 1500);
            }
        }
    });

    //ScrollSpy
    jQuery(window).scroll(checkActiveSection);
    jQuery(document).ready(checkActiveSection);

});

function checkActiveSection()
{
    var fromTop = jQuery(window).scrollTop() ;
    jQuery('#sections .section').each(function(){
        var sectionOffset = jQuery(this).offset() ;
        if ( sectionOffset.top <= fromTop )
        {
            jQuery('#navbar li').removeClass('active') ;
            jQuery('#navbar li[data-id="'+jQuery(this).data('id')+'"]').addClass('active') ;
            
        }
    }) ;
}