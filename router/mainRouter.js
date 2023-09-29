const express = require("express")
const router = express.Router()

const {
    echo,
    getProdcts,
    getSingleProdct,
    handle,
} = require("../controllers/mainController")

router.post('/echo', echo)
router.post('/getProdcts', getProdcts)
router.post('/getSingleProdct', getSingleProdct)
router.post('/handle', handle)



module.exports = router
