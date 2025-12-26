import { Routes } from '@angular/router';
import { AnimeFormat } from './components/anime-format/anime-format';
import { DeckGuideComponent } from './components/anime-format/deck-guide/deck-guide';

export const routes: Routes = [
    {path:'anime-format', component: AnimeFormat},
    {path:'deck-guide', component: DeckGuideComponent}
];
