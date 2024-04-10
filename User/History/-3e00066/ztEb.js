
import { Tabs } from "../../../src";
import React from "react";
export default {
    title: 'Atom/Tabs',
    component: Tabs,
    parameters: {

        layout: 'centered',
    },

    tags: ['autodocs'],

    argTypes: {

    },
};

const options = [
    {
        label: "Option One",
        value: "optionOne"
    },
    {
        label: "Option Two",
        value: "optionTwo"
    },
    {
        label: "Option Three",
        value: "optionThree"
    }
]
export const primary = {
    args: {

    }
}