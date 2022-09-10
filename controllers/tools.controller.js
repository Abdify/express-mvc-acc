// internal imports
const {
  postATool,
  getAllTools,
  getATool,
  updateATool,
  deleteATool,
} = require("../services/tool.service");

// routing to display all tools
module.exports.getAllTools = async (req, res, next) => {
  try {
    const tools = await getAllTools();

    res.status(200).json({
      success: true,
      message: "OK",
      data: tools,
    });
  } catch (error) {
    next(error);
  }
};

// routing to insert a new tool
module.exports.saveATool = async (req, res, next) => {
  try {
    const tool = req.body;

    const result = await postATool(tool);
    console.log(result);

    if (!result._id) {
      return res
        .status(400)
        .send({ status: false, error: "Something went wrong!" });
    }

    res.status(201).send({
      success: true,
      message: "Created",
    });
  } catch (error) {
    next(error);
  }
};

// routing to display specific tool
module.exports.getToolDetail = async (req, res, next) => {
  try {
    const { id } = req.params;

    const tool = await getATool(id);

    res.status(200).json({
      success: true,
      message: "OK",
      data: tool,
    });
  } catch (error) {
    next(error);
  }
};

// routing to update an existing tool
module.exports.updateTool = async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;

    const tool = await updateATool(id, body);
    console.log(tool);

    res.status(202).json({
      success: true,
      message: "Accepted",
    });
  } catch (error) {
    next(error);
  }
};

// routing to delete a tool
module.exports.deleteTool = async (req, res, next) => {
  try {
    const { id } = req.params;

    const tool = await deleteATool(id);
    console.log(tool);

    res.status(200).json({
      success: true,
      message: "OK",
    });
  } catch (error) {
    next(error);
  }
};
