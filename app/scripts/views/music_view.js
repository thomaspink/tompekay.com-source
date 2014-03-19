TompekayCom.MusicView = Ember.View.extend({
    didInsertElement: function() {
        var resizeTimer = null;
        var self = this;

        $(window).off('resize.music.grid');
        $(window).on('resize.music.grid', function() {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(resizeGrid,500);
        });

        resizeGrid();

        function resizeGrid() {
            var width = $(window).width();
            var cols = Math.ceil(width/300);
            var dim = (width/cols);
            var $elems = self.$(".artwork");
            $elems.width(dim).height(dim);
        }

        $(document.body).removeClass("loading");
    },
    willDestroy: function() {
        $(window).off('resize.music.grid');
    },
    cloudcastChanged: function() {
        var slug = this.get('controller.slug');
        $('.cloudcast_playing').removeClass('cloudcast_playing');
        $('#'+slug).addClass("cloudcast_playing");
    }.observes('controller.slug').on('didInsertElement')
});
