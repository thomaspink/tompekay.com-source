TompekayCom.MusicRoute = Ember.Route.extend({
    model: function() {
        return TompekayCom.ajax.raw({
            url:'http://api.mixcloud.com/tompekay/cloudcasts/',
            dataType: 'jsonp'
        }).then(function(data) {
            return Ember.Object.create(data.response);
        });
    }
});
