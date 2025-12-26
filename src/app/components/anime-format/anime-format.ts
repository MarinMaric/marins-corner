import { Component } from '@angular/core';
import { DeckGuide } from '../../models/deck-guide.model';
import { DeckGuideService } from '../../services/deck-guide.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-anime-format',
  imports: [],
  templateUrl: './anime-format.html',
  styleUrl: './anime-format.css',
})
export class AnimeFormat {
  guides:DeckGuide[]=[];

  constructor(private deckGuideService:DeckGuideService, private router:Router){}

  ngOnInit(){
    this.guides = this.deckGuideService.getGuides();
  }

  openGuide(guide:DeckGuide){
    this.router.navigate(['/deck-guide'], {
      state: {data:guide}
    });
  }
}
