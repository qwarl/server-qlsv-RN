const Admin = require('../models/Admin');
class AdminController {

    getInfo(req, res, next) {
        Admin.find({ slug: req.params.slug })
            .then(admin =>
                res.json(admin)
            )
            .catch(next)
    }
    getAdminById(req, res, next) {
        Admin.findOne({ _id: req.params.idAdmin })
            .then(admin =>
                res.json(admin)
            )
            .catch(next)
    }
}

module.exports = new AdminController;