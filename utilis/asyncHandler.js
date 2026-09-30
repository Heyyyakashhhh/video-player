//With promises
const asyncHandler = (reqHandler) => {
  return (req, res, next) => {
    Promise.resolve(reqHandler(req, res, next)).catch((error) => next(error));
  };
};
export { asyncHandler };

//With try and catch
// const asyncHandler=(fn)=>async(req,res,next)=>{

//   try {
//     await fn(req,res,next)

//   } catch (error) {
//     res.status(error.code || 500).json({
//       success:false,
//       message : error
//     })
//   }
// }
