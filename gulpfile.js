var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import');


//gulp variable with method task() two arg 1:task to be named,
//2: what we want to be happen when this task runs
gulp.task('default',function(){
  console.log("Hooray-you created a Gulp task");
});

gulp.task('html',function(){
  console.log("Imagin something useful being done to your HTML here. ");
});

gulp.task('styles',function(){
  //src(arg: path to the css file.) pipe(pointAtopointb)
  //we put return because gulp.src is asyncronis function.
  return  gulp.src('./app/assets/styles/styles.css')
  .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
  .pipe(gulp.dest('./app/temp/styles'))
});

gulp.task('watch',function(){
  //watch plugins
//1st arg: file on our computer that we want to watch for save changes to
//2nd arg:
  watch('./app/index.html',function(){
    gulp.start('html');
  });

  watch('./app/assets/styles/**/*.css',function(){
    gulp.start('styles');
  });

});
