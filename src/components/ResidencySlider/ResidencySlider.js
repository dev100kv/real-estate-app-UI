// import React from 'react'
// import {Swiper, SwiperSlide, useSwiper} from 'swiper/react'
// // import 'swiper/css'
// import data from '../../data'
// // import './Residencies.css'
// import { sliderSettings } from '../../utils/common'

// const ResidenciesSlider = () => {
//   return (
//     <div className="r-wrapper">
//         <div className="r-container paddings innerWidth">
//             <div className="r-head flexColStart">
//                 <span className="orangeText">Best Choices</span>
//                 <span className="primaryText">Popular Residencies</span>
//             </div>

//             <Swiper {...sliderSettings}>
//                 <SliderButtons/>
//                 {data.map((card, i)=>(
//                     <SwiperSlide key={i}>
//                         <div className="r-card flexColStart">
//                             <img src={card.image} alt="Home" />

//                             <span className="r-price secondaryText">
//                                 <span style={{color:"orange"}}>$</span>
//                                 <span>{card.price}</span>
//                             </span>

//                             <span className="primaryText">{card.name}</span>
//                             <span className="SecondaryText">{card.detail}</span>
//                         </div>
//                     </SwiperSlide>
//                 ))}
//             </Swiper>
//         </div>
//     </div>
//   )
// }

// export default ResidenciesSlider

// const SliderButtons = () => {
//     const swiper = useSwiper();
//     return(
//         <div className="r-button flexCenter">
//             <button onClick={()=> swiper.slidePrev()}>&lt;</button>
//             <button onClick={()=> swiper.slideNext()}>&gt;</button>
//         </div>
//     )
// }