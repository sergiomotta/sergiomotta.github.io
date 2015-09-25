var gulp        = require('gulp'),
    sass        = require('gulp-ruby-sass'),
    imagemin    = require('gulp-imagemin'),
    changed     = require('gulp-changed'),
    minifycss   = require('gulp-minify-css'),
    notify      = require('gulp-notify');   


gulp.task('sass', function () {
  return sass('./assets/sass/styles.scss')
    .on('error', sass.logError)
    .pipe( minifycss() )
    .pipe(gulp.dest('./dist/css'))
    .pipe( notify( 'CSS OK!' ) )
});
 
gulp.task('jpg', function() {
    gulp.src('./assets/img/**/*.jpg')
        .pipe(changed('./dist/img/'))
        .pipe(imagemin({
            progressive: true
        }))
        .pipe(gulp.dest('./dist/img/'));
});

gulp.task('watch', function () { 
    gulp.watch('./assets/sass/**/*.scss', ['sass']);
});

gulp.task( 'default', [ 'watch' ]);