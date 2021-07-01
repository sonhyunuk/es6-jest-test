import mysql from 'mysql2/promise';
import dbConf from './config/dbConf.json';

class ConnectionManager {

    constructor() {
        this.connectionPool = mysql.createPool(dbConf.connectionInfo);

    }

    getMaxQuerySize() {

        return dbConf.maxQuerySize;

    }

    getConnection() {

        return this.connectionPool.getConnection();

    }

}

export default ConnectionManager;
