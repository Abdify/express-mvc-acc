const Tool = require("../model/Tool");

// insert a new tool
exports.postATool = async (data) => {
  const tool = new Tool(data);
  const result = await tool.save();
  return result;
};

// display all tools [newly first]
exports.getAllTools = async () => {
  const tools = await Tool.find({});
  return tools.reverse();
};

// display a tool
exports.getATool = async (id) => {
  const tool = await Tool.findById(id);
  return tool;
};

// update a tool
exports.updateATool = async (id, docs) => {
  const tool = await Tool.findByIdAndUpdate(id, docs);
  return tool;
};

// delete a tool
exports.deleteATool = async(id) => {
    const tool = await Tool.findByIdAndDelete(id);
    return tool;
}