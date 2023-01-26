const  express = require('express')

const cors =require('cors')
  
const dataService = require('./services/dataService.js')

const app = express()

app.listen(3000,()=>{
    console.log('listening to port 3000')
})

app.use(express.json())

app.use(cors({
    origin:'http://localhost:4200'
}))

//api fetch

//api to get all books


app.get('/all-books',(req,res)=>{
    dataService.getProducts()
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})

app.post('/addtowishlist',(req,res)=>{
    dataService.addtowishlist(req.body.id,req.body.title,req.body.cover_image,req.body.price).then(
     (result)=>{
        res.status(result.statusCode).json(result)
     })

})

app.get('/getwishlist',(req,res)=>{
    dataService.getwishlist()
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})
app.delete('/deletewish/:id',(req,res)=>{
    dataService.deletewish(req.params.id).then(
        (result)=>{
            res.status(result.statusCode).json(result)
        }
    )
})
