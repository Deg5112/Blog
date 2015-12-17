/**
 * Created by Andrew N on 12/16/2015.
 */

blog.config(function($routeProvider){
    $routeProvider

        .when('/home', {
            templateUrl: 'index.html'
        })
        .when('/post',{
            templateUrl: 'post_template.html'
        })
        .when('/contact', {
            templateUrl: 'contact.html'
        })
        .otherwise({
            redirectTo: '/home'
        })
});