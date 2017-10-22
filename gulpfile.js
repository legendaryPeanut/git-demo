/*
* @Author: xinxin
* @Date:   2017-10-18 15:07:16
* @Last Modified by:   xinxin
* @Last Modified time: 2017-10-18 15:37:20
*/
//先导入gulp包
var gulp=require('gulp');

//注册一个任务
gulp.task('copy', function(){
 	 gulp.src('gulp1/index1.html')
    .pipe(gulp.dest('test/'));
});