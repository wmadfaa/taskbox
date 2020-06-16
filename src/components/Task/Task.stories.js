import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, object } from "@storybook/addon-knobs/react";

import Task from "./Task";

export default {
  component: Task,
  title: "Task",
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const TaskData = {
  id: "1",
  title: "Test Task",
  state: "TASK_INBOX",
  updatedAt: new Date(2018, 0, 1, 9, 0),
};

export const ActionsData = {
  onPinTask: action("onPinTask"),
  onArchiveTask: action("onArchiveTask"),
};
export const longTaskTitleString = `This task's name is absurdly large. In fact, I think if I keep going I might end up with content overflow. What will happen? The star that represents a pinned task could have text overlapping. The text could cut-off abruptly when it reaches the star. I hope not!`;

export const Default = () => <Task task={object("task", { ...TaskData })} {...ActionsData}></Task>;
export const Pined = () => <Task task={object("task", { ...TaskData, state: "TASK_PINNED" })} {...ActionsData}></Task>;
export const Archived = () => (
  <Task task={object("task", { ...TaskData, state: "TASK_ARCHIVED" })} {...ActionsData}></Task>
);
export const LongTitle = () => <Task task={{ ...TaskData, title: longTaskTitleString }} {...ActionsData} />;
