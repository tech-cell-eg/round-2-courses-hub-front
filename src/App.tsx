import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { routes } from "./routes";

const App: React.FC = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                {routes.map((route) => {
                  
                    return (
                        <Route
                            key={route.path}
                            path={route.path}
                            element={
                                route.path !== "/" ? (
                                    <>
                                        <Header pageName={route.pageName} />
                                        <section className="px-5 md:px-20 lg:px-30">
                                            <route.component />
                                        </section>
                                    </>
                                ) : (
                                    <section className="px-5 md:px-20 lg:px-30">
                                        <route.component />
                                    </section>
                                )
                            }
                        />
                    );
                })}
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
