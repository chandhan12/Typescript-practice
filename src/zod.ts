import z from "zod"
import express from "express"



const app=express()
app.use(express.json())


const profileSchema=z.object({
    name:z.string().min(4,{message:"name should be length atleast 4"}),
    email:z.string().email({message:"incorrect email format"}).optional(),
    age:z.number().min(18,{message:"age should be above 18"}).optional()
})



//finalSchema is exported from here and it will be used in the front end to get the correct input format from user
export type finalSchema=z.infer<typeof profileSchema>


app.put("/update",(req:any,res:any)=>{
    const parsed=profileSchema.safeParse(req.body)

    const updateData:finalSchema=req.body

    if(!parsed.success){
       return res.json({
            msg:"Incorrect input format",
            arror:parsed.error.errors
        })
    }
    //update user in db with updateData
    res.json({
        msg:"user updated"
    })
})


app.listen(3000,()=>{
    console.log("hi")
})