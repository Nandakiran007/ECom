const express = require("express");
const router = express();
const  {
    handleinsert,
    handleProdDelete,
    handleUpdate,
    fetchProduct,
    fetchallProducts
    }=require("../apis/productApi")
router.post("/insert", handleinsert);
router.post("/delete", handleProdDelete);
router.get("/fetch_all",fetchallProducts)
router.patch("/update",handleUpdate);
router.get("/fetch/:p_id",fetchProduct);

module.exports = router;
