const models = require("../model");

// 로그인
exports.login = (req, res) => {
    res.render("login");
}

exports.post_login = (req, res) => {
    console.log(req.body);
    models.User.findOne({
        where: {id: req.body.id, pw: req.body.pw}
    }).then((result) => {
        req.session.user = req.body.id;
        console.log(result);
        if (result == null) {
            res.send(false);
        } else {
            res.send(true);
        }
    })
}

// 회원가입
exports.register = (req, res) => {
    res.render("register");
}

exports.id_check = (req, res) => {
    models.User.findOne({
        where: {id: req.body.id}
    })
    .then((result) => {
        if (result == null) {
            res.send(true);
        } else {
            res.send(false);
        }
    });
}

exports.post_register = (req, res) => {
    let object = {
        id: req.body.id,
        pw: req.body.pw,
        name : req.body.name,
        tel: req.body.tel,
        email: req.body.email
    }
    models.User.create(object)
    .then((result) => {
        console.log(result);
        res.send("성공적으로 회원가입 되었습니다. 가입하신 정보로 다시 로그인해주세요.");
    })
}


// 프로필
exports.profile = (req, res) => {
    const user = req.session.user;

    if ( user != undefined ) {
        models.User.findOne({where: {id: user}})
        .then((result) => {
            const {name, tel, email} = result;
            res.render("profile", {isLogin: true, user: user, id: id, name: name, tel: tel, email: email});
        })
    } else {
        res.redirect("/user");
    }
}