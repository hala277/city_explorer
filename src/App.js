import React from 'react'
import axios from 'axios'
import "bootstrap/dist/css/bootstrap.min.css";
import Form from 'react-bootstrap/Form'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Weather from './componant/weather'
import Movies from './componant/Movies'
import Image from 'react-bootstrap/Image'

import Card from 'react-bootstrap/Card'

// https://city-explorer-api077.herokuapp.com
class App extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      ExploreLocationResult: [],
      weatherResult: [],
      moveResult:[],
      searchQ: '',

      showLocation: false
    }
  }

  ExploreFunction = async (event) => {
    event.preventDefault();
    console.log('inside function')
    // let cityName = event.target.city.value;

    await this.setState({
      searchQ: event.target.city.value,

    })

    let requsetURL = ` https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.searchQ}&format=json`;

    let locationResult = await axios.get(requsetURL);

    // just to know what does each one print

    console.log('printtttt to check1', locationResult)
    console.log('printtttt to check2', locationResult.data)
    console.log('printtttt to check3', locationResult.data[0])

    this.setState({
      ExploreLocationResult: locationResult.data[0],
      // weatherExplor:weatherResult.data,
      showLocation: true
    })
    this.ExploreWeather(this.state.searchQ)
    this.ExploreMovies(this.state.searchQ)
  }



  ExploreWeather = async (searchQ) => {
    // searchQ.preventDefault();
    console.log('inside function weather')


    let weatherLink = `${process.env.REACT_APP_SERVER_LINK}/getWeather?city=${searchQ}`;
    // localhost:3001/getWeather?city=Amman
    console.log(weatherLink);
    let weatherResult = await axios.get(weatherLink);
    console.log("hereeeeeeeeee", weatherResult);
    console.log(' ExploreWeather work', weatherResult.data)

    this.setState({
      weatherResult: weatherResult.data
    })
  }

  ExploreMovies = async (searchQ) => {
    // searchQ.preventDefault();
    console.log('inside function weather')


    let moviesLink = `${process.env.REACT_APP_SERVER_LINK}/getMovies?query=${searchQ}`;
    // localhost:3001/getMovies?query=Amman
    console.log(moviesLink);
    let moveResult = await axios.get(moviesLink);
    console.log("hereeeeeeeeee MOOOVEEE", moveResult);
    console.log(' ExploreMoveis work', moveResult.data)

    this.setState({
      moveResult: moveResult.data
    })
  }


  // come from the constructore ExploreLocationResult
  render() {
    return (
      <div>

        <Navbar bg="danger" variant="dark">
          <Container>
            <Navbar.Brand href="#home"> <h3>City Explorer app</h3></Navbar.Brand>
          </Container>
        </Navbar>
        {/* <button onClick ={this.ExploreFunction}>Explore!</button> */}

        {/* onSubmit={this.ExploreFunction} */}
        <Form onSubmit={this.ExploreFunction} label="Enter city name here"  >


          {/* key={i} */}
          <Form.Control type="text" name='city' label="Enter city name here" />
          <Form.Control type="submit" value='sercsh for city' />

        </Form>



        {this.state.showLocation &&
          <>
            <Card style={{ "fontWeight": "bold", "width": "1260px" }}>
              <Card.Body style={{ "textAlign": "center", "marginTop": "30px" }}  >
                <h6 >City Name:  {this.state.searchQ}</h6>
                <h6 >latitude:    {this.state.ExploreLocationResult.lat}</h6>
                <h6 >longitude:   {this.state.ExploreLocationResult.lon}</h6>
              </Card.Body>
              {/* <img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_KEY}&center=${this.state.ExploreLocationResult.lat},${this.state.ExploreLocationResult.lon}&zoom=10`} alt="city" /> */}
              {/* <Col   > */}
              <Image src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_KEY}&center=${this.state.ExploreLocationResult.lat},${this.state.ExploreLocationResult.lon}&zoom=10`} alt="city" thumbnail />
              {/* </Col> */}

            </Card>
          </>
        }

        {this.state.weatherResult.map((weather, i) => {
          return (
            <Weather key={i} weather1={weather}
            />
          )
        })}

        {this.state.moveResult.map((movies, i) => {
          return (
            <Movies key={i} movies1={movies}
            />
          )
        })}


      </div>
    )
  }
}

export default App
