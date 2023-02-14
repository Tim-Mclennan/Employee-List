import { fireEvent, render } from "@testing-library/react";
import axios from "axios";
import AddEmployee from "./AddEmployee";

jest.mock("axios");

export const renderForm = (mockData: any) => <AddEmployee />;

describe("Add Employee Component", () => {
  let renderResult: any;

  beforeEach(() => {
    renderResult = render(renderForm({}));
  });

  it("renders the correct heading", () => {
    const { getByText } = renderResult;
    const heading = getByText("New Employee Details");
    expect(heading).toBeInTheDocument();
  });

  it("renders the correct subheading", () => {
    const { getByText } = renderResult;
    const subheading = getByText("Personal Information");
    expect(subheading).toBeInTheDocument();
  });

  it("renders the first name input field", () => {
    const { getByLabelText } = renderResult;
    const firstNameInput = getByLabelText("First Name:");
    expect(firstNameInput).toBeInTheDocument();
  });

  it("renders the middle name input field", () => {
    const { getByLabelText } = renderResult;
    const middleNameInput = getByLabelText("Middle Name: (if applicable)");
    expect(middleNameInput).toBeInTheDocument();
  });

  it("renders the last name input field", () => {
    const { getByLabelText } = renderResult;
    const lastNameInput = getByLabelText("Last Name:");
    expect(lastNameInput).toBeInTheDocument();
  });

  it("renders the email input field", () => {
    const { getByLabelText } = renderResult;
    const emailInput = getByLabelText("Email:");
    expect(emailInput).toBeInTheDocument();
  });

  it("renders the mobile number input field", () => {
    const { getByLabelText } = renderResult;
    const mobileInput = getByLabelText("Mobile Number:");
    expect(mobileInput).toBeInTheDocument();
  });

  it("renders the residential address input field", () => {
    const { getByLabelText } = renderResult;
    const residentialAddressInput = getByLabelText("Residential Address:");
    expect(residentialAddressInput).toBeInTheDocument();
  });

  it("renders the contract type input field", () => {
    const { getByLabelText } = renderResult;
    const contractTypeInput = getByLabelText("Contract Type:");
    expect(contractTypeInput).toBeInTheDocument();
  });

  it("renders the start date input field", () => {
    const { getByLabelText } = renderResult;
    const startDateInput = getByLabelText("Start Date:");
    expect(startDateInput).toBeInTheDocument();
  });

  it("renders the end date input field", () => {
    const { getByLabelText } = renderResult;
    const endDateInput = getByLabelText("End Date:");
    expect(endDateInput).toBeInTheDocument();
  });

  it("renders the time basis input field", () => {
    const { getByLabelText } = renderResult;
    const timeBasisInput = getByLabelText("Time Basis:");
    expect(timeBasisInput).toBeInTheDocument();
  });

  it("renders the submit button", () => {
    const { getByText } = renderResult;
    const submitButton = getByText("Submit");
    expect(submitButton).toBeInTheDocument();
  });

  it("submits the form data via axios", async () => {
    // arrange
    const formData = {
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      mobile: "1234567890",
    };
    const postSpy = jest.spyOn(axios, "post");
    postSpy.mockResolvedValue({});

    // act
    const { getByLabelText, getByText } = render(<AddEmployee />);
    const firstNameInput = getByLabelText("First Name:");
    const lastNameInput = getByLabelText("Last Name:");
    const emailInput = getByLabelText("Email:");
    const mobileInput = getByLabelText("Mobile Number:");
    const submitButton = getByText("Submit");

    fireEvent.change(firstNameInput, { target: { value: formData.firstName } });
    fireEvent.change(lastNameInput, { target: { value: formData.lastName } });
    fireEvent.change(emailInput, { target: { value: formData.email } });
    fireEvent.change(mobileInput, { target: { value: formData.mobile } });
    fireEvent.click(submitButton);

    // assert
    await new Promise((resolve) => setTimeout(resolve));
    expect(postSpy).toHaveBeenCalledWith("/employees", formData);
  });
});
