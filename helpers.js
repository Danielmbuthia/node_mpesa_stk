const axios = require('axios');
let  consumerKey = process.env.CONSUMER_KEY;
let  consumerSecret = process.env.CONSUMER_SECRET;
let  url = process.env.MPESA_URL;
const authenticateMpesa = ()=> {
        const auth = Buffer.from(consumerKey + ':' + consumerSecret).toString('base64');
       return axios.get(url+'/oauth/v1/generate?grant_type=client_credentials', {
            headers: {
                'Authorization': 'Basic ' + auth,
                'content-type': 'application/json'
            }
        });
};
const lipaNaMpesa = async (phoneNumber,amount)=>{
    const _shortCode = 174379;
    const _passKey = process.env.PASS_KEY;
    const timeStamp = (new Date()).toISOString().replace(/[^0-9]/g, '').slice(0, -3);
    const password = Buffer.from(`${_shortCode}${_passKey}${timeStamp}`).toString('base64');
    let data = {
        "BusinessShortCode": _shortCode,
        "Password": password,
        "Timestamp": (new Date()).toISOString().replace(/[^0-9]/g, '').slice(0, -3),
        "TransactionType": "CustomerPayBillOnline",
        "Amount": amount,
        "PartyA": phoneNumber,
        "PartyB":_shortCode ,
        "PhoneNumber": phoneNumber,
        "CallBackURL": process.env.CALLBACK+":"+process.env.PORT+"/mpesa/callback",
        "AccountReference": "Daniel",
        "TransactionDesc": " Test stk push"
    };
    const credentials = await authenticateMpesa();
    return  axios.post(url+'/mpesa/stkpush/v1/processrequest', data,{
        headers: {
            'Authorization': 'Bearer ' + credentials.data['access_token'],
            'content-type': 'application/json'
        }
    });
};
const lipaNaMpesaQuery = async (CheckoutRequestID)=>{
    const _shortCode = 174379;
    const _passKey = process.env.PASS_KEY;
    const timeStamp = (new Date()).toISOString().replace(/[^0-9]/g, '').slice(0, -3);
    const password = Buffer.from(`${_shortCode}${_passKey}${timeStamp}`).toString('base64');
    let data = {
        'CheckoutRequestID':CheckoutRequestID,
        'password':password,
        'BusinessShortCode':_shortCode,
        'Timestamp':timeStamp
    };
    const credentials = await authenticateMpesa();
    return axios.post(url+'/mpesa/stkpushquery/v1/query',data,{
        headers: {
            'Authorization': 'Bearer ' + credentials.data['access_token']
        }
    })
};
module.exports = {lipaNaMpesa,lipaNaMpesaQuery};