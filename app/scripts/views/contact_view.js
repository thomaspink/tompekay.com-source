TompekayCom.ContactView = Ember.View.extend({
    didInsertElement: function() {
        if($(window).width()>500) {
            var resizeTimer = null;
            $(window).off('resize.contact');
            $(window).on('resize.contact', function() {
                clearTimeout(resizeTimer);
                resizeTimer = setTimeout(resizePane,500);
            });
            resizePane();
        }
        function resizePane() {
            $(".contact__wrapper").css("min-height", $(window).height() -120 -70);
        }

        $('.select__control').on("change", function() {
                var text = $(this).find('option[value='+$(this).val()+']').text();
                $(this).siblings('.select__label').text(text);
        });

        $(document.body).removeClass("loading");
    },
    willDestroy: function() {
        $(window).off('resize.contact');
    }
});
