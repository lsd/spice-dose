Router.route('/', function () {
  this.render('home');
  SEO.set({ title: Meteor.App.NAME });
});
