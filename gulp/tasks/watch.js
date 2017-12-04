var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('watch',function(){
  browserSync.init({
    notify: false,
    server: {
      baseDir: "app"
    }
  });

  //watch plugins
//1st arg: file on our computer that we want to watch for save changes to
//2nd arg:
  watch('./app/index.html',function(){
    browserSync.reload();
  });

  watch('./app/assets/styles/**/*.css',function(){
    gulp.start('cssInject');
  });

});



gulp.task('cssInject',['styles'],function(){
  return gulp.src('./app/temp/styles/styles.css')
  .pipe(browserSync.stream());
});
