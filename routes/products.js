const express = require('express');
const router = express.Router();
const productController=require('../controllers/productControllers');
/* GET products listing. */
router.get('/',productController.allProducts);
/* GET single product listing. */
router.get('/:id',productController.singleProduct);
/* POST add products  */
router.post('/',productController.addProduct);
/* PUT edit product. */
router.put('/:id',productController.editProduct);
/* DELETE delete product */
router.delete('/:id',productController.deleteProduct);

module.exports = router;
