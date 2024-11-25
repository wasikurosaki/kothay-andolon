import React, { useState } from 'react';

const Home = () => {
    const [searchTerm, setSearchTerm] = useState('');

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
            date: " 24/11/2024",
            time: '12 PM - 7 PM',
            alternativeRoute: 'Mohakhali Flyover, Hatirjheel',
        },
            {
            id: 3,
            place: 'Agargaon',
            affectAreas: 'Shamoli, shewrapara',
            date: "25/11/2024",
            time: '11:20 AM',
            alternativeRoute: 'Bijoy Sharani, Kazipara',
        },
       
    ];

    const filteredCards = cards.filter((card) =>
        card.place.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <div className="bg-gray-800 py-12 flex flex-col items-center text-white font-bold md:text-5xl text-xl ">
                Andolon kothay?
            </div>

            <div className="p-4">
                <input
                    type="text"
                    placeholder="Search by location"
                    className="border p-2 rounded w-full mb-6"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {filteredCards.reverse().map((card) => (
                        <div
                            key={card.id}
                            className="flex flex-col gap-2 border p-4 rounded-lg text-gray-800 bg-red-500 shadow-md hover:scale-105 hover:shadow-lg hover:bg-red-600 transition-all duration-300"
                        >
                            <h3 className="text-xl font-bold">{card.place}</h3>
                            <p>
                                <strong>Affected Areas:</strong> {card.affectAreas}
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

<div className="my-8 p-8 rounded-md">
    <h2 className="text-center text-xl font-bold mb-4">Map</h2>
    <div className="w-full h-[500px] rounded-xl">
        <iframe
            title="Dhaka City Traffic"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.0284706348556!2d90.36710731445522!3d23.810331292090987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7bf63d32c03%3A0xe0a33b8eab9f35c7!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1697058881377!5m2!1sen!2sus&layer=traffic"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
    </div>
</div>

            <div className="bg-gray-800 py-12 flex flex-col items-center text-white font-bold text-5xl">

            </div>
        </>
    );
};

export default Home;
