//www.mixcloud.com/widget/iframe/?feed=http%3A%2F%2Fwww.mixcloud.com%2Ftompekay%2Ftom-pekay-creatures-of-the-night-dietischlerei-linz-an-excerpt%2F&amp;mini=1&amp;stylecolor=dbd9d9&amp;embed_type=widget_standard&amp;embed_uuid=fd1ca988-39e3-4c2f-825b-671c3ada3135&amp;hide_tracklist=1&amp;replace=0&amp;hide_cover=1
TompekayCom.MusicController = Ember.ObjectController.extend({
    actions: {
        playCloudcast: function(key, slug) {
            this.set('mixcloudFrameSrc',
                '//www.mixcloud.com/widget/iframe/?feed='
                + encodeURIComponent(key)
                + '&amp;mini=1&amp;stylecolor=dbd9d9&amp;embed_type=widget_standard&amp;'
                + 'embed_uuid=fd1ca988-39e3-4c2f-825b-671c3ada3135&amp;'
                + 'hide_tracklist=1&amp;replace=0&amp;autoplay=1&amp;hide_cover=1'
            );
            this.set('slug', slug);
        }
    }
});
