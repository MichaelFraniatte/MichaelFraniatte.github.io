var valsection = "";

$(function() {

    // Sidebar toggle behavior
    $('#sidebarCollapse').on('click', function() {
	    for (var n = 0; n < 250; n++) {
		    setTimeout(navigate, n);
		    setTimeout(navigate, n + 1);
	    }
        $('#sidebar, #content').toggleClass('active');
    });

    //Smooth scrolling to page anchor on click
    $("a[href*='#']:not([href='#'])").click(function() {
        if (location.hostname == this.hostname && this.pathname.replace(/^\//,"") == location.pathname.replace(/^\//,"")) {
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
    setTimeout(enableActiveSection, 50);
}

function navigate() {
    if (valsection.length) {
        $("html, body").scrollTop(valsection.offset().top);
    }
}

function enableActiveSection() {
    var fromTop = jQuery(window).scrollTop();
    if (fromTop <= 10) {
	    jQuery('#navbar li[data-id=1] a').removeClass('text-dark');
	    jQuery('#navbar li[data-id=1] a').removeClass('bg-light');
	    jQuery('#navbar li[data-id=1] a').addClass('text-light');
	    jQuery('#navbar li[data-id=1] a').addClass('bg-dark');
    }
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

//Type Writer
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } 
    else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
    var that = this;
    var delta = 200 - Math.random() * 100;
    if (this.isDeleting) { 
        delta /= 2; 
    }
    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } 
    else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }
    setTimeout(function() {
        that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};