import Image from "next/image";

export default function MainPage() {
    return(
        <div className="min-h-screen bg-gray-400">
            <div className="max-w-4xl mx-auto py-10 px-4">
                <div className="text-center">
                    <h1 className="text-3xl font-bold mt-4 text-gray-100 transform">Questions</h1>
                </div>
                <div className="mt-10 bg-white shadow-md rounded-lg p-6">
                    <section className="space-y-6">
                        <h2 className="text-2xl font-semibold text-gray-700">What are you going to see here?</h2>
                        <div className="bg-gray-100 p-4 rounded-lg">
                            <h2 className="text-xl font-semibold text-blue-500">Cute Dogs</h2>
                            <p className="text-gray-600 mt-2">
                                Lorem ipsum dolor sit amet consectetur<br />
                                adipisicing elit. Ipsam molestiae quos<br />
                                libero non soluta ipsa eveniet, laborum quod excepturi expedita?<br />
                                Consequuntur aspernatur accusamus blanditiis error, consequatur quis<br />
                                repudiandae adipisci nulla!
                            </p>
                        </div>
                    </section>
                </div>
            <div className="mt-10 bg-white shadow-md rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-gray-700">How can i post my dogs pics?</h2>
                <div className="bg-gray-100 p-4 rounded-lg z-50">
                <h2 className="text-xl font-semibold text-blue-500">On our Main Social Page</h2>
                    <p className="text-gray-600 mt-2">
                                Lorem ipsum dolor sit amet consectetur<br />
                                adipisicing elit. Ipsam molestiae quos<br />
                                libero non soluta ipsa eveniet, laborum quod excepturi expedita?<br />
                                Consequuntur aspernatur accusamus blanditiis error, consequatur quis<br />
                                repudiandae adipisci nulla!
                            </p>
                </div>
            </div>
            </div>
        </div>
    )
}