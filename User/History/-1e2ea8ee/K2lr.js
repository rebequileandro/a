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

export const tooltip = () => <Tooltip text="Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final.">
    <Button>Button</Button>
</Tooltip>