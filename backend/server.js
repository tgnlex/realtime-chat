const express = require('express');
const axios = require('axios');
const cors = require('cors');
const port = 3001;


const app = express();
app.use(express.json());
app.use(cors({origin: true }));
app.post("/authenticate", async (req, res) => {
    const { username } = req.body;
    try {
        const r = await axios.put(
        "https://api.chatengine.io/users/",
        { username: username, secret: username, first_name: username},
        { headers: {"private-key": "2010de7d-b8bc-4302-8dce-ec63632cf1f5"}}
      )
      return res.status(r.status).json(r.data)
    } catch (e) {
      return res.status(e.response.status).json(e.response.data)  
    }
  }); 

app.listen(port) 