import React, { useState, useRef, useEffect } from "react";
import {
    motion,
    useTransform,
    AnimatePresence,
    useMotionValue,
    useSpring,
} from "motion/react";
import { FaArrowAltCircleRight } from 'react-icons/fa'
import f1 from '../../assets/food.jpg'
import f2 from '../../assets/food_1.jpg'
import f3 from '../../assets/food_2.jpg'
import f4 from '../../assets/food_3.webp'
import f5 from '../../assets/food_4.jpg'
import f6 from '../../assets/food_5.jpg'

export const AnimatedTooltip = ({
    items
}) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const springConfig = { stiffness: 100, damping: 15 };
    const x = useMotionValue(0);
    const animationFrameRef = useRef(null);

    const rotate = useSpring(useTransform(x, [-100, 100], [-45, 45]), springConfig);
    const translateX = useSpring(useTransform(x, [-100, 100], [-50, 50]), springConfig);

    const handleMouseMove = (event) => {
        if (animationFrameRef.current) {
            cancelAnimationFrame(animationFrameRef.current);
        }

        animationFrameRef.current = requestAnimationFrame(() => {
            const halfWidth = event.target.offsetWidth / 2;
            x.set(event.nativeEvent.offsetX - halfWidth);
        });
    };

    return (
        <>
            {items.map((item, idx) => (
                <div
                    className="group relative -mr-4"
                    key={item.name}
                    onMouseEnter={() => setHoveredIndex(item.id)}
                    onMouseLeave={() => setHoveredIndex(null)}>
                    <AnimatePresence>
                        {hoveredIndex === item.id && (
                            <motion.div
                                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    scale: 1,
                                    transition: {
                                        type: "spring",
                                        stiffness: 260,
                                        damping: 10,
                                    },
                                }}
                                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                                style={{
                                    translateX: translateX,
                                    rotate: rotate,
                                    whiteSpace: "nowrap",
                                }}
                                className="absolute -top-16 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center justify-center rounded-md bg-black px-4 py-2 text-xs shadow-xl">
                                <div
                                    className="absolute inset-x-10 -bottom-px z-30 h-px w-[20%] bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
                                <div
                                    className="absolute -bottom-px left-10 z-30 h-px w-[40%] bg-gradient-to-r from-transparent via-sky-500 to-transparent" />
                                <div className="relative z-30 text-base font-bold text-white">
                                    {item.name}
                                </div>
                                <div className="text-xs text-white">{item.designation}</div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                    <img
                        onMouseMove={handleMouseMove}
                        height={100}
                        width={100}
                        src={item.image}
                        alt={item.name}
                        className="relative !m-0 h-7 w-7 ms:h-8 sm:w-8 md:h-10 md:w-10 rounded-full border-2 border-white object-cover object-top !p-0 transition duration-500 group-hover:z-30 group-hover:scale-105" />
                </div>
            ))}
        </>
    );
};


export function AnimatedTooltipPreview() {

    const dishes = ["Chicken Biryani", "Dalcha", "Shahi Paneer", "Daal khichdi"];
    const [currentDishIndex, setCurrentDishIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDishIndex((prevIndex) => (prevIndex + 1) % dishes.length);
        }, 2000); // change every 2 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col gap-2 mx-2 sm:mx-5 md:mx-10 sm:flex-row items-center justify-evenly" >
            <div className="flex flex-row items-center mb-5 sm:my-5 ">
                <span className="flex items-center  bg-orange-300 px-2 rounded-full py-2 ">
                    <AnimatedTooltip items={people} />
                    <p className="text-xs px-10">100k + active users</p>
                </span>
            </div>
            <div className="flex gap-3 md:gap-5 items-center">
                <h1 className="font-semibold text-sm md:text-lg">Famous Dishes</h1>
                <FaArrowAltCircleRight className="text-orange-500 md:text-3xl xl:text-4xl" />
                <div className="bg-orange-200 text-orange-600 rounded-4xl font-bold flex items-center justify-center p-3 md:p-2 w-37 sm:w-50 md:w-50">
                   <p className="text-sm sm:text-lg md:text-xl "> {dishes[currentDishIndex]}</p>
                </div>
            </div>
        </div>
    );
}

const people = [
    {
        id: 1,
        name: "John Doe",
        designation: "Software Engineer",
        image:f1,
    },
    {
        id: 2,
        name: "Robert Johnson",
        designation: "Product Manager",
        image:f2,
    },
    {
        id: 3,
        name: "Jane Smith",
        designation: "Data Scientist",
        image:f3,
    },
    {
        id: 4,
        name: "Emily Davis",
        designation: "UX Designer",
        image:f4,
    },
    {
        id: 5,
        name: "Tyler Durden",
        designation: "Soap Developer",
        image:f5
    },
    {
        id: 6,
        name: "Dora",
        designation: "The Explorer",
        image:f6,
    },
];


