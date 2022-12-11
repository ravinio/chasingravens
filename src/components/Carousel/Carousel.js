import React, { useContext } from 'react'
import CarouselSlide from './CarouselSlide'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Autoplay, Pagination } from 'swiper'
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import Loader from '../Loader/Loader'
import { Context } from '../../context/Context'

SwiperCore.use([Navigation])

const Carousel = () => {
    const {isCarouselLoading, carouselSlides} = useContext(Context)

    if (isCarouselLoading) {
        return <Loader />
    }

    //If there are no slides to display, then do not render the component
    if (!Array.isArray(carouselSlides) || !carouselSlides.length) {
        return null
    }

    return (
        <div className='carousel'>
            <Swiper 
                autoplay={{ delay: 7500, disableOnInteraction: false, }}  
                spaceBetween={30}     
                loop={true} 
                pagination={{
                    clickable: true
                  }}
                modules={[Autoplay, Pagination]}>

                {carouselSlides.map((item) => {
                    const {id, slideBg, slideTitle, slideDescription} = item
                    return (
                        <SwiperSlide key={id}>
                            <CarouselSlide slideTitle={slideTitle} slideDescription={slideDescription} slideBg={slideBg} />           
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}

export default Carousel
