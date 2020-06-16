import React from "react";
import { Provider } from "react-redux";
import store from "../../lib/redux";

import { PureInboxScreen } from "./InboxScreen";

export default {
  component: PureInboxScreen,
  title: "InboxScreen",
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
};

export const Default = () => <PureInboxScreen />;

export const Error = () => <PureInboxScreen error="Something" />;
