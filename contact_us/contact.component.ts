import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-contact',
  template:`
  
    <section class="hero is-warning is-bold ">
       <div class="hero-body">
            <p class="title">
                  Contact Us!
            </p>
    
        </div>
    </section>

    
  
  `,

  styles:[]
})
export class contactComponent implements OnInit {
    
  constructor(){ }

  ngOnInit():void {

  }
}