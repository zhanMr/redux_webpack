import React from 'react';
import ReactDom from 'react-dom';
import * as action from './action';
import {createStore, applyMiddleware} from 'redux';
import reducer from './reducer';
const store = createStore(reducer);
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
const style = require('./style.css');

class Other extends React.Component{
    add(){
        let {data, dispatch} = this.props;
        data.text.push('xxx');
        this.props.addTodo(data.text);
    }
    render(){
        return (
            <div onClick={this.add.bind(this)}>子组件!!</div>
        )
    }
}

class Order extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text: '123'
        }
    }
    changeText(e){
        this.setState({text: e.target.value})
    }
    addText(){
        let {data, dispatch} = this.props;
        data.text.push(this.state.text);
        dispatch(action.addTodo(data.text));

    }
    render(){
        let {data, dispatch} = this.props;
        let boundActionCreators = bindActionCreators(action , dispatch);
        let {text} = this.state;
        return(
            <div>
                <p><input type="text" value={text} onChange={this.changeText.bind(this)}/><button onClick={this.addText.bind(this)}>提交</button></p>
                {data.text.map((item, key) => {
                    return(
                        <div key={key} className={style.text}>{item}</div>
                    )
                })}
                <Other {...this.props} {...boundActionCreators}/>
            </div>
        )
    }
}

function select(state) {
    return {
        data: state.addTodo
    };
}


export default connect(select)(Order);