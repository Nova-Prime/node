
var validateUniqID = (local_uniqid) => {
    if (){
        return true;
    }
    return false;
};

var getDetailsFrom_db = (local_uniqid) => {

};

var userDetails = (local_uniqid) => {
    let _res = "";
    if (!validateUniqID(local_uniqid))
        return;
    _res = getDetailsFrom_db(local_uniqid)
    return _res;
};


module.exports = {
    userDetails
};