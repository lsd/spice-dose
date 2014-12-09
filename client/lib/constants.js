// Define App Constants

if (Meteor.App) {
  throw new Meteor.Error('Meteor.App already defined? see client/lib/constants.js');
}

Meteor.App = {
  NAME: 'Spice Dose | Your Daily Dose of Dune Quotes',
  DESCRIPTION: 'Get a dose of your favorite Dune quotes across any device.'
};
