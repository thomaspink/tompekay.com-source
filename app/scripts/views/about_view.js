TompekayCom.AboutView = Ember.View.extend({
    didInsertElement: function() {

        var resizeTimer = null;
        $(window).off('resize.about.pane');
        $(window).on('resize.about.pane', function() {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(resizePane,500);
        });
        resizePane();
        function resizePane() {
            var containerHeight = $(window).height() -120 -70;
            this.$('.about').css("min-height",containerHeight);
        }

        //setTimeout(function() {
        $(document.body).removeClass("loading");
        //}, 5000);
    },
    willDestroy: function() {
        $(window).off('resize.about.pane');
    }
});
