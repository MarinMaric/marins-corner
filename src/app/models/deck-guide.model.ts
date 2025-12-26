import { Combo } from "./combo.model";
import { Matchup } from "./matchup.model";

export class DeckGuide {
    title:string='';
    thumbnailUrl:string='';
    deckListImageUrl:string='';
    deckListLink:string='';
    general:string='';
    combos:Combo[]=[];
    mathchups:Matchup[]=[];
}