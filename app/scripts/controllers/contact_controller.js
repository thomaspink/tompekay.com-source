TompekayCom.ContactController = Ember.Controller.extend({
    isSpam: false,
    isSent: false,
    isSending: false,
    isEmailError: false,
    isNameError: false,
    isMessageError: false,
    isError: false,
    actions: {
        submit: function() {

            var self = this;

            if(this.get("isSending"))
                return;

            if(this.get("firstname")) {
                this.set("isSpam",true);
                return;
            }

            var isError = false;
            this.set("isServerError",false);
            this.set("isSent", false);

            if(validateEmail(this.get("email"))) {
                this.set("isEmailError", false);
            } else {
                isError = true;
                this.set("isEmailError", true);
            }

            if(this.get("name") && this.get("name").length > 2) {
                this.set("isNameError", false);
            } else {
                isError = true;
                this.set("isNameError", true);
            }

            if(this.get("message") && this.get("message").length > 9) {
                this.set("isMessageError", false);
            } else {
                isError = true;
                this.set("isMessageError", true);
            }

            if(isError) {
                this.set("isError", true);
                return;
            }
            this.set("isError", false);
            this.set("isSending", true);

            $.ajax({
                type: "GET",
                url: "http://www.ff-axberg.at/api/tompekay/contact/",
                dataType: "jsonp",
                data: {
                    request_type: "booking",
                    email: this.get("email"),
                    name: this.get("name"),
                    message: this.get("message")
                },
                success: function(data) {
                    if(!!data.error) {
                        self.set("isServerError",true);
                        self.set("isSending",false);
                        self.set("isSent", false);
                    } else {
                        self.set("isServerError",false);
                        self.set("isSending",false);
                        self.set("isSent", true);
                    }
                },
                error: function() {
                    self.set("isServerError",true);
                    self.set("isSending",false);
                    self.set("isSent", false);
                }
            });

            function validateEmail(email) {
                var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(email);
            }
        }
    }
});
