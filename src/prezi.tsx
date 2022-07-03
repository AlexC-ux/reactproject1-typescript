import React from 'react';

function ReactComponent() {
    return (
        <div>
            <div className="container px-4 py-5" id="custom-cards">
                <h2 className="pb-2 border-bottom">Конкурс презентаций
                    <span className="badge bg-primary rounded-pill">NEW</span></h2>

                <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
                    <div className="col">
                        <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-4 shadow-lg" style={{ backgroundImage: "url('/images/banners/banner-5.svg')", backgroundSize: "cover" }}>
                            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                                <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Выбери тему для своей презентации</h2>

                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-4 shadow-lg" style={{ backgroundImage: "url('/images/banners/banner-6.svg')", backgroundSize: "cover" }}>
                            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                                <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Подготовь презентацию и отправь</h2>

                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-4 shadow-lg" style={{ backgroundImage: "url('/images/banners/banner-7.svg')", backgroundSize: "cover" }}>
                            <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                                <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Ожидай результатов, дата будет объявлена позже</h2>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="d-grid gap-2 container">
                <a className="btn btn-lg btn-dark" type="button" href="/кабинет">Участвовать</a>
            </div>
        </div>
    );
}

export default ReactComponent;