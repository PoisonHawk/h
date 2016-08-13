var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var imageResize = require('gulp-image-resize');
var autoprefixer = require('gulp-autoprefixer');
var uncss = require('gulp-uncss');

gulp.task('default', function(){
gulp.src('images/*')
.pipe(imagemin())
.pipe(gulp.dest('images'))
})


gulp.task('resize', function () {
gulp.src('images/partners/*')
.pipe(imageResize({
  // width : 280,
  height : 118,
  // crop : true,
  upscale : true,
}))
.pipe(gulp.dest('images/partners1'));
});


gulp.task('prefix', function(){
  return gulp.src('css/main.css')
    .pipe(autoprefixer())
    .pipe(gulp.dest('css'))
})


gulp.task('uncss', function(){
  return gulp.src('css/main.css')
    .pipe(uncss({
      html: ['index.html'],
    }))
    .pipe(gulp.dest('css'))
})
