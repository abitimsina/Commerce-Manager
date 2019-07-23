var mongoose = require("mongoose")
// var reviewsSchema = new mongoose.Schema({
//     name: String,
//     cuisine: String,
//     price: String,
// })
var productSchema = new mongoose.Schema({
    name: String,
    qty: Number, //Qty
    price: Number,
    // reviews: [reviewsSchema]
})
// mongoose.model('review', reviewsSchema);
module.exports = mongoose.model('product', productSchema);