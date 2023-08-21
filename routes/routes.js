const express = require('express');
const router = express.Router();
const db = require('../db_connection')

router.post('/post', (req, res) => {

    const data = {
        name: req.body.name,
        email: req.body.email,
        position: req.body.position
    }
    
    let post = {name: data.name , email: data.email , position: data.position}
    let sql = "INSERT INTO users SET ?"

    
    
    let query = db.query(sql, post, (err) =>{
        if (err) throw err;
        
        // console.log(query)

        res.send('record added 1')
    })
})

router.get('/getALL', (req, res) =>{

    db.query("SELECT * FROM users", (err, result) => {

        if(err) throw err;
        console.log(result)
        res.send(result)
    })
})

//Get by ID Method
router.get('/getOne/:id', (req, res) => {

    res.send(req.params.id)
})

//Update by ID Method
router.patch('/update/:id', (req, res) => {

    const data = {
        id: req.params.id,
        name: req.body.name,
        email: req.body.email,
        position: req.body.position
    }

    let post = { name: data.name, email: data.email, position: data.position}
    let sql = `UPDATE users SET ? WHERE id = ${data.id}` 
    let query = db.query(sql, post, (err, result)=> {

        if(err) throw err;
        console.log(result)
        res.send("record edited")
    })
})

//Delete by ID Method
router.delete('/delete/:id', (req, res) => {
    res.send('Delete by ID API')
})

module.exports = router;