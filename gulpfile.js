const gulp=require('gulp');//加载gulp插件
const gulpsass=require('gulp-sass');
const html=require('gulp-minify-html');
const concat=require('gulp-concat');
const uglify=require('gulp-uglify');
const rename=require('gulp-rename');

//1.新建gulp任务
gulp.task('taskname',function(){//taskname:任务名称，如果任务名称设置为default，执行的时候，只需要gulp
	return console.log('hello,gulp');
});

//2.将开放目录下面的文件复制到线上目录(无需插件)
//gulp.src():引入文件的目录
//gulp.dest() : 输出文件目录设置
//pipe() : 管道（流）
/*gulp.task('copyfile',function(){
	gulp.src('src/*.html').pipe(gulp.dest('dist/'));
});*/

//3.sass编译--gulp-sass
gulp.task('sass',function(){
	return gulp.src('src/sass/*.scss')
	.pipe(gulpsass({outputStyle:'compressed'}))//执行编译
	.pipe(gulp.dest('dist/css/'))
});

//4.压缩html
gulp.task('uglifyhtml',function(){
	gulp.src('src/*.html')
	.pipe(html())//执行压缩
	.pipe(gulp.dest('dist/'));
})

//5.合并压缩js
gulp.task('alljs',function(){
	gulp.src('src/js/*.js')
	.pipe(concat('all.js'))//合并以及重命名
	.pipe(rename('all.min.js'))//重命名
	.pipe(uglify())//压缩
	.pipe(gulp.dest('dist/js/'));
})


//最终的监听。
gulp.task('default', function(){
	gulp.watch(['src/sass/style.scss','uglifyhtml','alljs'],function(){
		gulp.task('default', gulp.parallel('sass', 'uglifyhtml','alljs'));
	});
});
