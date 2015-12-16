blog.service('blogLog', function($http, $log, $q){
    var self = this;
    self.entry_arr = [
        //{
        //    "id": 897,
        //    "uid": 755,
        //    "ts": 1450208405,
        //    "title": "The title of your blog",
        //    "summary": "This is the short form of the entry. It could be all new or a truncated version of the full text",
        //    "tags": ["blog", "cats", "fun"],
        //    "public": true,
        //    "published": "2015-12-15 19:40:05",
        //    "edited": "2015-12-08 19:40:05"
        //},
        //{
        //    "id": 897,
        //    "uid": 755,
        //    "ts": 1450208405,
        //    "title": "Dummy Data",
        //    "summary": "Cool Summary",
        //    "tags": ["blog", "cats", "fun"],
        //    "public": true,
        //    "published": "2015-12-15 19:40:05",
        //    "edited": "2015-12-08 19:40:05"
        //}
    ];
    self.data_loaded = false;

    self.get_results = function(){
        return self.entry_arr;
    }

    self.load_data = function(){

        var d = $q.defer();

        if(!self.data_loaded) {
            $http({
                url: 'http://s-apis.learningfuze.com/blog/list.json',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                method: 'POST'
            }).success(function (response) {
                $log.info('load data successful: ', response);
                self.entry_arr.push(response.data);
                self.data_loaded = true;
                d.resolve(self.entry_arr);
            }).error(function () {
                $log.error('Error loading data');
                d.reject('Error loading data');
            })
        }else{
            $log.info('load data called after initial load. entry_arr: ', self.entry_arr);
        }

        return d.promise;
    }

    self.add_entry = function(entry){
        var data = $.param({
            'title': entry.title,
            'blog': entry.blog,
            'tags': entry.tags,
            'user': entry.user
        });

        return $http({
            url: 'http://s-apis.learningfuze.com/blog/create.json',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            method: 'POST',
            data: data
        }).success(function(response){
            if(response['success']){
                $log.info('success');
                entry.id = response.data.id;
                console.log('entry in success is: ', entry);
                console.log('entry_arr is: ', self.entry_arr);
                self.entry_arr.push(entry);
            }else{
                $log.error('Error adding entry to database. response is: ', response);
            }
        }).error(function(){
            $log.error('Error adding entry to database');
        })
    }

    self.delete_entry = function(entry){
        $log('delete entry called');

        var data = $.param({
            id : entry.id
        });

        return $http({
            url: 's-apis.learningfuze.com/blog/delete.json',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            method: 'POST',
            data: data
        }).success(function(response){
            if(response['success']){
                $log.info('entry successfully deleted from db');
                var index = self.entry_arr.indexOf(entry);
                self.entry_arr.splice(index, 1);
            }
            else{
                $log.error('Error deleting entry from database. response is: ', response);
            }
        }).error(function(){
            $log.error('Error deleting entry from database');
        })
    }
})

