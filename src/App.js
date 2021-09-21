import React from 'react'
import axios from 'axios'
import "bootstrap/dist/css/bootstrap.min.css";
import Form from 'react-bootstrap/Form'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Weather from './componant/weather'
import Image from 'react-bootstrap/Image'
import Col from 'react-bootstrap/Col'

// https://city-explorer-api077.herokuapp.com
class App extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      ExploreLocationResult: [],
      weatherResult: [],
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
  }



  ExploreWeather = async (searchQ) => {
    // cityWeather.preventDefault();
    console.log('inside function weather')
    let weatherLink = `${process.env.REACT_APP_SERVER_LINK}/weather?city=${searchQ}`;
    let weatherResult = await axios.get(weatherLink);

    console.log('hhhhhhhhhhhhhhhhhh work', weatherResult.data)

    this.setState({
      weatherResult: weatherResult.data
    })
  }


  // come from the constructore ExploreLocationResult
  render() {
    return (
      <div>

        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home"> <h3>City Explorer app</h3></Navbar.Brand>
          </Container>
        </Navbar>
        {/* <button onClick ={this.ExploreFunction}>Explore!</button> */}

        {/* onSubmit={this.ExploreFunction} */}
        <Form onSubmit={this.ExploreFunction} label="Enter city name here" >
          {/* <Button type="submit" name="buttonname" > */}

          {/* key={i} */}
          <Form.Control type="text" name='city' label="Enter city name here" />
          <Form.Control variant="dark" type="submit" value='sercsh for city' />
          {/* </Button> */}
        </Form>

        {this.state.weatherResult.map((weather) => {
          return (
            <Weather  weather1={weather}
            />
          )
        })}

        {this.state.showLocation &&
          <>
            <p> City Name: {this.state.searchQ}</p>
            <p>latitude:  {this.state.ExploreLocationResult.lat}</p>
            <p>longitude:  {this.state.ExploreLocationResult.lon}</p>

            {/* <img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_KEY}&center=${this.state.ExploreLocationResult.lat},${this.state.ExploreLocationResult.lon}&zoom=10`} alt="city" /> */}
            <Col xs={6} md={4} >
              <Image src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_KEY}&center=${this.state.ExploreLocationResult.lat},${this.state.ExploreLocationResult.lon}&zoom=10`} alt="city" thumbnail />
            </Col>
          </>
        }


      </div>
    )
  }
}

export default App
