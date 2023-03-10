import { Router } from 'express'
import { createUser, deleteUser, getUsers, updateUser } from '../controllers/user.js'

const router = Router()

router.get('/form', function (req, res) {
  getUsers()
    .then(data => {
      console.log(data)
      res.json(data)
    })
    .catch(err => {
      console.log(err)
      res.sendStatus(500).json({ response: "Error al obtener los datos." })
    })
})

router.get('/form/user')

router.post('/formpost', function (req, res) {
  console.log(req.body)
  const name = req.body.name
  const lastname = req.body.lastname
  const phone = req.body.phone
  const address = req.body.address
  createUser(name, lastname, phone, address)
    .then(data => {
      res.json(data).status(200)
    })
    .catch(error => {
      console.log(error)
      res.sendStatus(500).json({ response: "Error al obtener los datos." })
    })
})

router.delete('/form/:id', deleteUser)
router.put('/form/:id', updateUser)


export default router