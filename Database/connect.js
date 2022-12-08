import mysql from 'mysql';
export const db = mysql.createConnection({
    host:"localhost",
    user:"Danchiwaz",
    password:"0712Danchiwaz",
    database:"social"
})
