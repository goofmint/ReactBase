import gulp from 'gulp'
import gulpLoadPlugins from 'gulp-load-plugins'
import gutil from 'gulp-util'
import browserify from 'browserify'
import source from 'vinyl-source-stream'
import path from 'path'
import babelify from 'babelify'
import nodemon from 'gulp-nodemon'
import reactify from 'reactify'

const relativePathToJs = path.relative('.', 'src');

gulp.task('browserify', () => {
  return browserify(relativePathToJs + '/client.js')
    .transform(babelify, {presets: ['es2015', 'react']})
    .bundle()
    .on('error', function(err) {
      gutil.log(err);
      this.emit('end');
    })
    .pipe(source("bundle.js"))
    .pipe(gulp.dest('./public/'));
});

gulp.task('watch', () => {
  gulp.watch([relativePathToJs + '/**/*.js', relativePathToJs + '/**/*.jsx'], ['browserify']);
});

gulp.task('serve', () => {
  nodemon({ script: './app.js'
          , 'exec': 'babel-node'
          , ext: 'html js json jsx'
          , ignore: ['./node_modules', './src']})
    .on('restart', function () {
      console.log('restarted!')
    })
})

gulp.task('default', function () {
  gulp.run('serve', 'watch');
});

