var app = angular.module('mediaCzar', ['ngRoute', 'ngResource']);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'templates/search.html',
			controller: 'SearchCtrl'
		})
		.when('/suggestion', {
			templateUrl: 'templates/suggestion.html',
			controller: 'SuggestionCtrl'
		});
		$locationProvider
			.html5Mode({
				enabled: true,
				requiredBase: false
		});
}]);

// fake data
var data = {
    "Similar": {
        "Info": [
            {
                "Name": "Incubus",
                "Type": "music",
                "wTeaser": "Incubus is an American rock band from Calabasas, California. The band was formed in 1991 by vocalist Brandon Boyd, lead guitarist Mike Einziger, and drummer Jose Pasillas while enrolled in Calabasas High School and later expanded to include bassist Alex \"Dirk Lance\" Katunich, and Gavin \"DJ Lyfe\" Koppell; both of whom were eventually replaced by bassist Ben Kenney and DJ Kilmore respectively.Incubus has attained commercial success, reaching multi-platinum sales, as well as releasing several successful singles. The band earned mainstream recognition with the release of their 1999 album Make Yourself. In 2001, Incubus became even more successful with the single \"Drive\" and their follow-up album Morning View. Their sixth studio album, Light Grenades, debuted at No. 1 in 2006 and has received Gold certification in the U.S. Incubus released their first greatest hits album Monuments and Melodies in June 2009, accompanied by a tour of the United States, Japan and Canada. The band's most recent album, If Not Now, When?, was released on July 12, 2011. Incubus has also released the first of two EPs, Trust Fall Side A in 2015 and has plans to release Trust Fall Side B later in the year.",
                "wUrl": "https://en.wikipedia.org/wiki/Incubus_(band)",
                "yUrl": "https://www.youtube-nocookie.com/embed/zin3Yc4FfXE",
                "yID": "zin3Yc4FfXE"
            }
        ],
        "Results": [
            {
                "Name": "Brandon Boyd",
                "Type": "music",
                "wTeaser": "Brandon Charles Boyd (born February 15, 1976) is an American singer, songwriter, musician, author, and visual artist. He is best known as the lead vocalist of the American rock band Incubus.Boyd graduated from Calabasas High School in 1994 and attended Moorpark College for two years before committing to Incubus. Brandon grew up in Calabasas, CA with Ricky Taylor who inspired him to write music. His parents, Priscilla \"Dolly\" Wiseman and Charles Boyd, both of whom had experience in entertainment, had nurtured his artistic side since he was a child. Other musical family members include his younger brother, Jason Boyd, the former lead singer of the band Audiovent, cousin Sam Boyd, a songwriter and touring musician, as well as cousin Berto Boyd, an accomplished Flamenco guitarist. In an interview, Brandon explained that he had \"yet to stumble across his best work\" because he lacked the ability to read music.",
                "wUrl": "http://en.wikipedia.org/wiki/Brandon_Boyd",
                "yUrl": "https://www.youtube-nocookie.com/embed/NNFlVnxk1JY",
                "yID": "NNFlVnxk1JY"
            },
            {
                "Name": "311",
                "Type": "music",
                "wTeaser": "311 (pronounced \"three-eleven\") is an American rock band from Omaha, Nebraska. The band was formed in 1988 by vocalist and guitarist Nick Hexum, lead guitarist Jim Watson (who would later be replaced by Tim Mahoney), bassist Aaron \"P-Nut\" Wills and drummer Chad Sexton. In 1992, Doug \"SA\" Martinez joined to sing and provide turntables for 311's later albums, rounding out the current line-up. The band's name originates from the police code for indecent exposure in Omaha, Nebraska, after the original guitarist for the band was arrested for streaking.To date, 311 has released eleven studio albums, two live albums, four compilation albums, four EPs and four DVDs. After a series of independent releases, 311 was signed to Capricorn Records in 1992 and released the albums Music (1993) and Grassroots (1994) to moderate success. They achieved greater success with their 1995 triple platinum self-titled album, which reached No. 12 on the Billboard 200 on the strength of the singles \"Down\" and \"All Mixed Up\", the former of which topped the Billboard Hot Modern Rock Tracks in 1996. The band's next three albums, Transistor (1997), Soundsystem (1999) and From Chaos (2001), did not achieve the massive success of the self-titled album, though they were still successful, with the first going platinum and the last two going gold. Their 2004 compilation album Greatest Hits '93–'03 was also certified gold. The band's most recent studio album is 2014's Stereolithic. As of 2011, 311 has sold over 8.5 million records in the US.",
                "wUrl": "http://en.wikipedia.org/wiki/Large_in_the_Margin",
                "yUrl": "https://www.youtube-nocookie.com/embed/SUFSB2plwzM",
                "yID": "SUFSB2plwzM"
            },
            {
                "Name": "Audioslave",
                "Type": "music",
                "wTeaser": "Audioslave was an American rock supergroup formed in Los Angeles, California, in 2001 and disbanded in 2007. The four-piece band consisted of then-former Soundgarden lead singer/rhythm guitarist Chris Cornell, and then-former Rage Against the Machine members Tom Morello (lead guitar), Tim Commerford (bass/backing vocals), and Brad Wilk (drums). Critics first described Audioslave as a combination of Soundgarden and Rage Against the Machine, but by the band's second album, Out of Exile, it was noted that they had established a separate identity.Audioslave's trademark sound was created by blending 1970s hard rock with 1990s alternative rock. Moreover, Morello incorporated his well-known, unconventional guitar solos into the mix. As with Rage Against the Machine, the band prided themselves on the fact that all sounds on their albums were produced using only guitar, bass, drums, and vocals.",
                "wUrl": "http://en.wikipedia.org/wiki/The_Civilian_Project",
                "yUrl": "https://www.youtube-nocookie.com/embed/7QU1nvuxaMA",
                "yID": "7QU1nvuxaMA"
            },
            {
                "Name": "Silverchair",
                "Type": "music",
                "wTeaser": "Silverchair were an Australian rock band, which formed in 1992 as Innocent Criminals in Merewether, Newcastle with the line-up of Ben Gillies on drums, Daniel Johns on vocals and guitars, and Chris Joannou on bass guitar. The group got their big break in mid-1994 when they won a national demo competition conducted by SBS TV show Nomad and ABC radio station, Triple J. The band were signed by Murmur, and were successful on the Australian and international rock stages.As of 2011, Silverchair have won a record number of 21 ARIA Music Awards from 49 nominations. The band have also received six APRA Awards with Johns winning three songwriting awards at the 2008 ceremony. All five of their studio albums have peaked at number-one on the ARIA Albums Chart: Frogstomp (1995), Freak Show (1997), Neon Ballroom (1999), Diorama (2002) and Young Modern (2007). Three of the group's singles have reached number-one on the related ARIA Singles Chart: \"Tomorrow\" (1994), \"Freak\" (1997) and \"Straight Lines\" (2007).",
                "wUrl": "http://en.wikipedia.org/wiki/Silverchair_(band)",
                "yUrl": "https://www.youtube-nocookie.com/embed/RZD982yrmx4",
                "yID": "RZD982yrmx4"
            },
            {
                "Name": "Bush",
                "Type": "music",
                "wTeaser": "Bush are a British rock band formed in London in 1992. The band found immediate success with the release of their debut album Sixteen Stone in 1994, which is certified 6× multi-platinum by the RIAA. Bush went on to become one of the most commercially successful rock bands of the 1990s, selling over 10 million records in the United States.Despite their success in the United States, the band was less well known in their home country and enjoyed only marginal success there. Bush has had numerous top ten singles on the Billboard rock charts, and one No. 1 album for Razorblade Suitcase in 1996. The band separated in 2002 but reformed in 2010 and began work on a new album, The Sea of Memories, which was released in September 2011. The album produced the number one single \"The Sound of Winter\", which topped both the alternative and rock charts. After touring extensively for two years, the band announced their sixth album, Man on the Run in August 2014.",
                "wUrl": "http://en.wikipedia.org/wiki/Bush_(band)",
                "yUrl": "https://www.youtube-nocookie.com/embed/hOllF3TgAsM",
                "yID": "hOllF3TgAsM"
            },
            {
                "Name": "Third Eye Blind",
                "Type": "music",
                "wTeaser": "Third Eye Blind is an American rock band formed in San Francisco in 1993. The songwriting duo of Stephan Jenkins and Kevin Cadogan signed the band's first major label recording contract with Elektra Records in 1996, which was later reported as the largest publishing deal ever for an unsigned artist. The band released their self-titled album, Third Eye Blind, in 1997, with the band largely consisting of Jenkins (lead vocals, rhythm guitar), Cadogan (lead guitar), Arion Salazar (bass guitar), and Brad Hargreaves (drums). Shortly after the release of the band's second album in 1999, Blue, with the same line-up, Cadogan was released from the band under controversial circumstances.The band continued on, but with many line-up changes and gaps between album releases. The band released Out of the Vein in 2003 and Ursa Major in 2009, with only Jenkins and Hargreaves as the remaining core members. The band's current iteration, including Kryz Reid (lead guitar), Alex Kopp (keyboards), and Alex LeCavalier (bass guitar), recorded the band's fifth studio album, Dopamine, which was released in 2015.",
                "wUrl": "http://en.wikipedia.org/wiki/Third_Eye_Blind",
                "yUrl": "https://www.youtube-nocookie.com/embed/smilXwl07HI",
                "yID": "smilXwl07HI"
            },
            {
                "Name": "Stone Temple Pilots",
                "Type": "music",
                "wTeaser": "Stone Temple Pilots (often abbreviated as STP) is an American rock band from San Diego, California, that originally consisted of Scott Weiland (lead vocals), brothers Dean (guitar) and Robert DeLeo (bass, backing vocals), and Eric Kretz (drums). Since the band's formation in 1989, its line-up remained unchanged until the dismissal of Weiland in 2013, who was replaced by Linkin Park vocalist Chester Bennington. In 2015, Bennington left the band to focus solely on Linkin Park. On December 3, 2015, Weiland was found dead on his tour bus prior to a performance with his band The Wildabouts.After forming in 1989 under the name Mighty Joe Young, the band signed with Atlantic Records and changed its name to Stone Temple Pilots. The band found immediate success in 1993 upon releasing their debut album, Core (1992), and went on to become one of the most commercially successful bands of the 1990s. The band released four more studio albums: Purple (1994), Tiny Music... Songs from the Vatican Gift Shop (1996), No. 4 (1999) and Shangri-La Dee Da (2001), before separating in 2002, after which the band members partook in various projects (most notably Velvet Revolver and Army of Anyone). The band eventually reconvened in 2008 for a reunion tour, released a new self-titled album in 2010, and have been actively touring since, even after Weiland was fired from the band. The band's only material with Bennington was the EP High Rise in 2013.",
                "wUrl": "http://en.wikipedia.org/wiki/Stone_Temple_Pilots",
                "yUrl": "https://www.youtube-nocookie.com/embed/V5UOC0C0x8Q",
                "yID": "V5UOC0C0x8Q"
            },
            {
                "Name": "Fuel",
                "Type": "music",
                "wTeaser": "Fuel is an American post-grunge band formed by guitarist/songwriter Carl Bell and bassist Jeff Abercrombie. Originally known as Small the Joy, they changed the group's name to Fuel sometime in 1994. They are well known for their hit songs \"Shimmer\" from Sunburn, \"Hemorrhage (In My Hands)\" and \"Bad Day\" from Something Like Human, and \"Falls on Me\" from Natural Selection. The band has sold nearly four million records worldwide.Their newest album Puppet Strings was released March 4, 2014. No original members of the band remain, except for vocalist Brett Scallions, who at one time left the band himself (2006).Carl Bell and Jody Abbott were in a college campus band, Wanted (along with Robert Wagner and Mark Crawford) in Henderson, Tennessee. The band Wanted transitioned into Phoenix, which was a touring band for the college primarily used to recruit prospective students. After college, the band carried on as, Real to Reel, playing local clubs in Tennessee. Lead vocalist/guitarist Brett Scallions joined the group after Bell and bassist Jeff Abercrombie saw him in a bar in Jackson, Tennessee in 1993. That same year, keyboardist/vocalist Erik Avakian joined the lineup and the band moved to Harrisburg, Pennsylvania in 1994 where they played at local Pennsylvania bars and nightclub as Small the Joy. Changing the band name to 'Fuel', the band released their first EP Porcelain in 1996 and sold well locally, spawning a small radio hit with \"Shimmer\". The popularity of the EP brought them to the attention of Sony's 550 imprint, which released their second EP Hazleton the following year.",
                "wUrl": "https://en.wikipedia.org/wiki/Fuel_(band)",
                "yUrl": "https://www.youtube-nocookie.com/embed/ZbHfgXJKn1Y",
                "yID": "ZbHfgXJKn1Y"
            },
            {
                "Name": "Chevelle ",
                "Type": "movies",
                "wTeaser": "Chevelle is an American rock band that formed in 1995 in the Chicago suburb of Grayslake, Illinois. The band was originally composed of brothers: Pete Loeffler (lead vocals and guitar), Sam Loeffler (drums and percussion) and Joe Loeffler (bass and backing vocals). When Joe left the band in 2005, Geno Lenardo subbed-in as the bassist until he was replaced by Pete and Sam's brother-in-law, Dean Bernardini.Chevelle has sold over four million albums in the United States. The band's first studio album, Point #1, was released on a small record label called Squint Entertainment. Chevelle's second album, Wonder What's Next (October 8, 2002), was certified Platinum by the RIAA after a debut at No. 14 on the United States albums chart, Billboard 200. This Type of Thinking (Could Do Us In) (September 21, 2004), the band's third album debuted at No. 8 and has been certified Gold. Chevelle has since released a fourth album, Vena Sera (April 3, 2007), a fifth album, Sci-Fi Crimes, (August 31, 2009), and a sixth album Hats Off to the Bull (December 6, 2011). Their seventh and most recent album, La Gárgola, was released on April 1, 2014. Other releases from Chevelle include two live albums, DVDs and a compilation of band favorites.",
                "wUrl": "http://en.wikipedia.org/wiki/Chevelle_(band)",
                "yUrl": "https://www.youtube-nocookie.com/embed/d6rkuzgoSd8",
                "yID": "d6rkuzgoSd8"
            },
            {
                "Name": "Sublime",
                "Type": "music",
                "wTeaser": "Sublime was an American ska punk / reggae rock band from Long Beach, California, formed in 1988. The band's line-up, unchanged until their breakup, consisted of Bradley Nowell (vocals and guitar), Eric Wilson (bass) and Bud Gaugh (drums). Lou Dog, Nowell's dalmatian was the mascot of the band. Michael 'Miguel' Happoldt and Marshall Goodman \"Ras MG\" contributed to and co-wrote several Sublime songs. Nowell died of a heroin overdose in 1996. In 1997, posthumous songs such as \"What I Got\", \"Santeria\", \"Wrong Way\", \"Doin' Time\", and \"April 29, 1992 (Miami)\" were released to U.S. radio.Sublime released three studio albums, one live album, five compilation albums (one of which also contains never-before released material), three EPs and one box set. Although their first two albums—40oz. to Freedom (1992) and Robbin' the Hood (1994)—were quite popular in the United States, Sublime did not experience major commercial success until 1996 with their self-titled third album, released two months after Nowell's death, which peaked at No. 13 on the Billboard 200, and spawned the single \"What I Got\", which remains the band's only No. 1 hit single (on the Billboard Alternative Songs chart) in their musical career. As of 2009, the band has sold over 17 million albums worldwide, including about 10 million in the U.S. alone.",
                "wUrl": "http://en.wikipedia.org/wiki/Sublime_(music)",
                "yUrl": "https://www.youtube-nocookie.com/embed/AEYN5w4T_aM",
                "yID": "AEYN5w4T_aM"
            },
            {
                "Name": "Chris Cornell",
                "Type": "music",
                "wTeaser": "Chris Cornell (born Christopher John Boyle; July 20, 1964) is an American rock musician and singer-songwriter, best known as the lead vocalist, primary songwriter and rhythm guitarist for Seattle rock band Soundgarden and as former lead vocalist and songwriter for the supergroup Audioslave. He is also known for his numerous solo works and soundtrack contributions since 1991, and as founder and frontman for Temple of the Dog, the one-off tribute band dedicated to his friend the late Andrew Wood.Cornell is also known for his role as one of the architects of the 1990s grunge movement, for his extensive catalog as a songwriter and for his near four octave vocal range as well as his powerful vocal belting technique. He has released four solo studio albums, Euphoria Morning (1999), Carry On (2007), Scream (2009), Higher Truth (2015) and live album Songbook (2011). Cornell received a Golden Globe Award nomination for his song \"The Keeper\" which appeared in the film Machine Gun Preacher and co-wrote and performed the theme song to the James Bond film Casino Royale (2006), \"You Know My Name\". He was voted \"Rock's Greatest Singer\" by readers of Guitar World, ranked 4th in the list of \"Heavy Metal's All-Time Top 100 Vocalists\" by Hit Parader, 9th in the list of \"Best Lead Singers of All Time\" by Rolling Stone, and 12th in MTV's \"22 Greatest Voices in Music\".",
                "wUrl": "http://en.wikipedia.org/wiki/Chris_Cornell",
                "yUrl": "https://www.youtube-nocookie.com/embed/KhJ9IwYc5NU",
                "yID": "KhJ9IwYc5NU"
            },
            {
                "Name": "Blind Melon",
                "Type": "music",
                "wTeaser": "Blind Melon (Stylized as BLind MeLoN) is an American rock band formed in Los Angeles, California by two musicians from Mississippi and one from Indiana, active from 1990 to 1999 and 2006 onward. Best remembered for their 1993 single \"No Rain\", the group enjoyed critical and commercial success in the early 1990s with their neo-psychedelic take on alternative rock.After releasing two charting albums on Capitol Records and touring extensively, the band was halted in 1995 by the fatal overdose of lead vocalist Shannon Hoon, going on hiatus until officially disbanding four years later and embarking upon new projects. In 2006, the remaining members reunited and recruited new vocalist Travis Warren from the band Rain Fur Rent, producing a fourth album, For My Friends. Warren departed two years later, but again rejoined in 2010, allowing the group to return to performing and recording.",
                "wUrl": "http://en.wikipedia.org/wiki/Blind_melon",
                "yUrl": "https://www.youtube-nocookie.com/embed/C3Bbfvj6x1I",
                "yID": "C3Bbfvj6x1I"
            },
            {
                "Name": "Our Lady Peace",
                "Type": "music",
                "wTeaser": "Our Lady Peace (sometimes shortened to OLP) is a Canadian rock band formed in Toronto, Ontario in 1992. Headed by lead vocalist Raine Maida since its formation, the band additionally consists of Duncan Coutts on bass, and Steve Mazur as lead guitarist. Longtime drummer Jeremy Taggart left the band in 2014, and a replacement drummer has not yet been announced. The band has sold millions of albums worldwide, won four Juno Awards, and won ten MuchMusic Video Awards — the most MMVAs ever awarded to any artist or group. Our Lady Peace are one of Canada's most popular bands, they were also one of the few Canadian rock acts to actually achieved success in both decades of the 90s and 2000s.They have released eight studio albums, one live album, and two compilation albums to date, with their 1997 album Clumsy often being considered their signature and most widely recognized work. Our Lady Peace enjoyed many hit singles, ranging from \"Starseed\" in 1994, to \"Somewhere Out There\" in 2002.",
                "wUrl": "http://en.wikipedia.org/wiki/Our_Lady_Peace",
                "yUrl": "https://www.youtube-nocookie.com/embed/xp2P6JKc1QE",
                "yID": "xp2P6JKc1QE"
            },
            {
                "Name": "Rage Against The Machine",
                "Type": "music",
                "wTeaser": "Rage Against the Machine is an American rapcore band from Los Angeles, California. Formed in 1991, the group consisted of rapper and vocalist Zack de la Rocha, bassist and backing vocalist Tim Commerford, guitarist Tom Morello and drummer Brad Wilk. They draw inspiration from early heavy metal instrumentation, as well as hip hop acts such as Afrika Bambaataa, Public Enemy, the Beastie Boys and Dutch crossover band Urban Dance Squad. Rage Against the Machine is well known for the members' leftist and revolutionary political views, which are expressed in many of the band's songs. As of 2010, they have sold over 16 million records worldwide.In 1992, the band released its self-titled debut album, which became a commercial and critical success, leading to a slot in the 1993 Lollapalooza festival. In 2003, the album was ranked number 368 on Rolling Stone magazine's list of the 500 greatest albums of all time. The band did not release a follow-up record until 1996, with Evil Empire. The band's third album, The Battle of Los Angeles, followed in 1999, and in 2003, the album was ranked number 426 on the same list. During their initial nine-year run, they became one of the most popular and influential bands in music history, according to music journalist Colin Devenish. They were also ranked No. 33 on VH1's 100 Greatest Artists of Hard Rock. The band had a large influence on the nu metal genre which emerged during the second half of the 1990s.",
                "wUrl": "http://en.wikipedia.org/wiki/Rage_Against_the_Machine",
                "yUrl": "https://www.youtube-nocookie.com/embed/bWXazVhlyxQ",
                "yID": "bWXazVhlyxQ"
            },
            {
                "Name": "Staind",
                "Type": "music",
                "wTeaser": "Staind (/ˈsteɪnd/ STAYND) was an American rock band, formed in 1995 in Springfield, Massachusetts. For years, the band consisted of lead vocalist and rhythm guitarist Aaron Lewis, lead guitarist Mike Mushok, bassist Johnny April, and drummer Jon Wysocki (who left in May 2011). To date, the band has recorded seven studio albums: Tormented (1996), Dysfunction (1999), Break the Cycle (2001), 14 Shades of Grey (2003), Chapter V (2005), The Illusion of Progress (2008), and their self-titled album (2011). The band has had five chart-topping singles and sold over 15 million records worldwide.Staind formed in Springfield, Massachusetts. The band met through friends and started covering Korn, Rage Against the Machine, Pearl Jam, Tool, and Alice in Chains, among others, and played at local clubs (most commonly playing at Club Infinity) for a year and a half. Staind self-released their debut album, Tormented, in November 1996, citing influences Pantera and Machine Head. Until recently, the album was difficult to obtain, as only four thousand copies were originally sold.",
                "wUrl": "http://en.wikipedia.org/wiki/Mike_Mushok",
                "yUrl": "https://www.youtube-nocookie.com/embed/araU0fZj6oQ",
                "yID": "araU0fZj6oQ"
            },
            {
                "Name": "Live",
                "Type": "music",
                "wTeaser": "Live (/ˈlaɪv/, often typeset as LĪVE) is an American rock band from York, Pennsylvania, composed of Chad Taylor (lead guitar), Patrick Dahlheimer (bass), Chad Gracey (drums), and Chris Shinn (vocals). Live's original lead singer Ed Kowalczyk left the band in November 2009.Live achieved worldwide success with their 1994 album, Throwing Copper, which has sold eight million copies in the U.S. The band had a string of hit singles in the mid-1990s including \"Lightning Crashes\", which stayed at the top of the Billboard Hot Mainstream Rock Tracks chart for 10 consecutive weeks and the Modern Rock Tracks (now Alternative Songs) chart for nine weeks from February 25 to April 22, 1995. The band has sold over 20 million albums worldwide. Their last three studio albums fared only moderately well in the U.S., but they continued to enjoy success in The Netherlands, South Africa, Australasia and Brazil.",
                "wUrl": "http://en.wikipedia.org/wiki/Live_(band)",
                "yUrl": "https://www.youtube-nocookie.com/embed/xsJ4O-nSveg",
                "yID": "xsJ4O-nSveg"
            },
            {
                "Name": "Matthew Good",
                "Type": "music",
                "wTeaser": "Matthew Frederick Robert Good (born June 29, 1971) is a Canadian rock musician. He was the lead singer for the Matthew Good Band, one of Canada's most successful alternative rock bands in the 1990s, before dissolving the band in 2002. Other band members included drummer Ian Browne, guitarist/keyboardist Dave Genn, and original bassist Geoff Lloyd, later replaced by Rich Priske. In the years since the Matthew Good Band's disbanding, Good has pursued a solo career and established himself as a political and mental health activist.Good's early career in music involved a variety of folk demos and a stint as the lead singer of a folk band, the Rodchester Kings. Matthew Good and guitarist Simon Woodcock were discovered at an open mic at Simon Fraser University by manager Brent Christensen. Early Rodchester Kings demos were recorded at Fragrant Time Records in Burnaby by Greg Wasmuth and Steven Codling.",
                "wUrl": "http://en.wikipedia.org/wiki/Matthew_Good",
                "yUrl": "https://www.youtube-nocookie.com/embed/RMm0eyf4GWs",
                "yID": "RMm0eyf4GWs"
            },
            {
                "Name": "Soundgarden",
                "Type": "photos",
                "wTeaser": "Soundgarden is an American rock band formed in Seattle, Washington, in 1984 by singer and rhythm guitarist Chris Cornell, lead guitarist Kim Thayil, and bassist Hiro Yamamoto. Matt Cameron became the band's full-time drummer in 1986, while bassist Ben Shepherd became a permanent replacement for Yamamoto in 1990.Soundgarden was one of the seminal bands in the creation of grunge, a style of alternative rock that developed in Seattle, and was one of a number of grunge bands signed to the record label Sub Pop. Soundgarden was the first grunge band to sign to a major label (A&M Records, in 1988), though the band did not achieve commercial success until they popularized the genre in the early 1990s with Seattle contemporaries Pearl Jam, Nirvana, and Alice in Chains.",
                "wUrl": "http://en.wikipedia.org/wiki/Soundgarden",
                "yUrl": "https://www.youtube-nocookie.com/embed/3mbBbFH9fAg",
                "yID": "3mbBbFH9fAg"
            },
            {
                "Name": "Jimmy Eat World",
                "Type": "images",
                "wTeaser": "Jimmy Eat World is an American rock band from Mesa, Arizona, that formed in 1993. The band is composed of lead vocalist and guitarist Jim Adkins, guitarist and backing vocalist Tom Linton, bassist Rick Burch and drummer Zach Lind. As of June 2013, Jimmy Eat World have released eight studio albums, the last seven featuring the current lineup.The four piece's commercial breakthrough came with the successful release of several singles from the album Bleed American (2001). Four singles from the album charted within the top twenty positions of the Hot Modern Rock Tracks chart, with \"The Middle\" reaching the number one position. Jimmy Eat World's follow-up album Futures (2004) featured another Modern Rock Tracks number one song, \"Pain\". The RIAA certified Bleed American platinum and Futures gold, rewarding the two albums for selling over one and a half million records between them. The band's sixth album Chase This Light (2007) became the band's highest charting album, peaking at number five on the Billboard 200.",
                "wUrl": "http://en.wikipedia.org/wiki/Jimmy_Eat_World",
                "yUrl": "https://www.youtube-nocookie.com/embed/oKsxPW6i3pM",
                "yID": "oKsxPW6i3pM"
            },
            {
                "Name": "Pepper",
                "Type": "movies",
                "wTeaser": "Pepper is a three piece rock band originally from Hawaii, now based in San Diego. The band consists of vocalist/guitarist Kaleo Wassman, vocalist/bassist Bret Bollinger, and drummer Yesod Williams. Since the band's formation they have released five studio albums as well as one live album. They are currently managed by David \"Beno\" Benveniste's Velvet Hammer Music and Management Group.Pepper formed in 1996 with singer/guitarist Kaleo Wassman and bassist/singer Bret Bollinger, who had been friends since middle school. The duo was influenced by the Hawaiian artist Three Plus and popular mainland groups like Sublime. The group struggled to find a drummer to be in the band, with Wassman stating \" we were going through drummers like a bottomless pit.\" Wassman and Bollinger heard about a drummer named Yesod Williams who had gained success around their small town, and later met Williams at a party. The two convinced Williams to join the band, and with the trio in place, Pepper left Hawaii for San Diego and went on to open shows by Burning Spear, Shaggy, and other major reggae artists. Pepper first entered the studio in 1997 and recorded a seven-song demo.",
                "wUrl": "http://en.wikipedia.org/wiki/Stitches_EP",
                "yUrl": "https://www.youtube-nocookie.com/embed/S8aPq67wGUM",
                "yID": "S8aPq67wGUM"
            }
        ]
    }
};
// end fake data

app.controller('SearchCtrl', ['$scope', '$http', function ($scope, $http) {
	$scope.search = "Search controller connected";
	//fake test data
	// $scope.data = data.Similar;
	// $scope.mediaType = ($scope.data.Results).map(function(result) { return result.Type; });
	// $scope.mediaType = $scope.mediaType.filter(function(v,i) { return $scope.mediaType.indexOf(v) == i; });
	//end test data
	$scope.searchMediaKid = function() {
		var mediaQuery = $scope.searchTerm;
		$scope.searchResults = true;
		var url = 'https://www.tastekid.com/api/similar?info=1&k=197890-mediacza-EWRGAOVO&q=' + mediaQuery + '&callback=JSON_CALLBACK';
		$http.jsonp(url)
		.then(function (response) {
			$scope.data = response.data.Similar;
			console.log($scope.data);
			$scope.mediaType = ($scope.data.Results).map(function(result) { return result.Type; });
			$scope.mediaType = $scope.mediaType.filter(function(v,i) { return $scope.mediaType.indexOf(v) == i; });
			$scope.searchResults = true;
		}, 
		function(error) {
			console.error(error);
		});
	};
	$scope.newSearch = function() {
		$scope.searchTerm = null;
		$scope.searchResults = false;
	};
}]);

app.controller('SuggestionCtrl', ['$scope', function ($scope) {
	
}]);



