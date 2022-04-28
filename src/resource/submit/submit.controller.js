const submitModel = require("./submit.model") 
 
//  response step:2
const createSubmit= async (req, res) => {
  try {
    const submit = await submitModel.create(req.body)
     console.log(submit)
    return res.status(201).json({submit})
  } catch (error) {
    return res.status(401).json({massages: error.massages})
  }
}

 const getSubmit = async (req, res) => {
      try {
        const submit = await  submitModel.findOne({
          email: req.params.email
        })
        return res.status(201).json({submit})
      } catch (error) {
        return res.status(401).json({massages: error.massages})
      }
  }


  const updateSubmit= async (req , res) => {
  try {
       await submitModel.updateOne({
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

const deleteSubmit = async (req, res) => {
  try {
      await submitModel.findByIdAndDelete(req.params.id);
      return res.status(201).json({massages:'Card deleted Successfully'});
  } catch (error) {
      return res
          .status(500).json({massages: error.massages})
       
  }
};


  module.exports={createSubmit , getSubmit, updateSubmit, deleteSubmit}