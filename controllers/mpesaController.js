let {lipaNaMpesa,lipaNaMpesaQuery} = require('../helpers');
const db = require("../models");
const Mpesa = db.mpesa;
exports.stkPush = async (req,res)=>{
    try {
        const data = await lipaNaMpesa(req.body.phone,req.body.amount);
         Mpesa.create(data.data)
             .then(data=>{
                 res.send(data);
             })
             .catch((err)=>{
                 res.send(err.message);
             });
    }catch (e) {
        res.send(e.message);
    }
};
exports.callback = (req,res)=>{
  res.send(res.body);
};
exports.stkQuery = async (req,res)=>{
  try {
       const CheckoutRequestID = req.body.CheckoutRequestID;
       const result = await lipaNaMpesaQuery(CheckoutRequestID);
       Mpesa.update(result.data,{where:{CheckoutRequestID:CheckoutRequestID}})
           .then((data)=>{
               res.send(data);
           })
           .catch((err)=>{
               res.send(err.message);
           })
  }catch (e) {
     res.send(e.message);
  }
};
