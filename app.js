/* marvel api */
// let request = new XMLHttpRequest();
// request.open('GET', "https://gateway.marvel.com/v1/public/comics/", true)
// request.onload = function () {
//   // Begin accessing JSON data here
//   let data = JSON.parse(this.response);
//   if (request.status >= 200 && request.status < 400) {
		
// 		console.log(data);
			
//   } else {
//     console.log("Gah, it's not working!");
//   }
// }

// request.send();


// variables
const name = document.querySelector(".id-name");
const profileText = document.querySelector(".profile-text");

// fetch("https://gateway.marvel.com:443/v1/public/characters?name=captain%20america&apikey=2510a609a0195f2f69057f425a7f9609")
//     .then(res => res.json())
//     .then(data => {
//       character = data.data.results[0];
//       name.innerText = character.name;
//     } 
// );

fetch("https://comicvine.gamespot.com/api/characters/?api_key=08f6a97837c9230eca2f50206dad03231859bdcd&filter=name:captain%20america&format=json")
.then(res=>{res.json()})
.then(data => {
  console.log( data.results );
});




/* localAPI */
/* characterLocalAPI = [
	{
  "code": 200,
  "status": "Ok",
  "copyright": "© 2020 MARVEL",
  "attributionText": "Data provided by Marvel. © 2020 MARVEL",
  "attributionHTML": "<a href=\"http://marvel.com\">Data provided by Marvel. © 2020 MARVEL</a>",
  "etag": "7a73079008d919c831f7581440463dec2567e996",
  "data": {
    "offset": 0,
    "limit": 20,
    "total": 1,
    "count": 1,
    "results": [
      {
        "id": 1009220,
        "name": "Captain America",
        "description": "Vowing to serve his country any way he could, young Steve Rogers took the super soldier serum to become America's one-man army. Fighting for the red, white and blue for over 60 years, Captain America is the living, breathing symbol of freedom and liberty.",
        "modified": "2020-04-04T19:01:59-0400",
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/50/537ba56d31087",
          "extension": "jpg"
        },
        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220",
        "comics": {
          "available": 2357,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009220/comics",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/43488",
              "name": "A+X (2012) #1"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/43501",
              "name": "A+X (2012) #4"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/43508",
              "name": "A+X (2012) #9"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/17743",
              "name": "A-Next (1998) #2"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/17744",
              "name": "A-Next (1998) #3"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/17745",
              "name": "A-Next (1998) #4"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/17746",
              "name": "A-Next (1998) #5"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/17747",
              "name": "A-Next (1998) #6"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/17748",
              "name": "A-Next (1998) #7"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/17749",
              "name": "A-Next (1998) #8"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/17750",
              "name": "A-Next (1998) #9"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/17740",
              "name": "A-Next (1998) #10"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/17741",
              "name": "A-Next (1998) #11"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/17742",
              "name": "A-Next (1998) #12"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/66978",
              "name": "Adventures of Captain America (1991) #1"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/66979",
              "name": "Adventures of Captain America (1991) #2"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/66980",
              "name": "Adventures of Captain America (1991) #3"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/66981",
              "name": "Adventures of Captain America (1991) #4"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/42539",
              "name": "Age of Apocalypse (2011) #2 (Avengers Art Appreciation Variant)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/30090",
              "name": "Age of Heroes (2010) #1"
            }
          ],
          "returned": 20
        },
        "series": {
          "available": 653,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009220/series",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/16450",
              "name": "A+X (2012 - 2014)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/3620",
              "name": "A-Next (1998 - 1999)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/24227",
              "name": "Adventures of Captain America (1991 - 1992)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/15331",
              "name": "Age of Apocalypse (2011 - 2013)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/9790",
              "name": "Age of Heroes (2010)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/10235",
              "name": "AGE OF HEROES TPB (2011)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/13896",
              "name": "Age of X: Universe (2011)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/7534",
              "name": "All Winners Comics 70th Anniversary Special (2009)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/20682",
              "name": "All-New Wolverine (2015 - 2018)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/2114",
              "name": "All-Winners Comics (1941 - 1947)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/9865",
              "name": "All-Winners Squad: Band of Heroes (2011)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/2116",
              "name": "Alpha Flight (1983 - 1994)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/454",
              "name": "Amazing Spider-Man (1999 - 2013)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/15540",
              "name": "Amazing Spider-Man Annual (2012)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/9802",
              "name": "Amazing Spider-Man Annual (2010)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/2984",
              "name": "Amazing Spider-Man Annual (1964 - 2018)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/1489",
              "name": "AMAZING SPIDER-MAN VOL. 10: NEW AVENGERS TPB (2005)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/14818",
              "name": "Annihilators: Earthfall (2011)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/24323",
              "name": "Ant-Man and the Wasp Adventures (2018)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/14696",
              "name": "Art of Marvel Movies: The Art of Captain America - The First Avenger (2011 - Present)"
            }
          ],
          "returned": 20
        },
        "stories": {
          "available": 3512,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009220/stories",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/670",
              "name": "X-MEN (2004) #186",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/892",
              "name": "THOR (1998) #81",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/960",
              "name": "3 of ?",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/1026",
              "name": "Avengers (1998) #81",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/1041",
              "name": "Avengers (1998) #502",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/1042",
              "name": "Avengers (1998) #503",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/1054",
              "name": "Avengers (1998) #72",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/1163",
              "name": "Amazing Spider-Man (1999) #519",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/1165",
              "name": "Amazing Spider-Man (1999) #520",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/1167",
              "name": "Amazing Spider-Man (1999) #521",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/1175",
              "name": "Amazing Spider-Man (1999) #523",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/1193",
              "name": "Amazing Spider-Man (1999) #534",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/1199",
              "name": "Amazing Spider-Man (1999) #537",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/1203",
              "name": "Amazing Spider-Man (1999) #538",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/1414",
              "name": "Cover #1414",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/1500",
              "name": "Interior #1500",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/1501",
              "name": "CAPTAIN AMERICA (2002) #21",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/1503",
              "name": "CAPTAIN AMERICA (2002) #22",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/1505",
              "name": "CAPTAIN AMERICA (2002) #23",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/1606",
              "name": "WEAPON X (2002) #14",
              "type": "cover"
            }
          ],
          "returned": 20
        },
        "events": {
          "available": 31,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009220/events",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/116",
              "name": "Acts of Vengeance!"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/314",
              "name": "Age of Ultron"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/303",
              "name": "Age of X"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/231",
              "name": "Armor Wars"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/234",
              "name": "Avengers Disassembled"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/310",
              "name": "Avengers VS X-Men"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/320",
              "name": "Axis"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/296",
              "name": "Chaos War"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/238",
              "name": "Civil War"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/248",
              "name": "Fall of the Mutants"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/302",
              "name": "Fear Itself"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/251",
              "name": "House of M"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/252",
              "name": "Inferno"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/315",
              "name": "Infinity"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/29",
              "name": "Infinity War"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/317",
              "name": "Inhumanity"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/151",
              "name": "Maximum Carnage"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/37",
              "name": "Maximum Security"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/337",
              "name": "Monsters Unleashed"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/333",
              "name": "Monsters Unleashed"
            }
          ],
          "returned": 20
        },
        "urls": [
          {
            "type": "detail",
            "url": "http://marvel.com/comics/characters/1009220/captain_america?utm_campaign=apiRef&utm_source=2510a609a0195f2f69057f425a7f9609"
          },
          {
            "type": "wiki",
            "url": "http://marvel.com/universe/Captain_America_(Steve_Rogers)?utm_campaign=apiRef&utm_source=2510a609a0195f2f69057f425a7f9609"
          },
          {
            "type": "comiclink",
            "url": "http://marvel.com/comics/characters/1009220/captain_america?utm_campaign=apiRef&utm_source=2510a609a0195f2f69057f425a7f9609"
          }
        ]
      }
    ]
  }
}
];
 */


// console.log(characterLocalAPI);



// name.innerText = characterLocalAPI[0].data.results[0].name;
