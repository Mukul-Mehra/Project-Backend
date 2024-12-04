const asyncHandler = (requestHandler) => {
  return  (req, res, next) => {
        Promise.resolve().catch((err) => next(err))
    }
}
export { asyncHandler }


// const asyncHandler = (fn) => async (req, res, exit) => {
//     try {
//         await fn(req, res, exit)

//     } catch (error) {
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })

//     }

// }