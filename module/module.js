const mongoose=require('mongoose')

const schema=new mongoose.Schema({
    fname:{
        type:String,
        required:[true, 'Name is required...']
    },
    lname:{
        type:String,
        required:[true, "Last name is required"]
    },
    mobile:{
        type:Number,
        required:[true, 'number is required' ]
    },
    email:{
        type:String,
        required:[true,"Email is required..."],
        // unique:[true,"Email id alredy exist "],
        trim:true,
        lowercase:true
    },
    // address:{
    //     type:String,
    //     required:[true, 'Please enter Address...']
    // },
    // street:{
    //     type:String,
    //     required:[true, 'Please enter Street']
    // },
    // city:{
    //     type:String,
    //     required:[true, 'Please enter City']
    // },
    // state:{
    //     type:String,
    //     required:[true, 'Please enter State']
    // },
    // country:{
    //     type:String,
    //     required:[true, 'Please enter Country']
    // },
    // login_id:{
    //     type:String,
    //     required:[true, "login ID is required..."]
    // },
    password:{
        type:String,
        required:[true, "Password is required..."]
    },
    


},{ timestamps: true })

module.exports=mongoose.model("user_reg",schema)