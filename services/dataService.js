const db = require('./db')
 //get all the books from db

 //first create a function and call this fuction in index.js

 const getProducts =()=>{
   return db.Page.find().then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    pages:result
                }
            }
            else{
                return{
                    status:true,
                    statusCode:200,
                    message:'No books found'
                }
            }

        }
    )
 }

 const addtowishlist=(id,title,cover_image,price)=>{
  return db.Wishlist.findOne({id}).then(
    (result)=>{
        if(result){
            return{
                status:true,
                statusCode:200,
                message:"book already exists"
            }
        }
        else{
            const newBook = new db.Wishlist({id,title,cover_image,price})
            newBook.save()
            return{
                status:true,
                statusCode:200,
                message:"book added to wishlist"
            }
        }
    }
  )
 }

 const getwishlist=()=>{
    return db.Wishlist.find().then(
       (result)=>{
        if(result){
            return{
                status:true,
                statusCode:200,
                pages:result
            }
        }
        else{
            return{
                status:false,
                statusCode:404,
                message:'your wishlist is empty'
                
            }
        }
       }
    )
 }
 deletewish=(id)=>{
  return db.Wishlist.deleteOne({id}).then(
    (result)=>{
        if(result){

        //     return{
        //         status:true,
        //         statusCode:200,
        //         wishlist:result,
        //         message:'product removed'
        //          
        //    }
        return db.Wishlist.find().then(
            (result)=>{
             if(result){
                 return{
                     status:true,
                     statusCode:200,
                     wishlist:result,
                     message:"removed successfully"
                 }
             }
             else{
                 return{
                     status:false,
                     statusCode:404,
                     message:'not found'
                     
                 }
             }
            }
         )
        }
        else{
            return{
                status:false,
                statusCode:404,
                message:'wishlist is empty'
                
            }
        }
    }
  )
 }


 
 module.exports={
    getProducts,
    addtowishlist,
    getwishlist,
    deletewish,
   
 }