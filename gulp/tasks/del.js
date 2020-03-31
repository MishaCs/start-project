const gulp = require('gulp')
const del = require('del')

module.exports = function clean(done) {
    del.sync('build')
    done();
}