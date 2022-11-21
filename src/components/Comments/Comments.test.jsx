/**
 * @jest-environment jsdom
 */
 
import React from 'react';
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';


import Artist from "../Artist/Artist";
import CommentForm from "./Comments";

describe('Comments', () => {

    beforeEach(() => {
        render(<Artist name="Migos" genre="Hip-hop" desc="Migos is an American hip hop group from Lawrenceville, Georgia, founded in 2008. The group was originally composed of Southern rappers Quavo, Takeoff, and Offset. Quavo is from Athens, Georgia; Offset and Takeoff are from Lawrenceville, Georgia."/>)
    })

    it("Button is generated", () => {
        const commentInput = screen.getByRole("textbox");

        expect(commentInput).toBeInTheDocument();
    })

    it("Alerts what user types", async () => {
        const commentInput = await screen.getByRole("textbox");
        const handleSubmit = jest.fn()

        await userEvent.type(commentInput, "random comment{enter}")

        expect(commentInput).toHaveValue("random comment")
    })
})
