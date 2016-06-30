var ansiHTML = require('../'),
    chai     = require('chai'),
    expect   = chai.expect;

describe('samples', function(){
  it("should handle underline", function() {
    var sample = "\u001b[0m\u001b[4msome/file/name.js:79\u001b[0m\u001b[0m";
    expect(ansiHTML(sample)).to.eql('<span style="font-weight:normal;opacity:1;color:#fff;background:#000;"><span style="text-decoration:underline;">some/file/name.js:79</span></span>');
  });
});
