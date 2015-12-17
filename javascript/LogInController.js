blog.controller('loginController', function($http, $log, loginRegisterService){
    var self = this;
    self.bool = true;
    self.badusername = false;
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
                self.badusername = false;
                return;

            }
            if (response.data.data) {
                self.datamessage = response.data.data;
                //var listItem = $('<li>').text(datamessage);
                self.badusername = true;
                //$('#usernameLog').text(response.data.data);

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