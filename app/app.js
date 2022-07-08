"use strict";

// 모듈
const express = require("express");     // express 모듈 사용
const app = express();

// 라우팅
const home = require("./src/routes/home");  // /routes/home 폴더에서 exports 한 내용을 불러와 사용 (라우팅)

// 앱 세팅
app.set("views", "./src/views");            // views 폴더의 파일을 확인
app.set("view engine", "ejs");          // html이 아닌 ejs 파일로 읽도록 엔진 설정
app.use(express.static(`${__dirname}/src/public`));


app.use("/", home);                     // use -> 미들 웨어를 등록해주는 메서드

module.exports = app;