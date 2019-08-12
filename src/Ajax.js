
import React from 'react';
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
            response = result.paid;
            console.log(result);
            this.setState({
             list: response
            });
        }
      );
  
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
            <div className="col-sm-4">
            <div className="card">
            <div className="card-body">
            <h5 className="card-title">{list.confName}</h5>
            <p className="card-text"> {list.country}</p>
            </div>
            </div>
           </div>
           <div className="col-sm-4">
           <div className="card">
           <div className="card-body">
           <h5 className="card-title">{list.confName}</h5>
           <p className="card-text"> {list.country}</p>
           </div>
           </div>
          </div>
          <div className="col-sm-4">
          <div className="card">
          <div className="card-body">
          <h5 className="card-title">{list.confName}</h5>
          <p className="card-text"> {list.country}</p>
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