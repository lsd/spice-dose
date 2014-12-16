Meteor.startup(function () {
  var cheerio = Meteor.npmRequire('cheerio');

  Meteor.methods({
    getQuotes: function () {
      result = Meteor.http.get('http://en.wikiquote.org/wiki/Dune');
      $ = cheerio.load(result.content);

      /*
      var quotes = $('#mw-content-text ul li').text();
      return quotes;
      */
      //*[@id="mw-content-text"]/ul[1]/li

      var items = $('#mw-content-text ul li');
    //  console.log(item.text());
      _.each(items, function(item) {
          console.log(item.data);
        });

      //  var test = $('#mw-content-text ul li').hasClass('toclevel-1');

      /*
      _.each(item, function(item) {
        if (this.hasClass('toclevel-1')) {
          this.remove();
        } else {
          var quoteText = this.text();
          console.log(quoteText);
          Quotes.insert({ quote: quoteText });
        }
      });
      */
      /*
      if (Quotes.find().count() === 0) {
        for (var i = 0; i < item.length; i++) {
          if (item.hasClass('toclevel-1')) {
            $(this).remove();
          } else {
            var quoteText = item[i].text();
            console.log(quoteText);
            Quotes.insert({ quote: quoteText });
          }
        }
      }
      */
      /*
      var items = $('#mw-content-text ul');
      var item = $('#mw-content-text ul li');

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
