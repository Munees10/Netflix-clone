import './App.css';
import Banner from './component/Banner';
import Nav from './component/Nav';
import Row from './component/Row';
import requests from './component/request';
function App() {
  return (
    <div>
      <Nav/>
      <Banner fetchUrl={requests.fetchNetflixOriginals}/>
     <Row isPoster = {true} title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} />
     <Row title="Trending In India" fetchUrl={requests.fetchTrending} />
     <Row title="Top rated" fetchUrl={requests.fetchTopRated} />
     <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
     <Row title="comedy Movies" fetchUrl={requests.fetchComedyMovies} />
     <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
     <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
     <Row title="Documentries" fetchUrl={requests.fetchDocumentaries} />
      
    </div>
  );
  }

export default App;
