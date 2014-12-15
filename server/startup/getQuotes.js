Meteor.startup(function () {
  var cheerio = Meteor.npmRequire('cheerio');

  Meteor.methods({
    getQuotes: function () {
      result = Meteor.http.get('http://en.wikiquote.org/wiki/Dune');
      $ = cheerio.load(result.content);
      var item = $('#mw-content-text ul li');
    }
  });

});
