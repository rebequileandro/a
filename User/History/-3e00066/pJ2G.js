
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
    },
    {
        label: "Option Four",
        value: "optionFour"
    }
]
const options2 = [
    {
        label: "Option One",
        value: "optionOne"
    },
    {
        label: "Option Two",
        value: "optionTwo"
    },
    {
        label: "Option Four",
        value: "optionFour"
    }
]
export const tabs = () => <div>
    <Tabs optionsTabs={options} name={"group1"} />
    <br />
    <Tabs optionsTabs={options2} name={"group2"} />
    <br />
    <Tabs optionsTabs={options} name={"group3"} />
</div>
// {
//     args: {
//         optionsTabs: options
//     }
// }
// export const setOption = {
//     args: {
//         optionsTabs: options,
//         currentTab: options[2].value
//     }
// } 