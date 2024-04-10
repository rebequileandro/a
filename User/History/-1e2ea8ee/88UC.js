
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

export const tooltip = {
    args: {
        text: "Hello :)",
        children: <p>Hover me!</p>
    }
}
// export const tooltip = () => <div>
//     <h1 style={{ color: "#fff" }}>hola hola hola hola hola hola</h1>
//     <h1 style={{ color: "#fff" }}>hola hola hola hola hola hola</h1>
//     <h1 style={{ color: "#fff" }}>hola hola hola hola hola hola</h1>
//     <h1 style={{ color: "#fff" }}>hola hola hola hola hola hola</h1>
//     <h1 style={{ color: "#fff" }}>hola hola hola hola hola hola</h1>

//     <Tooltip text="Hello :)"><p>Hover me!</p></Tooltip>
// </div>