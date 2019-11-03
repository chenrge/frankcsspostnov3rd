import React, { Component } from 'react';
import NavigationBar from './NavigationBar'
import { Nav, NavItem, NavLink, Label, Button } from 'reactstrap';
import axios from 'axios';
import './home.css'
import { NavLink as RRNavLink } from 'react-router-dom';

class Home extends Component {


  constructor(props) {
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('fandomId')
    super(props);
    this.state = {
      myFandoms: [],
      fandomId: myParam,
      fandomInfo: ''

    };
    if (localStorage.getItem('loggedin') !== 'true') {
      this.props.history.push("/")
    }

    this.refreshId = this.refreshId.bind(this);






  }

  refreshId(event) {
    this.props.history.push("/Home?fandomId=" + event.target.id)
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('fandomId')
    this.setState({ fandomId: myParam });
  }

  getMyFandoms() {

    axios.get("http://localhost:5000/getMyFandoms", {
      "params": {
        "userId": localStorage.getItem('id')
      }
    })
      .then((response) => {
        this.setState({ myFandoms: response.data })
        console.log(this.state.myFandoms);


      })
      .catch(function (error) {
        console.log(error);

      });
  }







  componentDidMount() {
    this.getMyFandoms();
  }








  render() {

    const fandomId = this.state.fandomId;
    const MyFandoms = this.state.myFandoms.map(o =>
      <NavItem key={o.name} id="navi">
        <NavLink href="#" onClick={this.refreshId} id={o.value} >{o.name}</NavLink>
      </NavItem>
    );



    return (
      <div>

        <NavigationBar />
        <h3>Fandom Page</h3>

        <Nav id="navi">
          {MyFandoms}
        </Nav>


        {fandomId != null ?
          <NavLink to={"/Home/CreatePost?fandomId=" + fandomId} exact activeClassName="current" tag={RRNavLink}>
            <Button>Create A post </Button>
          </NavLink>
          : null
        }





        <hr />

        <h1>Fandom Name</h1>
        <h6>Genre: Gaming</h6>

        <div>
          <NavLink href="#">Title 1</NavLink>
          <NavLink href="#">Created by: Shaahid Sheth</NavLink>
          <small>Level 4</small>
          <hr />
        </div>


        <NavLink href="#">Title 2</NavLink>


        <NavLink href="#">Title 3</NavLink>


        <NavLink href="#">Title 4</NavLink>

      </div>
    );
  }
}


export default Home;
