require.config({
  // ordered dependencies (example: jquery plugins)
  shim: {
    'backbone': {
      deps: ['underscore', 'jquery', 'fusionbox'],
      exports: 'Backbone'
    },
    'fusionbox': {
      deps: ['jquery'],
      exports: 'fusionbox'
    }
  },
  paths: {
  'jquery': '/static/widgy/js/lib/jquery',
  'underscore': '/static/widgy/js/lib/underscore',
  'backbone': '/static/widgy/js/lib/backbone',
  'mustache': '/static/widgy/js/lib/mustache',
  'fusionbox': '/static/widgy/js/lib/fusionbox',
  'text': '/static/widgy/js/require/text'
  }
});

require([ 'widgy.core', 'page' ], function(Widgy, page) {
  window.widgy = new Widgy(page.jqueryable, page.page_data);
});