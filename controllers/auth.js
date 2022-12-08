import { db } from "../Database/connect.js";
import bcrypt from "bcryptjs";

export const register = (req, res) => {
  const q = "SELECT * FROM users WHERE username = ?";
  db.query(q, [req.body.username], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length) {
      return res.status(409).json("User already exists");
    } else {
      // hashing the password
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(req.body.password, salt);
      //   end of hashing the password
      const insertUser = "INSERT INTO users (`username`,`email`,`password`,`name`) VALUES (?)";
      const values = [
        req.body.username,
        req.body.email,
        hash,
        req.body.name,
      ];
      db.query(insertUser, [values], (err, data) => {
        if (err) return res.status(500).json("User has bee created");
        return res.status(200).json("User has been created");
      });
    }
  });
};

export const login = (req, res) => {
    const {username, password} = req.body;
    const qry = "SELECT * FROM users WHERE username = ?"
    db.query(qry, [username], (err, data)=>{
        if(err) return res.status(500).json(err);
        if(data.length === 0){
            return res.status(404).json("User not found")
        } else{
            // comparing the passwords 
            const checkPassword = bcrypt.compareSync(password, data[0].password);
            // end of cparing passwords 
            if(!checkPassword) return res.status(400).json("Wrong password or username");
        }

    })
};

export const logout = (req, res) => {};
