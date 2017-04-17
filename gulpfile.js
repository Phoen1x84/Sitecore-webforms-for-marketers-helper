'use strict';
// gulp require modules
const gulp = require('gulp');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const runSequence = require('run-sequence');

// config
const paths = {
    //tasks: './gulp_tasks',
    src: {
        styles: './src/styles/',
    },
    dist: {
        main: './dist/',
        css: './dist/css/',
        wffm: './sitecore modules/Shell/Web Forms for Marketers/Themes'
    },
    webroot: 'C:/inetpub/wwwroot/sandbox/website' // change this depending on project
};

// ----------------------------------------
// Sitecore Webforms for Marketers Compiler
// ----------------------------------------

// Generate Custom Web Forms For Marketers Stylesheet
gulp.task('wffm-style-generator', () => {
    return gulp.src(paths.src.styles + 'wffm/wffm-custom-theme.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'IE 9'],
            cascade: false
        }))
        .pipe(concat({
            path: 'wffm-custom-theme.css'
        }))
        .pipe(gulp.dest(paths.dist.wffm));
});

// copy files to wwwroot
gulp.task('copy', () => {
    return gulp.src([
        paths.dist.main + '**/*.*',
        paths.dist.wffm + '**/*.*'
    ], {
        base: './'
    }).pipe(gulp.dest(paths.webroot));
});

// -------------------------------
// All build tasks
// -------------------------------
// watch task (default)
gulp.task('default', () => {
    gulp.watch([paths.src.styles + '**/*.scss'],
        () => runSequence('wffm-style-generator', 'copy')
    );
});
