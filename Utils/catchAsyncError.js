const catchAsyncError = (passedFunction) => ((req, res, next) => {
    Promise.resolve(passedFunction(res, req, next)).catch(next);
})


export default catchAsyncError;