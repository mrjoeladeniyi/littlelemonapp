const Specials = () => {
    const specialsData = [
        {
            id: 1,
            name: "Greek Salad",
            price: 12.99,
            description: "Fresh Mediterranean salad with tomatoes, cucumbers, olives, and feta cheese.",
            image: "/greek_salad.jpg"
        },
        {
            id: 2,
            name: "Bruschetta",
            price: 9.99,
            description: "Grilled bread rubbed with garlic and topped with diced tomatoes and herbs.",
            image: "/bruschetta.png"
        },
        {
            id: 3,
            name: "Lemon Dessert",
            price: 7.99,
            description: "House made lemon dessert with fresh lemon zest and Italian meringue.",
            image: "/lemondessert.jpeg"
        }
    ];

    return (
        <div id="specials" className="container mx-auto px-4 py-8 w-full md:w-[100%] lg:w-[90%]">
            <h2 className="text-2xl sm:text-3xl font-bold text-left mb-6">Specials</h2>
            <p className="text-left text-gray-600 mb-8">Check out our specials for this week!</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {specialsData.map((special) => (
                    <div key={special.id} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full transform transition duration-300 hover:scale-105">
                        <img src={special.image} alt={special.name} className="w-full h-48 md:h-52 lg:h-56 object-cover" />
                        <div className="p-4 md:p-5 flex flex-col flex-grow">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-lg md:text-xl font-semibold">{special.name}</h3>
                                <p className="text-base md:text-lg font-bold text-green-600">${special.price}</p>
                            </div>
                            <p className="text-sm md:text-base text-gray-600 mb-4">{special.description}</p>
                            <div className="mt-auto">
                                <div className="flex items-center text-yellow-500 hover:text-yellow-600 cursor-pointer">
                                    <p className="text-sm md:text-base mr-2">Order a delivery</p>
                                    <span>→</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Specials;