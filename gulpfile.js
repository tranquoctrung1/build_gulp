var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber')
var uglify = require('gulp-uglify');
var pug = require('gulp-pug');
sass.compiler = require('node-sass');

gulp.task('browser-sync',()=>{
    browserSync.init({
        server : {
            baseDir: "./.dist"
        }
    });
});

gulp.task('create-js',() => {
    return gulp.src(['./src/js/_pages/**/*.js' ])
    .pipe(plumber())
    .pipe(uglify())
    .pipe(concat('main.js'))
    .pipe(gulp.dest("./.dist/js"));
})

gulp.task("create-html",() =>
{
    return gulp.src(['./src/**/*.pug'])
    .pipe(plumber())
    .pipe(pug({
        pretty: true
    }))
    .pipe(gulp.dest('./.dist'))
})

gulp.task('create-css',() =>
{
    return gulp.src('./src/sass/**/*.sass')
    .pipe(plumber())
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('main.css'))
    .pipe(gulp.dest('./.dist/css'))
  .pipe(browserSync.stream());

})

gulp.task('noi-file-css', () => {
    return gulp.src([
        'bower_components/bootstrap/dist/css/bootstrap.min.css',
    ])
    .pipe(concat('thuvien.css'))
    .pipe(gulp.dest('./.dist/css'));
})

gulp.task('noi-file-js', () =>
{
    return gulp.src([
        'bower_components/jquery/dist/jquery.slim.min.js',
        'bower_components/popper.js/dist/umd/popper.min.js',
        'bower_components/bootstrap/dist/js/bootstrap.min.js',
    ])
    .pipe(concat('thuvien.js'))
    .pipe(gulp.dest('./.dist/js'));
})

gulp.task('watch',() =>
{
    gulp.watch('./src/js/_pages/**/*.js',['create-js']),
    gulp.watch('./src/sass/**/*.sass',['create-css']),
    gulp.watch('./src/**/*.pug',['create-html']),
    gulp.watch('./src/**/*.*').on('change',browserSync.reload);
})


gulp.task('default',[
    'create-js',
    'create-css',
    'noi-file-css',
    'noi-file-js',
    'create-html',
    'watch',
    'browser-sync',
])

