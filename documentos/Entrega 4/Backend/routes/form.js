const express = require('express')
import {getUser} from '../controllers/user'

const router = express.Router();

router.get('/', getUser)

export default router;