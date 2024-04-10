import Loader from "../../../src/atoms/Loader/Loader";
import React from "react";
export default {
    title: 'Atom/Loader',
    component: Loader,
    parameters: {

        layout: 'centered',
    },

    tags: ['autodocs'],

    argTypes: {

    },
};

export const primary = () => <div style={{ width: "100%", height: "100%" }}>
    <Loader />
</div>

export const secondary = {
    args: {
        type: "secondary"
    }
}