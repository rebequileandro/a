import Button from './Button';

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
        backgroundColor: { control: 'color' },
    },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const primary = {
    args: {
        type: "primary",
        label: 'Button',
    },
};

export const secondary = {
    args: {
        type: "secondary",
        label: 'Button',
    },
};

export const large = {
    args: {
        type: "primary",
        size: 'large',
        label: 'Button',
    },
};
export const medium = {
    args: {
        type: "primary",
        size: 'medium',
        label: 'Button',
    },
};

export const small = {
    args: {
        type: "primary",
        size: 'small',
        label: 'Button',
    },
};