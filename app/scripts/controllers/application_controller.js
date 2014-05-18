TompekayCom.ApplicationController = Ember.Controller.extend({
    currentPathDidChange: function() {
        var path = this.get('currentPath');
        TompekayCom.set('currentPath', path);
        if(!!_gaq) {
            _gaq.push(['_trackEvent', 'Transitions', 'currentPathDidChange', path]);
        }
    }.observes('currentPath')
});
