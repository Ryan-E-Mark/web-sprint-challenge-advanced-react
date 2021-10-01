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
    userEvent.type(stateInput, "WA");
    userEvent.type(zipInput, "98109");
    userEvent.click(checkoutButton);

    //Gathering text outputs from form submission
    const successMessage = screen.getByText(/You have ordered some plants! Woo-hoo!/i);
    const firstNameText = screen.getByText(/ryan/i);
    const lastNameText = screen.getByText(/mark/i);
    const addressText = screen.getByText(/1234 6th ave n/i);
    const cityText = screen.getByText(/seattle/i);
    const stateText = screen.getByText(/wa/i);
    const zipText = screen.getByText(/98109/i);

    //Assert
    expect(successMessage).toBeInTheDocument();
    expect(successMessage).toHaveTextContent(/you have ordered some plants! woo-hoo!/i);

    expect(firstNameText).toBeInTheDocument();
    expect(firstNameText).toHaveTextContent(/ryan/i);

    expect(lastNameText).toBeInTheDocument();
    expect(lastNameText).toHaveTextContent(/mark/i);

    expect(addressText).toBeInTheDocument();
    expect(addressText).toHaveTextContent(/1234 6th ave n/i);
    
    expect(cityText).toBeInTheDocument();
    expect(cityText).toHaveTextContent(/seattle/i);

    expect(stateText).toBeInTheDocument();
    expect(stateText).toHaveTextContent(/wa/i);
    
    expect(zipText).toBeInTheDocument();
    expect(zipText).toHaveTextContent(/98109/i);

});
