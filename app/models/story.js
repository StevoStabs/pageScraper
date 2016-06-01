//Dependencies
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StorySchema = new Schema({
    title: {
        type:String
    },
    author: {
    	type:String
    },
    body: {
        type:String
    }
});

module.exports = mongoose.model('Story', StorySchema);
