blog.controller('formController', function($log, blogLog){
    var fself = this;

    fself.call_add_student = function(){
        $log.info(this.entry);
        blogLog.add_entry(this.entry);
        //clear form after adding student
        this.entry = {};
    }
});