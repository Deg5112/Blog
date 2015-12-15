blog.controller('tableController', function($log, blogLog){
    var tself = this;
    tself.entry_arr = [];

    blogLog.load_data()
        .then(function(response){
            $log.info('response is: ', response);
            tself.entry_arr = response;
        },function(){
            $log.error('Error loading data into tableController');
        }
    );

    tself.call_remove_entry = function(entry){
        blogLog.delete_entry(entry);
    }
});