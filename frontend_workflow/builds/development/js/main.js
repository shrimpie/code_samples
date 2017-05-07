(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var logger = require('./logger');
logger.log('Hurray, it works! :)');

},{"./logger":2}],2:[function(require,module,exports){
module.exports = {
    log: function(string) {
        if(console) {
            console.log(string, string);
        }
    }
};
},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmR5L0Rlc2t0b3Avc3R1ZHkvcHJvamVjdHMvY29kZV9zYW1wbGVzL2Zyb250ZW5kX3dvcmtmbG93L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvYW5keS9EZXNrdG9wL3N0dWR5L3Byb2plY3RzL2NvZGVfc2FtcGxlcy9mcm9udGVuZF93b3JrZmxvdy9zcmMvanMvZmFrZV9hZGY5ODhiMy5qcyIsIi9Vc2Vycy9hbmR5L0Rlc2t0b3Avc3R1ZHkvcHJvamVjdHMvY29kZV9zYW1wbGVzL2Zyb250ZW5kX3dvcmtmbG93L3NyYy9qcy9sb2dnZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIGxvZ2dlciA9IHJlcXVpcmUoJy4vbG9nZ2VyJyk7XG5sb2dnZXIubG9nKCdIdXJyYXksIGl0IHdvcmtzISA6KScpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgbG9nOiBmdW5jdGlvbihzdHJpbmcpIHtcbiAgICAgICAgaWYoY29uc29sZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coc3RyaW5nLCBzdHJpbmcpO1xuICAgICAgICB9XG4gICAgfVxufTsiXX0=
