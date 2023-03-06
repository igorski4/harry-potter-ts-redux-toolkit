import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Input } from "../components/UI/Input/Input";
import { Provider } from "react-redux";
import { setupStore } from "../store/store";

const store = setupStore();

export default {
  title: "Example/Input",
  component: Input,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: "Input",
};

export const anotherDefault = Template.bind({});
anotherDefault.args = {
  value: "Another",
  type: "button",
};
