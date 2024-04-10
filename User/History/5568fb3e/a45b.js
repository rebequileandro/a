
import { Button, Modal } from "../../../src";
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
            <br />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum doloribus ad praesentium ex at ullam dolores maiores iusto officiis accusamus! Quas eaque accusamus iure quam iusto commodi ad dolores illum?</p>
            <br />
            <Button type="secondary">Cancel</Button>
            <Button>Accept</Button>
        </div>
    </Modal>
)