var gulp = require('gulp'),
    livereload = require('gulp-livereload'),
    connect = require('gulp-connect');

    gulp.task('connect', function(){
      connect.server({
        liverload:true;
      })
    })

    gulp.task('watch', function(){
    livereload.listen();
    gulp.watch('css/*.css').on('change', livereload.changed);
   });
