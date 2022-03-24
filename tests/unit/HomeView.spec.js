import { mount } from "@vue/test-utils";
import HomeView from "../../src/views/HomeView";

describe("HomeView", () => {
  // Inspect the raw component options
  const wrapper = mount(HomeView);
  it("has a svg", () => {
    expect(wrapper.find("svg").exists()).toBe(true);
  });
  it("has a button", () => {
    expect(wrapper.find("a-button").exists()).toBe(true);
  });
});
