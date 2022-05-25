const mongoose = require('mongoose');
const shopSchema = new mongoose.Schema(
    {
        pname : {type: String},
        pprice : {type: Number},
        pstock : {type: Number},
        pimage : {type: String},
        pbuy : {type: Boolean}

    });

    const Shop = mongoose.model('Shop', shopSchema);

    module.exports = Shop;