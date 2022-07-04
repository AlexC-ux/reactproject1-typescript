import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { idText, JsxElement } from 'typescript';

function Card(props: any) {
    
    

    return (
        

        
        <div className="col">
            <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-4 shadow-lg" style={{ backgroundImage: "url('" + props.imageurl + "')", backgroundSize: "cover" }}>
                <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                    <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">{props.title}</h2>
                </div>
            </div>
        </div>
    );
}

function sayWin() {
    ReactDOM.render(< h1 > Вы выиграли!
    </h1>, document.getElementById("root"));
}


function ReactComponent() {

    const [entrants, setEntrants] = useState(0);

    useEffect(() => {
        switch (entrants) {
            case 1: {
                document.querySelector("p#sometext")!.textContent = "Вы знаете как пользоваться кнопкой! Продолжайте в том же духе";
                break;
            }
            case 10: {

                


                const winImage = <img id="winimg" src="https://avatarko.ru/img/kartinka/5/chelovechek_4170.jpg" style={{ position: "fixed", zIndex: "999999", top: "50%", left: "45%", width: "200px" }} onClick={sayWin} />;

                ReactDOM.render(winImage, document.getElementById("sometext"));
                break;
            }
        }
    }
    );

    return (
        <div>
            <div className="container px-4 py-5" id="custom-cards">
                <h2 className="pb-2 border-bottom">Конкурс презентаций
                    <span className="badge bg-primary rounded-pill">NEW</span></h2>
                <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
                    <Card imageurl="/images/banners/banner-5.svg" title="Выбери тему для своей презентации" />
                    <Card imageurl="/images/banners/banner-6.svg" title="Подготовь презентацию и отправь" />
                    <Card imageurl="/images/banners/banner-7.svg" title="Ожидай результатов, дата будет объявлена позже" />
                </div>
            </div>

            <div className="d-grid gap-2 container">
                <a className="btn btn-lg btn-dark" type="button" onClick={() => setEntrants(entrants + 1)}>Участвовать</a>
                <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-bottom">
                    <p>Вы участвовали {entrants} раз.</p>
                    <p id="sometext" >Нажмите "Участвовать", чтобы увеличить счётчик!</p>
                </div>
            </div>
        </div>
    );



    
}

export default ReactComponent;