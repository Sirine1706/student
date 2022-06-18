const mongoose = require("mongoose");

const FacultySchema = new mongoose.Schema({
	name: { type: String },
	location: { type: String },
	foundationDate: { type: Date },
},
{timestamps: true}
);

module.exports = mongoose.model("faculty", FacultySchema);
