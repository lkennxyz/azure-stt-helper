const should = require('chai').should();
const sinon = require('sinon');
const axios = require('axios');
const { getToken, azureSTT } = require('./index');

describe('azure-sst-helper tests', () => {
  describe('getToken', () => {
    before(() => {
      const resolved = new Promise((r) => r({ data: 'test' }));
      const stub = sinon.stub(axios, 'post').returns(resolved);
    });
    after(() => {
      sinon.restore();
    });
    it('should return the bearer token', () => {
      getToken({ region: 'test', subscriptionKey: 'test' })
        .then((result) => result.should.equal('test'))
    });
  });
  describe('azure-STT', () => {
    before(() => {
      const resolved = new Promise((r) => r(
        { 
          data: {
            DisplayText: 'Testing.'
          } 
        }
      ));
      const stub = sinon.stub(axios, 'post').returns(resolved);
    });
    after(() => {
      sinon.restore();
    });
    it('Should return an object with the DisplayText field using subscription key', () => {
      azureSTT({
        region: 'test',
        subscriptionKey: 'test',
        language: 'test',
        wav: 'test',
      })
        .then((result) => result.DisplayText.should.equal('Testing.'))
    });
    it('Should return an object with the DisplayText field using bearer token', () => {
      azureSTT({
        region: 'test',
        token: 'test',
        language: 'test',
        wav: 'test',
      })
        .then((result) => result.DisplayText.should.equal('Testing.'))
    });
  })
})
