import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import Header from './components/Header';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';
import About from './pages/About';

import './style/_index.scss';
import './style/_typography.scss';

function App() {
    return (
        <div>
            <div className="App">
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route index element={<Home />} />
                        <Route exact path="about" element={<About />} />
                        <Route
                            exact
                            path="products/:id"
                            element={<Product />}
                        />
                        <Route exact path="*" element={<NotFound />} />
                    </Routes>
                    <Footer />
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;
