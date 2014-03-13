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
            var firstPaneHeight = this.$('.pane_view__pane:eq(0)').height();
            var containerHeight = $(window).height() -120 -70;
            if(firstPaneHeight > containerHeight) {
                this.$('.pane_view .pane_view__pane').css("min-height",firstPaneHeight);
            } else {
                this.$('.pane_view .pane_view__pane').css("min-height",containerHeight);
            }
        }

        //setTimeout(function() {
        $(document.body).removeClass("loading");
        //}, 5000);
    }
});
