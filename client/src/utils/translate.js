const axios = require('axios');
const fs = require('fs');

const keyFile = 'path-to-your-service-account-key.json'; //to Replace with the path to my JSON key file
const apiKey = 'your-google-cloud-api-key'; //to Replace with my Google Cloud API key
const apiUrl = 'https://translation.googleapis.com/language/translate/v2';

const textToTranslate = 'Hello, world!';
const sourceLanguage = 'en';
const targetLanguage = 'fr';
const targetLanguage2 = 'ar';


const requestData = {
  q: textToTranslate,
  source: sourceLanguage,
  target: targetLanguage,
  target2:targetLanguage,
  format: 'text',
};

axios
  .post(`${apiUrl}?key=${apiKey}`, requestData, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then((response) => {
    const translatedText = response.data.data.translations[0].translatedText;
    console.log(`Translation: ${translatedText}`);
  })
  .catch((error) => {
    console.error('Error translating:', error);
  });
