var gulp = require('gulp');

var runSequence = require('run-sequence');
var browserSync = require('browser-sync').create();

var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json', { noImplicitAny: true });

var concat = require('gulp-concat');
var iife = require('gulp-iife');
var wiredep = require('wiredep').stream;

gulp.task('injectBowerDependencies', injectBowerDependencies);
gulp.task('bundle', bundle);
gulp.task('copyStyles', copyStyles);
gulp.task('browserSync', browserSyncTask);
gulp.task('typescript', typescript);

gulp.task('default', function () {
    runSequence('typescript', 'bundle', 'injectBowerDependencies', 'copyStyles', 'browserSync');
});

function typescript() {
    var tsResult = gulp.src('app/**/*.ts')
        .pipe(tsProject());

    return tsResult.js
        .pipe(gulp.dest('./dist'));
}

function browserSyncTask() {
    var browserSyncSettings = {
        server: {
            baseDir: './',
            index: './public/index.html'
        },
        port: 5001
    };
    browserSync.init(browserSyncSettings);
}

function injectBowerDependencies() {
    gulp.src('./index.html')
        .pipe(wiredep())
        .pipe(gulp.dest('./public'));
}

function bundle() {
    return gulp.src(['./dist/app.module.js', './dist/**/*.js'])
        .pipe(iife())
        .pipe(concat('bundle.js'))
        .pipe(iife())
        .pipe(gulp.dest('./public'));
}

function copyStyles() {
    return gulp.src('./styles/**/*.css', {base:"."})
        .pipe(gulp.dest('./public'));
}
