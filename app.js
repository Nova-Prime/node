const _ = require('lodash');
const express =  require('express');

console.log(_.isFinite(-49),_.random(0, 9));


var generateOtp = () => {
    let _otp = "";
    let otp_sizeLimit = 6;
    for (let i = 0; i < otp_sizeLimit; i++) {
        _otp = _otp + _.random(0, 9);
    }
    return _otp;
};

console.log(generateOtp());