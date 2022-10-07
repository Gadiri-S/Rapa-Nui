module.exports = (req, res, next) => {
    const verifyInput = (input) => {
        let inputRegex =/^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/
        let isRegexTrue = inputRegex.test(input)
        isRegexTrue ? next() : res.status(400).json({ message: 'Invalid entries, please make sure to properly fill all the fields : Only letters and spaces are allowed' });
    }
    
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const city = req.body.city;
    const country = req.body.country;
    const name = req.body.name;
    verifyInput(firstname,lastname,city,country,name);


  


  };
