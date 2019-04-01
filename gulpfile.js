var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber')
var uglify = require('gulp-uglify-es').default;
var pug = require('gulp-pug');
var autoprefixer = require('gulp-autoprefixer');
sass.compiler = require('node-sass');

gulp.task('browser-sync',()=>{
    browserSync.init({
        server : {
            baseDir: "./.dist"
        }
    });
});


gulp.task('create-js',() => {
    return gulp.src(['./src/js/**/*.js' ])
    .pipe(plumber())
    .pipe(uglify())
    .pipe(concat('main.js'))
    .pipe(gulp.dest("./.dist/js"));
})

gulp.task("create-html",() =>
{
    return gulp.src(['./src/templates/**/*.pug','!./src/templates/{**/\_*,**/\_*/**}.pug'])
    .pipe(plumber())
    .pipe(pug({
        pretty: true
    }))
    .pipe(gulp.dest('./.dist'))
})

gulp.task('create-css',() =>
{
    return gulp.src(['./src/sass/**/*.sass','!./src/sass/{**/\_*,**/\_*/**}'])
    .pipe(plumber())
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('main.css'))
    .pipe(gulp.dest('./.dist/css'))
  .pipe(browserSync.stream());

})

gulp.task('noi-file-css', () => {
    return gulp.src([
        'bower_components/bootstrap/dist/css/bootstrap.min.css',
        'bower_components/font-awesome/css/font-awesome.min.css',
        'node_modules/@fortawesome/fontawesome-free/css/all.css',
        'bower_components/animate.css/animate.min.css',
        // owl carousel
        'bower_components/owl.carousel/dist/assets/owl.carousel.min.css',
        'bower_components/owl.carousel/dist/assets/owl.theme.default.min.css',
    ])
    .pipe(concat('thuvien.css'))
    .pipe(gulp.dest('./.dist/css'));
})

gulp.task('copy-img',()=> {
    return gulp.src(['./src/img/*.*'])
    .pipe(gulp.dest('./.dist/img'));
})

gulp.task('copy-fonts',() =>
{
    return gulp.src('./src/fonts/*.*')
    .pipe(gulp.dest('./.dist/fonts'));
})
gulp.task('copy-webfonts',() =>
{
    return gulp.src('./src/webfonts/*.*')
    .pipe(gulp.dest('./.dist/webfonts'));
})

gulp.task('copy-favicon',()=>
{
    return gulp.src('./src/favicon/*.*')
    .pipe(gulp.dest('./.dist/favicon'));
})

gulp.task('autoprefixer',  () =>{
    return gulp.src([
            './.dist/css/main.css',
        ])
        .pipe(autoprefixer({
            browsers: [
                'last 2 versions',
                'iOS >= 7',
                'Android >= 4',
                'Explorer >= 10',
                'ExplorerMobile >= 11'
            ],
            cascade: false
        }))
        .pipe(gulp.dest('./.dist/css'));
});

gulp.task('noi-file-js', () =>
{
    return gulp.src([
        'bower_components/jquery/dist/jquery.min.js',
        'bower_components/popper.js/dist/umd/popper.min.js',
        'bower_components/bootstrap/dist/js/bootstrap.min.js',

        // owl carousel
        'bower_components/owl.carousel/dist/owl.carousel.min.js'
    ])
    .pipe(concat('thuvien.js'))
    .pipe(gulp.dest('./.dist/js'));
})

gulp.task('watch',() =>
{
    gulp.watch('./src/js/**/*.js',['create-js']),
    gulp.watch('./src/sass/**/*.sass',['create-css']),
    gulp.watch('./src/templates/**/*.pug',['create-html']),
    gulp.watch('./src/img/*.*',['copy-img']),
    gulp.watch('./src/**/*.*').on('change',browserSync.reload);
})


gulp.task('default',[
    'create-js',
    'create-css',
    'noi-file-css',
    'noi-file-js',
    'copy-img',
    'create-html',
    'copy-fonts',
    'copy-webfonts',
    'copy-favicon',
    'watch',
    'browser-sync',
])

