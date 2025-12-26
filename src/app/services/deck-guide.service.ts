import { Injectable } from "@angular/core";
import { DeckGuide } from "../models/deck-guide.model";
import { Matchup } from "../models/matchup.model";

@Injectable({providedIn:'root'})
export class DeckGuideService {
    getGuides():DeckGuide[]{
        let atem = new DeckGuide();
        atem.title = "Yugi";
        atem.thumbnailUrl = "https://i.imgur.com/T9q3eBX.png";
        atem.general = "The heart of the deck is the Dark Magician and Buster Blader duo. They are the main beaters you will want to go to, and the rest of the cards are mostly there to maintain field presence until you get to them. Skilled Dark Magician, Gold Sarchophagus, Dark Magic Curtain, and Emblem of the Dragon Destroyer are used to search for these two, respectively, if the ample amount of draw power doesn’t get to them first (Pot of Greed, Graceful Charity, and Card Destruction).\n \nMagnet Warriors, Knights, and the Gazelle/Berfomet duo are also here; however, they are most often used for maintaining field presence while you get to Dark Magician or Buster Blader. Summoning Valkyrion is not very likely, so do not focus on that unless the circumstances are such that you have a high chance of getting to the third Magnet Warrior. Valkyrion is thus mostly used as a discard fodder as he is a “Garnet” of the deck.";
        atem.combos=[];
        atem.mathchups = [
            {title:'Kaiba', imageUrl:'https://i.imgur.com/u500jF5.png', description:"Buster Blader and Dark Paladin are the strongest counters to Kaiba's deck. Focus on getting to them as soon as possible. Kaiba's strongest beaters are Dragons, and even one dragon hitting the field or GY is going to make Blader too big for Blue-Eyes. Save removal for Blue-Eyes. Keep in mind, Kaiba has Wall of Dark Illusion, so never attack face-down monsters with Buster Blader. Use something else to uncover what it is. \n\nKaiba also has Shrink so beware of face-downs when attacking with Buster Blader. If you are on Dark Paladin keep at least one card in your hand at all times to protect against it. Kaiba also runs Cyber Jar, Crush Card, and Ring of Destruction. You can't defend against that so make sure to hold on to Monster Reborn, Premature Burial, or Call of the Haunted to revive Buster Blader as soon as it gets destroyed.\n\nMagic Cylinder can end games if used on Blue-Eyes. Another specific use of Cylinder is to reduce Kaiba's life points to be lower than yours. This way Kaiba can't use Ring of Destruction on his Blue-Eyes (or your Blader) to defeat you. Obnoxious Celtic Guardian can't be destroyed by monsters with 1900 or more attack. Don't set it too early because Kaiba will run it over with weaker monsters. Use it after a powerful monster has been summoned to stall."},
            {title:'Joey', imageUrl:'https://i.imgur.com/GMhHJ8Q.png', description:"Joey has a lot of backrow to interrupt your attacks. Be cautious of cards that change ATK, and don't rush in blindly. Yugi has three S/T removals: Breaker, Dark Magic Attack, and Dust Tornado. He has more backrow threats than you have backrow so make sure to prioritize. The main backrow threat is Fairy Box so try to save removal for after it has been activated.\n\nJoey also runs Trap Hole of Spikes, so one way to protect against that is to not attack with an important monster in the same turn it was summoned."},
            {title:'Bakura', imageUrl:'https://i.imgur.com/omK37q2.png', description:'Your main concern is Destiny Board. Yugi has three S/T removals: Breaker, Dark Magic Attack, and Dust Tornado. Save them all for Destiny Board. Once it is removed from the field, you can also use them to get rid of The Dark Door and field spell, but keep in mind Dark Spirit Mastery can recycle Destiny Board so if you run out of removal, you are at risk of losing the game.'},
            {title:'Zane', imageUrl:'https://i.imgur.com/W1wcL7S.png', description:"Zane can OTK out of nowhere. Make sure to save your battle traps for Cyber End and Twin Dragons. You can use this high ATK to your advantage by saving Magic Cylinder for his big swings in order to OTK him instead.\n\nDark Paladin is very good against Zane because it can negate all of the fusion spells needed to bring out Zane's win conditions."},
            {title:'Yusei', imageUrl:'https://i.imgur.com/r1ePgDn.png', description:"Yusei's ace cards are both dragons, so Buster Blader is a good counter, given how Shooting Star Dragon can't run it over. However, Yusei has Junk Berserker and Junk Destroyer that can get over Buster Blader. Yusei can also win games without relying on dragons at all since most of his synchros are Warriors. Additionally, even if he does go for Stardust or Shooting Star, Armory Arm can help him run it over. \n\nTry to save Brain Control for Stardust and Shooting Star to tribute them. Save S/T removal for Scrap-Iron Scarecrow and Power Frame. Since Stardust has to tribute itself to negate a destruction effect, you can bait it and use Monster Reborn to steal it."},
        ];

        let kaiba = new DeckGuide();
        kaiba.title = "Kaiba";
        kaiba.thumbnailUrl = "https://i.imgur.com/u500jF5.png";
        kaiba.mathchups = [
            {title:'Yugi', imageUrl:'https://i.imgur.com/T9q3eBX.png', description:"The biggest threat is Buster Blader. Save effect removals for him and Paladin. Shrink can also be used to either run him over or wait for Blader to attack. Do not carelessly commit to a dragon presence unless you have a way to deal with Buster Blader at hand.\n\nYugi has 3 S/T cards that can revive blader so returning him to hand with Kaiser Glider can be preferable if you have other beatsticks since Yugi won't easily get 2 tributes for it. Sometimes crashing with Glider is the better option. \n\nA powerful move is to use Soul Release after destroying Blader to banish him from GY, getting rid of him permanently. Be careful of Mirror Force and use Interdimensional Matter Transporter to dodge it and other removal effects. Keep track of your LP because of Magic Cylinder. "}
        ];

        let joey = new DeckGuide();
        joey.title = "Joey";
        joey.thumbnailUrl = "https://i.imgur.com/GMhHJ8Q.png";

        let jaden = new DeckGuide();
        jaden.title = "Jaden";
        jaden.thumbnailUrl = "https://i.imgur.com/VgQbHf7.png";

        let chazz = new DeckGuide();
        chazz.title = "Chazz";
        chazz.thumbnailUrl = "https://i.imgur.com/lFAsOca.png";

        let jessie = new DeckGuide();
        jessie.title = "Jessie";
        jessie.thumbnailUrl = "https://i.imgur.com/yw4KAJj.png";

        let zane = new DeckGuide();
        zane.title = "Zane";
        zane.thumbnailUrl = "https://i.imgur.com/W1wcL7S.png";

        let yusei = new DeckGuide();
        yusei.title = "Yusei";
        yusei.thumbnailUrl = "https://i.imgur.com/r1ePgDn.png";

        let jack = new DeckGuide();
        jack.title = "Jack";
        jack.thumbnailUrl = "https://i.imgur.com/Lucm6ze.png";

        let playmaker = new DeckGuide();
        playmaker.title = "Playmaker";
        playmaker.thumbnailUrl = "https://i.imgur.com/KAM51Ks.png";

        let soulburner = new DeckGuide();
        soulburner.title = "Soulburner";
        soulburner.thumbnailUrl = "https://i.imgur.com/hUlodVY.png";

        let revolver = new DeckGuide();
        revolver.title = "Revolver";
        revolver.thumbnailUrl = "https://i.imgur.com/4oy9U3Q.png";

        let yugiDsod = new DeckGuide();
        yugiDsod.title = "Yugi (DSOD)";
        yugiDsod.thumbnailUrl = "https://i.imgur.com/IUcNs5w.png";

        let kaibaDsod = new DeckGuide();
        kaibaDsod.title = "Kaiba (DSOD)";
        kaibaDsod.thumbnailUrl = "https://i.imgur.com/h0SRmEO.png";

        let bakura = new DeckGuide();
        bakura.title = "Bakura";
        bakura.thumbnailUrl = "https://i.imgur.com/omK37q2.png";

        let guides = [
            atem, kaiba, joey, jaden, chazz, jessie, zane, yusei, jack, playmaker, soulburner, revolver, yugiDsod, kaibaDsod, bakura
        ];

        return guides;
    }
}