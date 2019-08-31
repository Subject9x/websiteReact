/*
WebsiteReact
Peter Roohr
Overview:
    Code Projects data object, exported to -> CodeProjectPage.js
*/
const ProjectDataCode = { "data" : [
{
    "title" : "battleMETAL",
    "subtitle": "Retro-FPS of Mecha combat",
    "url" : "http://www.battlemetal.net",
    "thumb" : "/img/projectsCode/strikerAlphaThumb.png",
    "date" : "Q4-2019",
    "team" : [
        {"name": "Peter Roohr"}, 
        {"name": "Eamonn McHugh-Roohr", "url":"http://eamonnmr.com"}
    ],
    "links" : [
        {"name": "battleMETAL on github", "url": "https://github.com/Subject9x/battleMETAL"},
        {"name": "Dev Blog", "url":"https://subjecttotesting.blogspot.com/2018/05/the-cold-rise-from-sleep.html"}
    ],
    "tech" : [
        {"name": "Quake", "url":"https://en.wikipedia.org/wiki/Quake_(video_game)"}, 
        {"name": "Darkplaces", "url":"https://icculus.org/twilight/darkplaces/"},

    ],
    "tooling" : [       
        {"name": "Trenchbroom", "url":"https://kristianduske.com/trenchbroom/"},
        {"name": "Milkshape", "url":"http://www.milkshape3d.com/"},
        {"name": "Blender", "url":"https://www.blender.org/"},
        {"name": "Gimp", "url":"https://www.gimp.org/"},
        {"name": "Ultimate Unwrap 3d", "url" : "https://www.unwrap3d.com/u3d/index.aspx"}
    ],
    "features": ["Dedicated mech combat and damage model.",
                    "Customizable HUD api.",
                    "Core game code rebuilt into a framework for mech game design.",
                    "Rebuilt AI api to account for new game mechanics.",
                    "Rebuilt whole UIX to fit the game.",
                    "Complete Character customization screen."
                ],
    "desc" : ["battleMETAL is a retro-style mecha FPS that I built on top of the Quake engine, using a source-port called Darkplaces. I designed the game from scratch, inspired by the Mechwarrior and Earthsiege games from the 90's. In battleMETAL the player takes control of massive, walking tanks called 'Metals. They are tasked with completing mssions like patrols, base defense, and interceptions of enemy forces. The player may customize their 'Metal with weapons and equipment they've unlocked through gameplay.",
                "I created a dev blog series over on Blogger that has summarized many of the design choices I made and why. You can find the blog link above, same with the link to the github project. I developed the main game code from Aug 2016 to about Aug 2019, 3 years of development. In that time, I radically altered the features and functionality of the vanilla game of Quake.",
                "A sub-goal of the game project was to also provide a few new API's for Quake C; the game-code that is used by Quake for modifications, to allow modders to make their own mech-style games painlessly. I've created helpful documents and a design bible that can be found on the github wiki of the project."
    ],
    "mediaData" : [["/img/projectsCode/battlemetal/battlemetal_1.png","/img/projectsCode/battlemetal/battlemetal_2.jpg"],
         ["/img/projectsCode/battlemetal/battlemetal_3.jpg","/img/projectsCode/battlemetal/battlemetal_4.jpg"]
    ]
},

{
    "title" : "Website - battleMETAL",
    "subtitle": "landing page for the game",
    "url" : "http://www.battlemetal.net",
    "thumb" : "/img/projectsCode/strikerAlphaThumb.png",
    "date" : "Q4-2019",
    "team" : [
        {"name": "Peter Roohr"},
    ],
    "links" :[
        {"name": "website on github", "url": "https://github.com/Subject9x/battleMETAL_website"}
    ],
    "tech" : [
        {"name": "Bootstrap UI", "url":"https://getbootstrap.com/"}, 
        {"name": "ReactJS", "url":"https://reactjs.org/"},
        {"name":"todo-reactstrap", "url":""}
    ],
    "tooling" : [
        {"name": "Visual Code", "url" : "https://code.visualstudio.com/"}
    ],
    "features": ["Rebuilt static-bootstrap website to use ReactJS.",
                    "Leverages ReactJS to make a better website layout faster.",
                    "Can post game news items fairly easily."
    ],
    "desc" : ["The original website was thrown up quickly in 2017 as a static bootstrap page that people could visit to download the game and learn a bit more about it. Now that the game is mostly done, I decided to finish up the website. The big changes are mostly back-end for content management. I did not want to have to spend a lot of time managing the website, so building it in React seemed like the best direction to take."
    ],
    "mediaData" : [["old image", "new image"]]
},

{
    "title" : "LANDWAR - Unit Calculator",
    "subtitle": "",
    "url" : "",
    "thumb" : "todo",
    "date" : "Q4-2019",
    "team" : [
        {"name": "Peter Roohr"}, 
        {"name": "Eamonn McHugh-Roohr", "url":"http://eamonnmr.com"},
        {"name": "Nick Drost", "url":"https://github.com/ndrost21"}
    ],
    "links" : [
        {"name": "project on github", "url": "https://github.com/Subject9x/LANDWAR_unitBuilder"},
        {"name": "LANDWAR game", "url":"todo"}
    ],
    "tech" : [
        {"name": "ReactJS", "url":"https://reactjs.org/"},
        {"name":"todo-reactstrap", "url":""}
    ],
    "tooling" :[
        {"name": "Visual Code", "url" : "https://code.visualstudio.com/"}
    ],
    "features": ["Game tool for LANDWAR players.",
                    "Simplifies the process for creating custom game units for LANDWAR."
                ],
    "desc" : ["LANDWAR is a tabletop wargame designed by Eamonn and I. One of our big design goals was allowing players to create custom units with their own stats. To help achieve this, we built the LANDWAR Unit Calculator. This app takes the equations for unit stats out of the LANDWAR rulebook and sets them up in an interactive way for players to create Units quickly and painlessly. The bones of the Unit Calculator were made with plain javascript at the start; this agnostic approach meant we didn't have to worry about compatability while we worked on the most important functionality.",
                ""
    ],
    "mediaData" : [["some","rows"], ["some","rows"]]
},

{
    "title" : "LANDWAR - Game Website",
    "subtitle": "",
    "url" : "todo",
    "thumb" : "todo",
    "date" : "todo",
    "team" : [
        {"name": "Peter Roohr"}
    ],
    "tech" : [
        {"name": "ReactJS", "url":"https://reactjs.org/"},
        {"name":"todo-reactstrap", "url":""}
    ],
    "tooling" :[
        {"name": "Visual Code", "url" : "https://code.visualstudio.com/"}
    ],
    "features": ["todo",
                    "todo"
                ],
    "desc" : ["Part of the ReactJS wave of my other personal projects. This wbsite was also built using ReactJs, which I find to be very helpful to stand up feature-rich and interactive website layouts. The mina goal for this website was to explain the LANDWAR tabletop wargame to players, direct those players to helpful resources, and provide any pertinent news about the game."
    ],
    "mediaData" : [["some","rows"], ["some","rows"]]
},

{
    "title" : "Zond I",
    "subtitle": "",
    "url" : "https://github.com/EamonnMR/Zond",
    "thumb" : "/img/projectsCode/zondThumb.png",
    "date" : "23 JAN 2013",
    "team" : [
        {"name": "Peter Roohr"},
        {"name": "Eamonn McHugh-Roohr", "url":"http://eamonnmr.com"}
    ],
    "tech" : [
        {"name": "LWJGL", "url" : "https://www.lwjgl.org/"},
        {"name": "Slick2D", "url" : "http://slick.ninjacave.com/"},
        {"name": "XPP", "url" : "http://www.extreme.indiana.edu/xgws/xsoap/xpp/"}
    ],
    "tooling":[
        {"name": "Gimp", "url":"https://www.gimp.org/"}
    ],
    "links":[
        {"name":"github", "url":"https://github.com/EamonnMR/Zond"}
    ],
    "features": ["Customizable HUD",
                    "Customizable ships",
                    "Space physics",
                    "Easy mod system using JSON-like data language.",
                    "Easy-to-learn Level Data Structure for customizing levels."
                ],
    "desc" : ["Zond is a top-down, 2D space combat game developed in Java for computer. This was the first game project that I completed from start to finish. Work began in late Spring of 2012 with my cousin, Eammon. Our stated goal was to create a game from scratch to get experience developing games. We chose a top-down 2d format because it was an attainable setup. Both of us also have a love of the Space Race Era and relevant spacecraft designs.",
                "Zond plays almost like a modified version of Asteroids. The player takes control of a ship either from NASA or the USSR. The game provides a few scenarios each with different objectives. Before each mission, the player may customize various parts of their ship; engines, weapons, and the ship itself. Each item has varied stats that affect ship performance.",
                "A cool feature; Eammon devised his own JSON-like language that we used to create the data files for the game. These data files are colloquially called 'rust' files because of the .rst extension. The language itself operates almost exactly like JSON and can be edited with any text editor.",
                "Zond was developed to a 'beta' state by December 2012 and a playable build was released for Christmas 2012. A follow up patch adding in slightly better AI, bullet spread, and a few fixes was finished for January 2013. The release you can find here is the 2013 version."
    ],
    "mediaData" : [["/img/projectsCode/zond1/zond1.png","/img/projectsCode/zond1/zond2.png"], ["/img/projectsCode/zond1/zond3.png","/img/projectsCode/zond1/zond4.png"]]
},

{
    "title" : "Personal Website 2015",
    "subtitle": "",
    "thumb" : "/img/projectsCode/roohrsite1Thumb.png",
    "date" : "AUG 2015",
    "team" : [
        {"name": "Peter Roohr"}
    ],
    "tech" : [
        {"name": "Bootstrap UI", "url":"https://getbootstrap.com/"}, 
    ],
    "features": ["Simple static website.",
                    "Quick stand-up."
                ],
    "desc" : ["The original website I put up in 2015, built pretty much out of Bootstrap and jQuery. The website pretty basic, as I had just decided to take up Bootstrap a few months before hand. The website served ably enough for 5 years before being upgraded with React and a total rebuild in 2019. There were whole sections of the old website I never compeleted due to structural issues - issues mostly caused by being a very simple setup."],
    "mediaData" :[
        ["/img/projectsCode/website2015/website2015_1.png", "/img/projectsCode/website2015/website2015_2.png"],
        ["/img/projectsCode/website2015/website2015_3.png", "/img/projectsCode/website2015/website2015_4.png"]
    ]
},

{
    "title" : "App - Alpha Striker",
    "subtitle": "",
    "url" : "todo",
    "thumb" : "/img/projectsCode/strikerAlphaThumb.png",
    "date" : "AUG 2015",
    "team" : [
        {"name": "Peter Roohr"}
    ],
    "tech" : [
        {"name":"AngularJS", "url":""}
    ],
    "links" : [
        {"name" : "github", "url" : "https://github.com/Subject9x/StrikerAlphaToolkit"}
    ],
    "features": ["Game aide for Battletech:Alpha Strike.",
                    "Increases speed-of-play by automating calculations",
                    "Enhances gameplay by providing in-time game data for players."
    ],
    "desc" : ["This is not an official product of, for, or by Catalyst Game Labs; nor an officially licensed Battletech product.",
                "Coverage out of the way, here's a good printout:",
                "Battletech:Alpha Strike is a tabletop, miniatures, wargame based on the Battletech franchise. Players command all sorts of armored fighting vehicles and walking warmachines. During the game, one of the actions a Unit can take is a Ranged Attack in which players roll 6-sided dice to see if they've successfully hit their target. Battletech:Alpha Strike has a fairly complicated means of determining the odds of those dice; modifiers like range, intervening terrain, the movement of target and attacker, all have an affect.",
                "Although this is a detailed way of determining hits, it can be extremely taxing to the average player, so much so that I made this calculator. Basically the calculator turns the big list of modifiers into UI buttons and checkboxes, removing the need to actually calculate anything. Players simply input the conditions of the attack to be made, and the system prints out the number that the player needs to roll. It also colors this number based on odds, a lower probabilty of success will be red and vice versa.",
                "I never got the entire app completed, but I got the basic version of it functioning well enough, and even optimized the layout for mobile."

    ],
    "mediaData" : [["/img/projectsCode/strikeralpha/strikeralpha2.png","/img/projectsCode/strikeralpha/strikeralpha1.png"], 
        ["/img/projectsCode/strikeralpha/strikeralpha3.png","/img/projectsCode/strikeralpha/strikeralpha4.png"]
    ]
},

{
    "title" : "BattleRigs",
    "subtitle": "prototype",
    "thumb" : "todo",
    "date" : "N/A",
    "team" : [
        {"name": "Peter Roohr"}
    ],
    "tech" : [
        {"name" : "BabylonJS", "url" : ""}
    ],
    "tooling" :[
        {"name": "Milkshape", "url":"http://www.milkshape3d.com/"},
        {"name": "Gimp", "url":"https://www.gimp.org/"}
    ],
    "features": ["3D action-shooter with tanks.",
                    "Tile-data generated level geometry."
                ],
    "desc" : ["This was supposed to be a spiritual successor to an old DOS game that I adored from my youth; Assault Rigs, 1996 from Psygnosis. It was a maze-running game. The player would pick one of three different tank types, and then every level was maze / puzzle. The player was tasked with grabbing all the gems (yes, gemstones) in a map, and then locate the exit within a time limit.",
                "For whatever reason, the game stuck with me. I enjoyed the aethetics - there were 4 different 'zones' (tron-style, steampunk, sci-fi, ww2), and the level building was fun to engage with.",
                "I tried to recreate this experience on my own with the BattleRigs project with mixed success. I thought at the time that HTML5 was a good future direction to move in for game creation."
    ],
    "mediaData" : [["some","rows"], ["some","rows"]]
},

{
    "title" : "Mechwar2D:Mercenaries",
    "subtitle": "prototype",
    "thumb" : "/img/projectsCode/bt2dThumb.png",
    "date" : "N/A",
    "team" : [
        {"name": "Peter Roohr"}
    ],
    "tech" : [
        {"name":"Artemis ECS", "url":"http://gamadu.com/artemis/'"},
        {"name":"Google GSON", "url" :"https://code.google.com/p/google-gson/"},
        {"name":"LWJGL", "url":"https://www.lwjgl.org/"},
        {"name":"TWL GUI", "url":"http://twl.l33tlabs.org/"}

    ],
    "tooling" :[
        {"name":"TileD", "url":"http://www.mapeditor.org/"},
        {"name": "Gimp", "url":"https://www.gimp.org/"}
    ],
    "features": ["Top-down, 2D action shooter.",
                    "Mech-based gameplay.",
                    "MOBA-style controls and feel."
                ],
    "desc" : ["A prototype I had for a long time; it started with the inability to make a complete 3D mech game at the time (2013ish). I thought, what if I got 'most' of the mech game mechanics working but not 3D? ergo this prototype. I'd say now, it pretty much was a MOBA-esque game, the player controls their character with mouse and WASD.",
                "Shooting was handled like any decent 2D top down game, however I wanted the ability to do semi-destructible environments and hit-locations on the mechs themselves. Overall, this specific project proved to be a dead-end at the time, but I learned a bit more about making 2D games and game design overall. I would like to return to the concept someday.",
                "I also attempted to port this to HTML5/Javascript with mixed success, although it ran nicely in a browser, the inability to do full mouse-grab was an impediment. Mouse grab allows the program to prevent the user's mouse from spilling over the edge of the game-window. For a reaction-focused game, this would have been crucial."
    ],
    "mediaData" : [["/img/projectsCode/mw2d/mw2d1.png","/img/projectsCode/mw2d/mw2d2.png"], ["/img/projectsCode/mw2d/mw2d3.png"]]
},

{
    "title" : "Personal Website 2019",
    "subtitle": "An old website reforged",
    "thumb" : "todo",
    "date" : "SEP 2019",
    "team" : [
        {"name": "Peter Roohr"}
    ],
    "tech" : [
        {"name": "ReactJS", "url":"https://reactjs.org/"}
    ],
    "tooling" : [
        {"name": "Visual Code", "url" : "https://code.visualstudio.com/"}
    ],
    "features": ["Fully templated design for easy extensibilty",
                    "Data-driven page layouts.",
                    "Lightweight NavBar system."
                ],
    "desc" : ["My original website I built over a few months sometime in 2015, and never really completed it. The board game and music sections remained 'coming soon' for about 5 years now - I don't they're coming. Looking to rebuild my website and give the layout a facelift, I setteld on trying ReactJS. Front-end web work isn't my strongest suit, but I enjoy hobby-level programming just as much as my work.",
        "Overall I found the process of standing up a React app to very straightforward and enjoyable. React's paradigm of Components is more aligned with my background of J2EE development. The speed with which you can lay items out on a page with React was also very nice, I could adjust my page layouts for my website almost in real time, wih a minimum of shifting code/functionality.",
        "Also the Visual Code IDE was pleasant to work with, its workspace managment being smooth to use. Configuring it to work with ES6 and JSX was simple enough, the plugin-oriented nature is one of Visual Code's strong points."
    ]
}
]};

export default ProjectDataCode;