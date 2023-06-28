import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Footer from './Footer';
import MainContent from './MainContent';

/*
Challenge: Starting from scratch, build and render the 
HTML for our section project. Check the Google slide for 
what you're trying to build.

We'll be adding styling to it later.

Hints:
* The React logo is a file in the project tree, so you can
  access it by using `src="./react-logo.png" in your image
  element
* You can also set the `width` attribute of the image element
  just like in HTML. In the slide, I have it set to 40px
 */

/* const page = (
  <div>
    <img src='https://blog.atomikod.com/wp-content/uploads/2020/12/reactjs.jpg' alt='' width="100px"/>
    <h1>Fun facts about React</h1>
    <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100K stars on GitHub</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
    </ul>
  </div>
); */

//ReactDOM.render(page,document.getElementById("root"));

//--------------------Componentes 

function App(){
  return (
    <div>
    <Header />
    <MainContent />
    <Footer />
  </div>
  )
};

ReactDOM.render(<App />,document.getElementById("root"));


