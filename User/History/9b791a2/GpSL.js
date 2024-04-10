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
export const checked = () => <div>
    <label htmlFor="option 1">
        <Radio id="option 1" />
        option 1
    </label>
    <label htmlFor="option 2" checked={true}>
        <Radio id="option 2" />
        option 2
    </label>
    <label htmlFor="option 3">
        <Radio id="option 3" />
        option 3
    </label>
</div>