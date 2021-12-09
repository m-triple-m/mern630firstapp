import { useState } from "react";

const State = () => {

    let count = 0;
    const [num, setNum] = useState(0);


    const handleClick = () => {
        count++;
        setNum(num + 1);
        console.log(count);
        console.log(num);
    }

    return (
        <div>
            <h1>State Management</h1>
            <hr />

            <h1>{count}</h1>
            <h1>{num}</h1>

            <button onClick={handleClick} className="btn btn-primary">DOnt touch</button>

        </div>
    )
}

export default State;