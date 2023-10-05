import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

function ReviewDetails(props) {
    const [rData, setRData] = useState([]);
    const { id } = useParams();
    const getReviewData = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/comments");
        const data = await response.json();

        const fData = rData.filter((v) => v.id == id);
        console.log(fData);
        // console.log(Data);
        setRData(fData[0]);

    }

    useEffect(() => {
        getReviewData();
    }, [])

    console.log(rData);


    return (
        <>
            <h1> Review Details page </h1>
            <h2>{rData.name}</h2>
            <h3>{rData.body}</h3>
        </>
    );
}

export default ReviewDetails;