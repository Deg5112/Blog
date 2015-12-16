blog.controller('loginController', function(){
    var self = this;
    self.bool = true;
    self.changeBool = function(){
      self.bool = (self.bool) ? !(self.bool) : true;
    };
    self.data;
});