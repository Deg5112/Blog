blog.controller('tableController', function ($log, blogLog) {
    var tself = this;
    tself.entry_arr = [
        {
            "id": 897,
            "uid": 755,
            "ts": 1450208405,
            "title": "The title of your blog",
            "summary": "This is the short form of the entry. It could be all new or a truncated version of the full text",
            "tags": ["blog", "cats", "fun"],
            "public": true,
            "published": "2015-12-15 19:40:05",
            "edited": "2015-12-08 19:40:05"
        },
        {
            "id": 897,
            "uid": 755,
            "ts": 1450208405,
            "title": "Dummy Data",
            "summary": "Cool Summary",
            "tags": ["blog", "cats", "fun"],
            "public": true,
            "published": "2015-12-15 19:40:05",
            "edited": "2015-12-08 19:40:05"
        },
        {
            "id": 897,
            "uid": 755,
            "ts": 1450208405,
            "title": "Dummy Data",
            "summary": "Cool Summary",
            "tags": ["blog", "cats", "fun"],
            "public": true,
            "published": "2015-12-15 19:40:05",
            "edited": "2015-12-08 19:40:05"
        },
        {
            "id": 897,
            "uid": 755,
            "ts": 1450208405,
            "title": "Dummy Data",
            "summary": "Cool Summary",
            "tags": ["blog", "cats", "fun"],
            "public": true,
            "published": "2015-12-15 19:40:05",
            "edited": "2015-12-08 19:40:05"
        }
    ];

    blogLog.load_data()
        .then(function (response) {
            $log.info('response is: ', response);
            tself.entry_arr.push(response);
            $log.info('tself.entry_arr is now: ', tself.entry_arr);
        }, function () {
            $log.error('Error loading data into tableController');
        }
    );

    tself.call_remove_entry = function (entry) {
        blogLog.delete_entry(entry);
    }
});