Package.describe({
  summary: "Faster touch events on mobile",
  version: '1.0.9-rc.11'
});

Package.onUse(function (api) {
  api.export('FastClick', 'web');

  api.addFiles(['pre.js', 'fastclick.js', 'post.js'], 'web');
});
