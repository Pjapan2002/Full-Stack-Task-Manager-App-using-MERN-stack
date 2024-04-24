import User from '../models/user.model.js';


export async function handleUserSignupPost(req, res) 
{
    const {name, dateOfBirth, gender, email, password} = req.body;

    if ( [ name, dateOfBirth, gender, email, password ].some((field) => field?.trim() === "") ) 
    {
        throw new Error(401, "All fields are required")
    }

    const existUser = await User.findOne({email});
    
    if(existUser)
    {
        throw new Error(402, "This Email Id is already exists. ")
    }

    const user = await User.create({
        name,
        dateOfBirth,
        gender,
        email,
        password
    })

    res.status(201).json(
        {
            "Status Code": 201,
            "data": user,
            "Message": "Success"
        }
    )
}