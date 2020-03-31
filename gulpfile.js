const gulp = require('gulp')

const pug2html = require('./gulp/tasks/pug2html')
const styles = require('./gulp/tasks/styles')
const script = require('./gulp/tasks/script')
const imageMinify = require('./gulp/tasks/imageMinify')
const svgSprite = require('./gulp/tasks/svgSprite')
const serve = require('./gulp/tasks/serve')
const del = require('./gulp/tasks/del')
const exp = require('./gulp/tasks/exports')


const dev = gulp.parallel(pug2html, styles, script)
const build = gulp.series(del, exp)


module.exports.start = gulp.series(dev, serve)
module.exports.build = gulp.series(build)
