import Loader from "../../../src/atoms/Loader/Loader";
import React from "react";
export default {
    title: 'Atom/Loader',
    component: Loader,
    parameters: {

        // layout: 'centered',
    },

    tags: ['autodocs'],

    argTypes: {

    },
};

export const primary = () => (
    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ width: "10%", height: "100%" }}>
            <Loader size="l" />
        </div>
    </div>
)

export const secondary = () => (
    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#333" }}>
        <div style={{ width: "10%", height: "100%" }}>
            <Loader type="secondary" size="l" />
        </div>
    </div>
)