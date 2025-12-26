import { Router } from '@angular/router';
import { DeckGuide } from '../../../models/deck-guide.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-deck-guide',
  imports: [],
  templateUrl: './deck-guide.html',
  styleUrl: './deck-guide.css',
})
export class DeckGuideComponent {
  guide:DeckGuide|null=null;

  constructor(private router:Router){}

  ngOnInit(){
    var data = history.state.data;
    if(data==null)
      this.router.navigate(['/anime-format']);
    else 
      this.guide = data;    

    console.log(this.guide);
  }

  scrollTo(id:string){
    let element = document.getElementById(id);
    element?.scrollIntoView();
  }
}
