
const Portfolio = () => {

    return (
        <div className="Portfolio">
            <h1>Portfolio page</h1>
            <div className="Portfolio-box">
                <h3 className="Portfolio-box-heading">Project 1</h3>
                <p className="Portfolio-box-text">I was requested to build the home pages on the following website.  This is for a wildlife photographer.  I was also tasked with building the image gallery.  I was overseen by a senior web developer who reviewed every git commit I made, and provided feedback and support.  This was a great example of getting familiar with git version control, and building a habit of always committing regular changes with detailed descriptions in order for the pull requests to be easily understood. </p>
                <a className="Portfolio-box-link" href="https://natural-variation.com/" target="_blank" rel="noopener noreferrer">Natural Variation</a>
                <img src="" alt="" />
            </div>

            <div className="Portfolio-box">
                <h3 className="Portfolio-box-heading">Project 2</h3>
                <p className="Portfolio-box-text">This is one of many film sites I have built over the years.  I found building these kinds of sites was a great way to get familiar with API fetch requests, and learning how to deal with the returned datastructures, dealing with API keys, manipulating the dom, dealing with mongodb database, storing data and using React as the main framework.  </p>
                <a className="Portfolio-box-link" href="https://popfilms.herokuapp.com/" target="_blank" rel="noopener noreferrer">Popfilms</a>
                <img className="Portfolio-box-img" src="" alt="" />
            </div>

        </div>
    )
    
}

export default Portfolio;

