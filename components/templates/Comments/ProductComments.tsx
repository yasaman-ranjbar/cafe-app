import SectionHeader from "@/components/modules/SectionHeader/SectionHeader";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import TestimonialCard from "@/components/modules/Testimonial/TestimonialCard";
import { COMMENTS } from "@/data/db";

const ProductComments = () => {
    return (
        <div className="container py-20">
            <SectionHeader header="Product Comments" title="TESTIMONIAL" />

            <Swiper
                loop
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            >
                {COMMENTS?.map((item) => (
                    <SwiperSlide key={item.id}>
                        <TestimonialCard description={item.desc} username={item.username} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ProductComments;
