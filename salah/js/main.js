$(document).ready(function () {
    // Navbar Scroll Effect
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('.navbar').addClass('scrolled');
        } else {
            $('.navbar').removeClass('scrolled');
        }
    });

    // Counter Animation
    let counted = false;
    $(window).scroll(function () {
        var oTop = $('#stats').offset().top - window.innerHeight;
        if (counted == false && $(window).scrollTop() > oTop) {
            $('.counter').each(function () {
                var $this = $(this),
                    countTo = $this.text();
                $({
                    countNum: $this.text()
                }).animate({
                    countNum: countTo
                },

                    {

                        duration: 2000,
                        easing: 'swing',
                        step: function () {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function () {
                            $this.text(this.countNum + (this.countNum == 1500 || this.countNum == 15 ? "+" : ""));
                            //alert('finished');
                        }
                    });
            });
            counted = true;
        }
    });

    console.log("SupMTI Redesign Loaded");
});

