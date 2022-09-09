import {Schema,model} from "mongoose";

const userSchema = new Schema({
    username:{type:String,required:true,unique:true},
    name: {type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    watchlist:[{type:Schema.Types.ObjectId,ref:"product"}],
    order: [{type:Schema.Types.ObjectId,ref:"checkout"}]
},{
    versionKey:false,
    timestamps:true
})

const Users = model("user",userSchema);

export default Users;