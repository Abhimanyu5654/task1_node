const mongoose=require('mongoose')
const url='mongodb+srv://as491123:abhimanyu@cluster0.tvixcyv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
module.exports =()=>{ mongoose
    .connect(url)
    .then((result)=>console.log('Connecte the database !!'))
    .catch((error)=>console.log(error))

}