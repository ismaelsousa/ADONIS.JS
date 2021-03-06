'use strict'

const Route = use('Route')
Route.post('users', 'UserController.store')
Route.post('sessions', 'SessionController.store')
Route.post('passwords', 'ForgotPassawordController.store')
Route.put('passwords', 'ForgotPassawordController.update')
