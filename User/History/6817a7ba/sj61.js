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
const opcionesFrutas = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Banana', value: 'Banana' },
    { label: 'Cherry', value: 'Cherry' },
    { label: 'Kiwi', value: 'Kiwi' },
    { label: 'Lemon', value: 'Lemon' },
    // { label: 'Mango', value: 'Mango' },
    // { label: 'Orange', value: 'Orange' },
    // { label: 'Peach', value: 'Peach' },
    // { label: 'Pear', value: 'Pear' },
    // { label: 'Pineapple', value: 'Pineapple' },
    // { label: 'Strawberry', value: 'Strawberry' },
    // { label: 'Watermelon', value: 'Watermelon' }
];

export const simple = {
    args: {
        placeHolder: "Select a fruit",
        options: opcionesFrutas,

    }
}

export const search = {
    args: {
        placeHolder: "Select a fruit",
        options: opcionesFrutas,
        isSearchable: true
    }
}
export const multiple = {
    args: {
        placeHolder: "Select a fruit",
        options: opcionesFrutas,
        isMulti: true
    }
}