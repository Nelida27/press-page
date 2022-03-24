import { mount } from "@vue/test-utils";
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../../src/views/HomeView";
// import UserListView from "../../src/views/UserListView";

import App from "../../src/App";

describe("App", () => {
  it("renders a component via routing", async () => {
    // create local router
    const router = createRouter({
      history: createWebHistory(),
      routes: [
        {
          path: "/",
          name: "HomeView",
          component: HomeView,
        },
        // {
        //   path: "/users",
        //   name: "users",
        //   component: UserListView,
        // },
      ],
    });

    // navigate to route
    router.push("/");
    // router.push("/users");

    // await navigation from push()
    await router.isReady();

    // install the local router
    const wrapper = mount(App, {
      global: {
        plugins: [router],
      },
    });

    expect(wrapper.findComponent(HomeView).exists()).toBe(true);
    // expect(wrapper.findComponent(UserListView).exists()).toBe(true);
  });
});
