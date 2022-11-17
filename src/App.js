import './App.css';

function App() {
  return (
    <div className="App">
      <div id='header'>
        <div id='icons'>
          <ion-icon id="face" name="logo-facebook"></ion-icon>
          <ion-icon id="insta" name="logo-instagram"></ion-icon>
          <ion-icon id="youtube" name="logo-youtube"></ion-icon>
          <ion-icon id="mail" name="mail-outline"></ion-icon>
        </div>
        <div>
          ADALI MAGAZINE
        </div>
        <div>
          <ion-icon name="search-outline"></ion-icon>
        </div>
      </div>
      <div>
        <nav id= "nav-bar">
          <div>HOME</div>
          <div>CATEGORIES</div>
          <div>MAGAZINE</div>
          <div>GALLERY</div>
          <div>CONTACT US</div>
        </nav>
      </div>
    </div>
  );
}

export default App;
