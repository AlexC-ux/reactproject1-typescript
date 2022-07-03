import React from 'react';
import "./css/carousel.css";



function ReactComponent() {
  return (
          <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-indicators">
                  <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" className=""></button>
                  <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" className="active" aria-current="true"></button>
              </div>
              <div className="carousel-inner">
                  <div className="carousel-item">
                      <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><image href="/images/banners/banner-3.svg" style={{ height: "max(600px, 57vw)" }}></image></svg>

                      <div className="container">
                          <div className="carousel-caption text-end">
                              <h1 style={{color:"#ffffff", background:"#0044ec9c"}} className="shadow p-3 mb-5 rounded">Участвуй в конкурсах</h1>
                              <p className="shadow p-3 mb-5 rounded" style={{ color: "#ffffff", background: "#0044ec9c" }}>Получай сертификаты и грамоты, развивайся в различных направлениях!</p>
                              <p><a className="btn btn-lg shadow p-3 mb-5 rounded" href="/войти" style={{ color: "#ffffff", background:"#1c89f5e0"}}>Открыть личный кабинет</a></p>
                          </div>
                      </div>
                  </div>
                  <div className="carousel-item">
                      <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><image href="/images/banners/banner-4.svg" style={{ height:"max(600px,60vw)"}}></image></svg>

                      <div className="container">
                          <div className="carousel-caption text-end">
                              <h1 style={{ color: "#ffffff", background:"#da20ff8c"}} className="shadow p-3 mb-5 rounded">Познавай новое</h1>
                              <p className="shadow p-3 mb-5 rounded" style={{ color: "#ffffff", background: "#da20ff8c" }}>Находи единомышленников, решайте задачи вместе!</p>
                              <p><a className="btn btn-lg shadow p-3 mb-5 rounded" href="/войти" style={{ color: "#ffffff", background: "#da20ff8c" }}>Открыть личный кабинет</a></p>
                          </div>
                      </div>
                  </div>
                  <div className="carousel-item active">
                      <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><image href="/images/banners/banner-2.svg" style={{ height:"max(600px,57vw)"} }></image></svg>

                      <div className="container">
                          <div className="carousel-caption text-end">
                              <h1 style={{ color: "#ffffff", background: "#2125298c"}} className="shadow p-3 mb-5 rounded">АктивМКТ.РФ</h1>
                              <p className="shadow p-3 mb-5 rounded" style={{ color: "#ffffff", background: "#2125298c" }}>Площадка для реализации твоих возможностей!</p>
                              <p><a className="btn btn-lg shadow p-3 mb-5 rounded" href="/войти" style={{ color: "#ffffff", background: "#9aaeca80"}}>Открыть личный кабинет</a></p>
                          </div>
                      </div>
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Next</span>
                  </button>
              </div>
          </div>
  );
}

export default ReactComponent;