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
        <div id="title">
          ADALI MAGAZINE
        </div>
        <div>
          <ion-icon name="search-outline"></ion-icon>
        </div>
      </div>
      <div>
        <nav id= "nav-bar">
          <select>
            <option>Home</option>
            <option>Home</option>
            <option>Home</option>
          </select>
          <select>
            <option>Categories</option>
          </select>
          <select>MAGAZINE</select>
          <select>GALLERY</select>
          <select>CONTACT US</select>
        </nav>
      </div>
    </div>
  );
}

export default App;
