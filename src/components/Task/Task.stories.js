import React from "react";
import { action } from "@storybook/addon-actions";

import Task from "./Task";

export default {
  component: Task,
  title: "Task",
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

export const Default = () => <Task task={{ ...TaskData }} {...ActionsData}></Task>;
export const Pined = () => <Task task={{ ...TaskData, state: "TASK_PINNED" }} {...ActionsData}></Task>;
export const Archived = () => <Task task={{ ...TaskData, state: "TASK_ARCHIVED" }} {...ActionsData}></Task>;
