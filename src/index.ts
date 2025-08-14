
import { PrismaClient } from "@prisma/client/extension";
import express from "express"

const app = express();

const prismaCLient = new PrismaClient({

})


app.get( "/", async (req , res) => {
    
    const data = await prismaCLient.user.findMany();
    res.json(data);
})

app.post("/",async (req , res) => {
    await prismaCLient.user.create({
        data:{
            name: Math.random().toString(36).substring(7),
            password: Math.random().toString(36).substring(7)
        }
    })
})


app.listen(3000, () => {
    console.log("Server is running on port 3000");
})