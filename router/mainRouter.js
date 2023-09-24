const express = require("express")
const router = express.Router()
const {  validateTrue } = require("../middleware/validator")

const {
    echo,
    getProdcts,
    getSingleProdct,
    getKey,
   } = require("../controllers/mainController")

router.post('/echo', validateTrue, echo)
router.post('/getProdcts', getProdcts)
router.post('/getSingleProdct', getSingleProdct)
router.post('/getKey', getKey)



module.exports = router
