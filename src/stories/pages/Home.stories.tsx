import { JSX } from "react";
import Home from "../../pages/index";

export default {
  title: "Pages/Home",
  component: Home,
  args: {
    name: "MRN",
  },
};

export const HomePage = (args: JSX.IntrinsicAttributes) => <Home {...args} />;
HomePage.args = { name: "MRN New" };
