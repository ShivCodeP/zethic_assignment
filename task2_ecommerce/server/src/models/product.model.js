import mongoose from "mongoose";

const { Schema,model } = mongoose;

const productSchema = new Schema({
    name: {type:String,required:true},
    price: {type:String},
    rating: {type:String},
    product_type: {type:String},
    brand: {type:String},
    img1: {type:String},
    img2: {type:String},
    img3: {type:String},
    img4: {type:String},
    description: {type:String,required:true}
},{
    versionKey:false,
    timestamps:true
})

const Products = model("product",productSchema);

export default Products;