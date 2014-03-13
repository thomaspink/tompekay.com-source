TompekayCom.HomeView = Ember.View.extend({
    didInsertElement: function() {

        var $videoContainer  = this.$('.fullscreen_video');
        var $videoObject     = this.$('.fullscreen_video__object');

        var resizeTimer = null;
        resizeVideoObject();
        $(window).off('resize.index.video');
        $(window).on('resize.index.video', function() {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(resizeVideoObject,500);
        });

        $videoObject.off('canplay error');
        if(Modernizr.touch) {
            $(document.body).removeClass("loading");
        }else {
            $(document.body).removeClass("loading");
            $videoObject.on('canplay', function() {
                $videoObject[0].play();
                $(document.body).removeClass("loading");
            });

            $videoObject.on('error', function() {
                $(document.body).removeClass("loading");
            });
        }



        function resizeVideoObject() {

            var containerHeight  = ($(window).width() <= 500) ? $(window).height() -70 : $(window).height() -120 -70;
            var containerRatio   = $videoContainer.width()/containerHeight;
            var videoRatio       = 1686/949;

            $videoContainer.height(containerHeight);
            
            if(videoRatio>containerRatio) {
                var videoWidth = $(window).width() * (videoRatio/containerRatio);
                $videoObject.css("height","100%");
                $videoObject.css("width","auto");
                $videoObject.css("top","0");
                $videoObject.css("left",(videoWidth-$(window).width())/2*-1);
            } else {
                var videoHeight = containerHeight * (containerRatio/videoRatio);
                $videoObject.css("height","auto");
                $videoObject.css("width","100%");
                $videoObject.css("left","0");
                $videoObject.css("top",(videoHeight-containerHeight)/2*-1);
            }
        }
    }
});
