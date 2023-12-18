import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/UI/Card/Card';
import { useDispatch, useSelector } from 'react-redux';
import {   loadingMedicines } from '../../redux/action/medicines.action';
import CircularProgress from '@mui/material/CircularProgress';
import { addShoppingCart } from '../../redux/action/shopping.action';
import { addToCart } from '../../redux/slice/cart.slice';
import { getMedicines } from '../../redux/slice/medicines.slice';

function Medicines({ incrementCount, fav,setFav }) {

    const [search, setSearch] = useState('');
    const [sort, setSort] = useState('');
    const [category, setCategory] = useState([]);
    const [selectCat, setSelectCat] = useState('');
    const [favorites, setFavorites] = useState([]);
    const [favoriteClickCount, setFavoriteClickCount] = useState(0);

    const dispatch = useDispatch();
    const medicines = useSelector(state => state.medicines,);
    console.log(medicines.medicines);
    const cart = useSelector(state => state.cart);
    console.log(cart);

    // const shoppingcart = useSelector(state => state.shoppingcart);
    // console.log("shoppingcart",shoppingcart);
    useEffect(() => {
        dispatch(getMedicines());
    }, [])

    const handleAddToCart = (id) => {
        console.log(id);
        dispatch(addToCart({id:id,qty:1} ))
        // dispatch(addShoppingCart(id))
    }
    const addToFavorites = (id) => {
        if (!favorites.includes(id)) {
            setFavorites([...favorites, id]);
            setFavoriteClickCount(favoriteClickCount + 1);

        }
    };

    
    
    const removeFromFavorites = (id) => {
        const newFavorites = favorites.filter(favId => favId !== id);
        setFavorites(newFavorites);
    };
    // const handleFav = (id) => {
    //     if (fav.includes(id)) {
    //         let fData = fav.filter((v) => v !== id);
    //         setFav(fData);
    //     } else {
    //         setFav((prev) => [...prev, id]);
    //     }
    // }

    // const handleFav = (id) => {
    //     console.log(id);
    //     if (fav.includes(id)) {
    //         let fData = fav.filter((v) => v !== id);
    //         setFav(fData);
    //     } else {
    //         setFav((prev) => [...prev, id]);

    //     }

    // }
    // console.log(fav);

    // let localData = JSON.parse(localStorage.getItem("medicines"));
    // console.log(localData);


    
    const handleSearchSort = () => {
        
        let fData = medicines.medicines.filter((v) =>
            (v.name.toLowerCase().includes(search.toLowerCase())) ||
            (v.price.toLowerCase().includes(search.toLowerCase())
            ));

        if (selectCat !== '') {
            fData = medicines.medicines.filter((d) => d.category === selectCat);
        }

        console.log(fData);

        fData = fData.sort((a, b) => {
            if (sort === 'lh') {
                return a.price - b.price;
            } else if (sort === 'hl') {
                return b.price - a.price;
            } else if (sort === 'az') {
                return a.title.localeCompare(b.title);
            } else if (sort === 'za') {
                return b.title.localeCompare(a.title);
            } else {
                return 0; // Handle other cases or return a default value
            }
        });
        

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
            <br></br>            <br></br>
            <br></br>
            <div className='row'>
                <div className='col-md-6'>
                    <input type='text' placeholder='Search here....' onChange={(event) => setSearch(event.target.value)} />
                </div>
                <div className='col-md-6'>
                    <select onChange={(event) => setSort(event.target.value)}>
                        <option value="0">---Select---</option>
                        <option value="lh">Price (Low to High)</option>
                        <option value="hl">Price (High to Low)</option>
                        <option value="az">Title (A-Z)</option>
                        <option value="za">Title (Z-A)</option>
                    </select>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-12'>
                    {
                        category.map((c) => {
                            return (
                                <button onClick={() => setSelectCat(c)}>{c}</button>
                            )
                        })
                    }
                </div>
            </div>
            <div className='row'>
                {medicines.isLoading ? (
                    <div className='col-md-12' style={{ alignItems: 'center' }}>
                        <CircularProgress />
                    </div>
                ) : medicines.error ? (
                    <div className='col-md-12' style={{ color: 'red', alignItems: 'center' }}>
                        {medicines.error}
                    </div>
                ) : (
                    medicines.medicines.map((v, i) => (
                        <div className='col-md-4' key={v.id}>
                            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                                {/* <Link to={'/medicines-details/' + v.id}> */}
                                <Card
                                    title={v.name}
                                    subtitle={v.price}
                                    btnValue='Add To Cart'
                                    btnClick={() => handleAddToCart(v.id)}
                                    favClick={() => {
                                        if (favorites.includes(v.id)) {
                                            removeFromFavorites(v.id);
                                        } else {
                                            addToFavorites(v.id);
                                        }
                                    }}
                                    favStatus={favorites.includes(v.id)}
                                    // favClick={() => handleFav(v.id)}
                                    // favStatus={(fav.includes(v.id)) ? true : false}
                                />
                                {/* </Link> */}
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>

    );
}

export default Medicines;