TompekayCom.HomeRoute = Ember.Route.extend({
    model: function() {
        return TompekayCom.contentfulClient.entry('5Sg2kDcFhuuiY4KyY2OAMa').then(function(data) {
            if(!!data && !!data.fields && !!data.fields.videoMp4) {
                return TompekayCom.contentfulClient.asset(data.fields.videoMp4.sys.id).then(function(dataMp4) {
                    if(!!data.fields.videoOgv) {
                        return TompekayCom.contentfulClient.asset(data.fields.videoOgv.sys.id).then(function(dataOgv) {
                            return [dataMp4.fields, dataOgv.fields];
                        });
                    } else {
                        return dataMp4.fields;
                    }
                });
            } else {
                return {};
            }
        });
    }
});
