import React, { useEffect, useState } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

// import './App.css';
const App = () => {
  const [Api, setApi] = useState([])
  useEffect(() => {
    try {
      fetch("https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=abf465aa165143aea153a70bb84bfca8")
        .then((res) => res.json()).then((actualData) => setApi(actualData.articles))

    } catch (error) {
      console.log(error)
    }
  }, [])
  return (
    <>
    <h1 style={{ "text-align": "center" }}>Top Headlines of the US</h1>
      <div className="container">
        <div className="row row-cols-3">
          {
            Api.map((curElem) => {
              return (


                <div className="card cols-md-4" style={{ "width": "18rem" }} >
                  <img src={curElem.urlToImage} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{curElem.title}</h5>
                    <p className="card-text">{curElem.content}</p>
                    <a href="" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>


              )
            })

          }
        </div>
      </div>


    </>

  )

}
export default App