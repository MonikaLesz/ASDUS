/*! updated; 01-10-2017 01:02 PM */

Modulr.define("FOX_PLUGINS:OnWindowResize",["jquery"],function($){var App=function(fn,threshold){if(threshold="number"!=typeof threshold?25:threshold,"function"!=typeof fn||!$)return!1;var timeout,hasOrientation="onorientationchange"in window?!0:!1,onEvent=hasOrientation?"orientationchange":"resize";$(window).bind(onEvent,function(){clearTimeout(timeout),timeout=setTimeout(function(){fn()},threshold)})};return App});