import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Home /> */}
      {/* <Footer /> */}
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
      <nav id="nav-bar">
        <div className="dropdown">
          <div className="title">
            <a>Home</a>
            <ion-icon name="chevron-down-outline"></ion-icon>
          </div>
          <div className='list'>
            <div><a>EDITOR'S BOARD</a></div>
            <div><a>EDITORIAL BOARD</a></div>
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
            <a>ABOUT US</a>
            <ion-icon name="chevron-down-outline"></ion-icon>
          </div>
          <div className='list'>
            <div><a>TEAM MEMBERS</a></div>
            <div><a>EDITOR'S BOARD</a></div>
            <div><a>EDITORIAL BAORD</a></div>
            <div><a>ADA</a></div>
          </div>
        </div>
      </nav>
    </div>
  )
}

function Footer() {
  return (
    <footer id="footer">
      <div>
        <h3>CONTACT US</h3>
        <hr/>
        <a>E-mail: adalimagazine@ada.edu.az</a>
        <a>Web: www.ada.edu.az/en</a>
        <br/>
        <h5>Web Developers</h5>
        <a>shuseynzada16232@ada.edu.az</a>
        <a>ehajiyev16259@ada.edu.az</a>
        <br/>
        <h5>Content Managers</h5>
        <a>ehajiyev16259@ada.edu.az</a>
        <a>shuseynzada16232@ada.edu.az</a>
        <hr/>
        <ion-icon name="logo-facebook"></ion-icon>
        <ion-icon name="logo-instagram"></ion-icon>
        <ion-icon name="logo-youtube"></ion-icon>
        <ion-icon name="mail-outline"></ion-icon>
      </div>
      <div>
        <h3>ABOUT US</h3>
      </div>
    </footer>
  )
}

function Home() {
  return (
    <>
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src="..." alt="First slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="..." alt="Second slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="..." alt="Third slide" />
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </>
  )
}


export default App;
