import { app } from './app.js'

app.get("/", (req, res, next) => {
    res.send("server is running");
})


const port = process.env.PORT;
app.listen(port, () => {
    console.log(`server is running at port : ${port}`);
})