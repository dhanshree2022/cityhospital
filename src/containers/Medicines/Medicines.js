import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/UI/Card/Card';

function Medicines({ incrementCount, fav, setFav }) {

    const [search, setSearch] = useState('');
    const [sort, setSort] = useState('');
    const [category, setCategory] = useState([]);
    const [selectCat, setSelectCat] = useState('');

    // const [favoriteCount, setFavoriteCount] = useState(0);

    // const addToFavorites = (id) => {
    //     console.log(id, "add");
    //     if (!favorites.includes(id)) {

    //         setFavorites([...favorites, id]);
    //         // setFavorites(favorites.length + 1); // Update favoriteCount

    //         // setFavoriteCount(favorites.length + 1);

    //     }
    // };

    // const removeFromFavorites = (id) => {
    //     console.log(id, "remove");
    //     const updatedFavorites = favorites.filter((favoriteId) => favoriteId !== id);
    //     setFavorites(updatedFavorites);
    //     // setFavorites(favorites.length - 1); // Update favoriteCount

    //     // setFavoriteCount(favorites.length - 1);

    // };

    const handleAddToCart = () => {
        console.log("cghg");

        incrementCount((prev) => prev + 1);
    }

    const handleFav = (id) => {
        console.log(id);
        if (fav.includes(id)) {
            let fData = fav.filter((v) => v !== id);
            setFav(fData);
        } else {
            setFav((prev) => [...prev, id]);

        }

    }
    console.log(fav);

    let localData = JSON.parse(localStorage.getItem("medicines"));
    // console.log(localData);


    // const handleSearch = (val) => {
    //     setSearch(val)
    //     const medfilterData = localData.filter((v) =>
    //         (v.name.toLowerCase().includes(val.toLowerCase())) ||
    //         (v.desc.toLowerCase().includes(val.toLowerCase())) ||
    //         (v.price.toLowerCase().includes(val.toLowerCase()))

    //     )

    //     setFilterData(medfilterData);
    //     console.log(medfilterData);
    // }


    const handleSearchSort = () => {
        // console.log('ok', localData);

        let fData = localData.filter((v) =>
            (v.name.toLowerCase().includes(search.toLowerCase())) ||
            (v.price.toLowerCase().includes(search.toLowerCase())
            ));

        if (selectCat !== '') {
            fData = localData.filter((d) => d.category === selectCat);
        }

        // console.log(fData);

        fData = fData.sort((a, b) => {
            if (sort === 'lh') {
                return a.price - b.price
            } else if (sort === 'hl') {
                return b.price - a.price
            } else if (sort === 'az') {
                return a.title.localCompare(b.title)
            } else if (sort === 'za') {
                return b.title.localCompare(a.title)

            }
        })
        return fData
    }

    const finalData = handleSearchSort();

    const cardcontainer = {
        padding: '16px'
    };

    const card = {
        width: '300px',
        border: '1px solid #ccc',
        borderradius: '8px',
        boxshadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        margin: '20px',
        overflow: 'hidden',
        backgroundcolor: '#fff'
    }
    // const finalData = filterData.length > 0 ? filterData : localData;

    return (
        <div className='container'>
            <div className='row'>
                <input type='text' placeholder='Search here....' onChange={(event) => setSearch(event.target.value)} />

                <select onChange={(event) => setSort(event.target.value)}>
                    <option value="0">---Select---</option>
                    <option value="lh">Price (Low to High)</option>
                    <option value="hl">Price (High to Low)</option>
                    <option value="az">Title (A-Z)</option>
                    <option value="za">Title (Z-A)</option>

                </select>

                <div>
                    {
                        category.map((c) => {
                            return (
                                <button onClick={() => setSelectCat(c)}>{c}</button>
                            )
                        })
                    }
                </div>
            </div>


            {/* <div style={{ display: 'flex', flexWrap: 'wrap' }}> */}
            {
                finalData.map((v, i) => {
                    return (

                        <div className='col-md-4'>
                            <div >
                                {/* <Link to={'/medicines-details/' + v.id}> */}
                                <Card
                                    title={v.name}
                                    subtitle={v.price}
                                    btnValue='Add To Cart'
                                    btnClick={handleAddToCart}
                                    favClick={() => handleFav(v.id)}
                                    favStatus={(fav.includes(v.id)) ? true : false}

                                />
                            </div>
                            {/* </Link> */}

                        </div>


                    )
                })
            }


            {/* </div> */}


            {/* <div>
                <h2>Medicines Cart</h2>
                <ul>
                    {cartItems.map((item, index) => (
                        <li key={index}>
                            {item.name} - ${item.price} - Quantity: {item.quantity}
                            <button onClick={() => increaseQuantity(item)}>+</button>
                            <button onClick={() => decreaseQuantity(item)}>-</button>
                        </li>
                    ))}
                </ul>

            </div> */}
        </div>



    );
}

export default Medicines;