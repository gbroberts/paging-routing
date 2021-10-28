const {src, dest} = require('gulp')

const static = function(cb){
    return src('src/static/**')
    .pipe(dest('dist'))

    cb()
}

exports.default = static