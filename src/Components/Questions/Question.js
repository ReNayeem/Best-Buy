import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div id="question-answer" className="text-center container mt-5">
            <h4>How useState works?</h4>
            <p>useState is a hook. This allows us to have state variables in the functional components. We pass the initial state in this function. It provides a variable with the current state value and another function to update this value.</p>
            <h4>Props Vs State</h4>
            <table>
                <tr className="text-center">
                    <th>Props</th>
                    <th>State</th>
                </tr>
                <tr>
                    <td>1. Props are read-only.</td>
                    <td>1. State changes can be asynchronous.</td>
                </tr>
                <tr>
                    <td>2. Props are immutable.</td>
                    <td>2. State is mutable.</td>
                </tr>
                <tr>
                    <td>3. Props allow us to pass data from one component to other components as an argument.</td>
                    <td>3. State holds information about the components.</td>
                </tr>
                <tr>
                    <td>4. Props can be accessed by the child component.</td>
                    <td>4. State cannot be accessed by child components.</td>
                </tr>
            </table>
        </div>
    );
};

export default Question;