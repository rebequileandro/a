import { Radio } from "../../../src";
import React from "react";
export default {
    title: 'Atom/Radio',
    component: Radio,
    parameters: {

        // layout: 'centered',
    },

    tags: ['autodocs'],

    argTypes: {

    },
};

export const radio = () => <div style={{ display: "flex", justifyContent: "center" }}><Radio /></div> 
