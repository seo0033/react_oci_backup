import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";
import 'swiper/css';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SlideItm = styled.div`
    .tit {
        font-size: 80px;
        font-weight: 800;
        margin: 0 0 30px 0;
        text-shadow:1px 0 3px rgba(255,255,255,0.25); 
        background: linear-gradient(to right top, #0a96ba, #032777, #333333);
        color: transparent;
        -webkit-background-clip: text;}
    }
    .con {
        font-size: 20px;
        font-weight: 300;
        margin: 0 0 20px 0;
        color: tomato;
    }
    .des {
        font-size: 15px;
        word-break: keep-all;
        line-height: 1.45;
    }
`

const Dots = styled.ul`
    display: flex;
    gap: 10px;
    position: absolute;
    top: 100px;
    left: 50%;
    margin: 0 0 0 -585px;
    li {
        width: 20px;
        height: 20px;
        background: #ddd;

        &.on {
            background: tomato;
        }
    }
`
const SlideNum = styled.div`
    position: absolute;
    bottom: 150px;
    left: 50%;
    margin: 0 0 0 -585px;
    font-size: 30px;
    font-weight: 700;
    span {
        font-size: 15px;
    }
`

const MainVisual = ({ word }) => {
    const [idxn, setIdxn] = useState();
    const MS = useRef(null);

    return (
        <section className='MainVisual'>
            <Swiper className='MainSlide'
                direction={"vertical"}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                onSlideChange={it => setIdxn(it.realIndex)}
                ref={MS}
            >
                {
                    word.map((sl, idx) => {
                        return (
                            <SwiperSlide key={idx} className="slideitm">
                                <SlideItm>
                                    <div className='tit'>{sl.tit}</div>
                                    <div className='con'>{sl.con}</div>
                                    <div className='des'>{sl.des}</div>
                                </SlideItm>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
            <div className='slider__etc'>
                <Dots className="dots">
                    {
                        word.map((dot, idx) => {
                            return (
                                <li className={idxn === idx ? 'on' : ''} onClick={() => { MS.current.swiper.slideTo(idx + 1) }} key={idx}></li>
                            )
                        })
                    }
                </Dots>
                <SlideNum>
                    0{idxn + 1} / <span>0{word.length}</span>
                </SlideNum>
            </div>

        </section>
    )
}

export default MainVisual