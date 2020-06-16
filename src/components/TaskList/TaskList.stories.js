import React from "react";

import { TaskData, ActionsData } from "../Task/Task.stories";

import { PureTaskList } from "./TaskList";

export default {
  component: PureTaskList,
  title: "TaskList",
  decorators: [(story) => <div style={{ padding: "3rem" }}>{story()}</div>],
  excludeStories: /.*Data$/,
};

export const defaultTasksData = [
  { ...TaskData, id: "1", title: "Task 1" },
  { ...TaskData, id: "2", title: "Task 2" },
  { ...TaskData, id: "3", title: "Task 3" },
  { ...TaskData, id: "4", title: "Task 4" },
  { ...TaskData, id: "5", title: "Task 5" },
  { ...TaskData, id: "6", title: "Task 6" },
];

export const withPinnedTasksData = [...defaultTasksData.slice(0, 5), { id: "6", title: "Task 6 (pinned)", state: "TASK_PINNED" }];

export const Default = () => <PureTaskList tasks={defaultTasksData} {...ActionsData} />;

export const WithPinnedTasks = () => <PureTaskList tasks={withPinnedTasksData} {...ActionsData} />;

export const Loading = () => <PureTaskList loading tasks={[]} {...ActionsData} />;

export const Empty = () => <PureTaskList tasks={[]} {...ActionsData} />;
