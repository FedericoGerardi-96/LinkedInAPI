const ErrorResponse = require("../helper/errorResponse");
var axios = require("axios");

exports.getLinkedInUser = async (req, res, next) => {
  const headers = {
    Authorization:
      "Bearer AQVZXr3h5fYB5uk1Ao-ZbPg4HY8IbI2AO405q3EzKE1YpZZrkM2sSikmNcg2343k3D5jk5yO8mOiMDDaZWX6cNnIWfWY0lhZrTSGFLfQGHSvhxNU91RcAdlqZLTQHx4edo3tWihp7CtLWx7i15rAQH4ROPE_gg4Rib6DQqbafy18yfWGWGcphrXcS2q_ycym4iRAxl1-DCpneWa4slnixspvIE6aPXuTxZCvmPYFkUJeanFhpW_PNiJhOwXaxLei1rEbcnsu8aq2rHC1z3QwsSXK6aTx5JTP4O97NGtFR0Tl2BsRLK0b7ZEDdWY7iSbqaLxNeT_arGQYvuueFRUpWnr65_AKjQ",
  };
  try {
    const data = await axios.get(`https://api.linkedin.com/v2/me`, {
      headers: headers,
    });
    res.status(200).json(data.data);
  } catch (err) {
    next(
      new ErrorResponse("No se pudo procesar en request " + err.message, 404)
    );
  }
};

exports.getLinkedInImage = async (req, res, next) => {
  const headers = {
    Authorization:
      "Bearer AQVZXr3h5fYB5uk1Ao-ZbPg4HY8IbI2AO405q3EzKE1YpZZrkM2sSikmNcg2343k3D5jk5yO8mOiMDDaZWX6cNnIWfWY0lhZrTSGFLfQGHSvhxNU91RcAdlqZLTQHx4edo3tWihp7CtLWx7i15rAQH4ROPE_gg4Rib6DQqbafy18yfWGWGcphrXcS2q_ycym4iRAxl1-DCpneWa4slnixspvIE6aPXuTxZCvmPYFkUJeanFhpW_PNiJhOwXaxLei1rEbcnsu8aq2rHC1z3QwsSXK6aTx5JTP4O97NGtFR0Tl2BsRLK0b7ZEDdWY7iSbqaLxNeT_arGQYvuueFRUpWnr65_AKjQ",
  };
  try {
    const data = await axios.get(
      `https://api.linkedin.com/v2/me?projection=(id,profilePicture(displayImage~digitalmediaAsset:playableStreams))`,
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

exports.getLinkedEmail = async (req, res, next) => {
  const headers = {
    Authorization:
      "Bearer AQVZXr3h5fYB5uk1Ao-ZbPg4HY8IbI2AO405q3EzKE1YpZZrkM2sSikmNcg2343k3D5jk5yO8mOiMDDaZWX6cNnIWfWY0lhZrTSGFLfQGHSvhxNU91RcAdlqZLTQHx4edo3tWihp7CtLWx7i15rAQH4ROPE_gg4Rib6DQqbafy18yfWGWGcphrXcS2q_ycym4iRAxl1-DCpneWa4slnixspvIE6aPXuTxZCvmPYFkUJeanFhpW_PNiJhOwXaxLei1rEbcnsu8aq2rHC1z3QwsSXK6aTx5JTP4O97NGtFR0Tl2BsRLK0b7ZEDdWY7iSbqaLxNeT_arGQYvuueFRUpWnr65_AKjQ",
  };
  try {
    const data = await axios.get(
      `https://api.linkedin.com/v2/emailAddress?q=members&projection=(elements*(handle~))`,
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

exports.PostLinked = async (req, res, next) => {
  const body = {
    "author": "urn:li:person:OZrAR5PyeV",
    "lifecycleState": "PUBLISHED",
    "specificContent": {
      "com.linkedin.ugc.ShareContent": {
        "shareCommentary": {
          "text": "Hello World! This is my first Share on LinkedIn!",
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
      "Bearer AQVZXr3h5fYB5uk1Ao-ZbPg4HY8IbI2AO405q3EzKE1YpZZrkM2sSikmNcg2343k3D5jk5yO8mOiMDDaZWX6cNnIWfWY0lhZrTSGFLfQGHSvhxNU91RcAdlqZLTQHx4edo3tWihp7CtLWx7i15rAQH4ROPE_gg4Rib6DQqbafy18yfWGWGcphrXcS2q_ycym4iRAxl1-DCpneWa4slnixspvIE6aPXuTxZCvmPYFkUJeanFhpW_PNiJhOwXaxLei1rEbcnsu8aq2rHC1z3QwsSXK6aTx5JTP4O97NGtFR0Tl2BsRLK0b7ZEDdWY7iSbqaLxNeT_arGQYvuueFRUpWnr65_AKjQ",
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
