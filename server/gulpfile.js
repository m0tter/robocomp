var gulp  = require('gulp');
var ts    = require('gulp-typescript');
var del   = require('del');

var tsProject = ts.createProject('./tsconfig.json');
var node;
var mongod;
var spawn = require('child_process').spawn;
var exec  = require('child_process').exec;

function cleanServe() {
  return del('.tmp');
}

function compileTSServe() {
  var tsResult = tsProject.src()
    .pipe(tsProject());

  return tsResult.js.pipe(gulp.dest( '.tmp' ));
}

function nodeStart(done) {
  if(node) node.kill();
  node = spawn('node', ['.tmp/server.js'], { stdio: 'inherit' });
  node.on( 'close', function( code ) {
    if( code === 8 ) {
      gulp.log('something went wrong with node!');
    }
  });
  done();
  return node;
}

function mongoStart(done) {
  mongod = exec('mongod --dbpath ./data', function(err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
  });
  done();
  return mongod;
}

function watch() {
  gulp.watch('**/*.ts', {cwd: 'src'}, gulp.series(compileTSServe, nodeStart));
}

gulp.task('serve', gulp.series(cleanServe, compileTSServe, mongoStart, gulp.parallel(nodeStart,watch)));
