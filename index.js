import app from './app.js'
import router from './src/router/router.js';

app.listen(4001, ()=>{
    console.log("http://localhost:4001");
})

app.use(router)