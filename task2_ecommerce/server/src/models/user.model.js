import mongoose from "mongoose";
import bcrypt from "bcrypt"

const { Schema,model } = mongoose;

const userSchema = new Schema({
    name: {type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    watchlist:[{type:Schema.Types.ObjectId,ref:"product"}],
    order: [{type:Schema.Types.ObjectId,ref:"checkout"}]
},{
    versionKey:false,
    timestamps:true
})

userSchema.pre("save", function (next) {
    // create and update
    if(!this.isModified("password")) return next();
    bcrypt.hash(this.password,10,(err,hash) => {
        this.password = hash;
        return next();
    });
});

userSchema.methods.checkpassword = function (password) {
    return new Promise((resolve,reject) => {
        bcrypt.compare(password,this.password, function(err,same) {
            if(err) return reject(err);

            return resolve(same);
        })
    })
}


const Users = model("user",userSchema);

export default Users;