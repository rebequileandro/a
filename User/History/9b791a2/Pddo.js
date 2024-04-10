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
    <label htmlFor="option 1" style={{ display: "flex", alignItems: "center" }}>
        <Radio id="option 1" onChange={(e) => console.log(e.target.checked)} />
        option 1
    </label>
    <label htmlFor="option 2" checked={false} style={{ display: "flex", alignItems: "center" }}>
        <Radio id="option 2" onChange={(e) => console.log(e.target.checked)} />
        option 2
    </label>
    <label htmlFor="option 3" style={{ display: "flex", alignItems: "center" }}>
        <Radio id="option 3" onChange={(e) => console.log(e.target.checked)} />
        option 3
    </label>
</div>