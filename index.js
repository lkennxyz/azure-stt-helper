const axios = require('axios');

//Returns bearer token
async function getToken({ region, subscriptionKey }) {
  try { 
    const url = `https://${region}.api.cognitive.microsoft.com/sts/v1.0/issueToken`;
    const result = await axios.post(url,{}, {
      headers: {
        'Content-type': 'application/x-www-form-urlencoded',
        'Content-Length': '0',
        'Ocp-Apim-Subscription-Key': subscriptionKey,
      }
    })
    return result.data;
  } catch (err) {
    console.log(err);
    return err;
  }
}

//Can use subscription key or Bearer token from fn above, returns all data returned by API
async function azureSTT({ region, subscriptionKey = undefined, token = undefined, language = en_US, wav }) {
  try {
    const url = `https://${region}.stt.speech.microsoft.com/speech/recognition/conversation/cognitiveservices/v1?language=${language}`;
    const headers = (token) ? {
      'Content-Type': 'audio/wav',
      'Authorization': `Bearer ${token}`,
    } : {
      'Content-Type': 'audio/wav',
      'Ocp-Apim-Subscription-Key': subscriptionKey,
    }
    const result = await axios.post(url, wav, { headers });
    return result.data;
  } catch (err) {
    console.log(err);
    return err;
  }
}

module.exports = {
  getToken,
  azureSTT,
};
