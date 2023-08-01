import mySql from "mysql"

const localhostDatabaseConnectionConfiguration = {
    connectionLimit: 10,
    password: '',
    user: 'root',
    database: 'rh_radio',
    host: 'localhost',
    port: '3306'
}

const dbConnection = mySql.createPool(localhostDatabaseConnectionConfiguration)

export default dbConnection