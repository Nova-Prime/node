const axios = require('axios');
const _ = require('lodash');

const _url = '';
const _numcheckRegex = /^[^0]([0-9]{9})$/;

var validate = (local_msisdn) => {
    if (_numcheckRegex.test(local_msisdn)) 
        return true;
    return false;
};

var generateOtp = () => {
    let _otp = "";
    let otp_sizeLimit = 6;
    for (let i = 0; i < otp_sizeLimit; i++) 
        _otp = _otp + _.random(0, 9);
    return _otp;
};

var saveOtp_db = () => {

};

var sendOtp = (msisdn) => {
    if (!validate(msisdn))
        return;
    axios.get(_url).then(() => {

    }).cath((e) => {

    });
};



module.exports = {
    sendOtp, validate
};