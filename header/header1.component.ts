import { Component } from '@angular/core';

@Component({
  selector: 'app-header1',
  template:`
  

  <div class="toolbar " role="banner">
    
    

  <div class='navbar-end time'>
  <span>Monday-Saturday,8 Am To 2:30Pm</span>
  </div>
  <div class='navbar-end open'>
<span >Open right Now</span>
</div>
    <div class='navbar-end now' ></div>
    <span >Contact-Us +212 6 00 00 00 00</span>
   </div>

  
  `,
  styles:[`
    .toolbar {
    
    top: 0;
    left: 0;
    right: 0;
    height: 60px;
    display: flex;
    align-items: center;
    background-color: #1976d2;
    color: white;
    font-weight: 600;
    
  }
   @media screen and (max-width:600px){
     .time{
      font-size:12px;
      margin:20px;
     }
     .open{
      
      display:none;
     }
     .welcome{
       position:absolute;
       
     }
     
     
   }
    `]
})
export class header1Component {
  title = 'nab';
}