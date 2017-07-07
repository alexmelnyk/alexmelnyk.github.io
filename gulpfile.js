let gulp = require('gulp');
let gutil = require('gulp-util');
let server = require('gulp-server-livereload');
let sass = require('gulp-sass');
let cleanCSS = require('gulp-clean-css');
let autoprefixer = require('gulp-autoprefixer');
let browserify = require('browserify');
let babelify = require('babelify');
let source = require('vinyl-source-stream');
let es2015 = require('babel-preset-es2015');
let react = require('babel-preset-react');
let minify = require('gulp-minify');

let path = 'app/';

gulp.task('webserver', () => {
  gulp.src('')
    .pipe(server({
      livereload: true,
      defaultFile: 'index.html',
      directoryListing: true,
      open: true
    }));
});

gulp.task('sass', () => {
  return gulp.src(path + 'src/scss/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest(path + 'dist/css'));
});

gulp.task('minify-css', () => {
  return gulp.src(path + 'dist/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(autoprefixer({
        browsers: ['last 5 versions'],
        cascade: false
    }))
    .pipe(gulp.dest(path + 'dist/css'));
});

gulp.task('build', () => {
    return browserify({
            entries: path + 'src/js/app.jsx',
            extensions: ['.jsx', '.js'],
            debug: true
        })
        .transform('babelify', {
            presets: ['es2015', 'react'],
            plugins: ['transform-class-properties']
        })
        .bundle()
        .on('error', function(err){
            gutil.log(gutil.colors.red.bold('[browserify error]'));
            gutil.log(err.message);
            this.emit('end');
        })
        .pipe(source('bundle.js'))
        .pipe(gulp.dest(path + 'dist/js'));
});

gulp.task('compress', function() {
  gulp.src(path + 'dist/js/*.js')
    .pipe(minify({
        ext:{
            min:'.min.js'
        },
        ignoreFiles: ['.combo.js', '-min.js']
    }))
    .pipe(gulp.dest(path + 'dist/js'))
});

gulp.task('watch', () => {
  gulp.src('')
    .pipe(server({
      livereload: true,
      defaultFile: 'index.html'
    }));
  gulp.watch(path + 'src/scss/**/*.scss', ['sass']);
  gulp.watch(path + 'src/js/**/*.jsx', ['build']);
  gulp.watch(path + 'dist/css/**/*.css', ['minify-css']);
});