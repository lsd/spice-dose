Router.route('/', function () {
  this.render('home');
  SEO.set({ title: Meteor.App.NAME });
}, {
  name: 'home',
  waitOn: function () {
    return Meteor.subscribe('quotes');
  },
  action: function () {
    if (this.ready())
      this.render('blockquote');
    else
      this.render('loading');
  }
});
