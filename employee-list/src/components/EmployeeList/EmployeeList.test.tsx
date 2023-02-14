import { render,  waitFor } from "@testing-library/react";
import EmployeeList from "./EmployeeList";
import employeeData from "../../hooks/employeeData";

jest.mock("../../hooks/employeeData");

const employeeDataMock = employeeData as jest.Mock;

describe("EmployeeList", () => {
  it("renders the employee list", async () => {
    employeeDataMock.mockReturnValue({
      isLoading: false,
      isError: false,
      data: [
        { id: 1, name: "John Doe", email: "johndoe@example.com" },
        { id: 2, name: "Jane Doe", email: "janedoe@example.com" },
      ],
    });

    const { getByText, getAllByTestId } = render(<EmployeeList />);

    await waitFor(() => {
      expect(getByText("Employee List")).toBeInTheDocument();
      expect(getByText("Loading...")).not.toBeInTheDocument();
      expect(getByText("Error loading the data.")).not.toBeInTheDocument();
      expect(getAllByTestId("employee-card")).toHaveLength(2);
    });
  });

  it("renders a loading message when data is loading", async () => {
    employeeDataMock.mockReturnValue({
      isLoading: true,
      isError: false,
      data: [],
    });

    const { getByText } = render(<EmployeeList />);

    await waitFor(() => {
      expect(getByText("Loading...")).toBeInTheDocument();
    });
  });

  it("renders an error message when data fetching fails", async () => {
    employeeDataMock.mockReturnValue({
      isLoading: false,
      isError: true,
      data: [],
    });

    const { getByText } = render(<EmployeeList />);

    await waitFor(() => {
      expect(getByText("Error loading the data.")).toBeInTheDocument();
    });
  });
});
