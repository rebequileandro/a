import { Button } from "../../../src";
import Tooltip from "../../../src/atoms/ToolTip/Tooltip";
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

export const tooltip = () => <Tooltip text="Hello :)" >
    <h2>Hover me!</h2>
</Tooltip>