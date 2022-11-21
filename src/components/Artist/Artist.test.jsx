/**
 * @jest-environment jsdom
 */
 
import React from 'react';
 import { screen, render } from '@testing-library/react'
 import '@testing-library/jest-dom';
 import userEvent from '@testing-library/user-event';
 
 import Artist from "./Artist";

describe('Artist', () => {

    beforeEach(() => {
        render(<Artist name="Migos" genre="Hip-hop" desc="Migos is an American hip hop group from Lawrenceville, Georgia, founded in 2008. The group was originally composed of Southern rappers Quavo, Takeoff, and Offset. Quavo is from Athens, Georgia; Offset and Takeoff are from Lawrenceville, Georgia."/>)
    })

    it('Displays the artist name', () => {
        const creatureNameElement = screen.getByRole("heading", {level: 1})

        expect(creatureNameElement.textContent).toBe("Migos")
    })

    it('Like button works', async () => {
        const likeButton = screen.getByRole('button')

        expect(likeButton.value).toBe("false")

        await userEvent.click(likeButton)
        
        expect(likeButton.textContent).toBe("Liked")
        expect(likeButton.value).toBe("true")
    })

})