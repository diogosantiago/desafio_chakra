import { Box, Flex, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation"

import SwiperCore, {
    Navigation
  } from 'swiper';
import Link from "next/link";

SwiperCore.use([Navigation]);



export default function ContinentSlider(){
    return (
        <Flex
            w={[375, 375, 1240, 1240]}
            h={[250, 250, 450, 450]}
        >
            <Swiper navigation={true} className="mySwiper">
                <SwiperSlide>
                    <Link
                        href="/europe"
                        passHref
                    >
                        <Flex
                            as="a"
                            h="100%"
                            bgImage="/images/continente_europa.svg"
                            justify="center"
                            alignItems="center"
                            flexDir="column"
                        >
                            <Text
                                fontWeight="bold"
                                fontSize={48}
                                color="heading_text"
                            >
                                Europa
                            </Text>
                            <Text
                                fontWeight="bold"
                                fontSize={24}
                                color="heading_text"
                            >
                                O continente mais antigo.
                            </Text>
                        </Flex>
                    </Link>
                    
                </SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
            </Swiper>
        </Flex>
    )
}