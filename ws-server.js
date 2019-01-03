const express = require('express');
const SocketServer = require('ws').Server
const uuid = require('uuid-js');
const axios = require('axios');
const {ipv4} = require ('./config.json')
const serverAddress = `${ipv4}8080`
const haversine = require('haversine');


const PORT = 3001;

const server = express()
  .use(express.static('public'));

const wss = new SocketServer({port: PORT});


wss.on('connection', (ws) => {
  console.log(`${uuid.create().toString()} Connection Opened`);

  ws.onmessage = (event) => {

    const dataFromUser = JSON.parse(event.data);
    const user = Number(dataFromUser.currentUserId);
    const latitude = dataFromUser.lat;
    const longitude = dataFromUser.long;

    const sourceUser = {
      latitude: latitude,
      longitude: longitude
    }

    axios({
      method: 'post',
      url: `${serverAddress}/user/${user}/location/`,
      data: {
        user: user,
        longitude: longitude,
        latitude: latitude
      }
    }).then((response) => {
      
    }).catch((err) => {
      console.log(err.message);
    })

    axios.get(`${serverAddress}/user/${user}/connections`)
    .then((res) => {
      var allCalls = [];
      var mergedData = [] 
      res.data.forEach((connectedUser) => {
        allCalls.push(axios.get(`${serverAddress}/user/${connectedUser.id}/location/`));
      })

      Promise.all([...allCalls]).then(function(values) {

        values.forEach(function(t){

            let otherUser = {
            latitude: Number(t.data[0].lat),
            longitude: Number(t.data[0].long),
          }

          var dataToUser = {
            userId: t.data[0].user_id,
            distance: ~~haversine(sourceUser, otherUser, {unit:'meter'})
          }
          
          mergedData.push(dataToUser);
        })
        console.log(mergedData);
        ws.send(JSON.stringify(mergedData));
      });
    });
  }

  ws.on('close', () => {
    console.log('Client disconnected');
  })

})

// server.listen(PORT, '0.0.0.0', 'localhost',  () => console.log(`Listening on ${ PORT }`));
