import { expect } from 'chai';
import { checkHttpStatus } from './index';

describe('Utils: checkHttpStatus ', () => {
  describe('Receives HTTP Response Code of 200s', () => {
    it('should return the same response', () => {
      const response = {
        status: 200,
        message: 'test',
      };
      const returned = checkHttpStatus(response);
      expect(returned.status).equal(response.status);
      expect(returned.message).equal(response.message);
    });
  });

  describe('Receives HTTP Response Code NOT in 200s', () => {
    it('should throw an error', () => {
      const response = {
        status: 300,
        message: 'test',
      };
      expect(() => checkHttpStatus(response)).to.throw(Error);
    });
  });
});
