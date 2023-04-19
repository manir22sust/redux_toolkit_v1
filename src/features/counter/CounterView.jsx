import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset, increseByAmount } from "./counterSlice";

export const CounterView = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h2> Count :{count} </h2>
      <button onClick={() => dispatch(increment())}> Increment</button>
      <button onClick={() => dispatch(decrement())}> decrement</button>
      <button onClick={() => dispatch(reset())}> reset</button>
      <button onClick={() => dispatch(increseByAmount(5))}>
        increaseByAmount
      </button>
    </div>
  );
};
