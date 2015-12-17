blog.service('loginRegisterService', function($http, $log){
    var me = this;
    me.loginToDb = function(username, password) {
        return $http({
            data: 'username=' + username + '&password=' + password,
            url: 'http://localhost:8888/lfz/Blog/php/login.php',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            method: 'POST'
        }).success(function (response) {
            // $log.info('load data successful: ', response);
        }).error(function (response) {
            $log.error('Error loading data', response);
        });
    };
    me.registerToDb = function(user, email, pw, confirmPw){
        return $http({
                data: 'user=' + user + '&email=' + email + '&pw=' + pw + '&confirmPw=' + confirmPw,
                url: 'http://s-apis.learningfuze.com/blog/list.json',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                method: 'POST'
            }).success(function(response){
                    $log.info('load data successful: ', response)
                }).error(function(response){
                    $log.error('Error loading data', response);
                });
    };
});