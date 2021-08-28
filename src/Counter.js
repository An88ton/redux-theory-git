import React from "react";
import {connect} from "react-redux";
import {add2} from "./redux/actions/actions";

function Counter(props) {

    return (
        <div style={{padding: 20, border: '1px solid #ccc', width: 350}}>
            <h1>Counter {props.counter}</h1>
            <hr/>
            <div>
                <button
                    style={{marginRight: 5}}
                    onClick={() => props.onChange(5)}
                >Add</button>
                <button onClick={() => props.onChange(-5)}>Sub</button>
            </div>
        </div>
    )
}

function mapStoreToProps(store) {
    return {
        counter: store.counter2.counter2
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onChange: number => dispatch(add2(number))
    }
}

export default connect(mapStoreToProps, mapDispatchToProps)(Counter);