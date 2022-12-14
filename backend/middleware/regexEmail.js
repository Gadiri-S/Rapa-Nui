module.exports = (req, res, next) => {
    const verifyEmail = (email) => {
        let emailRegex =/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i
        let isRegexTrue = emailRegex.test(email)
        isRegexTrue ? next() : res.status(400).json({ message: 'Please make sure to enter a correct email address' });
    }
    verifyEmail(req.body.email)
  };