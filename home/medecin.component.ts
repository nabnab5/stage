import { Component } from '@angular/core';

@Component({
  selector: 'app-medecin',
  template:`
  
	 
 
  <div class="tile is-ancestor">
  <div class="tile is-vertical ">
    <div class="tile">
      <div class="tile is-parent is-vertical">
        <article class="tile is-child notification ">
		<img class="img" width=450 height=10 src="assets/img/doctor.jpg">
        </article>
       
      </div>
      <div class="tile is-parent">
        <article class="tile is-child notification ">
          
          <div class='text'>
            <h1 class="title"><em><U>Dr.Ahmed Elamly</U></em></h1>
            <h2 class="subtitle">
	                  Médecin interne générale FMH.
           </h2>
	      <h2 class="subtitle1">
	           LANGUE(S) PARLÉE(S) : ARABE / FRANCAIS / ANGLAIS
          </h2>
	    </div>
         
        </article>
      </div>
    </div>
    
  </div>
  
</div>
  <div class="tile is-ancestor">
  <div class="tile is-vertical ">
    <div class="tile">
      <div class="tile is-parent is-vertical">
        <article class="tile is-child notification ">
		<p class='parcours'>Après avoir suivi des études de médecine à Genève et obtenu son diplôme en 2003,
          le Dr.Ahmed Elamly a eu l’occasion de se former durant une année au Centre Valaisan de Pneumologie 
          ce qui lui a donné l’envie de faire de la pneumologie. Après une année en radiologie et une solide 
          formation en médecine interne à Genève, il a fait sa spécialisation en pneumologie comme assistant 
          à Genève et comme chef de clinique à l’hôpital de Rolle. Cette spécialisation a été complétée par 
         une année immuno-allergologie à Genève. Depuis fin 2014, il est installé en pratique libérale en 
         ville de Genève et depuis janvier 2016 comme consultant à temps partiel au Centre Médical 
         du Grand-Lancy.</p>
        </article>
       
      </div>
      <div class="tile is-parent">
        <article class="tile is-child notification ">
		<div class="horaire">
          <p class="title">Horraire</p>
		  </div>
		  <div class="time">
          <ul>
              <li>LUNDI&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 08:00 – 14:30</li>
              <li>MARDI  &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 08:00 – 14:30</li>
              <li>MERCREDI  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 08:00 – 14:30</li>
              <li>JEUDI  &nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 08:00 – 14:30</li>
	          <li>VENDREDI  &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 08:00 – 12:30</li>
	          <li>SAMEDI  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 08:00 – 12:30</li>
          </ul>    
         </div>
        </article>
      </div>
    </div>
    
  </div>
  
</div>
<div class="tile is-parent is-vertical">
        <article class="tile is-child notification ">
          <p class="title">Specialite</p>
          <ul>
		    <li>Médecine interne FMH</li>
			<li>Pneumologie FMH</li>
		  </ul>
        </article>
        </div>
  `,
  styles:[`
  
.home{
  background-color:#F3EDEE;
  box-sizing: border-box;
  }
.img {
    top:200px;
	margin-left:8%;
	padding-top:1%
}
.title{
    color:#F32B4C
}
.text {
    
	top:20%;
	
	
}
.subtitle{
	padding-top:20px
}
.subtitle1{
	padding-top:100px
}
.content{
	margin-right:57%;
	
}
.parcours{
	padding-left:17%;
	size:65px;
	padding-top:3%
}
.horaire{
	
	padding-left:30%;
	
}
.time{
	padding-left:20%;
	padding-top:5%;
},
.tile{
	padding-left:17%
}
    

  `]
})
export class medecinComponent {
  title = 'nab';
}