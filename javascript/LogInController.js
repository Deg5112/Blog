blog.controller('loginController', function($http, $log, loginRegisterService){
    var self = this;
    self.bool = true;
    self.login = {};
    self.register = {};
    self.changeBool = function(){
      self.bool = (self.bool) ? !(self.bool) : true;
    };

    self.loginUser = function(username, password){
        console.log(username + password);
        self.login = {};
        loginRegisterService.loginToDb(username, password).then(function(response){
            // if a token property exists in response, place in browser
            // if there is not a token, is there a response.data.data
            if(response.data.token) {
                localStorage.setItem("token", response.data.token);
                console.log("token ", response.data.token);
                return;

            }
            if (response.data.data) {
                var datamessage = response.data.data;
                //var listItem = $('#usernameLog').text(datamessage);

                $('#usernameLog').text(datamessage);
                console.log("data ", response.data.data);
            }
            //console.log(response);
        });
    };


    self.registerUser = function(user, email, pw, confirmPw){
        //console.log(self.register);
        self.register = {};
        loginRegisterService.registerToDb(user, email, pw, confirmPw).then(function(response){
            console.log(response);
        });
    };
});