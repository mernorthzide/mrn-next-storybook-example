import type { Preview } from "@storybook/react";

// Import your global styles here
import "../src/styles/globals.css";

// Fix for Next.js Image component
// import * as React from "react";
// import * as NextImage from "next/image";
// import { ImageProps } from "next/image";

// const OriginalNextImage = NextImage.default;

// Object.defineProperty(NextImage, "default", {
//   configurable: true,
//   value: (props) => {
//     return React.createElement(OriginalNextImage, {
//       ...props,
//       unoptimized: true,
//     });
//   },
// });

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
