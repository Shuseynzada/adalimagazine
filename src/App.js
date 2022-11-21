import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <div id="Topsection">
      <div id='header'>
        <div id='icons'>
          <ion-icon id="face" name="logo-facebook" lazy="True"></ion-icon>
          <a href="https://www.instagram.com/adalimagazine/" target="_blank"><ion-icon id="insta" name="logo-instagram"></ion-icon></a>
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
        <h3>FOLLOW US</h3>
        <div id="icons">
          <ion-icon id="face" name="logo-facebook"></ion-icon>
           <ion-icon id="insta" name="logo-instagram"></ion-icon>
          <ion-icon id="youtube" name="logo-youtube"></ion-icon>
          <ion-icon id="mail" name="mail-outline"></ion-icon>
        </div>
      </div>
      <div className='aboutus'>
        <h3>ABOUT US</h3>
        <span>ADA University</span>
      </div>
    </footer>
  )
}

function Home() {
  return (
    <div className="main">
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src="./imgs/a.jpg" alt="First slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="./imgs/a.jpg" alt="First slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="./imgs/a.jpg" alt="First slide" />
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
      <div className='home-card-section'>
        <Card title="Ada School at teknofest 2022"/>
        <Card title="Ada School at teknofest 2022"/>
        <Card title="Ada School at teknofest 2022"/>
        <Card title="Ada School at teknofest 2022"/>
      </div>
    </div>
  )
}

function Card(props){
  return(
    <div className='card'>
      <img src='./imgs/b.jpg'/>
      <div className='card--info'>
        <h5>{props.title.toUpperCase()}</h5>
        <span className='date'>July 13, 2022 ///No Comments</span>
        <p>From May 26 to May 29,2022 ADA School students participated at the TEKNOFEST, the international Aviation, Space, and Technology Festival which was held in Baku</p>
        <a href="...">Read More ≫</a>
      </div>
    </div>
  )
}

export default App;
