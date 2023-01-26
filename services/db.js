const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/bookk',()=>{
    console.log('mongoDB is connected')
})

//modal and schema creation

const Page=mongoose.model('Page',{
 id:Number,
author_id:Number,
title:String,
cover_image:String,
pages:Number,
releaseDate:Number,
isbn:String

})
 const Wishlist= mongoose.model('Wishlist',{
id:Number,
title:String,
cover_image:String,
pages:Number,
 })



//export
module.exports={
        Page,
        Wishlist,
      
}