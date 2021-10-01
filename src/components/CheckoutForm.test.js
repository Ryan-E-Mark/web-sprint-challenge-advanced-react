import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    //Arrange
    render(<CheckoutForm />);
});

test("shows success message on submit with form details", () => {
    //Arrange
    render(<CheckoutForm />)
    //Act
    //Gathering inputs & Checkout Button
    const firstNameInput = screen.queryByLabelText(/first name:/i);
    const lastNameInput = screen.queryByLabelText(/last name:/i);
    const addressInput = screen.queryByLabelText(/address:/i);
    const cityInput = screen.queryByLabelText(/city:/i);
    const stateInput = screen.queryByLabelText(/state:/i);
    const zipInput = screen.queryByLabelText(/zip:/i);
    const checkoutButton = screen.queryByRole("button");

    //Typing info into inputs and clicking submit
    userEvent.type(firstNameInput, "Ryan");
    userEvent.type(lastNameInput, "Mark");
    userEvent.type(addressInput, "1234 6th Ave N");
    userEvent.type(cityInput, "Seattle");
    userEvent.type(stateInput, "Washington");
    userEvent.type(zipInput, "98109");
    userEvent.click(checkoutButton);
    //Assert

});
