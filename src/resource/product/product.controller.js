const productModel = require("./product.model")

 
//  response step:2
 const getProduct = async (req, res) => {
      try {
        const product = await productModel.find()
        return res.status(201).json({product})
      } catch (error) {
        return res.status(401).json({massages: error.massages})
      }
  }


 const postProduct = async (req, res) => {
     try {
       const product = await productModel.create(req.body)
       return res.status(201).json({product})
     } catch (error) {
       return res.status(401).json({massages: error.massages})
     }
  }



 const updateProduct =  (req, res) => {
    res.send('Raju vi bolce onno kicu ekta lekte')
  }
 const deleteProduct =  (req, res) => {
    res.send('Raju vi bolce onno kicu ekta lekte')
  }

  module.exports={getProduct, postProduct, updateProduct, deleteProduct}