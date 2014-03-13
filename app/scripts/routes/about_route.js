TompekayCom.AboutRoute = Ember.Route.extend({
    model: function() {
        return TompekayCom.contentfulClient.entry('4MVK2daU1WE4gEe2UKkM4i');/*.then(function(entry) {
            return TompekayCom.contentfulClient.asset(entry.fields.portrait.sys.id).then(function(asset) {
                entry.fields.portrait = asset;
                return entry;
            });
        });*/
    }
});
