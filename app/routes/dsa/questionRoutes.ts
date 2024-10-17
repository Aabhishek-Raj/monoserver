import { Router } from "express";

interface QueryParams {
  condition?: string;
}

export default function(app: Router) {
  const route = Router()
  app.use('/questions', route)

  const questions: { [key: string]: string} = {
    'addNumberToEmploy': 'Add a number from numbers array to employee objects',
    'sortEmployeesBySalaryAsc': 'Sort the employees by there salary in ascending order',
    'getEmployeesOfFinance': 'Get all the Employees of Finance department',
    'findHighestPaidEmployee': 'Find the highest Paid Employee',
    'totalValueOfOrdersOfUser': 'Find the total value of all orders placed by a specific user',
    'sortedHrsBySalary': 'Get the list of all employees in that hr deparment, sorted by salary'

  }

  route.get('/', async (req, res) => {
    const { condition } = req.query as QueryParams

    try {
      if(!condition) throw new Error('Condition was not provided !')

        const result = questions[condition];

        res.json(result)
      
    } catch (error) {
      console.log(error)
    }

  })

}