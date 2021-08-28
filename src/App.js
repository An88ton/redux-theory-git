import './App.css';
import {connect} from 'react-redux';
import Counter from "./Counter";
import {add, add_num, asyncAdd, sub} from "./redux/actions/actions";

function App(props) {
  return (
    <div className="App">
      <h1>Number: {props.propsCounter}</h1>
        <button
            onClick={props.onAdd}
            style={{marginRight: 5}}
        >ADD</button>
      <button
          onClick={props.onAddNum.bind(this, 5)}
          style={{marginRight: 5}}
      >ADD 5</button>
        <button
            onClick={props.onSub}
        >SUBTRACT</button>
        <button
            onClick={props.onAsyncAdd.bind(this, 100)}
            style={{marginRight: 5}}
        >ASYNC ADD</button>


        <Counter />
    </div>
  );
}

function mapStoreToProps(store) {
  return {
    propsCounter: store.counter1.counter
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onAdd: () => dispatch(add()),
    onAddNum: (number) => dispatch(add_num(number)),
    onSub: () => dispatch(sub()),
    onAsyncAdd: (number) => dispatch(asyncAdd(number))
  }
}

export default connect(mapStoreToProps, mapDispatchToProps)(App);
