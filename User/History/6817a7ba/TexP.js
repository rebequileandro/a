import { Dropdown } from '../../../src';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
    title: 'Atom/Dropdown',
    component: Dropdown,
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

export const dropdown = {
    args: {
        placeHolder: "Select an option",
        options: [{ label: "Apple", value: 1 }, { label: "Orange", value: 2 }, { label: "Banana", value: 3 }],
        // isMulti: true,
        // isSearchable: true
    }
}