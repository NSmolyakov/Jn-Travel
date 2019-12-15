import React from 'react';
import Tours from '../tours/Tours'
import './Home.css'

const Home = () => {
    return(<>
    
    <section>
        <div className="container-fluid">
            <div className="hero-block text-center">
                <h1>Путешествие в Японию <br /> на цветение сакуры</h1>
                <button type="button" className="btn btn-primary">Посмотреть Тур</button>
            </div>
        </div>
    </section>

    <Tours />

    <div className="container-fluid">
        <div className="consult">
            <div className="container">
                <div className="cons-content">
                    <h3>Хотите получить консультацию для
                        подбора тура в Японию?</h3><br />
                    <p>Или быть может у Вас появились вопросы к нам? Вы можете оставить нам заявку. Мы позвоним вам в течении часа и постараемся ответить на все вопросы касательно наших предложений</p>
                    <button type="button" className="mt-2 btn-primary-mini">Оставить заявку</button>
                </div>
            </div>
        </div>
    </div>

</>
    );       
}

export default Home;