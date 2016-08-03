var yo = require('yo-yo');
var landing = require('../landing/index');

var signinForm = yo`<div class="col s12 m7">
    <div class= row>
        <div class="signup-box">
          <h1 class="platzigram">Platzigram</h1>
          <form class="signup-form">
            
            <div class="section">
              <a class="btn btn-fb hidden-on-small-only">Iniciar sesión con Facebook</a>
              <a class="btn btn-fb hide-on-med-and-up"><i class="fa fa-facebook-official"></i>Iniciar sesión</a>
            </div>
            <div class="divider"></div>
            <div class="section">
              <input type="text" name="username" placeholder="Nombre de Usuario">
              <input type="password" name="password" placeholder="Contraseña"> 
              <button class="btn waves-effect waves-light btn-sign-up" type="submit">Iniciar Sesión</button>
            </div>
          </form>
        </div>
      </div>
      <div class="row">
        <div class="login-box">¿No Tienes una cuenta?<a href="/signup"> Regístrate </a></div>
      </div>
    </div>`;

module.exports = landing(signinForm);