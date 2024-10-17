import { Router } from 'express';
import { departments, employees, numbers } from '../../database/dummyData/employee';

interface QueryParams {
  condition?: string;
}

export default function (app: Router) {
	const route = Router();
	app.use('/answers', route);


	const addNumberToEmployee = () => {
		const newEmployees = employees.map((employee, index) => {
			return  { number:  numbers[index], ...employee }
		})
		return newEmployees
	}

	const sortEmployeesBySalaryAsc = () => {
		const sortedEmployees = [...employees].sort((a, b) => a.salary - b.salary)
		return sortedEmployees
	}

	const getEmployeesOfFinance = () => {
		const financeDepartment = departments.find(department => department.name === 'Finance')
		if(!financeDepartment) return 
		const financeEmployees = employees.filter(employee => employee.departmentId === financeDepartment.id)
		return financeEmployees
	}

	const findHighestPaidEmployee = () => {
		const highestPaidEmployee = employees.reduce((acc, curr) => {
			return acc.salary > curr.salary ? acc: curr
		}, employees[0])
		return highestPaidEmployee
	}

	const totalValueOfOrdersOfUser = () => {}

	const sortedHrsBySalary = () => {}



	const handleCondition = (condition: string) => {

		type OperationFunction = () => [] | string | object | void;

    const operations:  { [key: string]: OperationFunction } = {
      'addNumberToEmploy': addNumberToEmployee,
      'sortEmployeesBySalaryAsc': sortEmployeesBySalaryAsc,
			'getEmployeesOfFinance': getEmployeesOfFinance,
			'findHighestPaidEmployee': findHighestPaidEmployee,
			'totalValueOfOrdersOfUser': totalValueOfOrdersOfUser,
			'sortedHrsBySalary': sortedHrsBySalary
    };

    if (!operations[condition]) {
      throw new Error(`No operation for: ${condition}`);
    }
    return operations[condition]();
  };

	route.get('/', async (req, res, next) => {

		const { condition } = req.query as QueryParams

		try {
			if(!condition) throw new Error('Condition was not provided !')

			const result = handleCondition(condition);

			res.json(result)

		} catch (error) {
			next(error);
		}
	});
}