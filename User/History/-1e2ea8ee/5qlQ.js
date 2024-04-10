
import React from 'react';
import Tooltip from '../../../src/atoms/Tooltip/Tooltip';
import Button from '../../../src/atoms/Button/Button'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
    title: 'Atom/Tooltip',
    component: Tooltip,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'bottom',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        // onChange: () => { },
    },
};
export const tooltip = {
    args: {
        text: "Hello World!",
        children: <Button>Button</Button>
    },
};