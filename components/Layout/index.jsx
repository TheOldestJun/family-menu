"use client";
import Header from "./Header";
import Footer from "./Footer";
import Image from "next/image";
import { Toaster } from "react-hot-toast";

export default function Layout({ children }) {
    return (
        <div className="flex flex-col min-h-screen overflow-y-auto">
            <Header />

            <main className="flex-grow">
                <div className="fixed inset-0 -z-10">
                    <Image
                        src="/img/background.webp"
                        alt="background image"
                        width="1920"
                        height="1272"
                        className="w-full h-full object-cover"
                    />
                </div>
                {children}
                <Toaster position="top-center" reverseOrder={false} />
            </main>
            <Footer />
        </div>
    );
}