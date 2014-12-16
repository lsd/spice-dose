# Spice Dose - Random Dune Quotes

Simple Meteor app to scrape and aggregate Dune content from wikiquote on client/server

* [How to use](#how-to-use)
  * [Deployments](#deployments)
  * [SEO and other concerns](#seo-and-other-concerns)
  * [Adding allow rules for external URLs](#adding-allow-rules-for-external-urls)
* [Structure](#structure)
  * [Packages used](#packages-used)
  * [Folder structure](#folder-structure)
* [License](#license)

**demo here[spicedose.meteor.com](http://spicedose.meteor.com)**

## Requirements

Make sure [Meteor is installed and up to date](https://www.meteor.com/install) or run:

```sh
curl https://install.meteor.com/ | sh
```

## Installatian
```sh
git clone git@github.com:amazingBastard/spice-dose.git
cd spice-dose
meteor
```

### Deployments

It is highly recommended to use [Meteor Up](https://github.com/arunoda/meteor-up) for easy deployments.
Have a look at the repository for more information.

### SEO and other concerns

> Meteor can not do SEO

This statement is not SEO friendly out of the box. See [ms-seo](https://github.com/DerMambo/ms-seo), which  
has help crawlers notice the app much like native HTML. This also adds constants under  
__client/lib/constants.js__ for the app. Change SEO settings in the routes like that.  

```js
Router.route('/about', function () {
  this.render('about');
  // Using the app constants
  SEO.set({ title: 'About -' + Meteor.App.NAME, og: {...} });
});
```

### Adding allow rules for external URLs

The [browser-policy](https://atmospherejs.com/meteor/browser-policy) adds rules to deny all operations from external URLs.
This helps dealing with clickjacking and other XSS methods used to attack the client. To whitelist a url, add following to
__server/config/security.js__

```js
BrowserPolicy.content.allowOriginForAll(YOUR_URL);
```

Other security enforcing packages like [audit-argument-checks](https://docs.meteor.com/#/full/auditargumentchecks) and
[matteodem:easy-security](https://github.com/matteodem/meteor-easy-security) have also been added.

## Structure

### Packages used

- Meteor Core
  - standard-app-packages
- Routing
  - iron:router
  - zimme:iron-router-active
- Collections
  - aldeed:collection2
  - dburles:collection-helpers
- Accounts
  - accounts-password
  - useraccounts:semantic-ui
- UI and UX
  - fastclick
  - meteorhacks:fast-render
  - natestrauser:animate-css
  - nooitaf:semantic-ui-less
- Security
  - browser-policy
  - audit-argument-checks
  - matteodem:easy-security
- SEO
  - manuelschoebel:ms-seo
- Development
  - less
  - jquery
  - underscore
  - raix:handlebar-helpers
  - http
  - meteorhacks:npm

The "insecure" and "autopublish" packages are removed by default (they make your app vulnerable).

### Folder structure

```
client/         # Client folder
    compatibility/      # Libraries which create a global variable
    config/             # Configuration files (on the client)
  lib/                # Library files that get executed first
    startup/            # Javascript files on Meteor.startup()
    stylesheets         # LESS files
    modules/            # Meant for components, such as form and more(*)
  views/          # Contains all views(*)
      common/         # General purpose html templates
models/          # Model files, for each Meteor.Collection(*)
packages/        # NPM Packages
private/                # Private files
public/                 # Public files
routes/                 # All routes(*)
server/          # Server folder
    fixtures/           # Meteor.Collection fixtures defined
    lib/                # Server side library folder
    publications/       # Collection publications(*)
    startup/            # On server startup
```

(*) = the command line tool creates files in these folders

## License
This boilerplate has an MIT License, see included <LICENSE> file
