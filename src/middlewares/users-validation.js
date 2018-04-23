'use strict'

const validation = {}

validation.addUser = (req, res, next) => {
  req.checkBody('user_email', 'A valid email is required.').notEmpty()
  req.checkBody('user_password', 'A valid password is required.').notEmpty()

  req.getValidationResult().then((result) => {
    if(!result.isEmpty()){
      res.status(400).send({ error: result.array()[0].msg })
      return
    }
    next()
  })
}

module.exports = validation
