// .storybook/preview.js
import Vuex from "vuex";
import Vue from "vue";
import store from "../src/store";
import "../src/index.css";

Vue.use(Vuex);
Vue.prototype.$store = store;

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};
