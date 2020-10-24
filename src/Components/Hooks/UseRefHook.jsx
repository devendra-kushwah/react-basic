import React, { Component, useState, useEffect, useRef } from "react";

// class UseRef extends Component {
//   interval;
//   constructor(props) {
//     super(props);

//     this.state = {
//       timer: 0,
//     };
//   }

//   componentDidMount() {
//     this.interval = setInterval(() => {
//       this.setState((prev) => ({ timer: prev.timer + 1 }));
//     }, 1000);
//   }
//   componentWillUnmount() {
//     clearInterval(this.interval);
//   }
//   render() {
//     return (
//       <>
//         <h2>Hello Ref timer {this.state.timer}</h2>

//         <button onClick={() => clearInterval(this.interval)}>
//           clear interval
//         </button>
//       </>
//     );
//   }
// }
// export default UseRef;

const UseRefHook = () => {
  const [timer, setTimer] = useState(0);

  const timerRef = useRef();

  console.log(timer);

  useEffect(() => {
    // did mount
    const interval = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
    return () => {
      // un mount
      clearInterval(timerRef.current);
    };
  }, []);
  return (
    <div>
      <h2>Hello Ref timer {timer}</h2>
      <button onClick={() => clearInterval(timerRef.current)}>
        clear interval
      </button>
    </div>
  );
};

export default UseRefHook;
