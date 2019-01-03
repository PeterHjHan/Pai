# Pai

## Description

Pai is a React Native Mobile App that allows one user to randomly connect to other users to make a friendship by scanning each users indivdiual QRcode. It uses the device's geolocation to calculate the difference of the distance and provide a color based indicator. There is no map to track each users.

## Demo

<img src="/assets/images/pai_demo.gif" width="400">

## Getting Started

1. Clone this repo
2. Run `npm install`
3. Add the following code in `node_modules/react-native-pulse/pulse.js` before `componentDidMount()`
  ```js
  componentWillReceiveProps(props) {
        if(props.color != this.state.color){
            this.setState({
                color: props.color
            })
        }
    }
  ```
4. Run `knex migrate:latest`
5. Run `knex seed:run`
6. Create a `config.json` in the root folder and write the following
  ```js
    {
      ipv4: `your ip address (example: 192.123.456.20:)`
    }
    do NOT add the last . at the end, but put a colon
  ```
7. Run the server `node server.js`
8. Run the web-socket `node ws-server.js`
9. Run the application `expo start`

## Built With

* [Expo](https://expo.io/)
* [react-native-pulse](https://github.com/sahlhoff/react-native-pulse)
* pg
* Knex
* react-native-navigation
* axios
* [kalmanjs](https://github.com/wouterbulten/kalmanjs)
* [haversine](https://www.npmjs.com/package/haversine)
* express

## Authors

See also the list of [contributors](https://github.com/PeterHjHan/Pai/graphs/contributors) who participated in this project.
