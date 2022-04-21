const userModel = require("./user.model")

 

 

 
//  response step:2
 const getUsers = async (req, res) => {
      try {
        const user = await  userModel.findOne({
          email: req.params.email
        })
        return res.status(201).json({user})
      } catch (error) {
        return res.status(401).json({massages: error.massages})
      }
  }


 const createUsers= async (req, res) => {
 
     try {
      const ExistingUser = await userModel.findOne({
        email: req.body.email,
        });

      if (ExistingUser) {
        return res.json({ user: ExistingUser });
      }

       const user = await userModel.create(req.body)
       return res.status(201).json({user})
     } catch (error) {
       return res.status(401).json({massages: error.massages})
     }
  }

 

  const updateUsers= async (req , res) => {
  try {
       await userModel.updateOne({
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


 
 
  module.exports={getUsers , createUsers, updateUsers}