import {Router} from 'express'
import {createUser, deleteUser, getUsers, updateUser} from '../controllers/user.js'

const router = Router()

router.get('/form', getUsers)
router.get('/form/user')
router.post('/form', createUser)
router.delete('/form/:id', deleteUser)
router.put('/form/:id', updateUser)


export default router