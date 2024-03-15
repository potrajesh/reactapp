import React from 'react';

class Calculator extends React.Component {

    state = {
       a:10,
       b:20
    }

    setA = (e)=>{
       this.setState(
           {
               a:e.target.value
            });
    }
    render() {
        return <div>
            {this.state.a}
            <input onChange= {this.setA}></input>
            <input></input>
          {'A:'+this.state.a}
            </div>
    }
}
export default Calculator;