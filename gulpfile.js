gulp.task('deploy', function () {
  return gulp.src('build/**')
      .pipe($.ghPages(options));
});