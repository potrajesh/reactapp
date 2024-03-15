import React from 'react';
import CustomParent from '../parent/CustomParent';
import SubChild from './SubChild';

 class ChildToParent extends React.Component{
getData=(name)=>{
this.setState({
    name:name}
)}
render(){
    return<div>
         from childtoparent
         <CustomChild  getData={this.getData}></CustomChild>
    </div>
}
}
class CustomChild extends React.Component {
     state={
        name : 10
     }
     onClickListener = ()=>{
        console.log("onClickListener");
        this.props.getData(this.state.name);
    }
    render() {
        return <div>
            <button onClick={this.onClickListener}>sendData</button>
     </div>
    }
}
export default CustomChild;
