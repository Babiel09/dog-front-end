"use client";
import SocialForm from "./social-form/sociela-form";

export default function SocialArea() {


  return (
    <div className="min-h-screen bg-gray-400">
      <div className="max-w-4xl mx-auto py-10 px-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold mt-4 text-gray-100">Welcome</h1>
          <h2 className="text-3xl font-bold mt-4 text-gray-100">Doger!</h2>
          <h1 className="text-3xl font-bold mt-4 text-gray-100">👋</h1>
        </div>
        <SocialForm/>
      </div>
    </div>
  );
}
