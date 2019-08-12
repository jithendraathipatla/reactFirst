
import React from 'react';

var country = "";
var response  = "";

class MyComponent extends React.Component {
  constructor(){
    super();
    this.state = {
        list: [],
        error: null
    }
}
    componentDidMount() {
      fetch("https://o136z8hk40.execute-api.us-east-1.amazonaws.com/dev/get-list-of-conferences")
      .then(res => res.json())
        .then(
          (result) => {
            response = result.free;
            this.setState({
             list: response
            });
        }
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          
        )
    }

   
   
  
    render() {
       console.log(this.state.list);
       for (var i = 0; i < this.state.list.length  ; i++){
           console.log(this.state.list[i].country);
       }
      return (
        <div>
          
        {this.state.list.map((list) => {
          return (<div>
            <div className="row">
            <div className="col-sm-12">
            <div className="card">
            <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text"> {JSON.stringify(list)}</p>
            </div>
            </div>
          </div>
          </div>
          <br></br>
          </div>)
      })}
        </div>
      )
  }
}
  export default MyComponent