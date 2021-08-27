import React, { Component } from 'react'
import NewsItem from './NewsItem'
// import RecipeReviewCard from './NewsItem'

export class News extends Component {
    articles = [
            {
                "source": {
                    "id": "news24",
                    "name": "News24"
                },
                "author": "Heinz Schenk",
                "title": "Sharks coach on Jaden Hendrikse's nasty fracture: 'He was the victim of a cheap shot' | Sport",
                "description": "Sharks coach Sean Everitt believes his gifted Bok scrumhalf Jaden Hendrikse was the victim of a cheap shot against the Pumas last weekend.",
                "url": "https://www.news24.com/sport/Rugby/CurrieCup/sharks-coach-on-jaden-hendrikses-nasty-fracture-he-was-the-victim-of-a-cheap-shot-20210826",
                "urlToImage": "https://cdn.24.co.za/files/Cms/General/d/4259/8d6221d6fefc4e089cf8da6669202797.jpg",
                "publishedAt": "2021-08-26T20:01:43+00:00",
                "content": "<ul><li>Sharks coach Sean Everitt believes his gifted Bok scrumhalf Jaden Hendrikse was the victim of a cheap shot against the Pumas last weekend.</li><li>The 21-year-old fractured his ankle followin… [+3471 chars]"
            },
            {
                "source": {
                    "id": "news24",
                    "name": "News24"
                },
                "author": "news24",
                "title": "WATCH LIVE | Editors' Table: Boucher, racism hearings and the state of Cricket SA",
                "description": "It has been more than a year since racism in South African cricket first made headlines, and developments this week have shown that those critical examinations are far from over. Join the Sport24 team as they debate the current state of affairs at Cricket SA.",
                "url": "https://www.news24.com/news24/Video/SouthAfrica/News/watch-live-editors-table-boucher-racism-hearings-and-the-state-of-cricket-sa-20210826",
                "urlToImage": "https://cdn.24.co.za/files/Cms/General/d/11511/5c25767d36d642169ba143cfbb0bd64a.jpg",
                "publishedAt": "2021-08-26T18:50:01+00:00",
                "content": "Cricket South Africa (CSA) has again been thrust into the spotlight after assistant coach Enoch Nkwe left his position in the national setup this week. He has been involved in the sport for close to … [+1897 chars]"
            },
            {
                "source": {
                    "id": "google-news-ca",
                    "name": "Google News (Canada)"
                },
                "author": "Andy Riga",
                "title": "COVID-19 live updates: Eastern, central Montreal have lower double-vaccination rates, analysis shows",
                "description": "Province's vaccine passport apps have been downloaded almost 1M times.",
                "url": "https://montrealgazette.com/news/local-news/covid-19-updates-montreal-quebec-new-cases-vaccine-passport-vaccination-proof-vax-pandemic-legault-hospital-august-26",
                "urlToImage": "https://smartcdn.prod.postmedia.digital/montrealgazette/wp-content/uploads/2021/08/0814_city_vacpr-w.jpg",
                "publishedAt": "2021-08-26T18:11:15+00:00",
                "content": "Province's vaccine passport apps have been downloaded almost 1M times. \r\nAndy Riga\r\nA vaccination worker carries a sign as she tries to recruit people to get vaccinated against COVID-19 at a mobile c… [+16486 chars]"
            },
            {
                "source": {
                    "id": "bbc-sport",
                    "name": "BBC Sport"
                },
                "author": "BBC Sport",
                "title": "Europa League play-off: AZ Alkmaar v Celtic (0-2 agg)",
                "description": "Listen to Sportsound commentary and follow live text updates as Celtic travel to the Netherlands to face AZ Alkmaar with a 2-0 advantage in the Europa League play-off round.",
                "url": "http://www.bbc.co.uk/sport/live/football/58319532",
                "urlToImage": "https:////m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.20.25/images/bbc-sport-logo.png",
                "publishedAt": "2021-08-26T18:07:50.8210909Z",
                "content": "Aberdeen: Lewis, MacKenzie, Gallagher, McCrorie, Ramsay, Brown, Ferguson, Jenks, Ojo, Hayes, Ramirez.\r\nSubstitutes: Woods, Ritchie, McGinn, Emmanuel-Thomas, Gurr, McGeouch, Gurr, Campbell, Ngwenya, H… [+209 chars]"
            },
            {
                "source": {
                    "id": "bbc-sport",
                    "name": "BBC Sport"
                },
                "author": "BBC Sport",
                "title": "Europa Conference League play-off: Aberdeen v Qarabag (0-1 agg)",
                "description": "Listen to Sportsound commentary and follow live text updates as Aberdeen welcome Qarabag in the Europa Conference League play-off round trailing 1-0 from the first leg in Azerbaijan.",
                "url": "http://www.bbc.co.uk/sport/live/football/58319946",
                "urlToImage": "https:////m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.20.25/images/bbc-sport-logo.png",
                "publishedAt": "2021-08-26T17:37:49.4047791Z",
                "content": "St Johnstone: Clark, Rooney, Brown, Kerr, McCart, Booth, Davidson, McCann, O'Halloran, Middleton, Kane.\r\nSubstitutes: Parish, Devine, May, Wotherspoon, Gilmour, Muller, Sinclair, Hendry, Ballantyne, … [+242 chars]"
            },
            {
                "source": {
                    "id": "espn",
                    "name": "ESPN"
                },
                "author": "Kevin Van ValkenburgESPN Senior Writer ",
                "title": "Brooks Koepka, Bryson DeChambeau agree to stop feuding as Ryder Cup approaches, captain Steve Stricker says",
                "description": "U.S. Ryder Cup captain Steve Stricker told Sports Illustrated that he'd spoken to both Brooks Koepka and Bryson DeChambeau about their running feud and received assurances from both that it won't be a distraction for the American squad.",
                "url": "http://espn.go.com/golf/story/_/id/32089790/brooks-koepka-bryson-dechambeau-agree-stop-feuding-ryder-cup-approaches-captain-steve-stricker-says",
                "urlToImage": "https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2020%2F0805%2Fr727995_1296x729_16%2D9.jpg",
                "publishedAt": "2021-08-26T17:14:12Z",
                "content": "OWINGS MILLS, Md. -- United States Ryder Cup captain Steve Stricker said that he's spoken individually to Bryson DeChambeau and Brooks Kopeka about putting their running feud to rest for the good of … [+2814 chars]"
            },
            {
                "source": {
                    "id": "google-news-ca",
                    "name": "Google News (Canada)"
                },
                "author": null,
                "title": "Ontario health units could create their own vaccine passports, says leading doctor | CBC News",
                "description": "Local health units in Ontario could come up with their own vaccine passport if the province continues to resist, according to the head of a group representing public health agencies.",
                "url": "https://www.cbc.ca/news/canada/ottawa/ontario-local-vaccine-passport-covid-1.6153960",
                "urlToImage": "https://i.cbc.ca/1.6153977.1629983363!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/dr-paul-roumeliotis-eohu-eastern-ontario-health-unit.jpg",
                "publishedAt": "2021-08-26T17:13:25+00:00",
                "content": "Local health units in Ontario could come up with their own vaccine passport if the province continues to resist, according to the head of a group representing local public health agencies in the prov… [+2294 chars]"
            },
            {
                "source": {
                    "id": "der-tagesspiegel",
                    "name": "Der Tagesspiegel"
                },
                "author": null,
                "title": "Alle deutschen Soldaten haben Kabul verlassen",
                "description": "Nach elf Tagen schließt die Bundeswehr ihre Luftbrücke aus Afghanistan ab. Die letzten deutschen Transportmaschinen haben Kabul verlassen.",
                "url": "https://www.tagesspiegel.de/politik/kramp-karrenbauer-zum-ende-der-bundeswehrmission-alle-deutschen-soldaten-haben-kabul-verlassen/27554240.html",
                "urlToImage": "https://www.tagesspiegel.de/images/konflikt-in-afghanistan-taschkent/27554328/1-format530.jpg",
                "publishedAt": "2021-08-26T17:11:32+00:00",
                "content": "In der afghanischen Hauptstadt Kabul sind die letzten Flugzeuge der Bundeswehr zur Rettung von Deutschen und einheimischen Mitarbeitern abgehoben. Die Luftwaffe hat am Donnerstag alle deutschen Solda… [+2727 chars]"
            },
            {
                "source": {
                    "id": "rtl-nieuws",
                    "name": "RTL Nieuws"
                },
                "author": "RTL Nieuws",
                "title": "Ajax in Champions League tegen Sporting Portugal en Borussia Dortmund",
                "description": "Ajax is bij de loting voor de groepsfase van de Champions League gekoppeld aan Borussia Dortmund en Sporting Portugal. De vierde tegenstander van Ajax is nog niet bekend.",
                "url": "https://www.rtlnieuws.nl/sport/artikel/5250452/ajax-champions-league-tegen-sporting-portugal-en-borussia-dortmund",
                "urlToImage": "https://www.rtlnieuws.nl/sites/default/files/styles/liggend_hoge_resolutie/public/content/images/2021/08/26/ANP-423461460.jpg?h=3ec13e1d&itok=S7Dq7akW",
                "publishedAt": "2021-08-26T17:03:55+00:00",
                "content": "Ajax is bij de loting voor de groepsfase van de Champions League gekoppeld aan Borussia Dortmund en Sporting Portugal. De vierde tegenstander van Ajax is nog niet bekend.\r\nRTL Nieuws"
            },
            {
                "source": {
                    "id": "independent",
                    "name": "Independent"
                },
                "author": "Helen Coffey",
                "title": "Travel news - live: Green list update announced as new countries also added to red list",
                "description": "Travel review released by Scottish government ahead of Department for Transport announcement",
                "url": "http://www.independent.co.uk/travel/news-and-advice/travel-news-live-green-list-red-b1909011.html",
                "urlToImage": "https://static.independent.co.uk/s3fs-public/thumbnails/image/2021/05/17/19/2daab61313209ac77f23d11214d0364dy29udgvudhnlyxjjagfwaswxnjixmzizmjcx-2.59829540.jpg?width=1200&auto=webp&quality=75",
                "publishedAt": "2021-08-26T16:48:42Z",
                "content": "Thailand extends its reopening for tourists\r\nThailand has announced a further extension to its reopening plans for tourists.\r\nThe Phuket Sandbox 7+7 programme provides fully vaccinated international … [+1607 chars]"
            }

        ]
    constructor() {
            super();
        this.state = {
                articles: this.articles,
                loading: false
            }
        }

    render() {
            return(
            <div className = 'container my-4 ' >
                <h2 className=' border-bottom border-2 mb-4'>NEWS MONKEE- TOP SPORTS HEADLINES</h2>
                <div className="row">
                  {  this.state.articles.map((elem, index)=>{
                        return <div className="col-sm-6 col-md- col-xl-3 mb-3 ms-3" key={index} >
                        <NewsItem title={elem.title} description={elem.description} imgUrl={elem.urlToImage} newsLink={elem.url}/>
                    </div>
                    })}
                    
                </div>
            </div>
        )
    }
}

export default News
