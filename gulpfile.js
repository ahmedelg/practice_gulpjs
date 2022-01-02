'use strict';
const gulp = require("gulp"),
  concat = require("gulp-concat"),
  prefix = require("gulp-autoprefixer"),
  srcmp=require('gulp-sourcemaps'),
   sass=require('gulp-sass')(require('sass')),
   pug=require('gulp-pug'),
   livereload=require('gulp-livereload');

  //  gulp-connect
  //  static-server

// ECHMAScript nodejs 14 & later
// import dartSass from 'sass';
// import gulpSass from 'gulp-sass';
// const sass = gulpSass(dartSass);



// Plugins
// each plugin used for specific mission
// gulp-concat

// name_task
// gulp.task('name_task', () => {
//   // implement specific task
//   // return gulp.src('src/index.html')
//   // return gulp.src('src/*.html') // many html files
//   // return gulp.src('src/*.*') // any  files with any extentions
//   return gulp.src(['src/index.html','src/styles/main.css']) // any  files with any extentions
//     // .pipe(gulp.dest('build'));
//     .pipe(gulp.dest('build/styles'));
// });

// cmd: gulp name_task
// gulp.dest('path')
// gulp.src('path')

gulp.task("sass", () => {
  return gulp.src("./src/sass/main.scss")
    // .pipe(srcmp.init())
    // .pipe(prefix())
      .pipe(sass({outputStyle:'compressed'}).on('error', sass.logError))
      .pipe(prefix('last 2 versions'))
      .pipe(concat("all.css"))
    // .pipe(srcmp.write())
    .pipe(gulp.dest("./build/css"))
     .pipe(livereload());
});

gulp.task("js", () => {
  return  gulp.src("src/scripts/*.js")
      .pipe(srcmp.init())
      // concat all css files in main.css
      // .pipe(concat('all.js', {newLine:';'}))
        .pipe(concat("all.js"))
      .pipe(srcmp.write())
      .pipe(gulp.dest("build/scripts"))
       .pipe(livereload());
});

gulp.task('pug',()=>{
  
  // EXE PUG LOGIN
  return gulp.src('./src/index.pug')
  .pipe(pug({})) // compressed
  // .pipe(pug({
  //   pretty:true
  // })) // not compressed
  .pipe(gulp.dest('./build'))
  .pipe(livereload());
});

// WATCH UPDATES
gulp.task('watch', ()=>{
  // START SERVER
  require('./server.js');
  // LISTEN SERVER
  livereload.listen();
  // RUN PUG TASK
  gulp.watch('./src/index.pug', gulp.series('pug'));
  gulp.watch('./src/**/*.pug', gulp.series('pug'));
  // RUN SASS TASK
  // gulp.watch('./src/sass/main.scss',gulp.series('sass'));
  gulp.watch('./src/sass/**/*.scss',gulp.series('sass'))
 
});