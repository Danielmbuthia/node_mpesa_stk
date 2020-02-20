module.exports = app =>{
    let mpesa = require("../controllers/mpesaController");
    app.route('/')
        .get(function (req,res) {
            res.send("test");
        });
    app.route('/mpesa/push')
        .post(mpesa.stkPush);
    app.route('/mpesa/callback')
        .get(mpesa.callback);
    app.route('/mpesa/query')
        .post(mpesa.stkQuery);
};