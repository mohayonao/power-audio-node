"use strict";

var AudioNode = global.AudioNode;
var AudioNode$connect;
var AudioNode$disconnect;

function connect() {
  var args = [].slice.call(arguments);

  if (args.length && typeof args[0].__connectFrom === "function") {
    args[0].__connectFrom.apply(args[0], [ this ].concat(args.slice(1)));
  } else {
    AudioNode$connect.apply(this, args);
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
  if (typeof AudioNode !== "undefined" && AudioNode.prototype.connect !== connect) {
    AudioNode$connect = AudioNode.prototype.connect;
    AudioNode$disconnect = AudioNode.prototype.disconnect;

    AudioNode.prototype.connect = connect;
    AudioNode.prototype.disconnect = disconnect;
  }
}

function unuse() {
  if (typeof AudioNode !== "undefined" && AudioNode.prototype.connect === connect) {
    AudioNode.prototype.connect = AudioNode$connect;
    AudioNode.prototype.disconnect = AudioNode$disconnect;
  }
}

module.exports = {
  use: use,
  unuse: unuse,
};
