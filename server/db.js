import mysql from 'mysql'
export const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'portfolio'
})

// con.connect(function (err) {
//     if (err) throw err;
//     console.log("Connected!");
 
//     con.query("CREATE DATABASE portfolio",
//         function (err, result) {
//             if (err) throw err;
//             console.log("Database created");
//         });
// });