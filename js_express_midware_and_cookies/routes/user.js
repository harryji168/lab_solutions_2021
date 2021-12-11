const express = require('express');
const router = express.Router();
const COOKIE_MAX_AGE = 1000 * 60 * 60 * 24 * 7;

router.post("/log_in", (req, res) => {
    res.cookie("userName", req.body.userName, {
        maxAge: COOKIE_MAX_AGE
    });
    res.redirect('/');
});

router.post("/log_out", (req, res) => {
    res.clearCookie("userName");
    res.redirect('/');
});

module.exports = router;