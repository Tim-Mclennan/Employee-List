import axios from 'axios';
import axiosMock from 'axios-mock-adapter';
import EmployeeCard from './EmployeeCard';
import { render, fireEvent } from '@testing-library/react';

const mock = new axiosMock(axios);

describe('EmployeeCard component', () => {
  it('deletes an employee', async () => {
    const employee = {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@example.com',
      mobile: '1234567890',
      residentialAddress: '123 Main St',
      contractType: 'Full Time',
      startDate: '01/01/2022',
      endDate: '01/01/2023',
      timeBasis: '40 hours',
      hoursPerWeek: 40
    };

    mock.onDelete(`/employees/${employee.id}`).reply(200);

    const { getByText } = render(<EmployeeCard employee={employee} />);

    fireEvent.click(getByText('Remove'));

    expect(mock.history.delete.length).toBe(1);
    expect(mock.history.delete[0].url).toBe(`/employees/${employee.id}`);
  });
});
