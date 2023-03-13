import { Router } from 'express'
import { createUser, deleteUser, getUsers, updateUser } from '../controllers/user.js'

const router = Router()

router.get('/form', function (req, res) {
  getUsers()
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      console.log(err)
      res.sendStatus(500).json({ response: "Error al obtener los datos." })
    })
})

router.get('/form/user')

router.post('/formpost', function (req, res) {
  const name = req.body.name
  const lastname = req.body.lastname
  const phone = req.body.phone
  const address = req.body.address
  const model = req.body.model
  const brand = req.body.brand
  const domain = req.body.domain
  const description = req.body.description
  const color = req.body.color
  const mileage = req.body.mileage
  createUser(name, lastname, phone, address, model, brand, domain, description, color, mileage)
    .then(data => {
      res.json(data).status(200)
    })
    .catch(error => {
      console.log(error)
      res.send(500).json({ response: "Error al obtener los datos.", status:500 })
    })
})

router.delete('/form/:id', function(req, res){
  deleteUser()
  .then((data) => {
    res.json(data).status(200)
  })
  .catch(error => {
    console.log(error)
    res.send(500).json({ response: "Error al obtener los datos", status:500})
  })
})
router.put('/form/:id', updateUser)


export default router