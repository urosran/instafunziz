import React from 'react'
const {Provider, Consumer} = React.createContext("default value")

export class Container extends React.Component {

  state = {
    userLocation: null,
    userAddress: null,
  }
   
  setLocation = userLocationUpdate => {
    this.setState({ userLocation: userLocationUpdate }, () => {
      // console.log(this.state.userAddress, 'user address');
    })};
  
  setAddress = userAddressUpdate => {
    // console.log("passed IN:")
    // console.log(userAddressUpdate)
    // this.setState({userAddress: userAddressUpdate})
    this.setState({ userAddress: userAddressUpdate }, () => {
    // console.log(this.state.userAddress, 'user address');
    })}; 
    
  
  render() {
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