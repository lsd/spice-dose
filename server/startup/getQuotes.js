Meteor.startup(function () {
  var cheerio = Meteor.npmRequire('cheerio');

  Meteor.methods({
    getQuotes: function () {
      result = Meteor.http.get('http://en.wikiquote.org/wiki/Dune');
      $ = cheerio.load(result.content);
      //var body = $('#mw-content-text ul li').not('.toclevel-1').not( '.toclevel-2').not('.toclevel-3').text();
      var body = $('#mw-content-text ul li').text();
      return body;
    }
  });

});
