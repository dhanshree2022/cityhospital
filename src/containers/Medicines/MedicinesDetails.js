import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';

function MedicinesDetails(props) {
    const [data, setData] = useState([]);
    const { id } = useParams();
    let localData = JSON.parse(localStorage.getItem("medicines"));
    const getMedicens = async () =>{
        const fData = localData.filter((v,i)=>v.id == id)
        console.log(fData);

        setData(fData[0]);
    }

    useEffect(()=>{
        getMedicens();
    },[])


    
    return (
        <div className='card ' style={{ width: '50%', height:'300px', margin: '20px 20px 20px 20px ', border: '2px solid black', padding:'10px 10px 10px 10px',textAlign:'center' }}>
            <h2>{data.id}</h2>
            <p>Name:{data.name}</p>
            <p>Description:{data.desc}</p>
            <p>Price:{data.price}</p>
            <p>Expiry:{data.expiry}</p>


        </div>
    );
}

export default MedicinesDetails;