TompekayCom.ApplicationController = Ember.Controller.extend({
    currentPathDidChange: function() {
        var path = this.get('currentPath');
        TompekayCom.set('currentPath', path);
    }.observes('currentPath')
});
