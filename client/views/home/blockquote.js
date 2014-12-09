Template.blockquote.rendered = function() {
  Meteor.call('getQuotes', function (error, result) {
    if (error) {
      console.log('error', error);
    } else {
      console.log(result);
      Session.set('quote', result);
    }
  });
}

Template.blockquote.helpers({
  quoteText: function () {
    return Session.get('quote');
  }
});
