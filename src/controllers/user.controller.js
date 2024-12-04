import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req,) => {
    res.status(400).json({
        message: "hello world"
    })
})

export {registerUser};