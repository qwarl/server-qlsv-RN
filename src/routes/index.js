const adminRoute = require('./admin');
// const studentRoute = require('./student');
function route(app) {
    app.use('/admin', adminRoute);
    // app.use('/student', studentRoute);//chua xong
}

module.exports=route;