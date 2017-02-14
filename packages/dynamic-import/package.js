Package.describe({
  name: "dynamic-import",
  version: "0.1.0-beta.6",
  summary: "Support for module.dynamicImport(id).then(namespace => ...)",
  documentation: "README.md"
});

Package.onUse(function (api) {
  api.use("modules");
  api.use("localstorage");
  api.use("promise");
  api.use("ecmascript", "server");
  api.mainModule("client.js", "client");
  api.mainModule("server.js", "server");
});