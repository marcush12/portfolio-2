var gulp = require('gulp'),
sass = require('gulp-sass'),
webpack = require('webpack');

//compile sass and inject into browser
gulp.task('sass',function(){
  return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'app/assets/scss/*.scss'])
    .pipe(sass())//plugin
    .pipe(gulp.dest("app/assets/css"))//destination
    //.pipe(browserSync.stream());
});

//move js files to src/js
gulp.task('js', function(){
  return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js',
'node_modules/popper.js/dist/umd/popper.min.js'])
  .pipe(gulp.dest("app/assets/js"))
 //.pipe(browserSync.stream());
});

//watch sass and server
/*gulp.task('serve', ['sass'], function(){
  browserSync.init({
    server: "./src"
  });

  gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'], ['sass']);
  gulp.watch("src/*.html").on('change', browserSync.reload);
});*/
//move fonts folder to src/fonts
gulp.task('fonts', function() {
  return gulp.src('node_modules/font-awesome/fonts/*')
    .pipe(gulp.dest("app/assets/fonts"));
});
//move font awesome css to src/css
gulp.task('fa', function() {
  return gulp.src('node_modules/font-awesome/css/font-awesome.min.css')
    .pipe(gulp.dest("app/assets/css"));
});

gulp.task('bootstrap', ['js', 'fa', 'fonts']);// 'serve',
