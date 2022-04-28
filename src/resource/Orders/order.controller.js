const ordersModel = require("./order.model") 
 
//  response step:2
const createOrder= async (req, res) => {
  try {
    const order = await ordersModel.create(req.body)
     console.log(order)
    return res.status(201).json({order, massages:"Successfully your Order"})
  } catch (error) {
    return res.status(401).json({massages: error.massages})
  }
}

 const getOrder = async (req, res) => {
      try {
        const order = await  ordersModel.findOne({
          email: req.params.email
        })
        return res.status(201).json({order})
      } catch (error) {
        return res.status(401).json({massages: error.massages})
      }
  }


  const updateOrder= async (req , res) => {
  try {
       await ordersModel.updateOne({
         email: req.params.email
        },
          req.body
      );
      res.status(201).json({massages:'Card Updated Successfully'});
  } catch (error) {
      return res
          .status(500).json({massages: error.massages}) 
  }
};

  module.exports={createOrder , getOrder, updateOrder}