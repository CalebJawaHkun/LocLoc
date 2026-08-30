
import { BrowserRouter, Route, Routes } from "react-router";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import About from "./pages/About";

const App = () => {
    return (
        <BrowserRouter>
            <div className="flex min-h-screen flex-col bg-[radial-gradient(circle_at_top,_rgba(243,212,168,0.22),_transparent_28%),linear-gradient(180deg,_#f6f1e8_0%,_#f4efe7_24%,_#efe7dd_100%)] text-stone-800">
                <Header />

                <div className="mx-auto flex w-full max-w-[1600px] flex-1 px-4 pb-6 pt-4 sm:px-6 lg:px-8">
                    <Routes>
                        <Route
                            path="/"
                            element={<Home />}
                        />

                        <Route
                            path="/about"
                            element={<About />}
                        />
                    </Routes>
                </div>

                <Footer />
            </div>
        </BrowserRouter>
    );
};

export default App;

