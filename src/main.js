import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./app.vue";

const app = createApp(App);

const store = createStore({
  state() {
    return {
      count: 10
    };
  },
  mutations: {
    changeCount(state, value) {
      state.count += value;
    }
  }
  // actions: {},
  // getters: {}
});

app.use(store);

app.mount("#app");
