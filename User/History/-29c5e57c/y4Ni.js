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
export const input = {
    args: {
        type: 'text',
        size: "m"
    }
}
export const label = {
    args: {
        type: 'text',
        size: "m",
        label: "Input"
    }
}
export const error = {
    args: {
        type: 'text',
        size: "m",
        label: "Input",
        error: "negative words can make users feel like they’ve made a"
    }
}