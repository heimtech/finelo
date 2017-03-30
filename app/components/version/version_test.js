'use strict';

describe('Fineloo.version module', function() {
  beforeEach(module('XpressOnline.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
