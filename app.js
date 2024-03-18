const express = require('express');
const app = express();
const users = require('./MOCK_DATA.json')
const port = 3000;
const fs = require('fs');

app.use(express.urlencoded({
    extended : false
}));

app.get('/users',(req,res) =>{
    const html = `<ul>${users.map(user => `<li> ${user.first_name}</li>`).join('')} </ul>`;
    res.send(html);
});

app.get('/api/users',(req,res) =>{
    res.json(users);
});

app.get('/api/users/:id', (req, res) =>{
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    if(user.id != id){
        res.status(404);
    }
    return res.json(user);
});

app.post('/api/users',(req, res) =>{
    const body = req.body;
    users.push({...body, id: users.length + 1});
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users),(err, data) =>{
        return res.json({
            status : "success",
            id : users.length
        });
    });
});

app.patch('/api/users/:id', (req, res) =>{
    const id = Number(req.params.id);
    const body = req.body;
    const user = users.find((user) => user.id === id);
    const updatedUser = { ...user, ...body };
    updatedUser.id=id;
    users[id-1]=updatedUser;
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users),(err, data) =>{
        return res.json({
            status:"success",
            updatedUser
        });
    });
});

app.delete('/api/users/:id',(req, res)=>{
    const id = Number(req.params.id); 
    const user = users.findIndex((user) => user.id === id);  
    const deletedUser = users.splice(user, 1);
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users),(err, data) =>{
        return res.json({
            status : "success",
            deletedUser
        })
    });
});

app.listen(port,()=>{
    console.log("YES sir !! server has started");
});