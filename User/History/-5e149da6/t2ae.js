
import ToggleSwitch from '../../../src/atoms/ToggleSwitches/ToggleSwitch';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
    title: 'Atom/ToggleSwitch',
    component: ToggleSwitch,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        // onChange: () => { },
    },
};
export const toggleSwitch = {
    args: {

    },
};