import React from "react";
import axios from "axios";
import { render, fireEvent, waitFor, act } from "@testing-library/react";
import EmployeeDetails from "./EmployeeDetails";

jest.mock("axios");
jest.mock("react-router-dom", () => ({
  useParams: jest.fn().mockReturnValue({ id: "1" }),
  Link: ({ children }: { children: React.ReactNode }) => children,
}));

const mockAxios = axios as jest.Mocked<typeof axios>;
mockAxios.get.mockImplementationOnce(() =>
  Promise.resolve({ data: "mocked response" })
);

describe("EmployeeDetails component", () => {
  it("should display the employee details form", async () => {
    const mockData = {
      id: "1",
      firstName: "John",
      middleName: "Doe",
      lastName: "Smith",
      email: "johndoe@example.com",
      mobile: "+61412345678",
      residentialAddress: "1 Example St, Sydney",
      contractType: "Full-Time",
      startDate: "2020-01-01",
      endDate: "2021-01-01",
      timeBasis: "Hourly",
      hoursPerWeek: "40",
    };
    (axios.get as jest.Mock).mockResolvedValueOnce({ data: mockData });

    const { getByLabelText, getByText } = render(<EmployeeDetails />);

    act(() => {
      expect(axios.get).toHaveBeenCalledWith(`/employees/1`);
    });

    expect(getByLabelText("First Name:")).toHaveAttribute("value", "John");
    expect(getByLabelText("Middle Name: (if applicable)")).toHaveAttribute(
      "value",
      "Doe"
    );
    expect(getByLabelText("Last Name:")).toHaveAttribute("value", "Smith");
    expect(getByLabelText("Email:")).toHaveAttribute(
      "value",
      "johndoe@example.com"
    );
    expect(getByLabelText("Mobile Number:")).toHaveAttribute(
      "value",
      "+61412345678"
    );
    expect(getByLabelText("Residential Address:")).toHaveAttribute(
      "value",
      "1 Example St, Sydney"
    );

    const submitButton = getByText("Submit");

    (axios.put as jest.Mock).mockResolvedValueOnce({});

    fireEvent.click(submitButton);

    act(() => {
      expect(axios.put).toHaveBeenCalledWith(`/employees/1`, mockData);
    });
  });

  it("should display an error message if the request fails", async () => {
    const mockError = new Error("Request failed with status code 400");
    (axios.get as jest.Mock).mockRejectedValueOnce(mockError);

    const { getByText } = render(<EmployeeDetails />);

    act(() => {
      expect(axios.get).toHaveBeenCalledWith(`/employees/1`, mockError);
    });
  });

  it("renders the error message when a PUT request returns a 401 error", async () => {
    mockAxios.put.mockImplementationOnce(() =>
      Promise.reject({
        response: {
          status: 401,
        },
      })
    );

    const { getByText } = render(<EmployeeDetails />);

    await waitFor(() => expect(axios.get).toHaveBeenCalled());
    await waitFor(() => expect(axios.put).toHaveBeenCalled());

    const errorMessage = getByText(
      "Unauthorized: You need to be logged in to perform this action."
    );
    expect(errorMessage).toBeInTheDocument();
  });

  it("renders the error message when a PUT request returns a 403 error", async () => {
    mockAxios.put.mockImplementationOnce(() =>
      Promise.reject({
        response: {
          status: 403,
        },
      })
    );

    const { getByText } = render(<EmployeeDetails />);

    await waitFor(() => expect(axios.get).toHaveBeenCalled());
    await waitFor(() => expect(axios.put).toHaveBeenCalled());

    const errorMessage = getByText(
      "Forbidden: You do not have the necessary permissions to perform this action."
    );
    expect(errorMessage).toBeInTheDocument();
  });

  it("renders the error message when a PUT request returns a 404 error", async () => {
    mockAxios.put.mockImplementationOnce(() =>
      Promise.reject({
        response: {
          status: 404,
        },
      })
    );

    const { getByText } = render(<EmployeeDetails />);

    await waitFor(() => expect(axios.get).toHaveBeenCalled());
    await waitFor(() => expect(axios.put).toHaveBeenCalled());

    const errorMessage = getByText(
      "Not Found: The requested resource could not be found on the server."
    );
    expect(errorMessage).toBeInTheDocument();
  });

  it("renders the error message when a PUT request returns a 500 error", async () => {
    mockAxios.put.mockImplementationOnce(() =>
      Promise.reject({
        response: {
          status: 500,
        },
      })
    );

    const { getByText } = render(<EmployeeDetails />);

    await waitFor(() => expect(axios.get).toHaveBeenCalled());
    await waitFor(() => expect(axios.put).toHaveBeenCalled());

    const errorMessage = getByText(
      "Server Error: There was a problem with the server, please try again later."
    );
    expect(errorMessage).toBeInTheDocument();
  });
});
