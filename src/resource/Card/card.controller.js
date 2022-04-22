const cardModel = require("./card.model") 

 
//  response step:2
 const getCard = async (req, res) => {
      try {
        const card = await cardModel.find()
        return res.status(201).json({card})
      } catch (error) {
        return res.status(401).json({massages: error.massages})
      }
  }


 const createCard= async (req, res) => {
     try {
       const card = await cardModel.create(req.body)
        
       return res.status(201).json({card})
     } catch (error) {
       return res.status(401).json({massages: error.massages})
     }
  }

  const deleteCard = async (req, res) => {
    try {
        await cardModel.findByIdAndDelete(req.params.id);
        return res.status(201).json({massages:'Card deleted Successfully'});
    } catch (error) {
        return res
            .status(500).json({massages: error.massages})
         
    }
};


  const updateCard= async (req , res) => {
  try {
       await cardModel.findByIdAndUpdate(
          req.params.id,
          req.body
      );
      res.status(201).json({massages:'Card Updated Successfully'});
  } catch (error) {
      return res
          .status(500).json({massages: error.massages}) 
  }
};
 
 
  module.exports={getCard , createCard, updateCard, deleteCard}