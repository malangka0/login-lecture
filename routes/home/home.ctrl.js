"use strict";

const home = (req, res) => {
    res.render("home/index");       // render 메소드를 사용하여 view/home 폴더의 index.ejs파일 불러오기
};

const login = (req, res) =>{
    res.render("home/login");
};

module.exports = {
    home,
    login,
};


// 객체에서 key만 존재하고 value가 생략시, key와 value는 동일
// {key, value}
// {
//     hello,
//     login
// }