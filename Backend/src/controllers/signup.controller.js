import user from '../models/user.model.js';

export async function handleGet(req, res) 
{
    res.send("Signup Page");
}

export async function handlePost(req, res) 
{
    const {name, dateOfBirth, gender, email, password} = req.body;
    await user.create({
        name,
        dateOfBirth,
        gender,
        email,
        password
    })
    console.log("user data successfully added in Database!");
    return;
}