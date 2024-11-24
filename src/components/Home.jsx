import React, { useState } from 'react';

const Home = () => {
    const [searchTerm, setSearchTerm] = useState('');

    // Static cards data (does not change)
    const cards = [
        {
            id: 1,
            place: 'Karwan Bazar',
            
            affectAreas: 'karwan bazar, shahabag, farmgate',
            date: "24/11/2024",
            time: '8 PM - 10 PM',
            alternativeRoute: 'Green Road, Khamar Bari, Bangla Motor',
        },
        {
            id: 2,
            place: 'Mohakhali',
            affectAreas: 'Banani, Gulshan, Tejgaon',
            date: "24/11/2024",
            time: '12 PM - 7 PM',
            alternativeRoute: 'Mohakhali Flyover, Hatirjheel',
        }
       
    ];

    // Derived filtered data (based on search term)
    const filteredCards = cards.filter((card) =>
        card.affectAreas.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <div className="bg-gray-800 py-12 flex flex-col items-center text-white font-bold md:text-5xl text-2xl">
                Andolon kothay?
            </div>

            <div className="p-4">
                <input
                    type="text"
                    placeholder="Search by Affected Areas"
                    className="border p-2 rounded w-full mb-6"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
                    {filteredCards.map((card) => (
                        <div
                            key={card.id}
                            className="border p-4 rounded-lg  text-gray-800 bg-red-500 shadow-md hover:scale-105 transition-transform duration-300"
                        >
                            <h3 className="text-xl font-bold">{card.place}</h3>
                            <p>
                                <strong>Affect Areas:</strong> {card.affectAreas}
                            </p>
                                                        <p>
                                <strong>Date:</strong> {card.date}
                            </p>
                            <p>
                                <strong>Time:</strong> {card.time}
                            </p>
                            <p>
                                <strong>Alternative Route:</strong> {card.alternativeRoute}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Home;
