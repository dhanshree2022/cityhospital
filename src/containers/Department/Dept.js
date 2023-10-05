import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

function Dept(props) {
    const { id } = useParams();
    return (
        <div>
            <h1>Department  :{id}</h1>
        </div>
    );
}

export default Dept;