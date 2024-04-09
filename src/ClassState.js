import React from "react";
import { Loading } from './Loading';
// import './UseStates.css';

const SECURITY_CODE = 'paradigma';

class ClassState extends React.Component{

    constructor(props){
        super(props);
        
        this.state = {
            value: '',
            error: false,
            loading: false,
        };
    }

    componentDidUpdate() {
        console.log('update');
    
        if (!!this.state.loading) {
          setTimeout(() => {
            console.log("doing the validation")
      
           if (SECURITY_CODE === this.state.value) {
            this.setState({ error: false,  loading: false });
           } else {
            this.setState({ error: true, loading: false });
           }
            
            console.log("completing validation")
          }, 2000);
        }
      }
      
      render() {
        return (
          <div>
            <h3>Delete {this.props.name}</h3>
            
            <p>type the security code</p>
    
            {(this.state.error && !this.state.loading) && (
              <p>Error: the code is wrong</p>
            )}
    
            {this.state.loading && (
              <Loading />
            )}
    
            <input placeholder="security code" 
                value={this.state.value}
                onChange={(event) => {
                    this.setState({ value: event.target.value })
                }}
            />
            <button
              onClick={() => this.setState({ loading: true })}
            >Check</button>
          </div>
        );
      }
    }
export { ClassState }