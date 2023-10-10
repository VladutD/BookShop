import './Header.css';

export default function Header() {
    return (
        <header className="header">
            <div className="headerTitles">
                <span className="headerTitle-1">
                    Nu e nimic mai frumos decat sa stii ca ai vazut o parte din lumea asta mare
                </span>
                <span className="headerTitle-2">Viseaza! Creaza! Traieste!</span>
            </div>
            <img
                className="header-photo"
                src={require('../../assets/article-img/articleimg4.JPG')}
                alt="Un apus de soare"
            ></img>
        </header>
    );
}
