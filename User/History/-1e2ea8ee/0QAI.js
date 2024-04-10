
import { Tooltip } from "../../../src";
import React from "react";
export default {
    title: 'Atom/Tooltip',
    component: Tooltip,
    parameters: {

        layout: 'centered',
    },

    tags: ['autodocs'],

    argTypes: {

    },
};

// export const tooltip = {
//     args: {
//         text: "Hello :)",
//         children: <p>Hover me!</p>
//     }
// }
export const tooltip = () => <div>
    <p>hola hola hola</p>
    <Tooltip text="Hello :)"><p>Hover me!</p></Tooltip>
</div>