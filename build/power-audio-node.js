(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.PowerAudioNode = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
"use strict";

var AudioNode = global.AudioNode;
var AudioNode$connect;
var AudioNode$disconnect;

function connect(destination) {
  var args = [].slice.call(arguments, 1);

  if (typeof destination.__connectFrom === "function") {
    destination.__connectFrom.apply(destination, [ this ].concat(args));
  } else {
    AudioNode$connect.apply(this, [ destination ].concat(args));
  }
}

function disconnect() {
  var args = [].slice.call(arguments);

  if (args.length && typeof args[0].__disconnectFrom === "function") {
    args[0].__disconnectFrom.apply(args[0], [ this ].concat(args.slice(1)));
  } else {
    AudioNode$disconnect.apply(this, args);
  }
}

function use() {
  if (typeof AudioNode !== "undefined") {
    AudioNode$connect = AudioNode.prototype.connect;
    AudioNode$disconnect = AudioNode.prototype.disconnect;

    AudioNode.prototype.connect = connect;
    AudioNode.prototype.disconnect = disconnect;
  }
}

function unuse() {
  if (typeof AudioNode !== "undefined") {
    AudioNode.prototype.connect = AudioNode$connect;
    AudioNode.prototype.disconnect = AudioNode$disconnect;
  }
}

module.exports = {
  use: use,
  unuse: unuse,
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1])(1)
});