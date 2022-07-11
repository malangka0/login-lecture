"use strict";

const { use } = require(".");

const output = {
    home : (req, res) => {
        res.render("home/index");       // render 메소드를 사용하여 view/home 폴더의 index.ejs파일 불러오기
    },
    
    login : (req, res) =>{
        res.render("home/login");
    },
};

const users = {
    id : ["malangka0", "최혁규", "최사원"],
    psword : ["1234", "1234", "123456"],
};

const process = {
    login : (req, res) => {
        const id = req.body.id;
        const psword = req.body.psword;
        
        if(users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if(users.psword[idx] === psword){
                return res.json({
                    sucess : true,
                });
            }
        }
        return res.json({
            success : false,
            msg : "로그인에 실패하셨습니다." ,
        });
    },
};


module.exports = {
    output,
    process,
};


// 객체에서 key만 존재하고 value가 생략시, key와 value는 동일
// {key, value}
// {
//     hello,
//     login
// }