import React from "react";
import { getByRole, render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';

import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows


    test("form header renders", () => {
    // Always remember to render 
        render(<CheckoutForm />)

        // Get access to the h2 on the checkout form.
        const header = screen.getByText(/checkout form/i)

        // Checking to see if the header 'checkout form' is there.
        expect(header).toBeInTheDocument();
    });

    test("form shows success message on submit with form details", async () => {
        render(<CheckoutForm />)

        //Get access to the input fields in the checkout form.
        const firsName = screen.getByLabelText(/first name/i);
        const lastName = screen.getByLabelText(/last name/i);
        const address = screen.getByLabelText(/address/i);
        const city = screen.getByLabelText(/city/i);
        const state = screen.getByLabelText(/state/i);
        const zip = screen.getByLabelText(/zip/i);

        //Type new values in all the inputs.
        userEvent.type(firsName, 'Oscar');
        userEvent.type(lastName, 'Figueroa');
        userEvent.type(address, 'Someplace');
        userEvent.type(city, 'over there');
        userEvent.type(state, 'here');
        userEvent.type(zip, '00000')

        // Submit everthing using the Checkout Button.
        const button = screen.getByRole('button');
        userEvent.click(button);

        //Check to see if new  values show up.
        const nameCheck = await screen.findByText(/oscar/i);
        expect(nameCheck).toBeInTheDocument();
    });