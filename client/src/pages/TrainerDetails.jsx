
import React, { useEffect } from 'react';
import { trainerImg1, trainerImg2, trainerImg3, trainerImg4 } from '../images';
import { useParams, Link } from 'react-router-dom';

const TrainerDetails = () => {
    const { trainerId } = useParams();

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);

    return (
        <section className='py-20 bg-gray-800'>
            <h2 className='text-center text-4xl text-white font-bold mb-8 animate-fade-in'>Trainer Detail</h2>
            <div className="container mx-auto px-6 py-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="flex justify-center items-center">
                        {trainerId === "1" && (
                            <img src={trainerImg1} alt="Trainer John" className='w-full max-w-[80%] rounded-lg shadow-lg transition-transform transform hover:scale-105' />
                        )}
                        {trainerId === "2" && (
                            <img src={trainerImg2} alt="Trainer Alish" className='w-full max-w-[80%] rounded-lg shadow-lg transition-transform transform hover:scale-105' />
                        )}
                        {trainerId === "3" && (
                            <img src={trainerImg3} alt="Trainer Rey" className='w-full max-w-[80%] rounded-lg shadow-lg transition-transform transform hover:scale-105' />
                        )}
                        {trainerId === "4" && (
                            <img src={trainerImg4} alt="Trainer Akon" className='w-full max-w-[80%] rounded-lg shadow-lg transition-transform transform hover:scale-105' />
                        )}
                    </div>
                    <div className='flex flex-col gap-4 p-6 bg-white rounded-lg shadow-lg'>
                        {trainerId === "1" && (
                            <>
                                <p className='text-2xl text-gray-800 font-semibold'>Name: Prince</p>
                                <p className='text-lg text-gray-600'>Age: 27</p>
                                <p className='text-lg text-gray-600'>Address: Nairobi, Kenya</p>
                                <p className='text-lg text-gray-600'>Phone: 0758507927</p>
                                <p className='text-lg text-gray-600'>Description: Very experienced coach.</p>
                            </>
                        )}
                        {trainerId === "2" && (
                            <>
                                <p className='text-2xl text-gray-800 font-semibold'>Name: Lencer</p>
                                <p className='text-lg text-gray-600'>Age: 40</p>
                                <p className='text-lg text-gray-600'>Address: Kisumu, Kenya</p>
                                <p className='text-lg text-gray-600'>Phone: 07456789</p>
                                <p className='text-lg text-gray-600'>Description: New technique coach.</p>
                            </>
                        )}
                        {trainerId === "3" && (
                            <>
                                <p className='text-2xl text-gray-800 font-semibold'>Name: Vincent</p>
                                <p className='text-lg text-gray-600'>Age: 33</p>
                                <p className='text-lg text-gray-600'>Address: Kiambu, Kenya</p>
                                <p className='text-lg text-gray-600'>Phone: 0778905643</p>
                                <p className='text-lg text-gray-600'>Description: Very strict coach.</p>
                            </>
                        )}
                        {trainerId === "4" && (
                            <>
                                <p className='text-2xl text-gray-800 font-semibold'>Name: Brighton</p>
                                <p className='text-lg text-gray-600'>Age: 24</p>
                                <p className='text-lg text-gray-600'>Address: Nairobi, Kenya</p>
                                <p className='text-lg text-gray-600'>Phone: 75758797759</p>
                                <p className='text-lg text-gray-600'>Description: Focus and discipline.</p>
                            </>
                        )}
                    </div>
                </div>
            </div>
            <Link to="/" className='text-white text-lg mx-auto flex justify-center items-center text-center bg-blue-500 hover:bg-blue-600 transition-colors duration-300 max-w-[150px] w-full px-4 py-2 rounded-md'>
                Go Back
            </Link>
        </section>
    );
};

export default TrainerDetails;
