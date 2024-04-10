import Input from "../../../src/atoms/Input/Input";

export default {
    title: 'Atom/Input',
    component: Input,
    parameters: {

        layout: 'centered',
    },

    tags: ['autodocs'],

    argTypes: {

    },
};
export const Input = {
    args: {
        type: 'text',
        size: "m"
    }
}
export const Label = {
    args: {
        type: 'text',
        size: "m",
        label: "Input"
    }
}