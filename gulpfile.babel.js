import gulp from 'gulp';

var cfg = {};

cfg.template = 'app/template/index.jade';
cfg.style    = 'app/style/common.css';
cfg.js       = 'app/js/script.js';
cfg.buildDir = 'build';

gulp.task('template', () => {
    let jade = require('gulp-jade');
    gulp.src(cfg.template)
        .pipe(jade({
            pretty : true
        }))
        .pipe(gulp.dest(cfg.buildDir));
});

gulp.task('style', () => {
    gulp.src(cfg.style)
        .pipe(gulp.dest(cfg.buildDir));
});

gulp.task('js', () => {
    gulp.src(cfg.js)
        .pipe(gulp.dest(cfg.buildDir));
});

gulp.task('watch', () => {
    gulp.watch(cfg.template, ['template']);
    gulp.watch(cfg.style,    ['style']);
    gulp.watch(cfg.js,       ['js']);
});

gulp.task('open', () => {
    let open = require('gulp-open');
    gulp.src(cfg.buildDir + './index.html')
        .pipe(open('<%file.path%>'));
});

gulp.task('build',   ['template', 'style', 'js']);
gulp.task('dev',     ['build', 'watch']);
gulp.task('default', ['build']);