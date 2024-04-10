import Radio from "../../../src/atoms/Radio/Radio";
import React from "react";
export default {
    title: 'Atom/Radio',
    component: Radio,
    parameters: {

        layout: 'centered',
    },

    tags: ['autodocs'],

    argTypes: {

    },
};

export const radio = {
    args: {

    }
}
export const checked = () => <>
    <Radio />
</>