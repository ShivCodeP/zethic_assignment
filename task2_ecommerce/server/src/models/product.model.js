import { Schema,model } from "mongoose";

const productSchema = new Schema({
    product: {type:String,required:true},
    description:{type:String,required:true},
    price: {type:Number,required:true},
    category:{type:String,required:false}
},{
    versionKey:false,
    timestamps:true
})

const Products = model("product",productSchema);

export default Products;