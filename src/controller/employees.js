import daoEmployees from "../db/dao-employees.js";

export function getEmployees() {
    return async (requestToServer, responseToClient) => {

        try {
            var employeesFromDb = await daoEmployees.getEmployees();

            responseToClient.send(employeesFromDb);
        } catch (e) {
            console.log(e)
            responseToClient.sendStatus(500);
        }
    };
}

export function getEmployee() {
    return async (requestToServer, responseToClient) => {

        try {

            var employeeId = requestToServer.params.employee_id;
            var employeeFromDb = await daoEmployees.getEmployee(employeeId)

            responseToClient.send(employeeFromDb)
        } catch (e) {
            console.log(e)
            responseToClient.sendStatus(500);
        }
    };
}

export function insertEmployee() {
    return async (requestToServer, responseToClient) => {

        try {
            var employeeToInsert = requestToServer.body

            var employeeValues = [
                employeeToInsert.full_name,
                employeeToInsert.information,
                employeeToInsert.department,
                employeeToInsert.job
            ];
            var insertResultInformation = await daoEmployees.insertEmployee(employeeValues)

            responseToClient.send(insertResultInformation)
        } catch (e) {
            console.log(e)
            responseToClient.sendStatus(500);
        }
    };
}

export function updateEmployee() {
    return async (requestToServer, responseToClient) => {
        try {
            var employeeToUpdate = requestToServer.body

            var employeeValues = [
                employeeToUpdate.full_name,
                employeeToUpdate.information,
                employeeToUpdate.department,
                employeeToUpdate.job,
                employeeToUpdate.employee_id
            ];

            var updateResultInformation = await daoEmployees.updateEmployee(employeeValues)

            responseToClient.send(updateResultInformation)
        } catch (e) {
            console.log(e)
            responseToClient.sendStatus(500);
        }
    };
}

export function deleteEmployee() {
    return async (requestToServer, responseToClient) => {
        try {

            var employeeId = requestToServer.params.employee_id;
            var deleteResultInformation = await daoEmployees.deleteEmployee(employeeId)

            responseToClient.send(deleteResultInformation)
        } catch (e) {
            console.log(e)
            responseToClient.sendStatus(500);
        }
    };
}