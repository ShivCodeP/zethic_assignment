import mongoose from "mongoose";

const { Schema,model } = mongoose;

const checkoutSchema = new Schema({
    products:[{type:Schema.Types.ObjectId,ref:"product",required:true}],
    ship_adddress: {type:String,required:true},
    user: {type:Schema.Types.ObjectId,ref:"user",required:true},
    payment_status:{type:Boolean,required:true,default:false}
},
{
    versionKey:false,
    timestamps:true
})

const Checkout = model("checkout",checkoutSchema);

export default Checkout;