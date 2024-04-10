
import { Modal } from "../../../src";
import React from "react";
export default {
    title: 'Atom/Modal',
    component: Modal,
    parameters: {

        layout: 'centered',
    },

    tags: ['autodocs'],

    argTypes: {

    },
};

export const modal = () => (
    <Modal>
        <div>
            <h2>Modal Title</h2>
        </div>
    </Modal>
)