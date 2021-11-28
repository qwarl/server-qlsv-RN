const adminRoute = require('./admin')
function route(app) {
    app.use('/admin', adminRoute);
}

module.exports=route;