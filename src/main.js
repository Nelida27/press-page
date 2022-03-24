import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import {
  Button,
  Card,
  Avatar,
  Col,
  Row,
  Layout,
  Modal,
  Spin,
} from "ant-design-vue";

const app = createApp(App);
app.config.productionTip = false;
app.use(Button);
app.use(Card);
app.use(Avatar);
app.use(Col);
app.use(Row);
app.use(Layout);
app.use(Modal);
app.use(Spin);

app.use(store).use(router).mount("#app");
