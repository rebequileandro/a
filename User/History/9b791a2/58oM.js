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
    <label htmlFor="option 1">
        <Radio id="option 1" />
        option 1
    </label>
</>