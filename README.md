# azure-STT-helper

![npm](https://img.shields.io/npm/v/@lkennxyz/azure-stt-helper.svg)
[![Build Status](https://travis-ci.org/lkennxyz/azure-stt-helper.svg?branch=master)](https://travis-ci.org/lkennxyz/azure-stt-helper)

A simple Javascript wrapper over the Azure Speech Services Speech-To-Text (STT) REST API, because I didn't like the current Microsoft solution.
Uses [axios](https://www.npmjs.com/package/axios) for the HTTP requests for Frontend & Backend support.

## Installing


```
$ npm install @lkennxyz/azure-stt-helper
/* or */
$ yarn add @lkennxyz/azure-stt-helper
```

## Quickstart

```
import { azureSTT } from '@lkennxyz/azure-stt-helper'

async function stt () {

    /* Record or Import your wav file here... */

    const result = await azureSTT({
        region: 'YOUR_REGION',
        token: 'YOUR TOKEN',
        /* OR */
        subscriptionKey: 'YOUR_SUBSCRIPTION_KEY',
        language: 'YOUR_LANGUAGE',
        wav: yourWavFile,
    });
    //Output just the STT result text
    console.log(result.DisplayText);
}
```

## Functions
### azureSTT
Makes a request to the Azure Speech Service STT REST API, returns the body of the response.

#### parameters
* region (required): The azure region for your Speech Services Instance

**MUST USE EITHER TOKEN OR SUBSCRIPTION KEY**

* token (optional): The Bearer token obtained by the getToken function
* subscriptionKey (optional): The subscription key for your Speech Services Instance
* language (optional): language used in the recording (defaults to ‘en-US’)

### getToken
Obtains a bearer token from azure to authenticate instead of using the subscriptionKey, returns the bearer token as a string.
#### parameters
* region (required): The azure region for your Speech Services Instance
* subscriptionKey (required): The subscription key for your Speech Services Instance

## Resources
[Microsoft STT REST documentation](https://docs.microsoft.com/en-us/azure/cognitive-services/speech-service/rest-speech-to-text)

## License
MIT

