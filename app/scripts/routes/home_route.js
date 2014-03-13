TompekayCom.HomeRoute = Ember.Route.extend({
    model: function() {
        return TompekayCom.contentfulClient.entry('5Sg2kDcFhuuiY4KyY2OAMa');
    }
});
