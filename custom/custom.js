var valsection = "";

$(function() {

    // Sidebar toggle behavior
    $('#sidebarCollapse').on('click', function() {
	for (var n = 0; n <= 500; n++) {
		setTimeout(navigate, n);
	}
        $('#sidebar, #content').toggleClass('active');
    });

    //Smooth scrolling to page anchor on click
    $("a[href*='#']:not([href='#'])").click(function() {
        if (location.hostname == this.hostname && this.pathname.replace(/^\//,"") == location.pathname.replace(/^\//,"")) 
	{
            var anchor = $(this.hash);
            anchor = anchor.length ? anchor : $("[name=" + this.hash.slice(1) +"]");
	    valsection = anchor;
            if (anchor.length) {
                $("html, body").animate({ scrollTop: anchor.offset().top }, 1000);
            }
        }
    });

    //ScrollSpy
    jQuery(window).scroll(checkActiveSection);
    jQuery(document).ready(checkActiveSection);

});

function checkActiveSection() {
    setTimeout(enableActiveSection, 300);
}

function navigate() {
    if (valsection.length) {
        $("html, body").animate({ scrollTop: valsection.offset().top }, 0);
    }
}

function enableActiveSection() {
    var fromTop = jQuery(window).scrollTop();
    jQuery('.resume-section').each(function(){
        var sectionOffset = jQuery(this).offset();
        if (sectionOffset.top <= fromTop) {
		valsection = $(this);
		jQuery('#navbar li a').addClass('text-dark');
		jQuery('#navbar li a').addClass('bg-light');
		jQuery('#navbar li a').removeClass('text-light');
		jQuery('#navbar li a').removeClass('bg-dark');
		jQuery('#navbar li[data-id="' + jQuery(this).data('id') + '"] a').removeClass('text-dark');
		jQuery('#navbar li[data-id="' + jQuery(this).data('id') + '"] a').removeClass('bg-light');
		jQuery('#navbar li[data-id="' + jQuery(this).data('id') + '"] a').addClass('text-light');
		jQuery('#navbar li[data-id="' + jQuery(this).data('id') + '"] a').addClass('bg-dark');
        }
    });
}