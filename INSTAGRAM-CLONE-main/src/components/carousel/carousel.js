import Seta from './Arrow-Left.png';
import Seta2 from './Arrow-Right.png';
import Story1 from './Foto1.png';
import Story2 from './Foto2.png';
import Story3 from './Foto3.png';
import Story4 from './Foto4.png';
import Story5 from './Foto5.png';
import Story6 from './Foto6.png';
import './carousel.css';

function Carousel(){
    return(
<div className="container">
    <button className="left-btn hide">
        <img src={Seta} />
    </button>
    <div className='carousel-container'>
        <ul className='carousel'>
            <li className='slide'>
                <div className='box1'>
                    <div className='story-status'>
                    <img src={Story1} className="story" />
                    <p>Seu Stories</p>
                    </div>
                    <div className='story-status'>
                    <img src={Story2} className="has-story" />
                    <p>MaSeraf</p>
                    </div>
                    <div className='story-status'>
                    <img src={Story3} className="has-story" />
                    <p>Clebs</p>
                    </div>
                    <div className='story-status'>
                    <img src={Story4} className="has-story" />
                    <p>OBrito</p>
                    </div>
                    <div className='story-status'>
                    <img src={Story5} className="has-story" />
                    <p>DaniSilva</p>
                    </div>
                    <div className='story-status'>
                    <img src={Story6} className="has-story" />
                    <p>LeoArim</p>
                    </div>
                </div>
            </li>
        </ul>
    </div>
    <button className='right-btn'>
        <img src={Seta2} />
    </button>
</div>
    );
}

export default Carousel;