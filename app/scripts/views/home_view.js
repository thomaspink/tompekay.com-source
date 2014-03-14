TompekayCom.HomeView = Ember.View.extend({
    didInsertElement: function() {

        var $videoContainer  = this.$('.fullscreen_video');
        var $videoObject     = this.$('.fullscreen_video__object');
        var $muteButton      = this.$('.fullscreen_video__mute');
        var $volumeUpButton  = this.$('.fullscreen_video__volume');

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
                $volumeUpButton.off('click');
                $muteButton.off('click');
                $volumeUpButton.on('click', volumeUp);
                $muteButton.on('click', mute);
                if(!!TompekayCom.docCookies.hasItem("homeVideoPlayerMuted")) {
                    mute();
                } else {
                    volumeUp();
                }
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

        function volumeUp(event) {
            if(!!event)
                event.preventDefault();
            $muteButton.show();
            $volumeUpButton.hide();
            $videoObject[0].muted = false;
            TompekayCom.docCookies.removeItem("homeVideoPlayerMuted");
        }


        function mute(event) {
            if(!!event)
                event.preventDefault();
            $muteButton.hide();
            $volumeUpButton.show();
            $videoObject[0].muted = true;
            TompekayCom.docCookies.setItem("homeVideoPlayerMuted",true);
        }
    }
});
