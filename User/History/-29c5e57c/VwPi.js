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
export const primary = {
    args: {
        type: 'text',
        size: "s"
    }
}