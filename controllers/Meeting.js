const Meeting = require("../models/Meeting");
const responseHTTP = require("../network/response");

const controller = {
  create: async (req, res) => {
    const { meeting } = req.body;
    try {
      if (!meeting) responseHTTP.error(req, res, "Missing meeting data", 400);
      const newMeeting = await Meeting.create(meeting);
      return responseHTTP.success(req, res, newMeeting, 201);
    } catch (error) {
      return responseHTTP.error(req, res, error, 500);
    }
  },
  findOne: async (req, res) => {
    const { id } = req.params;
    try {
      if (!id) responseHTTP.error(req, res, "Missing id", 400);
      const meeting = (await Meeting.findById(id)) | {};
      return responseHTTP.success(req, res, meeting, 200);
    } catch (error) {
      return responseHTTP.error(req, res, error, 500);
    }
  },
  updateOne: async (req, res) => {
    const { id } = req.params;
    const { meeting } = req.body;
    try {
      if (!id || !meeting) responseHTTP.error(req, res, "Missing data", 400);
      const updatedMeeting = await Meeting.updateOne(id, meeting);
      return responseHTTP.success(req, res, updatedMeeting, 200);
    } catch (error) {
      return responseHTTP.error(req, res, error, 500);
    }
  },
  deleteOne: async (req, res) => {
    const { id } = req.params;
    try {
      if (!id) responseHTTP.error(req, res, "Missing id", 400);
      const deletedMeeting = await Meeting.findByIdAndDelete(id);
      return responseHTTP.success(req, res, deletedMeeting, 200);
    } catch (error) {
      return responseHTTP.error(req, res, error, 500);
    }
  },

  //Basic crud done
  //More methods here
  find: async (req, res) => {
    try {
      const meetings = await Meeting.find({});
      return responseHTTP.success(req, res, meetings, 200);
    } catch (error) {
      return responseHTTP.error(req, res, error, 500);
    }
  },
};

module.exports = controller;
