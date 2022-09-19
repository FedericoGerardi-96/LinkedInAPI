const ErrorResponse = require("../../helper/errorResponse");
var axios = require("axios");

exports.getCodeLoginUser = async (req, res, next) => {
  var config = {
    method: "post",
    url: `https://www.linkedin.com/oauth/v2/accessToken?grant_type=authorization_code&client_id=77ejg6ayimdm43&client_secret=FrQ9URV0I77bO2wl&redirect_uri=http://127.0.0.1:5173/home&code=${req.body.code}`,
    headers: {
      Cookie:
        'bcookie="v=2&214ce1f5-555e-422d-8f68-a6ed9b77d746"; lang=v=2&lang=en-us; lidc="b=VB54:s=V:r=V:a=V:p=V:g=3440:u=84:x=1:i=1663486432:t=1663571404:v=2:sig=AQEuG07ccMvARFxARjRSGFZrtAJQK_wz"; JSESSIONID=ajax:7069488690379357886; bscookie="v=1&20220915155519552937a3-187a-497f-806b-5ad4bba9c7d1AQFbB7eqe93KrGQQcL98Zox0yk_UbCVk"',
    },
  };
  try {
    const data = await axios(config);
    res.status(200).json(data.data);
  } catch (err) {
    next(
      new ErrorResponse("No se pudo procesar en request " + err.message, 404)
    );
  }
};
