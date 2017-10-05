Package.describe({
  name: "heavy",
  summary: "Heavy package to test silly things",
  version: '1.8.0',
});

Package.onUse(function (api) {

  api.versionsFrom(['METEOR@1.0']);

  var packages = [


    // Meteor packages

    'meteor-base@1.1.0',
    'ecmascript@0.8.2',
  ];

  api.use(packages);
  api.imply(packages);

  api.mainModule("client/main.js", "client");
  api.mainModule("server/main.js", "server");

});
