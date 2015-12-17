/**
 * Created by Andrew N on 12/16/2015.
 */
blog.controller('postController', function ($log, blogLog) {
    var pself = this;
    pself.entry_display = blogLog.get_clicked_post();
    console.log('pself.entry_display is: ',pself.entry_display);
});