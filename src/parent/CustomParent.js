import React from 'react';
import CustomChild from '../child/CutomChild';
import SubChild from '../child/SubChild';

class CustomParent extends React.Component {

    state={
        name:'TextDecoderStream',
        age:23
    }
    render() {
        return <div>
            <CustomChild name={this.state.name} age={this.state.age}></CustomChild>
     </div>
    }
}
export default CustomParent;