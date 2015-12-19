

blog.controller('loginController', function($http, $log, loginRegisterService){
    var self = this;
    self.username = 'hello';
    self.bool = true;
    self.badusername = false;
    self.login = {};
    self.register = {};
    self.loggedInBool = false;
    self.changeBool = function(){
      self.bool = (self.bool) ? !(self.bool) : true;
    };

    self.checkIfLoggedIn = function(){
        //update current token on page load
        var token = localStorage.getItem("token");
        console.log(' token ' + ' ' + token);
        if(token){
            loginRegisterService.compareTokens(token).then(function(response){
               if(response.data.success){
                   console.log('true', response);
                   loginRegisterService.token = token;
                   //this means the tokens match and we are still logged in
                   self.username = response.data.username;
                   self.loggedInBool = true;
                   //we need to grab the name of the id and stick it up there as well
               }else{
                   console.log('false', response);
                   //either tokens did not match, or the token was deleted on the server but not the client
               }
            });
        }
    };

    self.checkIfLoggedIn();

    self.logOut = function(){
        loginRegisterService.logOutFromDb(loginRegisterService.token).then(function(response){
           if(response.data.success){
               console.log(response);
               self.loggedInBool = false;
               console.log('logged in bool ' + self.loggedInBool);
               localStorage.removeItem('token');
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
                self.username = response.data.username;
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