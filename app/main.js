// to depend on a bower installed component:
// define(['component/componentName/file'])

define(["jquery","components/underscore/underscore"], function($) {
  $('body').append('jQuery ' + $.fn.jquery + ' loaded!');
});
