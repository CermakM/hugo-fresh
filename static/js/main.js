'use strict';

// Functions

// Inspired by https://bulma.io/documentation/components/modal/
function getAll(selector) {
  return Array.prototype.slice.call(document.querySelectorAll(selector), 0);
}
