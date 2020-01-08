'use strict'
const User = use('App/Models/User')
const crypto = require('crypto')
class ForgotPassawordController {
  async store ({ request, response }) {
    try {
      const email = request.input('email')
      const user = await User.findByOrFail('email', email)
      user.token = crypto.randomBytes(10).toString('hex')
      user.token_created_at = new Date()
      await user.save()
    } catch (error) {
      return response.status(error.status).send({ error: { message: 'Algo não deu certo, esse email existe?' } })
    }
  }
}

module.exports = ForgotPassawordController
