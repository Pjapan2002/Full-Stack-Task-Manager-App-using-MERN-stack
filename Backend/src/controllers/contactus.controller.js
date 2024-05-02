import contactus from '../models/contactus.model.js';

export const handleContactusPost = async (req, res) => {

    const { name, email, msg } = req.body;

    if(!(name || email)){
        res.status(401)
           .json({
            "status code": 401,
            "Message": "Name or email filed are required!"
           })
    }

    const contactusForm = await contactus.create({
                                fullname : name,
                                email : email,
                                message : msg
                                })

    res.status(202)
       .json({
        "status code": 202,
        "data": contactusForm,
        "message": "Successfully received your message."
       })
}