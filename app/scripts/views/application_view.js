TompekayCom.ApplicationView = Ember.View.extend({
    didInsertElement: function() {
        var header = $('#header');
        var footer = $('#footer');

        header.on(Modernizr.touch ? "touchstart" : "click", ".nav_toggle", function(event) {
            event.preventDefault();
            footer.toggleClass('opened');
        });
    }
});
