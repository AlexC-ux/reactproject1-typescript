import { url } from 'inspector';
import React from 'react';

import Carousel from "./carousel";
import PresentationsCup from "./prezi";
import Header from "./header";
import Footer from "./footer";

function view() {
    return (
        <div>
            <Header/>
            <main>
                <Carousel />
                <PresentationsCup />
            </main>
            <Footer />
        </div>
  );
}

export default view;