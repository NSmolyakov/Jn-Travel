import React from 'react';
import './Home.css'

const Home = () => {
    return(<>
    
    <section>
        <div class="container-fluid">
            <div class="hero-block text-center">

                <h1>Путешествие в Японию <br /> на цветение сакуры</h1>

                <button type="button" class="btn btn-primary">Посмотреть Тур</button>

            </div>
        </div>
    </section>

    <section>
        <div class="container">
            <div class="tours d-flex justify-content-center">
                <h2 class="pb-5">Самые популярные туры:</h2>
            </div>
            <div class="row">
                <div class="classic">
                    <div class="wrap_tour">
                        <h3>Класический груповой тур</h3>
                        <br />
                        <p>Любоваться японскими клёнами каждый год
                            приезжает все больше туристов. На протяжении
                            всего нескольких недель листья японского клена
                            момидзи становятся багряно красными, зрелище
                            поистине великолепное!

                            <a class="btn_tour" href="#"> Подробнее > </a>
                        </p>
                    </div>



                </div>
            </div>

            <div class="row justify-content-center">
                <div class="hakuba mt-3 col-md-6 col-sm-12 mr-1">
                    <div class="wrap_tour">
                        <h3>Курорт Хакуба (Нагано)</h3>
                        <br />
                        <p>Горнолыжный курорт Хакуба – один из
                            самых известных японских курортов для
                            горнолыжников и сноубордистов.
                            Он расположен к северо-западу от г. Нагано,
                            у подножья Японских Альп.

                            <a class="btn_tour" href="#"> Подробнее > </a>
                        </p>
                    </div>

                </div>

                <div class="okinava mt-3 col-md-6 col-sm-12 ml-1">
                    <div class="wrap_tour">
                        <h3>Тур на Окинаву</h3>
                        <br />
                        <p>Путешествие в Королевство Рюкю (Окинаву), где можно провести отпуск на песчаных пляжах! Острова окружены многочисленными коралловыми рифами, здесь кристально чистая вода и превосходные пляжи с белым песком.

                            <a class="btn_tour" href="#"> Подробнее > </a>
                        </p>
                    </div>

                </div>
            </div>
            <div class="row mt-5 pt-5 more_tours d-flex justify-content-center">
                <p>Туры в Японию - заветная мечта многих туристов, которые давно хотят открыть для себя эту древнюю страну, таящую в себе множество загадок</p>
                <button type="button" class="btn-primary-mini">Все предложения </button>
            </div>
        </div>
    </section>

    <div class="container-fluid">
        <div class="consult">
            <div class="container">
                <div class="cons-content">
                    <h3>Хотите получить консультацию для
                        подбора тура в Японию?</h3><br />
                    <p>Или быть может у Вас появились вопросы к нам? Вы можете оставить нам заявку. Мы позвоним вам в течении часа и постараемся ответить на все вопросы касательно наших предложений</p>
                    <button type="button" class="mt-2 btn-primary-mini">Оставить заявку</button>
                </div>
            </div>
        </div>
    </div>

</>
    );       
}

export default Home;