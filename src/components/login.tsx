import Input from "./input/input";
import Image from 'next/image';
import Foda from '../../assets/foda.jpg'


export default function LoginMain() {
  return (
    <form action="post">
      <div className="min-h-screen bg-gray-400">
        <div className="max-w-4xl mx-auto py-10 px-4">
          <div className="text-center">
            <h1 className="text-3xl font-bold mt-4 text-gray-100">Login</h1>
            <h2 className="text-3xl font-bold mt-4 text-gray-100">to</h2>
            <h1 className="text-3xl font-bold mt-4 text-gray-100">Send and see dogs pics</h1>
            <h1 className="text-3xl font-bold mt-4 text-gray-100">🐶</h1>
          </div>
          <div className="text-center">
            <h2 className="text-3xl font-bold mt-4 text-gray-100">
              Enjoy with us!
            </h2>
          </div>
          <div className="mt-10 bg-white shadow-md rounded-lg p-6">
            <div>
              <Input
                type="text"
                placeHolder={"Digite seu nome"}
              ></Input>
            </div>
            <br />
            <div>
              <Input
                type="email"
                placeHolder={"Digite seu email"}
              ></Input>
            </div>
            <br />
            <div>
              <Input
                type="password"
                placeHolder={"Digite sua senha"}
              ></Input>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
