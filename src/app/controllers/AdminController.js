const Admin = require('../models/Admin');
class AdminController {

    getInfo(req, res, next) {
        Admin.find({})
            .then(admin =>
                res.json(admin)
            )
            .catch(next)
    }
    // getAdminById(req, res, next) {
    //     Admin.findOne({ _id: req.params.idAdmin })
    //         .then(admin =>
    //             res.json(admin)
    //         )
    //         .catch(next)
    // }

    //updateInfo
    // updateInfo(req, res, next) {
    //     Admin.findOne({ _id: req.params.idAdmin})
    //     .then(
    //         admin=>console.log(admin)
    //     ).
    // }
    async login(req, res) {
        console.log(req.body);
        const admin = await Admin.findOne({ userName: req.body.userName, password: req.body.password });
        if (admin) {
            res.json({
                status: "SUCCESS",
                msg: "Login Successfully",
                admin
            });
            console.log('login successssssss');
        } else {
            res.json({
                status: "FAIL",
                msg: "Please check your info again.",
            });
            console.log('login fail lòi rồi bạn eyyy');
        }

    }
    delSubAccount(req, res, next) {
        Admin.findOneAndRemove({ _id: req.body._id })
            .then(() =>
                res.json({msg:'Del subaccount succec'})
                
                )
            .catch(err=>console.log(err))
    }
}

module.exports = new AdminController;