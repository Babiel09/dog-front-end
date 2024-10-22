import Image from 'next/image'
import Image1 from '../../assets/funny dog.gif'
import Image2 from '../../assets/cao-foda.jpg'

export default function MainPage() {
    return(
        <div className="min-h-screen bg-gray-400">
        <div className="max-w-4xl mx-auto py-10 px-4">
            <div className="text-center">
                <h1 className="text-3xl font-bold mt-4 text-gray-100 transform">Welcome!</h1>
                <h2 className="text-3xl font-bold mt-4 text-gray-100 transform">to </h2>
                <h1 className="text-3xl font-bold mt-4 text-gray-100 transform">Dog-Hub</h1>
            </div>
            <div className="mt-10 bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-2xl font-semibold text-gray-700">Enjoy with us!</h2>
                <section className="space-y-6">
                    <div className="bg-gray-300 p-4 rounded-lg">
                        <h2 className="text-xl font-semibold text-blue-500">Funny moments</h2>
                        <Image
                        src={Image1}
                        alt='Funny moment'
                        width={450}
                        height={450}
                        />
                        <p className="text-gray-600 mt-2">My baby is so lazy! 💖😂😂💖</p>
                    </div>
                    <div className="bg-gray-300 p-4 rounded-lg">
                        <h2 className="text-xl font-semibold text-blue-500">See a lot of beatyfull Dogs!</h2>
                        <Image
                        src={Image2}
                        alt='Beaty Dog'
                        width={450}
                        height={450}
                        />
                        <p className="text-gray-700 mt-2">This is my Baby Lord. 🤩🤩🤩</p>
                        </div>
                </section>
                </div>
              </div>
            </div>
    )
}