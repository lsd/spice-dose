Meteor.startup(function () {
  var cheerio = Meteor.npmRequire('cheerio');

  Meteor.methods({
    getQuotes: function () {
      result = Meteor.http.get('http://en.wikiquote.org/wiki/Dune');
      content = cheerio.load(result.content);

      /*
      var quotes = content('#mw-content-text ul li').text();
      return quotes;
      */

      var item = content('#mw-content-text ul li');

      if (Quotes.find().count() === 0) {
        for (var i = 0; i < item.length; i++) {
          var quoteText = item[i].innerHTML;
          console.log(quoteText);
          Quotes.insert({ quote: quoteText });
        }
      }

      /*
      var items = content('#mw-content-text ul');
      var item = content('#mw-content-text ul li');

      _.each(items, function(item) {
        if ($(item).hasClass('toclevel-1')) {
          $(this).remove();
        } else {
          return $(item).text();
        }
      });

      $(items).each(function() {
        if ( $(this).hasClass('toclevel-1') ) {
          $(this).remove();
        } else {
          return $(this).text();
        }
      });
      */
    }
  });

});
