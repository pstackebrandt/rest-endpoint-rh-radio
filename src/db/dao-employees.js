import dbConnection from "./db-connection.js"

const tableName = "\`employees\`"

const columnEmployeeId = "\`employee_id\`"
const columnFullName = "\`full_name\`"
const columnInformation = "\`information\`"
const columnDepartment = "\`department\`"
const columnJob = "\`job\`"

const WHERE_ID_EQUALS = ` WHERE ${columnEmployeeId} = ?`

const SELECT_ALL_FROM_TABLE = `SELECT * FROM ${tableName}`
const SELECT_ALL_FROM_TABLE_WHERE_ID_IS_EQUALS = `${SELECT_ALL_FROM_TABLE}${WHERE_ID_EQUALS}`

const INSERT_INTO_TABLE = `INSERT INTO ${tableName}( ${columnFullName}, ${columnInformation},${columnDepartment},${columnJob}) VALUES (?,?,?,?)`
const UPDATE_TABLE = `UPDATE ${tableName} SET ${columnFullName}=?,${columnInformation}=?,${columnDepartment}=?,${columnJob}=?${WHERE_ID_EQUALS}`
const DELETE_FROM_TABLE_WHERE_ID_IS_EQUALS = `DELETE FROM ${tableName}${WHERE_ID_EQUALS}`

let daoEmployees = {}

daoEmployees.getEmployees = () => {
    return new Promise(((resolve, reject) => {

        dbConnection.query(SELECT_ALL_FROM_TABLE,
            (error, newsArticlesFromDb) => {

                if (error) {
                    return reject(error)
                }

                return resolve(newsArticlesFromDb)
            })
    }))
}

daoEmployees.getEmployee = (employeeId) => {
    return new Promise(((resolve, reject) => {

        dbConnection.query(SELECT_ALL_FROM_TABLE_WHERE_ID_IS_EQUALS, employeeId,
            (error, newsArticleFromDb) => {

                if (error) {
                    return reject(error)
                }

                return resolve(newsArticleFromDb)
            })
    }))
}

daoEmployees.insertEmployee = (employeeValues) => {
    return new Promise((resolve, reject) => {

        dbConnection.query(INSERT_INTO_TABLE, employeeValues,
            (error, insertResultInformation) => {

                if (error) {
                    return reject(error)
                }

                return resolve(insertResultInformation)
            });
    });
};

daoEmployees.updateEmployee = (employeeValues) => {
    return new Promise((resolve, reject) => {

        dbConnection.query(UPDATE_TABLE, employeeValues,
            (error, updateResultInformation) => {

                if (error) {
                    return reject(error)
                }

                return resolve(updateResultInformation)
            });
    });
};

daoEmployees.deleteEmployee = (employeeId) => {
    return new Promise((resolve, reject) => {

        dbConnection.query(DELETE_FROM_TABLE_WHERE_ID_IS_EQUALS, employeeId,
            (error, deleteResultInformation) => {

                if (error) {
                    return reject(error)
                }

                return resolve(deleteResultInformation)
            });
    });
};

export default daoEmployees;