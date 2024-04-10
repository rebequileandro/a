import { Button } from '../../../src/index';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
    title: 'Atom/Button',
    component: Button,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {

    },
};


export const primary = {
    args: {
        disabled: false,
        type: "primary",
        children: 'Button',
    },
};

export const secondary = {
    args: {
        disabled: false,
        type: "secondary",
        children: 'Button',
    },
};

export const large = {
    args: {
        size: 'l',
        children: 'Button',
    },
};
export const medium = {
    args: {
        size: 'm',
        children: 'Button',
    },
};

export const small = {
    args: {
        size: 's',
        children: 'Button',
    },
};
export const disabled = {
    args: {
        disabled: true,
        type: "primary",
        children: 'Button',
    },
};