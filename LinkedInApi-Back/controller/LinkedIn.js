const ErrorResponse = require("../helper/errorResponse");
var axios = require("axios");

exports.getLinkedInUser = async (req, res, next) => {
  var config = {
    'method': "get",
    'url': "https://api.linkedin.com/v2/me",
    'headers': {
      "Authorization": `Bearer ${req.body.token}`,
      "Cookie":
        'lidc="b=VB54:s=V:r=V:a=V:p=V:g=3440:u=84:x=1:i=1663491946:t=1663571404:v=2:sig=AQH5vQbH_Qy9O4Cc_-6MAQ90FTfx5EZo"; bcookie="v=2&ac027570-a593-46db-820b-12bab04daa00"; lang=v=2&lang=en-us; lidc="b=VB54:s=V:r=V:a=V:p=V:g=3440:u=84:x=1:i=1663487038:t=1663571404:v=2:sig=AQGtafjQKxerCbHiMqU7SFuLW4tNuIlQ"',
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

exports.getLinkedInImage = async (req, res, next) => {
  var config = {
    "method": "get",
    "url": "https://api.linkedin.com/v2/me?projection=(id,profilePicture(displayImage~digitalmediaAsset:playableStreams))",
    "headers": {
      "Authorization": `Bearer ${req.body.token}`,
      "Cookie":
        'lidc="b=VB54:s=V:r=V:a=V:p=V:g=3440:u=84:x=1:i=1663491946:t=1663571404:v=2:sig=AQH5vQbH_Qy9O4Cc_-6MAQ90FTfx5EZo"; bcookie="v=2&ac027570-a593-46db-820b-12bab04daa00"; lang=v=2&lang=en-us; lidc="b=VB54:s=V:r=V:a=V:p=V:g=3440:u=84:x=1:i=1663487038:t=1663571404:v=2:sig=AQGtafjQKxerCbHiMqU7SFuLW4tNuIlQ"',
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

exports.getLinkedEmail = async (req, res, next) => {
  var config = {
    "method": "get",
    "url": "https://api.linkedin.com/v2/emailAddress?q=members&projection=(elements*(handle~))",
    "headers": {
      "Authorization": `Bearer ${req.body.token}`,
      "Cookie":
        'lidc="b=VB54:s=V:r=V:a=V:p=V:g=3440:u=84:x=1:i=1663491946:t=1663571404:v=2:sig=AQH5vQbH_Qy9O4Cc_-6MAQ90FTfx5EZo"; bcookie="v=2&ac027570-a593-46db-820b-12bab04daa00"; lang=v=2&lang=en-us; lidc="b=VB54:s=V:r=V:a=V:p=V:g=3440:u=84:x=1:i=1663487038:t=1663571404:v=2:sig=AQGtafjQKxerCbHiMqU7SFuLW4tNuIlQ"',
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

// exports.PostLinked = async (req, res, next) => {
//   const body = {
//     "author": "urn:li:person:OZrAR5PyeV",
//     "lifecycleState": "PUBLISHED",
//     "specificContent": {
//       "com.linkedin.ugc.ShareContent": {
//         "shareCommentary": {
//           "text": `${req.body.message}`,
//         },
//         "shareMediaCategory": "NONE",
//       },
//     },
//     "visibility": {
//       "com.linkedin.ugc.MemberNetworkVisibility": "PUBLIC",
//     },
//   };
  
//   var config = {
//     method: 'post',
//     url: 'https://api.linkedin.com/v2/ugcPosts',
//     headers: { 
//       'Content-Type': 'application/json', 
//       'Authorization': `Bearer ${req.body.token}`, 
//       'Cookie': 'lidc="b=VB54:s=V:r=V:a=V:p=V:g=3440:u=84:x=1:i=1663493425:t=1663571404:v=2:sig=AQFbqOtcoPkYP-7uDG9_T4GgLmHtsGjo"; bcookie="v=2&ac027570-a593-46db-820b-12bab04daa00"; lang=v=2&lang=en-us; lidc="b=VB54:s=V:r=V:a=V:p=V:g=3440:u=84:x=1:i=1663487038:t=1663571404:v=2:sig=AQGtafjQKxerCbHiMqU7SFuLW4tNuIlQ"'
//     },
//     data : body
//   };

//   try {
//     const data = await axios(config);
//     res.status(200).json(data.data);
//   } catch (err) {
//     next(
//       new ErrorResponse("No se pudo procesar en request " + err.message, 404)
//     );
//   }  
// };

exports.PostLinked = async (req, res, next) => {
  const body = {
    "author": "urn:li:person:OZrAR5PyeV",
    "lifecycleState": "PUBLISHED",
    "specificContent": {
      "com.linkedin.ugc.ShareContent": {
        "shareCommentary": {
          "text": `${req.body.message}`,
        },
        "shareMediaCategory": "NONE",
      },
    },
    "visibility": {
      "com.linkedin.ugc.MemberNetworkVisibility": "PUBLIC",
    },
  };

  const headers = {
    Authorization:
    `Bearer ${req.body.token}`
  };

  try {
    const data = await axios.post(
      `https://api.linkedin.com/v2/ugcPosts`,
      body,
      {
        headers: headers,
      }
    );
    res.status(200).json(data.data);
  } catch (err) {
    next(
      new ErrorResponse("No se pudo procesar en request " + err.message, 404)
    );
  }
};
