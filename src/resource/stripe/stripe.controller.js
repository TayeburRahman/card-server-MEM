const stripeModel = require("./stripe.model")
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);


 const createStripe = async (req, res) => {
   const  paymentInfo =req.body;
   const  amount =paymentInfo.price * 100
     try {
       const PaymentIntent = await stripe.stripeModel.create({
         currency:'usd',
         amount: amount,
         payment_method_types:['card']
       })
       return res.status(201).json({clientSecret: PaymentIntent.client_secret})
     } catch (error) {
       return res.status(401).json({massages: error.massages})
     }
  }
 
  module.exports={createStripe }