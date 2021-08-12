import code from '../images/code.png';
import javascript from '../images/javascript.png';
import css from '../images/css.png';
import react from '../images/react.png';

const Home = () => {
    return ( 
        <div className="Home">
        <h3 className="Home-title">Russell George Driver - Javascript web developer</h3>

                <div className="Home-title-iconsBox">
                    <img className="Home-title-iconsBox-icon" src={code} />
                    <img className="Home-title-iconsBox-icon" src={javascript} />
                    <img className="Home-title-iconsBox-icon" src={css} alt="keyboard icon" />
                    <img className="Home-title-iconsBox-icon" src={react} alt="react icon" />
                </div>
                    
                <div className="Home-MainBox">
                    <div className="Home-MainBox-child Home-MainBox-textbox">
                        <h2 className="Home-MainBox-textbox-p">Confident in:</h2>
                        <p className="Home-MainBox-textbox-p">Javascript</p>
                        <p className="Home-MainBox-textbox-p">html</p>
                        <p className="Home-MainBox-textbox-p">css</p>  
                        <p className="Home-MainBox-textbox-p">React</p>
                        <p className="Home-MainBox-textbox-p">front end</p>
                        <p className="Home-MainBox-textbox-p">backend</p>
                        <p className="Home-MainBox-textbox-p">node, npm</p> 
                        <p className="Home-MainBox-textbox-p">git</p>
                        <p className="Home-MainBox-textbox-p">Visual Studio Code</p>
                        <p className="Home-MainBox-textbox-p">expressjs</p>
                        <p className="Home-MainBox-textbox-p">mongoose</p>
                        <p className="Home-MainBox-textbox-p">mongodb</p>
                    </div>
                </div>
        </div>
     );
}
 
export default Home;