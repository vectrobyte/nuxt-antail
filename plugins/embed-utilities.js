import Vue from 'vue';
import Utils from '~/library/Utils';

// Register utility functions as vue prototypes.
Object.keys(Utils).forEach((property) => {
  Vue.prototype[property] = Utils[property];
});
