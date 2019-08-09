
import React from 'react';
import { appendFile } from 'fs';
var country = "";
var response  = "";

class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }
  
    componentDidMount() {
      fetch("https://o136z8hk40.execute-api.us-east-1.amazonaws.com/dev/get-list-of-conferences")
      .then(res => res.json())
        .then(
          (result) => {
            response = result.free;
            this.setState({
              isLoaded: true,
              items: result.items
            });
        }
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          
        )
    }

   
   
  
    render() {
       
      const { error, isLoaded, items } = this.state;
    
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {

       
         return(
               <div className="card-body">
                  <h5 className="card-title">{items}</h5>
                </div>
           
        );
    
      }
    }
  }

  export default MyComponent