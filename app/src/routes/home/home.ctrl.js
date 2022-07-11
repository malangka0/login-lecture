"use strict";

const UserStorage = require("../../models/UserStorage");

const output = {
    home : (req, res) => {
        res.render("home/index");       // render 메소드를 사용하여 view/home 폴더의 index.ejs파일 불러오기
    },
    
    login : (req, res) =>{
        res.render("home/login");
    },
};

const process = {
    login : (req, res) => {
        const id = req.body.id,
        psword = req.body.psword;
        
        const users = UserStorage.getUsers("id", "psword");

        const response = {};
        if(users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if(users.psword[idx] === psword){
                response.success = true;
                return res.json(response);
            }
        }

        response.success = false;
        response.msg = "로그인에 실패하셨습니다.";
        return res.json(response);
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