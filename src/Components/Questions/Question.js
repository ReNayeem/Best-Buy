import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div id="question-answer" className="text-center container mt-5">
            <h4>How useState works?</h4>
            <p>useState is a hook. This allows us to have state variables in the functional components. We pass the initial state in this function. It provides a variable with the current state value and another function to update this value.</p>
            <h4>Difference between localStorage and sessionStorage</h4>
            <table>
                <tr className="text-center">
                    <th>localStorage</th>
                    <th>sessionStorage</th>
                </tr>
                <tr>
                    <td>1. It allows storing data with no expiration date</td>
                    <td>1. It allows storing data for one session</td>
                </tr>
                <tr>
                    <td>2. 5MB / 10MB storage</td>
                    <td>2. 5MB storage</td>
                </tr>
                <tr>
                    <td>3. It can span multiple windows and lasts beyond the current session</td>
                    <td>3. It can carry out a single transaction but could be carrying out multiple transactions in
                        different windows at the same time</td>
                </tr>
            </table>
        </div>
    );
};

export default Question;