import { Injectable } from "@angular/core";
import { DeckGuide } from "../models/deck-guide.model";
import { Matchup } from "../models/matchup.model";

@Injectable({providedIn:'root'})
export class DeckGuideService {
    getGuides():DeckGuide[]{
        let atem = new DeckGuide();
        atem.title = "Yugi";
        atem.thumbnailUrl = "https://i.imgur.com/T9q3eBX.png";
        atem.deckListLink = "https://www.duelingbook.com/deck?id=19270748";
        atem.general = "The heart of the deck is the Dark Magician and Buster Blader duo. They are the main beaters you will want to go to, and the rest of the cards are mostly there to maintain field presence until you get to them. Skilled Dark Magician, Gold Sarchophagus, Dark Magic Curtain, and Emblem of the Dragon Destroyer are used to search for these two, respectively, if the ample amount of draw power doesn’t get to them first (Pot of Greed, Graceful Charity, and Card Destruction).\n \nMagnet Warriors, Knights, and the Gazelle/Berfomet duo are also here; however, they are most often used for maintaining field presence while you get to Dark Magician or Buster Blader. Summoning Valkyrion is not very likely, so do not focus on that unless the circumstances are such that you have a high chance of getting to the third Magnet Warrior. Valkyrion is thus mostly used as a discard fodder as he is a “Garnet” of the deck.";
        atem.combos=[];
        atem.mathchups = [
            {title:'Kaiba', imageUrl:'https://i.imgur.com/u500jF5.png', description:"Buster Blader and Dark Paladin are the strongest counters to Kaiba's deck. Focus on getting to them as soon as possible. Kaiba's strongest beaters are Dragons, and even one dragon hitting the field or GY is going to make Blader too big for Blue-Eyes. Save removal for Blue-Eyes. Keep in mind, Kaiba has Wall of Dark Illusion, so never attack face-down monsters with Buster Blader. Use something else to uncover what it is. \n\nKaiba also has Shrink so beware of face-downs when attacking with Buster Blader. If you are on Dark Paladin keep at least one card in your hand at all times to protect against it. Kaiba also runs Cyber Jar, Crush Card, and Ring of Destruction. You can't defend against that so make sure to hold on to Monster Reborn, Premature Burial, or Call of the Haunted to revive Buster Blader as soon as it gets destroyed.\n\nMagic Cylinder can end games if used on Blue-Eyes. Another specific use of Cylinder is to reduce Kaiba's life points to be lower than yours. This way Kaiba can't use Ring of Destruction on his Blue-Eyes (or your Blader) to defeat you. Obnoxious Celtic Guardian can't be destroyed by monsters with 1900 or more attack. Don't set it too early because Kaiba will run it over with weaker monsters. Use it after a powerful monster has been summoned to stall."},
            {title:'Joey', imageUrl:'https://i.imgur.com/GMhHJ8Q.png', description:"Joey has a lot of backrow to interrupt your attacks. Be cautious of cards that change ATK, and don't rush in blindly. Yugi has three S/T removals: Breaker, Dark Magic Attack, and Dust Tornado. The main backrow threat is Fairy Box so try to save removal for after it has been activated.\n\nJoey also runs Trap Hole of Spikes, so one way to protect against that is to not attack with an important monster in the same turn it was summoned."},
            {title:'Bakura', imageUrl:'https://i.imgur.com/omK37q2.png', description:'Your main concern is Destiny Board. Yugi has three S/T removals: Breaker, Dark Magic Attack, and Dust Tornado. Save them all for Destiny Board. Once it is removed from the field, you can also use them to get rid of The Dark Door and field spell, but keep in mind Dark Spirit Mastery can recycle Destiny Board so if you run out of removal, you are at risk of losing the game.'},
            {title:'Zane', imageUrl:'https://i.imgur.com/W1wcL7S.png', description:"Zane can OTK out of nowhere. Make sure to save your battle traps for Cyber End and Twin Dragons. You can use this high ATK to your advantage by saving Magic Cylinder for his big swings in order to OTK him instead.\n\nDark Paladin is very good against Zane because it can negate all of the fusion spells needed to bring out Zane's win conditions."},
            {title:'Yusei', imageUrl:'https://i.imgur.com/r1ePgDn.png', description:"Yusei's ace cards are both dragons, so Buster Blader is a good counter, given how Shooting Star Dragon can't run it over. However, Yusei has Junk Berserker and Junk Destroyer that can get over Buster Blader. Yusei can also win games without relying on dragons at all since most of his synchros are Warriors. Additionally, even if he does go for Stardust or Shooting Star, Armory Arm can help him run it over. \n\nTry to save Brain Control for Stardust and Shooting Star to tribute them. Save S/T removal for Scrap-Iron Scarecrow and Power Frame. Since Stardust has to tribute itself to negate a destruction effect, you can bait it and use Monster Reborn to steal it."},
        ];

        let kaiba = new DeckGuide();
        kaiba.title = "Kaiba";
        kaiba.thumbnailUrl = "https://i.imgur.com/u500jF5.png";
        kaiba.deckListLink = "https://www.duelingbook.com/deck?id=19270771";
        kaiba.general = "As we all know, Blue-Eyes is the main star of Kaiba’s deck. The Melody of Awakening Dragon is a consistency booster that searches two of them which (along with Versago the Destroyer which is used as a substitute for a fusion material) makes summoning Blue-Eyes Ultimate Dragon a lot easier. Cost Down and Soul Exchange can help bring out your higher-level monsters while the latter also works as removal of powerful monsters.\n\n Use Interdimensional Matter Transporter to save your important monsters from being destroyed by battle or effects. Soul Release and Return from Different Dimension can be used together in order to swarm the field and swing for game. This combo can also be used to bring out XYZ - Dragon Cannon if you banish and then return the union monsters. \n\n Card Crush Virus is played as its original pre-errata version, and its effect will destroy all 1500+ ATK monsters the opponent draws in their following 3 turns. It doesn't give the opponent the option to send from deck to GY. It is a powerful form of removal so save it for Buster Blader and Paladin. Hold on to Saggi to use him as tribute for this card. Wall of Illusion and Cyber Jar can also be used. \n\nRing of Destruction can be used not just for removal but also for finishing games due to its burn effect. A common way to finish your opponent is by attacking directly with Blue-Eyes and then destroying it with this card for a total of 6000 damage.";
        kaiba.mathchups = [
            {title:'Yugi', imageUrl:'https://i.imgur.com/T9q3eBX.png', description:"The biggest threat is Buster Blader. Save effect removals for him and Paladin. Shrink can also be used to either run him over or wait for Blader to attack. Do not carelessly commit to a dragon presence unless you have a way to deal with Buster Blader at hand.\n\nYugi has 3 S/T cards that can revive blader so returning him to hand with Kaiser Glider can be preferable if you have other beatsticks since Yugi won't easily get 2 tributes for it. Sometimes crashing with Glider is the better option. \n\nA powerful move is to use Soul Release after destroying Blader to banish him from GY, getting rid of him permanently. Be careful of Mirror Force and use Interdimensional Matter Transporter to dodge it and other removal effects. Keep track of your LP because of Magic Cylinder. "}
        ];

        let joey = new DeckGuide();
        joey.title = "Joey";
        joey.thumbnailUrl = "https://i.imgur.com/GMhHJ8Q.png";
        joey.deckListLink = "https://www.duelingbook.com/deck?id=19271026";
        joey.general = "The biggest monsters are Red-Eyes, Jinzo and Gilford. Red-Eyes can be searched with Fusion Conscription due to the inclusion of Black Skull Dragon in the Extra Deck. Jinzo was a meta-defining card and as such is great here too. Keep in mind that while Jinzo is active, he will block your traps as well so rely on spells like Graceful Dice to save him from stronger monsters. Gilford is a Raigeki when summoned with 3 tributes, but it is also a good beatstick if summoned any other way due to his 2800 ATK. \n\nSeeing how Flame Swordsman is the second most iconic monster Joey has; I included it in the deck albeit he's used in an unusual way. You get to him with Instant Fusion and then either use him as a tribute fodder or let him just destroy himself when the turn ends so that you can revive him next turn. Blue Flame Swordsman does exactly that because when it is destroyed it summons a FIRE warrior from GY.\n\nJoey is designed as a control deck that often relies on luck but when the gamble pays off it really does so. Time Wizard is really powerful removal that can be searched with Fusion Conscription. Generally, keep it for when you really need it since it will get run over by most monsters due to its low ATK. It can also die to its own effect but note that it's a soft once per turn so you can revive it and try again. \n\nAnother great out is Copycat which can copy the stats of any troublesome monster and then crash into it. Given the large number of cards that boost your monsters' stats or nerf your opponents, a lot of the times Copycat can be made even bigger than your opponent's ace monster making it a real threat.\n\nSpeaking of cards that increase ATK, Metalmorph can be used to run over many monsters if equipped to even a moderate stats monster (like Alligator's Sword). When it comes to carda that reduce stats, the star of the show is Fairy Box because as long as it's in play your opponent will have to gamble every time they declare an attack, since if they guess the coin toss wrong, they will lose their attacking monster and take battle damage. \n\nGraverobber is a situational card that will be as useful as the best spell card in your opponent's GY. One of the best generic plays is stealing your opponent's staples like Graceful Charity or Monster Reborn and using them as your own to either generate card advantage or revive a monster.";

        let jaden = new DeckGuide();
        jaden.title = "Jaden";
        jaden.thumbnailUrl = "https://i.imgur.com/VgQbHf7.png";
        jaden.deckListLink = "https://www.duelingbook.com/deck?id=19270880";
        jaden.general = "Jaden has a massive Extra Deck and no single game plan. You must evaluate which fusion materials you are likely to gain access to and plan accordingly. To that extent, Jaden uses cards like E - Emergency Call, Reinforcements of the Army and Hero Signal (along with draw staples) to gain access to particular materials.\n\nSince the deck runs Miracle Fusion and Miracle Contact, you can also use the GY as a resource which means you don't have to just hold the materials you searched for in hand. When it comes to triple fusions like Tempest and Storm Neos you will generally try to summon them through the Miracle spells rather than Polymerization.\n\nMask Change is another very useful card because it both sends a Hero from Deck to GY (which means you can revive it or use it for Miracle Fusion) and changes another monster's name into the name of the sent Hero. This is very useful for Neos fusions since it isn't easy to get Neos and Neo-Spacians out on the field. Alternatively, it can also be used to dump Necroshade and summon Neos or Bladedge without a tribute.\n\nWhen it comes to Neo-Spacians you generally don't mind having them get destroyed in battle since you want to have them in GY for Limit Reverse and Miracle Contact. These two cards make contact fusing easier. You can also use Silent Doom and Monster Reborn to revive Neos and then normal summon a Neo-Spacian to contact fuse. Standout Neo-Spacians are Air Hummingbird and Grand Mole. The former can significantly increase your life points, helping you survive longer until you get your fusion materials, while the latter is a busted recursive removal that outs every other character's ace monster.";
        jaden.mathchups = [
            {title:'Chazz', imageUrl:'https://i.imgur.com/lFAsOca.png', description:"Chazz is focused mainly on levelling hp his Armed Dragons so Grand Mole can greatly cripple his strategy by constantly returning his higher-level dragons back to hand. Given how he must tribute a specific monster to get them out, once you return them to hand, he has to once again first access that specific monster before he can bring them out.\n\nDark Panther can copy Armed Dragon effects to destroy monsters so you can use it to get rid of problematic cards. Ideally, you will use it to copy Armed Dragon LV10 since it is basically a walking Lightning Vortex.\n\nWhile Flame Wingman is one of Jaden's signature cards, all higher-level Armed Dragons can easily run it over so it is generally not worth going into it. Other higher ATK heroes are better for this matchup. Tempest is good for preventing Armed Dragon LV5 from levelling up since it has to destroy a monster by battle and you can make Tempest immune to battle destruction, however, it can be destroyed by Armed Dragon effects if Chazz has a monster with 2800 or more ATK in hand. Due to the cost of Tempest (requires 3 materials + a fusion spell) you should think carefully before you commit to that play.\n\nChazz most often starts his Armed Dragon plays with summoning Armed Dragon LV3. He most often gets to it through Masked Dragon being destroyed. Since Chazz has 3 Masked Dragons in his deck, if he sets a monster, chances are high that it's one of them. Thus, you should be careful when you attack because if you rush in blindly, you risk facing Armed Dragon LV5 (and then very quickly LV7) without anything to out it. Of course, Chazz knows about this pressure so he will sometimes set an Ojama to bluff and stall.\n\nChazz doesn't have any backrow threats beside Chthonian Blast, so if you see him set a card, make sure that when you enter battle your important monster isn't the only other monster on the field. Chthonian Blast will destroy the weakest monster on the field and if yours is the only one remaining after the battle ends, it will be destroyed."},
            {title:'Zane', imageUrl:'https://i.imgur.com/W1wcL7S.png', description:"Zane can OTK out of nowhere. Playing defensively is an option since cards like Mudballman can stop Cyber Twin and having bodies lined up in defense position can eat attacks, however, a Cyber Twin buffed by Power Bond or Limiter Removal can OTK through that. Your best line of defense is Grand Mole since it can be tricky to get Cyber fusions back on the field once their materials have been used.\n\nSometimes, even ordinary Cyber Dragons are a problem since even they have 2100 ATK so Zane will sometimes rely on them for beatdown while he waits for a fusion spell and other materials. If he opts for that strategy, an early fusion summon of a card like Thunder Giant or Plasma Vice is huge since Zane generally can't fuse with Cyber Dragons in GY unless he has Cybernetic Fusion Support which is a one off and costs half his LP."},
            {title:'Jessie', imageUrl:'https://i.imgur.com/yw4KAJj.png', description:"Jessie can quickly build field presence while waiting to summon Rainbow Dragon. Any of your fusion monsters will do a good job of holding the Crystal Beasts at bay since the strongest base monster is Topaz Tiger which gets up to 2000 ATK when attacking. However, things change with Crystal Release which can give any Crystal Beast monster an additional 800 ATK which can be enough to run over a lot of your fusions. \n\nKeep in mind that a Crystal Beast is almost never out of rotation since it can be summoned back from S/T zone. Always expect that you will be facing a buffed Topaz or Pegasus again even if you destroyed them already."},
        ];

        let chazz = new DeckGuide();
        chazz.title = "Chazz";
        chazz.thumbnailUrl = "https://i.imgur.com/lFAsOca.png";
        chazz.deckListLink = "https://www.duelingbook.com/deck?id=19270773";
        chazz.general = "There are three themes: Armed Dragon machine union fusions and Ojamas. Of these the most dominant is the Armed Dragon so you will be focusing on that one most of the time as your main gameplan. Use Masked Dragon to summon Armed Dragon LV3 from deck and then level it up in your standby phase. Alternatively, you can just tribute summon a LV5 if you have it in hand and get your plays going like that.\n\nUnions can be tricky to fuse all the way because their boss monster requires you to have both VW - Tiger Catapult and XYZ - Dragon Cannon on the field. However, you have some help in getting to these two in the form of Fusion Conscription and Fusion Deployment. These are consistency boosters added to make this line easier to pull off.\n\nOjamas are generally used as fodder due to their weak stats and lack of effects. They can be searched with Fusion Conscription and Fusion Deployment if you want to go for Ojama King or Ojama Delta Hurricane. Ojamagic can search them too, but it is very situational and only works if all 3 Ojamas are in the deck.";
        chazz.mathchups = [
            {title:'Jaden', imageUrl:'https://i.imgur.com/VgQbHf7.png', description:"The biggest threat is Grand Mole. It completely nullifies your levelling process and you have no backrow that can destroy it. Instead, you'll have to play around it by manipulating the game state in such a way that Mole becomes a net negative. Chazz can start games aggressively so put the pressure on early. When Grand Mole shows up make sure to have at least one level 4 monster on the field alongside your beatstick. This way even if Mole returns one to your hand, you will have another one left. Ideally, you want to counter Mole with two level 4 or lower monsters. This way, if Mole returns any of them, you can just normal summon that monster again on your turn and continue attacking with it. Since Mole uses up Jaden's normal summon, he won't be accomplishing anything by continuously bringing out Mole."}
        ];

        let jessie = new DeckGuide();
        jessie.title = "Jessie";
        jessie.thumbnailUrl = "https://i.imgur.com/yw4KAJj.png";
        jessie.deckListLink = "https://www.duelingbook.com/deck?id=19271116";

        let zane = new DeckGuide();
        zane.title = "Zane";
        zane.thumbnailUrl = "https://i.imgur.com/W1wcL7S.png";
        zane.deckListLink = "https://www.duelingbook.com/deck?id=19271077";

        let yusei = new DeckGuide();
        yusei.title = "Yusei";
        yusei.thumbnailUrl = "https://i.imgur.com/r1ePgDn.png";
        yusei.deckListLink = "https://www.duelingbook.com/deck?id=19270945";

        let jack = new DeckGuide();
        jack.title = "Jack";
        jack.thumbnailUrl = "https://i.imgur.com/Lucm6ze.png";
        jack.deckListLink = "https://www.duelingbook.com/deck?id=19271000";

        let playmaker = new DeckGuide();
        playmaker.title = "Playmaker";
        playmaker.thumbnailUrl = "https://i.imgur.com/KAM51Ks.png";
        playmaker.deckListLink = "https://www.duelingbook.com/deck?id=19271155";

        let soulburner = new DeckGuide();
        soulburner.title = "Soulburner";
        soulburner.thumbnailUrl = "https://i.imgur.com/hUlodVY.png";
        soulburner.deckListLink = "https://www.duelingbook.com/deck?id=19271232";

        let revolver = new DeckGuide();
        revolver.title = "Revolver";
        revolver.thumbnailUrl = "https://i.imgur.com/4oy9U3Q.png";
        revolver.deckListLink = "https://www.duelingbook.com/deck?id=19271196";

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