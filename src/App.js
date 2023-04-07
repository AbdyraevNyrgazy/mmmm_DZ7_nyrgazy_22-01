import { useState } from 'react';

function App({ images }) {
    const [currentPosition, setCurrentPosition] = useState(0);

    const handlePrevClick = () => {
        setCurrentPosition(currentPosition === 0 ? images.length - 1 : currentPosition - 1);
    };

    const handleNextClick = () => {
        setCurrentPosition(currentPosition === images.length - 1 ? 0 : currentPosition + 1);
    };

    return (
        <div className="slider-container">
            <div className="slider-wrapper" style={{ transform: `translateX(-${currentPosition * 100}%)` }}>
                {images.map((image, index) => (
                    <div key={index} className="slider-item">
                        <img src={image.src} alt={image.alt} className="slider-image" />
                        <div className="slider-caption">{image.caption}</div>
                    </div>
                ))}
            </div>
            <button className="prev-button" onClick={handlePrevClick}>Назад</button>
            <button className="next-button" onClick={handleNextClick}>Далее</button>
        </div>
    );
}


export default App;