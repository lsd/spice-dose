Meteor.startup(function () {
  'use strict';

  var cheerio = Meteor.npmRequire('cheerio');
  // this belongs in a config/yaml..
  var app = {};

  app.settings = {
    quoteUri: 'http://en.wikiquote.org/wiki/Dune'
  };

  Meteor.methods({
    getQuotes: function(uri) {
      result = Meteor.http.get(uri);
      return cheerio.load(result.content);
    }
  });

  console.debug(Meteor.metods.getQuots(app.settings.quoteUri));
});


// var quotes = $('#mw-content-text ul li').text();
// return quotes;
// var item = $('#mw-content-text ul li');
// var test = $('#mw-content-text ul li').hasClass('toclevel-1');


//      _.each(item, function(item) {
//        if (this.hasClass('toclevel-1')) {
//          this.remove();
//        } else {
//          var quoteText = this.text();
//          console.log(quoteText);
//          Quotes.insert({ quote: quoteText });
//        }
//      });


//      if (Quotes.find().count() === 0) {
//        for (var i = 0; i < item.length; i++) {
//          if (item.hasClass('toclevel-1')) {
//            $(this).remove();
//          } else {
//            var quoteText = item[i].text();
//            console.log(quoteText);
//            Quotes.insert({ quote: quoteText });
//          }
//        }
//      }

//      var items = $('#mw-content-text ul');
//      var item = $('#mw-content-text ul li');

//      _.each(items, function(item) {
//        if ($(item).hasClass('toclevel-1')) {
//          $(this).remove();
//        } else {
//          return $(item).text();
//        }
//      });

//      $(items).each(function() {
//        if ( $(this).hasClass('toclevel-1') ) {
//          $(this).remove();
//        } else {
//          return $(this).text();
//        }
//      });
