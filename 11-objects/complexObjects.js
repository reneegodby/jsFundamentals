/**
 * OBJECTS * 
 * https://www.w3schools.com/js/js_objects.asp
 * https://www.w3schools.com/js/js_object_properties.asp
 * https://www.w3schools.com/js/js_object_methods.asp
 */

let netflix = {             //object
    id: 9,
    name: 'Super Store',
    season1: {              //object
        seasonInfo: {       //object
            episodeInfo:[   //array
                {episode: 1, episodeName: 'Pilot'},
                {episode: 2, episodeName: 'Magazine Profile'},
                {episode: 3, episodeName: 'Shots and Salsa'},
                {episode: 4, episodeName: 'Mannequin'},
                {episode: 5, episodeName: 'Shoplifter'},
                {episode: 6, episodeName: 'Secret Shopper'},
                {episode: 7, episodeName: 'Color Wars'},
                {episode: 8, episodeName: 'Wedding Day Sale'},
                {episode: 9, episodeName: 'All-Nighter'},
                {episode: 10, episodeName: 'Demotion'},
                {episode: 11, episodeName: 'Labor'},
            ]
        }
    },
    season2: {},
    season3: {},
}

console.log(netflix);
console.log(netflix.season1.seasonInfo);
console.log(netflix.season1.seasonInfo.episodeInfo);
console.log(netflix.season1.seasonInfo.episodeInfo[3]);
console.log(netflix.season1.seasonInfo.episodeInfo[3].episodeName);

console.log(netflix.season1.seasonInfo.episodeInfo[7].episodeName);

console.log(netflix.season1.seasonInfo.episodeInfo[7].episode);



//JSON -> JavaScript Object Notation

//stringified object
var json = {
    "workbench.colorTheme": "One Dark+ (Sublime)",
    "window.zoomLevel": 3,
    "files.exclude": {
        "**/.git": true,
        "**/.DS_Store": true,
        "**/*.js": {
            "when": "$(basename).ts"
        },
        "**/*.js.map": {
            "when": "$(basename)"
        }
    },
    "editor.fontFamily": "Monaco, 'Courier New', monospace",
    "editor.detectIndentation": false,
    "editor.letterSpacing": 0,
    "editor.tabSize": 2,
    "files.autoSave": "off",
    "editor.wordWrap": "on",
    "extensions.ignoreRecommendations": true,
    "[html]": {},
    "files.associations": {
        "*.html": "html",
        "*.js": "javascriptreact"
    },
    "html.format.indentInnerHtml": true,
    "editor.fontSize": 11,
    "liveServer.settings.donotShowInfoMsg": true,
    "liveServer.settings.port": 3500,
    "[javascriptreact]": {}
}

//
let spaceJam = {        //object
    toonSquad: {        //key    
        human: 'Michael Jordan',    //values
        rabbit1: 'Bugs Bunny',
        rabbit2: 'Lola Bunny',
        duck: 'Daffy Duck',
        tDevil: 'Tasmanian Devil',
        bird: 'Tweety',
        cat: 'Sylvester',
        pig: 'Porky Pig'
    },
    monstars: {         //key
        0: 'Bupkus',    //values
        1: 'Bang',
        2: 'Nawt',
        3: 'Pound',
        4: 'Blanko'
    },
    nbaPlayers: {       //key
        phoenixSuns: 'Charles Barkley', //values
        newJerseyNets: 'Shawn Bradley',
        newYorkNicks: 'Patrick Ewing',
        charlotteHornets1: 'Larry Johnson',
        charlotteHornets2: 'Muggsy Bogues'
    }
}

console.log(Object.keys(spaceJam));  //Object.keys returns an array consisting of the keys in our object
console.log(Object.keys(spaceJam.toonSquad));
console.log(Object.keys(spaceJam.toonSquad).toString()); // toString prints out as a single string with the keys instead of an array.
console.log(spaceJam.toonSquad.cat);
console.log(Object.values(spaceJam));
console.log(Object.values(spaceJam.toonSquad));


//got lost here
let garden = {
    vegetable: 'zucchini',
    flower: 'sun flower',
    fruit: 'grape',
    water: true,
    sun: true,
    size: 10
}

console.log(garden.vegetable);

let inc = 'fruit';
console.log(garden[inc]); // .notation looks for exact match with a key. We use square brackets instead. Treat what's inside like a string.
//Square bracket notation lets us dynamically refer to the keys of the object--we don't have to code specific keys 

let baking = {};
baking['zucchini'] = 'better make some bread!';
baking.bestKeyEver = 'corn bread!';

console.log(baking.zucchini);
console.log(baking.bestKeyEver);
console.log(baking[baking.bestKeyEver]);

    //array              //using array   
Object.keys(garden).forEach(key => {    //key is keys in garden object
    if (key == g){              
        console.log(garden[key]); //object and value of key
    }
})

