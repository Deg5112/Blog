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
            console.log(response);
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