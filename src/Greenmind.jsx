import React, { useState, useRef } from 'react';
import Slider from "react-slick";


const Greenmind = () => {


    const [currentSlide, setCurrentSlide] = useState(0);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(0);
    const sliderRef = useRef(0);


    const bestselling = [
        {
            image: '/assets/Frame_1.png',
            name: 'Natural Plants',
            price: '₱ 1,400.00'
        },
        {
            image: '/assets/Frame_2.png',
            name: 'Artificial Plants',
            price: '₱ 900.00'
        },
        {
            image: '/assets/Frame_3.png',
            name: 'Artificial Plants',
            price: '₱ 3,500.00'
        },
    ]

    const aboutus = [
        {
            image: '/assets/about_icons1.svg',
            name: 'Large Assortment',
            description: 'we offer many different types of products with fewer variations in each category.',
        },
        {
            image: '/assets/about_icons2.svg',
            name: 'Fast & Free Shipping',
            description: '4-day or less delivery time, free shipping and an expedited delivery option.',
        },
        {
            image: '/assets/about_icons3.svg',
            name: '24/7 Support',
            description: 'answers to any business related inquiry 24/7 and in real-time.',
        },
    ]


    const testimonials = [
        {
            name: "John Doe",
            role: "Youtuber",
            rating: 4.5,
            image: "/assets/slider_2.png",
            text: "Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
        },
        {
            name: "John Doe",
            role: "Youtuber",
            rating: 4.5,
            image: "/assets/slider_1.png",
            text: "Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
        }, {
            name: "John Doe",
            role: "Youtuber",
            rating: 4.5,
            image: "/assets/slider_2.png",
            text: "Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
        },

    ];

    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1.5,
        slidesToScroll: 1,
        beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 1.5,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    return (
        <>
            {/* header section start */}
            <header className=" w-full bg-white sticky top-0 z-50">
                <div className="container mx-auto">
                    <div className="flex justify-between items-center py-5 md:py-6 relative z-40 ">
                        <div className="flex">
                            <div className="pr-24">
                                <a href="">
                                    <img src="/assets/logo.svg" alt="Logo" className="max-w-36 h-10 " />
                                </a>
                            </div>
                            <ul className="hidden lg:flex items-center gap-12 text-lg">
                                <li className="hover:text-primary font-medium cursor-pointer"><a href="">Home</a></li>
                                <li className="hover:text-primary font-medium cursor-pointer"><a href="">Products</a></li>
                                <li className="hover:text-primary font-medium cursor-pointer"><a href="">Contacts</a></li>
                            </ul>
                        </div>

                        <div className="hidden lg:flex justify-center items-center gap-12">
                            <a href="">
                                <img className='cursor-pointer' src="/assets/shop_icon.svg" alt="shop" />
                            </a>
                            <a href="">
                                <img className='cursor-pointer' src="/assets/proflie_icon.svg" alt="profile" />
                            </a>
                            <div className='w-6 border border-primary rotate-90   '>
                            </div>
                            <a href="">
                                <img className='cursor-pointer' src="/assets/menu.svg" alt="menu" />
                            </a>
                        </div>


                        <div className="lg:hidden">
                            <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
                                <img src="/assets/menu.svg" alt="Mobile Menu" className="w-5" />
                            </button>
                        </div>
                    </div>
                </div>




            </header>
            <div
                className={`
                    fixed top-[70px] left-0 w-full bg-white lg:hidden flex flex-col px-4 py-5 gap-4 text-lg
                    transform transition-transform duration-300 ease-in-out z-30
                    ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}
                    `}
            >
                {/* <button
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex justify-between mb-4"
                    >
                        <img src="/assets/logo.svg" alt="Logo" className="max-w-36 h-10" />
                        <img src="/assets/menu.svg" alt="Close" className="w-5" />
                    </button> */}

                <ul className="flex flex-col gap-6">
                    <li className="hover:text-primary font-medium cursor-pointer"><a href="">Home</a></li>
                    <li className="hover:text-primary font-medium cursor-pointer"><a href="">Products</a></li>
                    <li className="hover:text-primary font-medium cursor-pointer"><a href="">Contacts</a></li>
                </ul>
            </div>
            {/* header section end  */}


            {/* banner section start */}
            <section className='container'>
                <div className='flex w-full items-center lg:items-end flex-col lg:flex-row bg-secondary rounded-2xl md:rounded-3xl justify-around overflow-hidden '>
                    <div className='flex flex-col '>

                        <div className='max-w-[540px] pt-6 md:pt-12 pb-32 md:pb-24 lg:pb-32 lg:px-0 px-4'>

                            <div className='pb-6'>
                                <p className='xl:text-64 lg:text-4xl text-4xl font-extrabold text-primary pr-5'>Buy your  dream plants</p>
                            </div>
                            <div className='flex'>
                                <div className=' pr-12 border-r border-primary'>

                                    <span className='text-primary text-22 md:text-32 font-medium'>50+</span><br />
                                    <span className='text-primary  md:text-lg font-medium '>Plant Species</span>
                                </div>
                                <div className=' pl-12 '>

                                    <span className='text-primary text-22 md:text-32 font-medium'>100+</span><br />
                                    <span className='text-primary md:text-lg font-medium '>Customers</span>
                                </div>
                            </div>

                            <div class="relative w-full mt-6 md:mt-12 max-w-md cursor-pointer">
                                <input
                                    type="text"
                                    placeholder="What are you looking for?"
                                    class="w-full rounded-xl border border-gray-300 bg-white py-3  md:py-4 lg:py-5 pr-12 pl-4  md:placeholder:text-lg placeholder:text-sm   focus:outline-none transition"
                                />
                                <div
                                    class="absolute top-1/2 right-2 -translate-y-1/2 rounded-lg bg-secondary p-2 md:p-3 lg:p-14px   focus:outline-none "
                                >
                                    <img src="/assets/search.svg" alt="" className='w-4 md:w-full' />
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='relative lg:px-0 pt-0 lg:pt-14 xl:pt-0 px-4'>

                        <div className='bottom-0 right-0 absolute max-w-[411px]'>
                            <img src="/assets/banner_img.png" alt="" />
                        </div>
                        <div className=''>
                            <img className='' src="/assets/banner_bg.svg" alt="" />
                        </div>

                        <div className='absolute bottom-24 -left-48 hidden xl:block'>
                            <img className='w-28  md:w-44' src="/assets/arrow_down.svg" alt="" />
                        </div>
                        <div className='absolute -top-20 -right-16 rotate-6 hidden xl:block'>
                            <img src="/assets/arrow_up.svg" alt="" />
                        </div>
                    </div>

                </div>
            </section>
            {/* banner section end  */}


            {/* Best Selling section start */}
            <section className="container pt-16 pb-12 md:pt-24 md:pb-20 lg:pt-28 lg:pb-28">
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-0">


                    <div className="w-full lg:max-w-64 text-center lg:text-left space-y-4">
                        <h2 className="text-2xl lg:text-3xl xl:text-32 font-bold text-primary">
                            Best Selling <br className="hidden lg:block" /> Plants
                        </h2>
                        <p className="text-base lg:text-lg font-medium">
                            Easiest way to <br className="hidden lg:block" /> healthy life by buying <br className="hidden lg:block" /> your favorite plants
                        </p>
                        <div className="flex justify-center lg:justify-start">
                            <button
                                className="flex items-center gap-2 rounded-lg text-primary bg-secondary border hover:border-black hover:bg-white px-6 py-2 md:px-6 md:py-3 text-base lg:text-lg font-medium transition"
                            >
                                See more
                                <img src="/assets/show_more_icon.svg" alt="Show more" />
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-10 mx-auto xl:mx-0
                    ">
                        {bestselling.map((item, index) => (
                            <div className={`text-center md:text-start font-medium max-w-xs mx-auto 
                            ${index === 2 ? 'md:col-span-2 md:mx-auto lg:col-span-1 lg:mx-0 lg:max-w-full md:max-w-80 ' : ''}
                                        `}>
                                <img src={item.image} alt={item.name} className="w-full object-cover hover:scale-105 transition duration-500" />
                                <div className="pt-3">
                                    <span className="text-lg text-primary">{item.name}</span>
                                </div>
                                <div className="pt-2">
                                    <span className="text-lg">{item.price}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Best Selling section end  */}



            {/* About us section start  */}
            <section className="pb-16 md:pb-24 lg:pb-40 container">
                <div className="w-full">
                    <div className="text-center pb-3">
                        <span className="lg:text-32 text-2xl font-bold text-primary">About us</span>
                    </div>
                    <div className="md:w-full mx-auto text-center max-w-64 md:max-w-full">
                        <span className="md:text-lg font-medium">Order now and appreciate the beauty of nature</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {aboutus.map((item, index) => (
                            <div

                                className={`
                                        pt-6 md:pt-12 flex flex-col items-center 
                                        ${index === 2 ? 'md:col-span-2 md:mx-auto lg:col-span-1 lg:mx-0 lg:max-w-full md:max-w-80 ' : ''}
                                        `}
                            >
                                <div className="bg-secondary rounded-full mb-6 xl:p-7 p-5">
                                    <img className="max-w-8 lg:max-w-9 xl:max-w-full" src={item.image} alt="" />
                                </div>
                                <div className="pb-3">
                                    <span className="lg:text-lg font-bold text-primary">{item.name}</span>
                                </div>
                                <div className="text-center max-w-60 md:max-w-full">
                                    <span className="xl:text-lg md:text-base text-sm font-medium">
                                        {item.description}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About us section end  */}


            {/* Categories section start  */}
            <section className=''>

                <div className='pb-6 md:pb-12'>
                    <div className='text-center pb-3'>
                        <span className='lg:text-32 text-2xl font-bold text-primary'>Categories</span>
                    </div>
                    <div className='md:w-full mx-auto text-center '>
                        <span className=' md:text-lg font-medium '>Find what you are looking for</span>
                    </div>
                </div>

                <div className='w-full bg-secondary relative pt-8 md:pt-0 md:after:absolute after:content-[" "] after:left-0 after:top-0 after:h-[48px] after:w-full after:bg-white after:z-10'>
                    <div className='relative z-20'>


                        <div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6 md:gap-12 xl:gap-24'>
                            <div className=' flex flex-col  items-center order-1'>
                                <div className='w-60 md:w-full'> 
                                    <img className=' hover:scale-95 transition duration-500' src="/assets/Categories_1.png" alt="" />
                                </div>
                                <div className='pt-3 text-center'>
                                    <span className='text-lg font-bold text-primary'>Natural Plants</span>
                                </div>
                            </div>
                            <div className='lg:pt-24 lg:pb-24 flex flex-col md:col-span-2 lg:col-span-1  justify-center items-center order-3  lg:order-2'>
                                <div className='w-60 md:w-full lg:block flex justify-center'>
                                    <img className='hover:scale-95 transition duration-500' src="/assets/Categories_2.png" alt="" />
                                </div>
                                <div className='pt-3 text-center'>
                                    <span className='text-lg font-bold text-primary'>Plant Accessories</span>
                                </div>
                                <div className='text-center pt-3'>
                                    <span className=' lg:text-lg font-medium '>
                                        Horem ipsum dolor sit amet,<br /> consectetur adipiscing elit.
                                    </span>
                                </div>
                                <div className='flex items-center justify-center order-2 lg:order-3'>

                                    <button
                                        class="flex items-center justify-center gap-2 rounded-lg text-primary bg-white border border-secondary hover:border-primary hover:bg-secondary px-6 py-2 md:px-6 md:py-3 md:text-lg font-medium focus:outline-none transition duration-300 mt-6 mb-6"
                                    >
                                        Explore
                                        <img className='' src="/assets/show_more_icon.svg" alt="" />
                                    </button>
                                </div>
                            </div>

                            <div className='flex flex-col order-2 lg:order-3  items-center  '>
                                <div className='w-60 md:w-full'>
                                    <img className='hover:scale-95 transition duration-500' src="/assets/Categories_3.png" alt="" />
                                </div>
                                <div className='pt-3 text-center'>
                                    <span className='text-lg font-bold text-primary'>Artificial Plants</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Categories section end  */}


            {/* Customers review section start  */}
            <section className='pt-12 md:pt-24 pb-12 lg:pb-24 xl:pb-[230px]'>

                <div className='container pb-12 flex justify-between'>
                    <div >
                        <span className='md:text-32 text-xl font-bold text-primary' >What customers say about <br className='hidden md:block' />GREEMIND?</span>
                    </div>
                    <div className='flex gap-1.5'>

                        {
                            [...Array(testimonials.length)].map((item, index) => (

                                <button
                                    onClick={() => sliderRef.current.slickGoTo(index)}
                                    className={`h-1.5 rounded-xl transition-all duration-300 
                                    ${currentSlide === index ? 'w-12 bg-secondary' : 'w-3 bg-dot_bg'}`}
                                ></button>
                            ))
                        }

                    </div>
                </div>

                <div className="overflow-hidden w-full ">
                    <div className='xl:pl-12'>
                        <Slider ref={sliderRef} {...settings}>
                            {testimonials.map((item, index) => (
                                <div className=" px-3 lg:px-4 xl:pl-6 ">
                                    <div className=" bg-secondary rounded-xl">
                                        <div className='pt-3 px-3 sm:pt-12 sm:px-12 lg:px-9 xl:px-12 md:text-start text-center'>
                                            <span className='text-sm md:text-base  xl:text-lg font-medium text-primary'>{item.text}</span>
                                        </div>
                                        <div className="flex flex-col-reverse md:flex-row">
                                            <div className=" flex justify-center ">
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="max-w-[150px] h-[200px]"
                                                />
                                            </div>
                                            <div className="flex flex-col md:flex-row text-center items-center w-full justify-between text-black text-lg font-semibold">
                                                <div className='pt-3 sm:pt-0'>
                                                    <p className="font-bold text-lg text-primary">{item.name}</p>
                                                    <p className="text-xs font-medium ">{item.role}</p>
                                                </div>
                                                <div className='flex pr-4 md:pr-12 '>
                                                    <img className='pr-3 pl-3 ' src="/assets/star.svg " alt="" />
                                                    {item.rating}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            ))}
                        </Slider>
                    </div>
                </div>
            </section>
            {/* Customers review section end  */}


            {/* footer section start  */}
            <footer className="w-full bg-secondary">
                <div className="container mx-auto px-4 pt-12">
                    <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-0">


                        <div className="flex flex-col items-center md:items-start gap-6 md:gap-8 xl:pb-24 md:pb-6">
                            <img className="max-w-[107px]" src="/assets/logo.svg" alt="Logo" />
                            <span className="text-base md:text-lg font-medium">
                                We help you find <br className='hidden md:block' /> your dream plant
                            </span>
                            <div className="flex items-center gap-3 md:gap-4">


                                {
                                    ["/assets/facebook.svg", "/assets/instagram.svg", "/assets/twitter.svg"].map((item, index) => (

                                        <div className="border border-primary rounded-full p-2 md:p-3 hover:-translate-y-1 transition transform hover:bg-white cursor-pointer duration-300">
                                            <img src={`${item}`} alt="Facebook" className="w-4 h-4 md:w-5 md:h-5 " />
                                        </div>
                                    ))
                                }

                            </div>
                        </div>


                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
                            <div className="flex flex-col gap-2 md:gap-4">
                                <span className="text-base md:text-lg font-bold text-primary">Information</span>
                                {
                                    ['About', 'Product', 'blog'].map((item, index) => (

                                        <a href='#' className="hover:text-primary hover:translate-x-1 transition transform  cursor-pointer md:text-base text-sm lg:text-lg duration-300">{item}</a>
                                    ))
                                }

                            </div>
                            <div className="flex flex-col gap-2 md:gap-4">
                                <span className="text-lg md:text-lg font-bold text-primary">Company</span>
                                {
                                    ['Community', 'Career', 'Our story'].map((item, index) => (

                                        <a href='#' className="hover:text-primary hover:translate-x-1 transition transform  cursor-pointer md:text-base text-sm lg:text-lg duration-300">{item}</a>
                                    ))
                                }

                            </div>
                            <div className="flex flex-col gap-2 md:gap-4">
                                <span className="text-lg md:text-lg font-bold text-primary">Contact</span>
                                {
                                    ['Getting Started', 'Pricing', 'Resources'].map((item, index) => (

                                        <a href='#' className="hover:text-primary hover:translate-x-1 transition transform  cursor-pointer md:text-base text-sm lg:text-lg duration-300">{item}</a>
                                    ))
                                }

                            </div>
                        </div>

                    </div>


                    <div className="pt-8 pb-8 text-center md:text-left">
                        <span className="md:text-base text-xs lg:text-lg font-medium">
                            2023 all Right Reserved Term of use GREENMIND
                        </span>
                    </div>
                </div>
            </footer>

            {/* footer section end  */}


        </>
    );
};

export default Greenmind;
