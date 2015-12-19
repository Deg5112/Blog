

blog.controller('loginController', function($http, $log, loginRegisterService){
    var self = this;
    self.bool = true;
    self.badusername = false;
    self.login = {};
    self.register = {};
    self.loggedInBool = false;
    self.changeBool = function(){
      self.bool = (self.bool) ? !(self.bool) : true;
    };

    self.setCurrentToken = function(){
        var token = localStorage.getItem('token');
        loginRegisterService.token = token;
    };

    self.logOut = function(){
        loginRegisterService.logOutFromDb(loginRegisterService.token).then(function(response){
           if(response.data.success){
               console.log(response);
               self.loggedInBool = false;
               console.log('logged in bool ' + self.loggedInBool);
           }else{
               console.log(response);
           }
        });
    };

    self.loginUser = function(username, password){
        self.login = {};
        loginRegisterService.loginToDb(username, password).then(function(response){
            // if a token property exists in response, place in browser
            // if there is not a token, is there a response.data.data
            if(response.data.token) {
                loginRegisterService.token = response.data.token; //update the current token of the service on response.success
                console.log('login token ' + ' ' + loginRegisterService.token);
                self.loggedInBool = true;
                    //update the current token in local storage
                localStorage.setItem("token", response.data.token);
                console.log("token ", response.data.token);
                self.badusername = false;
                return;

            }
            if (response.data.data) {
                self.datamessage = response.data.data;
                self.badusername = true;
                console.log("data ", response.data.data);
            }
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