import React, { useEffect, useState } from 'react';
import Card from '../../components/UI/Card/Card';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
// import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

function Reviews(props) {

  const [rData, setRData] = useState([]);

  const getReviewData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/comments");
    const Data = await response.json();
    console.log(Data);
    setRData(Data);

  }

  useEffect(() => {
    getReviewData();
  }, [])

  console.log(rData);
  return (
    <>
      <section id="testimonials" className="testimonials">
        <div className="container">
          <div className="section-title"><h2>Reviews</h2></div>

          <Swiper spaceBetween={10} navigation={true} modules={[Navigation]} className="mySwiper"
            breakpoints={{
              450: { slidesPerView: 1, },
              630: { slidesPerView: 2, },
              920: { slidesPerView: 3, },
              1520: { slidesPerView: 4, },
            }}
          >
            {
              rData.map((v, i) => {
                return (
                  <SwiperSlide>
                    <Link to={'/review-details/' + v.id}>
                      <Card
                        title={v.name.toString(15)}
                        subtitle={v.body.toString(0, 100)}
                      />
                    </Link>
                  </SwiperSlide>

                )

              })
            }
          </Swiper>
        </div>
      </section>
    </>
  );
}

export default Reviews;