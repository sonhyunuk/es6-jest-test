import mysql from 'mysql2/promise';
import dbConf from './config/dbConf.json';
import  connectionManager11  from './connectionManager';

let dummyPool = {
    getConnection() {
        return "dummyConnection";
    }
};

jest.mock("mysql2/promise");
mysql.createPool.mockReturnValue(dummyPool);
let connectionManager = new connectionManager11();

describe('ConnectionManager', () => {
    console.log(connectionManager)
    describe("constructor()", () => {
        it("shuold create connection pool on constructor", () => {
            expect(connectionManager.connectionPool).toBeDefined();
            expect(connectionManager.connectionPool === dummyPool).toEqual(true);
        });

    });

    describe("getConnection()", () => {
        it('should return connection', () => {
            let conn = connectionManager.getConnection();
            expect(conn).toBeDefined();
            expect(conn).not.toBeNull();
        });
    });

    describe("getMaxQuerySize()", () => {
        it('should return max query size', () => {
            let maxQuerySize = connectionManager.getMaxQuerySize();
            expect(maxQuerySize).toBe(dbConf.maxQuerySize);
        });
    });

});