import { shallowMount } from "@vue/test-utils";
import Login from "@/views/Login.vue";

describe("Login.vue", () => {
  it("it shows Success if i send valid credentials", () => {
    const passedValid = true;
    const wrapper = shallowMount(Login, {
      propsData: {
        isValid: passedValid,
        isVisible: passedValid,
      },
    });
    expect(wrapper.html()).toContain('isvalid="true" isvisible="true"');
  });
});
