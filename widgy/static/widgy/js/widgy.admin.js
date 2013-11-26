define(function(require, exports, module) {
require([
  "node_modules/dialog-component/index",
  "node_modules/dialog-component/components/component-emitter/index",
  "node_modules/dialog-component/components/component-jquery/index",
  "node_modules/dialog-component/components/component-overlay/index",
  "node_modules/dialog-component/index"
], function(dialog, emitter, jquery, overlay) {
  dialog("Hello World");
});
});

if ( typeof window.console == 'undefined' )
{
  var $console = $('<ul class="console" style="margin-bottom: 100px"></ul>');
  $(document.body).append($console);
  window.console = {
    log: function(what) {
      $console.append($('<li/>').text(what));
    }
  };
}
