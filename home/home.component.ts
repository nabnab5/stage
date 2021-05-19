import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-home',
  template:`
  <div class="container text-center">
    
    <owl-carousel-o [options]="customOptions">
    <ng-template carouselSlide>
     <section class="hero is-medium" id='slider0'>
  <div class="hero-body">
    <p class="title">
      Alamy Cabinet<tr>   

    </p>
    <p class="subtitle" >
    <strong>   Our Services</strong> <tr>
      <em> Comprehensive care:</em> <tr>
       -Have a general idea about your case.<tr>
       <em> Disease prevention:</em><tr><a href="#services">Learn more</a>

    </p>
  </div>
</section>
    </ng-template> 
    <ng-template carouselSlide>
     <section class="hero is-medium" id='slider1'>
  <div class="hero-body">
    <p class="title">
      Alamy Cabinet<tr>   

    </p>
    <p class="subtitle" >
          <strong>  Security </strong> <tr>
      <em> For Patient Safety: </em><tr>
       - all offices and waiting rooms have <tr>closed ultraviolet recirculators,...<tr><a href="#security">Learn more</a>

    </p>
  </div>
</section>
    </ng-template>  
    <ng-template carouselSlide>
    <section class="hero is-medium" id='slider2'>
    
  <div class="hero-body">
    <p class="title">
      Alamy Cabinet<tr>  
    </p>
    <p class="subtitle">
      Rendez-vous en ligne <tr>
        bla bla bla bla bla <tr>
          bblaksnujdhazjksndnkqshhhhhhhhh
          <tr>hhhhhhhhhhhkkkkkkkkkkk hhhhhhh hhhh<tr> <a href="#RDV">Learn more</a>
    </p>
  </div>
</section>
    </ng-template>  
    <ng-template carouselSlide>
    
    <section class="hero  is-medium" id='slider3'>
    
  <div class="hero-body">
    <p class="title">
      Alamy Cabinet<tr>  
    </p>
    <p class="subtitle">
      subtitle <tr>
    bla bla bla bla bla <tr>
          bblaksnujdhazjksndnkqshhhhhhhhh
    <tr>hhhhhhhhhhhkkkkkkkkkkk hhhhhhh hhhh<tr> <a href="#3">Learn more</a>

    </p>
  </div>
</section>
    </ng-template>  
  </owl-carousel-o>
</div>
  <div class="content">
  <h1 id="services">Our Services</h1>
  
  <p> <em><strong>Comprehensive care:</strong></em><tr> 
      -Have a general idea about your case.<tr>
         <em><strong>Disease prevention:</strong></em><tr>
       .<tr>
      .<tr>
      .</p>
  <h1 id="security">SECURITY</h1>
  
  <p> <em><strong>For Patient Safety:</strong></em><tr> 
       -all offices and waiting rooms have closed ultraviolet recirculators,
         that safely disinfect the air;<tr>
       - increased the number of daily wet cleaning of all surfaces of the greatest contact
          and floors with disinfectants;<tr>
      - the mask mode is entered;<tr>
      - the schedule of receptions with intervals for a possibility of regular airings is made
          and created conditions to prevent the accumulation of patients.</p>
  <h1 id="RDV">Rendez-vous en ligne</h1>
  <p>Curabitur accumsan turpis pharetra <strong>augue tincidunt</strong> blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.</p>
  <ul>
    <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
    <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
    <li>Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.</li>
    <li>Ut non enim metus.</li>
  </ul>
  <h1 id="3">Third level</h1>
  
  
 
  `,
  styles:[`
  #slider0{
    background-image: url("assets/img/medecine.jpg");
    background-size:cover;
    background-position:center center;
  }
  #slider1{
    background-image: url("assets/img/cabinet.jpg");
    background-size:cover;
    background-position:center center;
  }
  #slider2{
    background-image: url("assets/img/medecins.jpg");
    background-size:cover;
    background-position:center center;
  }
  #slider3{
    background-image: url("assets/img/nurse.jpg");
    background-size:cover;
    background-position:center center;
  }
  .content{
    padding-left:10%
  }
  
  `]
})
export class homeComponent {
  title = 'nab';
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['Previous', 'Next'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }
}
