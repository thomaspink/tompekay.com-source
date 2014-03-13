TompekayCom.ApplicationRoute = Ember.Route.extend({
    actions: {
        willTransition: function(transition) {
            var target = transition.targetName;
            var self = this;

            if(TompekayCom.get('currentPath') && TompekayCom.get('currentPath') == transition.targetName) {
                transition.abort();
                return;
            }

            if(!$(document.body).hasClass("loading")){
                transition.abort();
                if(Modernizr.csstransitions) {
                    $("#header").off("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd");
                    $("#header").on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){
                        $("#header").off("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd");
                        self.transitionTo(target);
                        $(window).scrollTop(0);
                    });
                } else {
                    self.transitionTo(target);
                }
                $(document.body).addClass("loading");
                $('#footer').removeClass('opened');
            }
        }
    }
});
