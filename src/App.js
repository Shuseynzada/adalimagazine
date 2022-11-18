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
          <select>
            <option>Home</option>
            <option>Home</option>
            <option>Home</option>
          </select>
          <select>
            <option>Categories</option>
          </select>
          <div>MAGAZINE</div>
          <select>
            <option>GALLERY</option>
          </select>
          <select>
            <option>CONTACT US</option>
          </select>
        </nav>
      </div>
    </div>
  )
}

function Footer(){
  return(
    <footer>
      Hello
    </footer>
  )
}

export default App;
