import React from 'react';
import Header from "./header";
import Footer from "./footer";

function ReactComponent() {
    return (
        <div>
            <Header />
            <div className="container">
                <h1 className="text-center">
                    <a href="/">Вернуться назад!</a>
                </h1>
            </div>
            <Footer />
        </div>
  );
}

export default ReactComponent;