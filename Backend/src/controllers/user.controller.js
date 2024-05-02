import User from '../models/user.model.js';

const generateAccessAndRefereshTokens = async function (userId) {

    try {
        const user = await User.findById(userId);
        const accessToken = await user.generateAccessToken();
        const refreshToken = await user.generateRefreshToken();

        // console.log(user.generateAccessToken);

        user.refreshToken = refreshToken;
        await user.save({ validateBeforeSave: false });

        return { accessToken, refreshToken };

    } catch (error) {
        res.status(500)
           .json({
            "status Code": 500,
            "Error": error,
            "Message": "Server error while generating AccessToken and RefreshToken."
           })
    }
}

export async function handleUserSignupPost(req, res) {
    const { fullname, dateOfBirth, gender, username, email, password } = req.body;

    if ([fullname, dateOfBirth, gender, username, email, password].some((field) => field?.trim() === "")) {
        res.status(401)
           .json({
            "status Code": 401,
            "Message": "All fields are required."
           })
    }

    const existUser = await User.findOne({
        $or: [{ email }, { username }]
    });

    if (existUser) {
        res.status(402)
           .json({
            "status Code": 402,
            "Message": "This Email or username is already exists."
           })
    }

    const user = await User.create({
        fullname,
        dateOfBirth,
        gender,
        username,
        email,
        password
    })

    const createUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )

    if (!createUser) {
        res.status(500)
           .json({
            "status Code": 500,
            "Message": "something went wrong while adding data into mongoDB."
           })
    }

    res.status(201).json(
        {
            "Status Code": 201,
            "data": createUser,
            "Message": "Successfully New user created!"
        }
    )
}

export async function handleUserLoginPost(req, res) {

    const { username, email, password } = req.body;

    if ([username, email, password].some((field) => field?.trim() === "")) {
        res.status(401)
           .json({
            "status Code": 401,
            "Message": "username or email or password are required!"
           })
    }

    const user = await User.findOne({
        $or: [{ email }, { username }]
    });

    if (!user) {
        res.status(404)
           .json({
            "status Code": 404,
            "Message": "user does not exist!"
           })
    }

    const isPasswordCorrect = await user.isPasswordCorrect(password);

    // console.log(isPasswordCorrect);

    if (!isPasswordCorrect) {
        res.status(401)
           .json({
            "status Code": 401,
            "Message": "Invalid Password!"
           })
    }
    
    const { accessToken, refreshToken } = await generateAccessAndRefereshTokens(user._id);
    // console.log(accessToken, "\n", refreshToken);

    const loggedInUser = await User.findById(user._id).select( "-password -refreshToken" );

    const options = {
        httpOnly: true,
        secure: true
    }

    
    res.status(201)
    .cookie( "accessToken", accessToken, options )
    .cookie( "refreshToken", refreshToken, options )
    .json(
        {
            "Status Code": 201,
            "data": loggedInUser,
            "Message": " User Successfully Login!"
        }
    )
}

export async function handleUserLogoutPost(req, res) {

    await User.findByIdAndUpdate(
        req.user._id,
        {
            $unset: { refreshToken: 1 }
        },
        {
            new: true
        }
    )

    const options = {
        httpOnly: true,
        secure: true
    }

    
    res.status(200)
    .clearCookie( "accessToken", accessToken, options )
    .clearCookie( "refreshToken", refreshToken, options )
    .json(
        {
            "Status Code": 200,
            "data": {},
            "Message": " User Successfully Logout!"
        }
    )
}