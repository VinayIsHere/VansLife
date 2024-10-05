import React from "react";
import {BrowserRouter, Routes, Route, HashRouter} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Vans from "./components/Vans/Vans";
import './Vanlife.css'
import VanDetail from "./components/Vans/VanDetail";
import Layout from "./components/Layout";
import Dashboard from "./components/Host/Dashboard";
import Reviews from "./components/Host/Reviews";
import Income from "./components/Host/Income";
import HostLayout from "./components/Host/HostLayout";
import HostVans from "./components/Host/HostVans";
import HostVanDetail from "./components/Host/HostVanDetail";
import HostVanInfo from "./components/Host/HostVanInfo";
import HostVanPricing from "./components/Host/HostVanPricing";
import HostVanPhotos from "./components/Host/HostVanPhotos";

function VanLife(){
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                
                <Route path="vans">
                    <Route index element={<Vans />} />
                    <Route path=":id" element={<VanDetail />} />
                </Route>
                
                <Route path="host" element={<HostLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="income" element={<Income />} />
                    <Route path="reviews" element={<Reviews />} />
                    <Route path="vans" element={<HostVans />} />
                    <Route path="vans/:id" element={<HostVanDetail />}>
                        <Route index element={ <HostVanInfo />} />
                        <Route path="pricing" element={ <HostVanPricing /> } />
                        <Route path="photos"  element={ <HostVanPhotos />} />
                    </Route>
                </Route>
            </Route>
        </Routes>
        </BrowserRouter>
    )
}

export default VanLife;