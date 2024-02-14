const gulp = require('gulp');
const fileinclude = reqire('gulp-file-include');

// gulp.task('func1', function() {
//     console.log('동작1')
// })

// gulp.task('func2', function() {
//     console.log('동작2')
// })

gulp.task('fileinclude', function() {
    return gulp.src([
        "./src/html/*",
        "!" + "./src/html/include/*"
    ])
    .pipe(fileinclude({
        prefix: '@@',
        basepath: '@file'
    }))
    ``
})

gulp.task("default", gulp.parallel("func1", "func2"))  