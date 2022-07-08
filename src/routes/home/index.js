"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.home);                      // 요청하는 페이지로 이동 (/, /login 은 페이지 주소)
router.get("/login", ctrl.login);

module.exports = router;                    // 폴더 외부에서 사용할 수 있도록 설정