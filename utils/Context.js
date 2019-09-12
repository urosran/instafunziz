import React from 'react'
const {Provider, Consumer} = React.createContext("default value")

export class Container extends React.Component {

  state = {
    userLocation: coords={latitude: 53.2734, longitude:-7.77832031},
    userAddress: city="My City",
    issueType: 1
  }
   
  setLocation = userLocationUpdate => {
    if(userLocationUpdate.latitude==undefined || userLocationUpdate.latitude == null){    
    userLocationUpdate.latitude = 53.2734
    userLocationUpdate.longitude = -7.77832031
    }
    console.log("userlocation:" + userLocationUpdate, "user location")
    this.setState({ userLocation: userLocationUpdate }, () => {})
  };
  
  setAddress = userAddressUpdate => {
    if (userAddressUpdate.city === null){
      userAddressUpdate.city="My City"
    }
    console.log(userAddressUpdate, "user address")
    this.setState({ userAddress: userAddressUpdate }, () => {})
  }; 
    
  setIssueType = issueType => {
    this.setState({issueType: issueType})
  }
  render() {
      console.log(this.state, "state context")
      return (
        <Provider value={{
          state: this.state,
          updateAddress: this.setAddress,
          updateLocation: this.setLocation
        }}>
          {this.props.children}
        </Provider>
      ) ;
    }
  }

  export default Consumer