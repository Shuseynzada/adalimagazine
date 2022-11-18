import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <div id="Topsection">
      <div id='header'>
        <div id='icons'>
          <ion-icon id="face" name="logo-facebook"></ion-icon>
          <ion-icon id="insta" name="logo-instagram"></ion-icon>
          <ion-icon id="youtube" name="logo-youtube"></ion-icon>
          <ion-icon id="mail" name="mail-outline"></ion-icon>
        </div>
        <div id="title">
          ADALI MAGAZINE
        </div>
        <div>
          <ion-icon name="search-outline"></ion-icon>
        </div>
      </div>
      <div>
        <nav id="nav-bar">
          <div className="dropdown">
            <div className="title">
              <a>Home</a>
              <ion-icon name="chevron-down-outline"></ion-icon>
            </div>
            <div className='list'>
              <div><a>EDITOR'S BOARD</a></div>
              <div><a>EDITORIAL BAORD</a></div>
              <div><a>ADA</a></div>
            </div>
          </div>
          <div className="dropdown">
            <div className="title">
              <a>Categories</a>
              <ion-icon name="chevron-down-outline"></ion-icon>
            </div>
            <div className='list'>
              <div><a>EDITOR'S BOARD</a></div>
              <div><a>EDITORIAL BAORD</a></div>
              <div><a>ADA</a></div>
            </div>
          </div>
          <div className="dropdown">
            <div className="title">
              <a>MAGAZINE</a>
            </div>
          </div>
          <div className="dropdown">
            <div className="title">
              <a>GALLERY</a>
              <ion-icon name="chevron-down-outline"></ion-icon>
            </div>
            <div className='list'>
              <div><a>EDITOR'S BOARD</a></div>
              <div><a>EDITORIAL BAORD</a></div>
              <div><a>ADA</a></div>
            </div>
          </div>
          <div className="dropdown">
            <div className="title">
              <a>CONTACT US</a>
              <ion-icon name="chevron-down-outline"></ion-icon>
            </div>
            <div className='list'>
              <div><a>EDITOR'S BOARD</a></div>
              <div><a>EDITORIAL BAORD</a></div>
              <div><a>ADA</a></div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

function Footer() {
  return (
    <footer>
      Hello
    </footer>
  )
}


export default App;
