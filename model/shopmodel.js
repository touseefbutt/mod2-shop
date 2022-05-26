const mongoose = require('mongoose');
const shopSchema = new mongoose.Schema(
    {
        pname : {type: String},
        pprice : {type: Number},
        pstock : {type: Number}
    });

    const Shop = mongoose.model('Shop', shopSchema);

    module.exports = Shop;