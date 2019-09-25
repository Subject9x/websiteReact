/*
WebsiteReact
Peter Roohr
Overview:
    Board game Projects data object
*/
const ProjectDataBoardGames = { "data" : [
  {
      "title" : "BattleSuit",
      "subtitle": "Action Board game of power-armored gladatorial combat",
      "url" : "TODO",
      "thumb" : "TODO",
      "date" : "Q3 2020",
      "team" : [
          {"name": "Peter Roohr"}
      ],
      "links" : [
      ],
      "features": ["Card-driven player vs player combat.",
                    "Resource management system for each player's battlesuit.",
                    "Drafting mechanic to build player's set of moves.",
                    "Different power suits to choose from.",
                    "Multiple game formats for variety."
                  ],
      "desc" : [
          "-Battlesuit- (name TBD) is a my first full effort to design and implement a board game. I created the first draft of the rules back in late 2014 and have built on those rules on-and-off over the past several years. The game is inspired by both tabletop wargaming and tournament fighter video games. I loved the idea of player-customizable move sets, and the fiddly rules that come with tabletop wargaming. I wanted to capture the feeling of commanding a powerful armored suit, but also not have the game take hours to play.",
          "Currently on its 30th revision, the game has come a long way from those early days. I've learned much about how gameplay is taught, and how people react to a new game. I've planned a full release which will include colored graphics for the Action Cards, custom artwork for the pawn pieces, tokens, etc."
      ],
      "mediaData" : [["some","rows"], ["some","rows"]]
  },

  
  {
    "title" : "Pit Fighter",
    "subtitle": "Action Board game of power-armored gladatorial combat",
    "url" : "TODO",
    "thumb" : "TODO",
    "date" : "December 2014",
    "team" : [
        {"name": "Peter Roohr"},
        {"name": "Matt Ryan", "url":""}
    ],
    "links" : [
    ],
    "features": ["Fast-paced Arena Combat.",
                  "Light and fun combat mechanics.",
                  "Player-to-Player dealing and backstabbing."
                ],
    "desc" : [
      "Pit Fighter came about as a homebrew skirmish board game that Matt and I threw together for game nights at his art studio. The game had to be easy enough for kids as young as 6 to be able to play, and to incorporate an amount of drawing on the part of prospective players. The core of the game is Conan-flavored gladiator combat, using six-sided dice (D6) for action resolution. However, Pit Fighter adds some fun wrinkles to the mix to keep the gameplay interesting.",
      "First, Character design. Matt wanted the game night to have a drawing exercise portion to accompany the game, so he came up with the idea that players draw 3 pit fighters they want to bring to the battle. Players draw their fighters onto each of the Character Sheets they will use for session. The Character Sheet also tracks stats like health; as Fighters take damage, they suffer specific penalties to their performance in the arena. Players are also given an amount of Gold to keep track of.",
      "Gold is used by the Players' non-fighting Characters to purchase weapons, place bets on other Players, and can be stolen in-game. There are 2 ways to win a game of Pit Fighter; last warrior standing in the arena, and the Player with the most Gold at the end of the game."
    ],
    "mediaData" : [["some","rows"], ["some","rows"]]
  },

  {
    "title" : "Mecha Kill-Team",
    "subtitle": "",
    "thumb" : "TODO",
    "date" : "December 2019",
    "team" : [
        {"name": "Peter Roohr"}
    ],
    "links" : [
      {"name":"Warhammer 40k: Kill Team", "url":"https://warhammer40000.com/kill-team/"}
    ],
    "features": ["Framework for RPG-style campaigns.",
                  "Based on Warhammer40k:Kill Team.",
                  "Players can unlock new equipment and abilities.",
                  "Easy-to-play Combat RPG experience."
                ],
    "desc" : [ "This is an UNOFFICIAL modification of the Warhammer40k:Kill Team rules set. The design goals were to expand the RPG potential of the rules, as well as shift the setting from infantry squads to fire teams of giant fighting robots. The original setup of Kill-Team is a Player-vs-Player scenario where each player builds a list of units to fight with (their Kill Team), I took this and changed it around to something more like an RPG.",
                "One player becomes the Game Master (GM) in charge of commanding the non-player forces, running the campaign, and generally managing the entire series of game sessions. The other players each take control of a single Model, they are pilots of the giant robots or tanks.",
                "Players also select which specialties their pilots feature, things like snipers, or brawlers. These choices unlock special abilities and select types of units the Players can pilot. I also wrote a conversion algorithm to port the stats of Battletech:Alpha Strike unit stats over to Kill-Team with varying levels of success."
    ],
    "mediaData" : [["some","rows"], ["some","rows"]]
  },

  {
    "title" : "LANDWAR",
    "subtitle": "",
    "url" : "TODO",
    "thumb" : "TODO",
    "date" : "TODO",
    "team" : [
        {"name": "Peter Roohr"},
        {"name":"Eamonn McHugh-Roohr", "url":"http://eamonnmr.com"}
    ],
    "links" : [
    ],
    "features": ["Easy-to-learn, pickup and play rules set.",
                  "Rules written for almost any scale of miniatures.",
                  "Extendable and customizable unit design rules",
                  "Can reprsent anything from dinosaurs to tanks."
                ],
    "desc" : [
      "LANDWAR was a side project of Eamonn and I's that grew out of my interest in solving some critical design issues in other wargames we had played. Additionally, we possess a large number of wargame miniatures from several differernt ranges and not enough time to play each individual game. Ergo, we wrote a rules engine that took many of our favorite mechanics from other games and synthesied them into our own system. We also created a unit design system that can account for almost any unit a player wants.",
      "The end result is a wargame that's fairly open-ended, limited by the creativity of the players involved. LANDWAR is also fairly accessible, with the rules available online for free, and the Unit Calculator as a webpage app for free as well. "
    ],
    "mediaData" : [["some","rows"], ["some","rows"]]
  }
]
};
  
export default ProjectDataBoardGames;