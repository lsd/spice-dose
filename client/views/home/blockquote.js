Template.blockquote.rendered = function() {
  Meteor.call('getQuotes', function (error, result) {
    if (error) {
      console.log('error', error);
    } else {
      console.log(result);
      Session.set('quotes', result);
    }
  });
}

Template.blockquote.helpers({
  quotes: function () {
    return Session.get('quotes');
  },
  quote: function () {
    return '"Quote of the century is displayed here for the masses."';
  },
  author: function () {
    return 'John Freeman, Fremen Raider';
  }
});
