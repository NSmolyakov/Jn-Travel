import React from 'react'
import './Tours.css'

const Tours = () => {
    return( 
   <section>
        <div className="container">
            <div className="tours d-flex justify-content-center">
                <h2 className="pb-4">Самые популярные туры:</h2>
            </div>


            <div className="row">
                <div className="classic">
                    <div className="wrap_tour">
                        <h3>Класический груповой тур</h3>
                        <br />
                        <p>Любоваться японскими клёнами каждый год
                            приезжает все больше туристов. На протяжении
                            всего нескольких недель листья японского клена
                            момидзи становятся багряно красными, зрелище
                            поистине великолепное!

                            <a className="btn_tour" href="/"> Подробнее > </a>
                        </p>
                    </div>
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="hakuba mt-3 col-md-6 col-sm-12 mr-1">
                    <div className="wrap_tour">
                        <h3>Курорт Хакуба (Нагано)</h3>
                        <br />
                        <p>Горнолыжный курорт Хакуба – один из
                            самых известных японских курортов для
                            горнолыжников и сноубордистов.
                            Он расположен к северо-западу от г. Нагано,
                            у подножья Японских Альп.

                            <a className="btn_tour" href="/"> Подробнее > </a>
                        </p>
                    </div>

                </div>

                <div className="okinava mt-3 col-md-6 col-sm-12 ml-1">
                    <div className="wrap_tour">
                        <h3>Тур на Окинаву</h3>
                        <br />
                        <p>Путешествие в Королевство Рюкю (Окинаву), где можно провести отпуск на песчаных пляжах! Острова окружены многочисленными коралловыми рифами, здесь кристально чистая вода и превосходные пляжи с белым песком.

                            <a className="btn_tour" href="/"> Подробнее > </a>
                        </p>
                    </div>

                </div>
            </div>

            
            <div className="row mt-5 pt-5 more_tours d-flex justify-content-center">
                <p>Туры в Японию - заветная мечта многих туристов, которые давно хотят открыть для себя эту древнюю страну, таящую в себе множество загадок</p>
                <button type="button" className="btn-primary-mini">Все предложения </button>
            </div>
        </div>
    </section>
    
    );       
}

export default Tours;