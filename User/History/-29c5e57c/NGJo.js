import { Input } from "../../../src";

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
        error: "Error message",

    }
}