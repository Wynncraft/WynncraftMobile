var gulp = require('gulp');

// Update dependencies
gulp.task('update', function() {
    // Update Ratchet
    gulp.src('./bower_components/ratchet/dist/**/*').pipe(gulp.dest('./'));

    // Update jQuery
    gulp.src('./bower_components/jquery/dist/*').pipe(gulp.dest('./js'));
})