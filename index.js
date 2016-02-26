'use strict';

module.exports = function (obj) {
  if (obj === null) return 0;
  return Object.keys(obj).length;
};
