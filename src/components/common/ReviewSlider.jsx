import React, { useEffect, useState } from 'react'

import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import { Autoplay,FreeMode,Navigation, Pagination}  from 'swiper'
import ReactStars from "react-rating-stars-component"
import { apiConnector } from '../../services/apiconnector'
import { ratingsEndpoints } from '../../services/apis'
import { FaStar } from 'react-icons/fa'


const ReviewSlider = () => {

    const [reviews, setReviews] = useState([]);
    const truncateWords = 15;


    useEffect(() => {
        const fetchAllReviews = async() => {
            const {data} = await apiConnector("GET", ratingsEndpoints.REVIEWS_DETAILS_API)
            console.log("LOgging response in rating", data);

            if(data?.success) {
                setReviews(data?.data);
            }

            console.log("Printing Reviews", reviews);

        }
        fetchAllReviews();
    }, []);


  return (
    <div className='text-white w-full mb-20'>
        <div className='h-[150px] sm:hidden md:h-[180px] w-[100%] '>
            <Swiper
            slidesPerView={1}
            spaceBetween={24}
            loop={true}
            freeMode={true}
            autoplay={{
                delay: 2500,
            }}
            modules={[FreeMode, Pagination, Autoplay]}
            className='w-full '
            >

                {
                    reviews.map((review, index) => (
                        <SwiperSlide key={index} className='bg-richblack-800 px-2 py-2 rounded-md min-h-[190px] w-[300px]'>
                            <div className='flex gap-x-4 '>
                            <img
                            src={review?.user?.image
                             ? review?.user?.image
                              : `https://api.dicebear.com/5.x/initials/svg?seed=${review?.user?.firstName} ${review?.user?.lastName}`}
                              alt='Profile Pic'
                              className='h-9 w-9 object-cover rounded-full'
                            />
                            <div className='flex-col'>
                            <p className='text-lg text-richblack-25'>{review?.user?.firstName} {review?.user?.lastName}</p>
                            <p className='text-richblack-100'>{review?.course?.courseName}</p>
                            </div>
                            </div>
                            <p className='pt-2'>
                                {review?.review}
                            </p>
                            <div className='flex items-center gap-x-2 pt-2'>
                            <p>{review?.rating.toFixed(1)}</p>
                            <ReactStars 
                                count={5}
                                value={review.rating}
                                size={20}
                                edit={false}
                                activeColor="#ffd700"
                                emptyIcon={<FaStar />}
                                fullIcon={<FaStar />}
                            />
                            </div>
                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </div>

        <div className='h-[150px] md:hidden max-[640px]:hidden md:h-[180px] w-[100%] '>
            <Swiper
            slidesPerView={2}
            spaceBetween={24}
            loop={true}
            freeMode={true}
            autoplay={{
                delay: 2500,
            }}
            modules={[FreeMode, Pagination, Autoplay]}
            className='w-full '
            >

                {
                    reviews.map((review, index) => (
                        <SwiperSlide key={index} className='bg-richblack-800 px-2 py-2 rounded-md min-h-[190px] w-[300px]'>
                            <div className='flex gap-x-4 '>
                            <img
                            src={review?.user?.image
                             ? review?.user?.image
                              : `https://api.dicebear.com/5.x/initials/svg?seed=${review?.user?.firstName} ${review?.user?.lastName}`}
                              alt='Profile Pic'
                              className='h-9 w-9 object-cover rounded-full'
                            />
                            <div className='flex-col'>
                            <p className='text-lg text-richblack-25'>{review?.user?.firstName} {review?.user?.lastName}</p>
                            <p className='text-richblack-100'>{review?.course?.courseName}</p>
                            </div>
                            </div>
                            <p className='pt-2'>
                                {review?.review}
                            </p>
                            <div className='flex items-center gap-x-2 pt-2'>
                            <p>{review?.rating.toFixed(1)}</p>
                            <ReactStars 
                                count={5}
                                value={review.rating}
                                size={20}
                                edit={false}
                                activeColor="#ffd700"
                                emptyIcon={<FaStar />}
                                fullIcon={<FaStar />}
                            />
                            </div>
                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </div>

        <div className='h-[150px] flex lg:hidden max-[768px]:hidden md:h-[210px] w-[100%] '>
            <Swiper
            slidesPerView={3}
            spaceBetween={24}
            loop={true}
            freeMode={true}
            autoplay={{
                delay: 2500,
            }}
            modules={[FreeMode, Pagination, Autoplay]}
            className='w-full '
            >

                {
                    reviews.map((review, index) => (
                        <SwiperSlide key={index} className='bg-richblack-800 px-2 py-2 rounded-md min-h-[190px] w-[300px]'>
                            <div className='flex gap-x-4 '>
                            <img
                            src={review?.user?.image
                             ? review?.user?.image
                              : `https://api.dicebear.com/5.x/initials/svg?seed=${review?.user?.firstName} ${review?.user?.lastName}`}
                              alt='Profile Pic'
                              className='h-9 w-9 object-cover rounded-full'
                            />
                            <div className='flex-col'>
                            <p className='text-lg text-richblack-25'>{review?.user?.firstName} {review?.user?.lastName}</p>
                            <p className='text-richblack-100'>{review?.course?.courseName}</p>
                            </div>
                            </div>
                            <p className='pt-2'>
                                {review?.review}
                            </p>
                            <div className='flex items-center gap-x-2 pt-2'>
                            <p>{review?.rating.toFixed(1)}</p>
                            <ReactStars 
                                count={5}
                                value={review.rating}
                                size={20}
                                edit={false}
                                activeColor="#ffd700"
                                emptyIcon={<FaStar />}
                                fullIcon={<FaStar />}
                            />
                            </div>
                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </div>

        <div className=' hidden lg:flex max-[1024px]:hidden h-[240px] w-[100%] '>
            <Swiper
            slidesPerView={4}
            spaceBetween={24}
            loop={true}
            freeMode={true}
            autoplay={{
                delay: 2500,
            }}
            modules={[FreeMode, Pagination, Autoplay]}
            className='w-full '
            >

                {
                    reviews.map((review, index) => (
                        <SwiperSlide key={index} className='bg-richblack-800 px-2 py-2 rounded-md min-h-[190px] w-[300px]'>
                            <div className='flex gap-x-6 '>
                            <img
                            src={review?.user?.image
                             ? review?.user?.image
                              : `https://api.dicebear.com/5.x/initials/svg?seed=${review?.user?.firstName} ${review?.user?.lastName}`}
                              alt='Profile Pic'
                              className='h-9 w-9 object-cover rounded-full'
                            />
                            <div className='flex-col'>
                            <p className='text-lg text-richblack-25'>{review?.user?.firstName} {review?.user?.lastName}</p>
                            <p className='text-richblack-100'>{review?.course?.courseName}</p>
                            </div>
                            </div>
                            <p className='pt-2'>
                                {review?.review}
                            </p>
                            <div className='flex items-center gap-x-2 pt-2'>
                            <p>{review?.rating.toFixed(1)}</p>
                            <ReactStars 
                                count={5}
                                value={review.rating}
                                size={20}
                                edit={false}
                                activeColor="#ffd700"
                                emptyIcon={<FaStar />}
                                fullIcon={<FaStar />}
                            />
                            </div>
                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </div>
    </div>
  )
}

export default ReviewSlider
