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
        {"name": "Eamonn McHugh-Roohr", "url":"url stack2"},
        {"name": "battleMETAL on github", "url": "https://github.com/Subject9x/battleMETAL"},
        {"name": "Dev Blog", "url":"https://subjecttotesting.blogspot.com/2018/05/the-cold-rise-from-sleep.html"}
    ],
    "tech" : [
        {"name": "Quake", "url":"https://en.wikipedia.org/wiki/Quake_(video_game)"}, 
        {"name": "Darkplaces", "url":"https://icculus.org/twilight/darkplaces/"},
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
    ],
    "mediaData" : [["some","rows"], ["some","rows"]]
},
{
    "title" : "Website - battleMETAL",
    "subtitle": "landing page for the game",
    "url" : "http://www.battlemetal.net",
    "thumb" : "/img/projectsCode/strikerAlphaThumb.png",
    "date" : "Q4-2019",
    "team" : [
        {"name": "Peter Roohr"},
        {"name": "website on github", "url": ""},
    ],
    "tech" : [
        {"name": "Bootstrap UI", "url":"https://getbootstrap.com/"}, 
        {"name": "ReactJS", "url":"https://reactjs.org/"},
        {"name": "Visual Code"}
    ],
    "features": ["Rebuilt static-bootstrap website to use ReactJS.",
                    "Leverages ReactJS to make a better website layout faster."
    ],
    "desc" : ["My original website I built over a few months sometime in 2015, and never really completed it. The board game and music sections remained 'coming soon' for about 5 years now - I don't they're coming. Looking to rebuild my website and give the layout a facelift, I setteld on trying ReactJS. Front-end web work isn't my strongest suit, but I enjoy hobby-level programming just as much as my work.",
                "Overall I found the process of standing up a React app to very straightforward and enjoyable. React's paradigm of Components is more aligned with my background of J2EE development. The speed with which you can lay items out on a page with React was also very nice, I could adjust my page layouts for my website almost in real time, wih a minimum of shifting code/functionality."
    ]  ,
    "mediaData" : []
},
]};

export default ProjectDataCode;
