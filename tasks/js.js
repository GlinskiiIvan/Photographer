const { src, dest } = require("gulp");

// Плагины
const plumber = require("gulp-plumber");
const concat = require("gulp-concat");
const notify = require("gulp-notify");
const babel = require("gulp-babel");
// const uglify = require("gulp-uglify");
const webpack = require("webpack-stream");

// Конфигурация
const path = require("../config/path.js");
const app = require("../config/app.js");

// обработка JavaScript
const js = () => {
    return src(path.js.src, { sourcemaps:app.isDev })
    .pipe(concat("main.js"))
    .pipe(plumber({
        errorHandler: notify.onError(error => ({
            title: "JavaScript",
            message: error.message
        }))
    }))
    .pipe(babel())
    // .pipe(webpack(app.webpack))
//    .pipe(uglify())
    .pipe(dest(path.js.dest, { sourcemaps: app.isDev }))
};

module.exports = js;