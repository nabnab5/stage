import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template:`
  <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
      <div class='navbar-item'>
      <img
    
    alt="Cabinet Logo"
    src="assets/img/logo3.jpg"
  />
</div>
<div class='navbar-item' >
  <span><strong>Alamy Cabinet</strong></span>
</div>
    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item" routerLink="/">
        Home
      </a>

      <a class="navbar-item" routerLink="medecin">
        Medecin
      </a>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          More
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            About
          </a>
          <a class="navbar-item"routerLink="med">
            Jobs
          </a>
          <a class="navbar-item" routerLink="/contact">
            Contact Us
          </a>
          <hr class="navbar-divider">
          <a class="navbar-item">
            Report an issue
          </a>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light">
            Log in
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
  
  `,
  styles:[`
  #name{
    weight:20px
  }
  `]
})
export class headerComponent {
  title = 'nab';
}