const GROUPS = [
  { 
    id: 2267,
    name: 'Film',
    abbreviation: null,
    category: 'Arts',
    groupStatus: 'Suspended',
    groupClass: 'MIT-funded',
    groupFunding: 'undergraduate',
    website: null,
    desc: 'Appreciate film as art through focused viewing and discussion.',
    meetingTime: null,
    size: {
      undergraduate: null,
      graduate: null,
      mitCommunity: null,
      other: null
    }
  },
  { 
    id: 2198,
    name: 'Engineering Design Group for Exhibits',
    abbreviation: 'EDGE',
    category: 'Arts',
    groupStatus: 'Derecognized',
    groupClass: 'MIT-funded',
    groupFunding: 'undergraduate',
    website: 'http://mitmuseumstudio.mit.edu/',
    desc: `EDGE connects students, engineers, artists and museum professionals through the design and development of engaging projects intended for display in the MIT Museum Studio space and other Boston museums.	`,
    meetingTime: null,
    size: {
      undergraduate: 5,
      graduate: 0,
      mitCommunity: 1,
      other: 3
    }
  },
  { 
    id: 2119,
    name: 'Metal Appreciation Society, MIT',
    abbreviation: 'MITMAS',
    category: 'Arts',
    groupStatus: 'Derecognized',
    groupClass: 'unfunded',
    groupFunding: null,
    website: 'https://www.facebook.com/groups/632458420104229/?fref=ts',
    desc: 'A gathering of students who appreciate heavy metal music together on Saturdays, attend musical concerts and organize concerts on campus of local musicians	',
    meetingTime: '2nd and 4th Saturdays of the month 12-2 Beginning: DATE: Saturday, November 9, 2013 Recurring time and Room: 12 – 2:30 p.m. 4-163 (tiered, seats 81, tablet armchairs, video projector)',
    size: {
      undergraduate: 35,
      graduate: 0,
      mitCommunity: 1,
      other: 5
    }
  },
  { 
    id: 2121,
    name: 'Next Act',
    abbreviation: 'NACT',
    category: 'Arts',
    groupStatus: 'Non-Group Entity',
    groupClass: 'Dorm/FSILG',
    groupFunding: 'null',
    website: 'http://nextact.mit.edu/',
    desc: 'Next House driven theater group',
    meetingTime: null,
    size: {
      undergraduate: 70,
      graduate: 0,
      mitCommunity: 0,
      other: 0
    }
  },
  { 
    id: 2256,
    name: 'Wuming Theater Club',
    abbreviation: 'Wuming',
    category: 'Arts',
    groupStatus: 'Active',
    groupClass: 'MIT-funded',
    groupFunding: 'graduate',
    website: 'http://wuming.scripts.mit.edu/2016',
    desc: 'As enthusiastic fans of theater arts and Chinese culture, we are starting this group to make theatrical performance enriched with Chinese elements more accessible to students and other members of MIT community.',
    meetingTime: null,
    size: {
      undergraduate: 2,
      graduate: 9,
      mitCommunity: 1,
      other: 10
    }
  },
  { 
    id: 2245,
    name: 'Honeypot',
    abbreviation: 'ADBH',
    category: 'Activism',
    groupStatus: 'Active',
    groupClass: 'Sponsored',
    groupFunding: null,
    website: null,
    desc: 'The ASA DB honeypot "group" exists to help detect people emailing all or many groups in the DB in violation of the ASA DB Use of Data policy (http://web.mit.edu/asa/database/use-of-data.html). If you need to contact a large number of groups, please reach out to the ASA (http://web.mit.edu/asa/about/contact-info.html) before doing so yourself. If you have DB problems, you can reach the DB team at asa-db [AT] mit.edu',
    meetingTime: null,
    size: {
      undergraduate: 0,
      graduate: 0,
      mitCommunity: 1,
      other: 0
    }
  },
  { 
    id: 1991,
    name: 'College Democrats @ MIT',
    abbreviation: 'CollegeDem',
    category: 'Activism',
    groupStatus: 'Derecognized',
    groupClass: 'Unfunded',
    groupFunding: null,
    website: 'http://web.mit.edu/collegedems',
    desc: 'The purpose of College Democrats @ MIT (hereafter referred to as CollegeDems) is to educate the MIT community about the Democratic Party, to advocate for legislation and policies, and to generally raise awareness of and interest in politics, current affairs, and the political process within the MIT community.',
    meetingTime: null,
    size: {
      undergraduate: 8,
      graduate: 0,
      mitCommunity: 0,
      other: 0
    }
  },
  { 
    id: 208,
    name: 'Pro-Life, MIT',
    abbreviation: null,
    category: 'Activism',
    groupStatus: 'Derecognized',
    groupClass: 'Funded',
    groupFunding: 'undergraduate',
    website: 'http://web.mit.edu/Pro-Life/www/',
    desc: 'MIT Pro-life is for all MIT students, staff, and affiliated members that are interested in helping to raise awareness of pro-life issues and the ways in which people can become involved with the cause.	',
    meetingTime: 'Wednesday 5pm once a month',
    size: {
      undergraduate: 10,
      graduate: 3,
      mitCommunity: 5,
      other: 2
    }
  },
  { 
    id: 2140,
    name: 'Running Club, MIT',
    abbreviation: 'MITRC',
    category: 'Athletic',
    groupStatus: 'Active',
    groupClass: 'MIT-funded',
    groupFunding: 'undergraduate',
    website: 'http://run.mit.edu/',
    desc: 'A running club that hosts weekly runs open to all members of the MIT and Boston community',
    meetingTime: 'Mondays at 5:30pm',
    size: {
      undergraduate: 25,
      graduate: 3,
      mitCommunity: 0,
      other: 2
    }
  },
  { 
    id: 2130,
    name: 'ACTiveU',
    abbreviation: null,
    category: 'Athletic',
    groupStatus: 'Derecognized',
    groupClass: 'MIT-funded',
    groupFunding: 'undergraduate',
    website: 'http://activeu.mit.edu/',
    desc: 'The purpose of ACTiveU is to utilize physical training and standardized college test preparation to empower inner-city youth in Boston and surrounding communities to be physically, mentally and academically prepared to gain admission to a college or university and to provide an educational pathway for success in life.',
    meetingTime: null,
    size: {
      undergraduate: 6,
      graduate: 0,
      mitCommunity: 0,
      other: 0
    }
  },
  { 
    id: 2180,
    name: 'Disc Golf Association, MIT',
    abbreviation: 'DGA, MIT',
    category: 'Recreational',
    groupStatus: 'Derecognized',
    groupClass: 'MIT-funded',
    groupFunding: 'undergraduate',
    website: null,
    desc: 'We are a group of students that are interested in and passionate about the game of disc golf. We want to bring together all those in the MIT community interested in the game, from newcomers to experts, and provide opportunities for students to play at established courses during the school year. The group also manages clinics and other events on campus to allow disc golfers to play throughout the year.',
    meetingTime: null,
    size: {
      undergraduate: 10,
      graduate: 4,
      mitCommunity: 1,
      other: 5
    }
  },
  { 
    id: 745,
    name: 'Energy Club, MIT',
    abbreviation: 'NRG',
    category: 'Interest',
    groupStatus: 'Active',
    groupClass: 'MIT-funded',
    groupFunding: 'graduate',
    website: 'http://www.mitenergyclub.org/',
    desc: "The MIT Energy Club is focused on the creation of a tight-knit energy community at MIT. The club holds weekly events, including document-based energy discussion groups and the MIT Energy Lecture Series, alongside signature events such as the annual MIT EnergyNight and the MIT Energy Conference. The club's emphasis is on building a community at MIT with a deeper understanding of global energy trends and challenges through open, fact-based discussion.",
    meetingTime: null,
    size: {
      undergraduate: 170,
      graduate: 650,
      mitCommunity: 400,
      other: 200
    }
  },
  { 
    id: 2228,
    name: 'Fashion Innovation Club, MIT',
    abbreviation: 'MITFashion',
    category: 'Technology',
    groupStatus: 'Active',
    groupClass: 'MIT-funded',
    groupFunding: 'graduate',
    website: 'http://web.mit.edu/fashioninnov/',
    desc: 'Our mission is to create a community focused on the combination of fashion, technology and sustainability at MIT. We aim to strengthen the ties between current students, researchers, alumni and innovative professionals and to promote MIT as an agent of change and innovation in fashion.',
    meetingTime: null,
    size: {
      undergraduate: 30,
      graduate: 18,
      mitCommunity: 2,
      other: 0
    }
  },
  { 
    id: 1431,
    name: 'Greek Intervarsity, MIT',
    abbreviation: 'GREEKIV',
    category: 'Technology',
    groupStatus: 'Derecognized',
    groupClass: 'Sponsored',
    groupFunding: null,
    website: 'http://web.mit.edu/greekiv/',
    desc: 'MIT Greek InterVarsity is a community seeking transformation as we investigate Jesus Christ alongside our brothers and sisters. We are an affiliate ofInterVarsity Christian Fellowship USA, specifically for fraternity and sorority members. Our hope is to discover and explore spirituality in the Greek system through a real relationship with the living God. By focusing on the core values of the Greek system, brothers from different fraternities and sisters from different sororities can find common ground and grow in community with one another. We pray not just for the edification of individuals, but also for stronger community in each chapter house and within the Greek system. In addition to weekly small groups, prayer, and chapter-specific discussions, we gather together monthly to meet new people from different chapters, connect to God, and share a vision of the work God is doing and will continue to do in the MIT Greek system. Together we ask who God is and why that matters.',
    meetingTime: null,
    size: {
      undergraduate: 30,
      graduate: 0,
      mitCommunity: 0,
      other: 0
    }
  },
  { 
    id: 1912,
    name: 'Academic Teaching Initiative',
    abbreviation: 'ATI',
    category: 'Service',
    groupStatus: 'Active',
    groupClass: 'Unfunded',
    groupFunding: null,
    website: '	http://ati.mit.edu//',
    desc: 'The Academic Teaching Initiative provides low-cost academic-based enrichment programs geared towards high school students in the Boston and Cambridge area.',
    meetingTime: 'Sundays 12pm-5pm',
    size: {
      undergraduate: 22,
      graduate: 0,
      mitCommunity: 0,
      other: 1
    }
  },
  { 
    id: 815,
    name: 'Medlinks',
    abbreviation: null,
    category: 'Service',
    groupStatus: 'Active',
    groupClass: 'Sponsored',
    groupFunding: null,
    website: 'https://medlinks.mit.edu/',
    desc: 'The MedLinks program works to support MIT students in connecting to campus support resources, the policies and services of MIT Medical and determining when and how to seek medical attention. MedLinks is a residentially based peer health advocacy program that supports the health of students in their residences along with the wider MIT community through one-on-one interactions and via health promotion events. This program is sponsored and supported by Community Wellness at MIT Medical. MedLinks is comprised of student representatives (each one called "a MedLink"). Every dorm and many FSILGs have at least one resident who is a MedLink. In addition, MedLinks can make available single doses of common over-the-counter medications, provide disposable thermometers and have a variety of first aid supplies. Presently, there are 120 MedLink representatives located in a variety of campus and off-campus residences.',
    meetingTime: null,
    size: {
      undergraduate: 120,
      graduate: 0,
      mitCommunity: 3,
      other: 0
    }
  },
  { 
    id: 2271,
    name: 'Rotaract Club, MIT',
    abbreviation: 'Rotaract',
    category: 'Service',
    groupStatus: 'Suspended',
    groupClass: 'Unfunded',
    groupFunding: null,
    website: 'http://rotary.org/',
    desc: 'The MIT Rotaract Club exists to support public service initiatives, domestically and internationally, with the guidance of Rotary International and the Greater Boston Rotarian Community. Our group, by being officially registered with Rotary International as a Rotaract Club, is uniquely positioned to bring Rotary’s significant resources, in terms of mentorship, professional development opportunities, support from Rotarians around the world while traveling, and project funding, into the MIT community, so that MIT students who are working on public service projects will have additional institutional supports behind them. Our group hosts workshops, talks, and panels about social benefit work and social entrepreneurship skills, experiences, and goals for the greater MIT community.',
    meetingTime: null,
    size: {
      undergraduate: 5,
      graduate: 3,
      mitCommunity: 1,
      other: 0
    }
  },
  { 
    id: 2081,
    name: 'UA Nominations Committee',
    abbreviation: 'Nomcomm',
    category: 'Government',
    groupStatus: 'Non-Group Entity',
    groupClass: 'Sponsored',
    groupFunding: null,
    website: 'http://ua.mit.edu',
    desc: 'UA committee to select undergraduates for an institute committee',
    meetingTime: null,
    size: {
      undergraduate: 5,
      graduate: 0,
      mitCommunity: 0,
      other: 0
    }
  },
  { 
    id: 554,
    name: 'Ring Committee',
    abbreviation: 'RINGCOMM',
    category: 'Government',
    groupStatus: 'Derecognized',
    groupClass: 'Sponsored',
    groupFunding: null,
    website: null,
    desc: null,
    meetingTime: null,
    size: {
      undergraduate: 13,
      graduate: 0,
      mitCommunity: 0,
      other: 0
    }
  },
  { 
    id: 25,
    name: 'Asian American Association',
    abbreviation: 'AAA',
    category: 'Cultural',
    groupStatus: 'Active',
    groupClass: 'MIT-funded',
    groupFunding: 'undergraduate',
    website: 'http://asians.mit.edu/',
    desc: 'We, the MIT Asian American Association, are dedicated to the promotion of the Asian American experience by providing social, cultural, political, and educational events for the MIT community.',
    meetingTime: 'Sundays at 11pm',
    size: {
      undergraduate: 100,
      graduate: 0,
      mitCommunity: 0,
      other: 0
    }
  },
  { 
    id: 272,
    name: 'Technique Yearbook',
    abbreviation: null,
    category: 'Campus Media',
    groupStatus: 'Active',
    groupClass: 'MIT-funded',
    groupFunding: 'undergraduate',
    website: 'http://technique.mit.edu/',
    desc: 'Technique is the photography, yearbook, and design club of MIT. We work to promote the art of photography through teaching informal lessons and loaning out professional photographic equipment available for free. Every IAP, we compile our best campus life, activities, and sports photographs (alongside living group and senior portraits) into the yearbook.',
    meetingTime: 'We have a general group meeting every Saturday at 1pm for photography tutorials, darkroom lessons, photoshop help, etc.',
    size: {
      undergraduate: 60,
      graduate: 20,
      mitCommunity: 5,
      other: 0
    }
  },
  { 
    id: 1631,
    name: 'Komaza',
    abbreviation: null,
    category: 'Campus Media',
    groupStatus: 'Derecognized',
    groupClass: 'MIT-funded',
    groupFunding: 'undergraduate',
    website: 'http://technique.mit.edu/',
    desc: "Komaza is a unique student-run magazine featuring the international development experiences of MIT students. Our publication presents these stories with a bright design, an informal style, and ample amounts of eye-catching photos. We strive to present diverse content ranging from students' project details to their cultural experiences and ultimately to spread the word about what work is happening in this field, in a fun and easy-to-read format.",
    meetingTime:  null,
    size: {
      undergraduate: 7,
      graduate: 1,
      mitCommunity: 1,
      other: 0
    }
  },
  { 
    id: 2162,
    name: 'Alpha Phi',
    abbreviation: null,
    category: 'FSILG',
    groupStatus: 'Non-Group Entity',
    groupClass: 'Dorm/FSILG',
    groupFunding: null,
    website: 'http://aphi.mit.edu/',
    desc: 'Alpha Phi Sorority',
    meetingTime:  null,
    size: {
      undergraduate: 130,
      graduate: 0,
      mitCommunity: 0,
      other: 0
    }
  },
  { 
    id: 1897,
    name: 'Sigma Alpha Epsilon',
    abbreviation: 'SAE',
    category: 'FSILG',
    groupStatus: 'Non-Group Entity',
    groupClass: 'Dorm/FSILG',
    groupFunding: null,
    website: 'http://sae.mit.edu/',
    desc: 'Social Fraternity focused on service.',
    meetingTime:  '7pm Sundays',
    size: {
      undergraduate: 31,
      graduate: 0,
      mitCommunity: 0,
      other: 0
    }
  },
  { 
    id: 682,
    name: 'Electrical Engineering and Computer Science Graduate Students Association',
    abbreviation: 'EECS GSA',
    category: 'Academic',
    groupStatus: 'Active',
    groupClass: 'Sponsored',
    groupFunding: null,
    website: 'http://sae.mit.edu/',
    desc: 'Student group representing the interests of the graduate student population in Course 6. The mission of the GSA is to: 1. Promote social, professional and academic development; 2. Foster communication and interaction within the department; 3. Encourage a sense of common identity; 4. Facilitate outreach to the community at large.',
    meetingTime:  'General body meeting twice a semester; check group website for details.',
    size: {
      undergraduate: 0,
      graduate: 800,
      mitCommunity: 0,
      other: 0
    }
  },
  { 
    id: 2126,
    name: 'Science Olympiad at MIT',
    abbreviation: 'SciOly',
    category: 'Academic',
    groupStatus: 'Active',
    groupClass: 'MIT-funded',
    groupFunding: 'undergraduate',
    website: 'http://sae.mit.edu/',
    desc: 'Science Olympiad at MIT organizes members of the MIT community to volunteer at Science Olympiad tournaments across New England and organizes an annual Science Olympiad invitational tournament at MIT, bringing nearly 1,000 high school students from across the country to campus for a weekend in January.',
    meetingTime: null,
    size: {
      undergraduate: 20,
      graduate: 3,
      mitCommunity: 0,
      other: 0
    }
  },
  { 
    id: 76,
    name: 'Clubchem',
    abbreviation: null,
    category: 'Academic',
    groupStatus: 'Active',
    groupClass: 'MIT-funded',
    groupFunding: 'undergraduate',
    website: 'http://web.mit.edu/clubchem/www/',
    desc: 'Undergraduate Club for Chemistry majors. Sponsors study breaks with faculty and community outreach Magic Shows.',
    meetingTime: null,
    size: {
      undergraduate: 80,
      graduate: 1,
      mitCommunity: 0,
      other: 0
    }
  },
  { 
    id: 1481,
    name: 'Minority Business Association, MIT',
    abbreviation: 'MMBA',
    category: 'Academic',
    groupStatus: 'Derecognized',
    groupClass: 'Sponsored',
    groupFunding: null,
    website: 'http://mit.edu/mmba/www/',
    desc: 'Our organization strives to provide innovative programs to stimulate the intellectual and professional growth of its members,build networks with local undergraduate management associations, graduate and professional individuals supportive of the mission of the organization and increase the access to and awareness of graduate management programs and career opportunities.',
    meetingTime: null,
    size: {
      undergraduate: 20,
      graduate: 0,
      mitCommunity: 0,
      other: 0
    }
  },
  { 
    id: 2247,
    name: 'Peer Ears',
    abbreviation: null,
    category: 'Other',
    groupStatus: 'Active',
    groupClass: 'MIT-funded',
    groupFunding: 'undergraduate',
    website: 'http://mitpeerears.org/',
    desc: 'Peer Ears aims to provide students at MIT with the tools to support their peers in times of mental distress.',
    meetingTime: null,
    size: {
      undergraduate: 39,
      graduate: 0,
      mitCommunity: 0,
      other: 0
    }
  },
  { 
    id: 2217,
    name: 'Women in Aerospace Engineering, MIT',
    abbreviation: 'WAE',
    category: 'Other',
    groupStatus: 'Active',
    groupClass: 'MIT-funded',
    groupFunding: 'undergraduate',
    website: 'https://www.facebook.com/MITWAE',
    desc: 'The MIT Women in Aerospace Engineering (WAE) is a group focused on uniting women interested in the fields of Aeronautics and Astronautics. The objectives are to foster a community and encourage relationships between women interested in fields within Aeronautics and Astronautics such as defense, military, telecommunications, etc., establish outreach initiatives for those interested in Aeronautics and Astronautics, and connect members for support throughout the undergraduate experience.',
    meetingTime: null,
    size: {
      undergraduate: 52,
      graduate: 0,
      mitCommunity: 0,
      other: 0
    }
  },
  { 
    id: 59,
    name: 'Career Fair Committee',
    abbreviation: null,
    category: 'Other',
    groupStatus: 'Active',
    groupClass: 'Sponsored',
    groupFunding: null,
    website: 'http://career-fair.mit.edu/',
    desc: 'Organize the MIT Career Fair for the Senior Class, GSC, and SWE',
    meetingTime: "set by each year's committee",
    size: {
      undergraduate: 5,
      graduate: 2,
      mitCommunity: 0,
      other: 0
    }
  },
  { 
    id: 2011,
    name: 'Poker Club, MIT',
    abbreviation: 'MPC',
    category: 'Interest',
    groupStatus: 'Active',
    groupClass: 'Unfunded',
    groupFunding: null,
    website: 'http://career-fair.mit.edu/',
    desc: 'The purpose of the this club is to create a community with like interests and also create a better understanding in the game of poker and its applications to trading.',
    meetingTime: null,
    size: {
      undergraduate: 300,
      graduate: 0,
      mitCommunity: 0,
      other: 0
    }
  },
  { 
    id: 2230,
    name: 'TEDx Club',
    abbreviation: 'MTC',
    category: 'Interest',
    groupStatus: 'Suspended',
    groupClass: 'MIT-funded',
    groupFunding: 'undergraduate',
    website: null,
    desc: 'TEDx Club regularly organizes TEDx events at the Massachusetts Institute of Technology campus.',
    meetingTime: null,
    size: {
      undergraduate: null,
      graduate: null,
      mitCommunity: null,
      other: null
    }
  },
  { 
    id: 134,
    name: 'Hillel, MIT',
    abbreviation: null,
    category: 'Religious',
    groupStatus: 'Active',
    groupClass: 'MIT-funded',
    groupFunding: 'undergraduate',
    website: 'http://hillel.mit.edu/',
    desc: 'A resource for Jewish Student life on campus through social, religious and educational programming.',
    meetingTime: 'Shabbat Services and Dinner every Friday Night (6pm Services, 7pm Dinner) General Body Meeting held at the end of the Fall Term.',
    size: {
      undergraduate: 350,
      graduate: 225,
      mitCommunity: 1400,
      other: 20
    }
  },
  { 
    id: 14,
    name: 'American Jiu Jitsu at MIT',
    abbreviation: 'AJJ',
    category: 'Athletic',
    groupStatus: 'Active',
    groupClass: 'Club Sport',
    groupFunding: 'sports council',
    website: 'http://web.mit.edu/jiu-jitsu/www',
    desc: 'At AJJ@MIT, we train in practical and effective self-defense – both traditional and modern. We welcome all body types, fitness, and experience levels. Jiu-Jitsu, or the "Gentle Art," is designed to prepare a person for any situation, including stand-up and ground fighting (with and without weapons) and multiple attacks.',
    meetingTime: 'M 9-11PM W 9-11PM R 9-11PM Su 3-5PM',
    size: {
      undergraduate: 10,
      graduate: 7,
      mitCommunity: 10,
      other: 20
    }
  },
  { 
    id: 1562,
    name: "Men's Gymnastics Club",
    abbreviation: null,
    category: 'Athletic',
    groupStatus: 'Active',
    groupClass: 'Club Sport',
    groupFunding: 'sports council',
    website: 'http://mit.edu/activity/m/mensgymclub/www/',
    desc: "Men's gymnastics",
    meetingTime: 'Monday - Friday, 5-7pm',
    size: {
      undergraduate: 6,
      graduate: 3,
      mitCommunity: 4,
      other: 0
    }
  },
  { 
    id: 2279,
    name: "CalcBee",
    abbreviation: null,
    category: 'Academic',
    groupStatus: 'Applying',
    groupClass: 'Unfunded',
    groupFunding: null,
    website: null,
    desc: "A full-day on-campus math contest in calculus for middle and high school students across the globe.",
    meetingTime: 'Monday - Friday, 5-7pm',
    size: {
      undergraduate: null,
      graduate: null,
      mitCommunity: null,
      other:  null
    }
  },
  { 
    id: 2276,
    name: "Lean On Me @ MIT",
    abbreviation: 'LOM',
    category: 'Social',
    groupStatus: 'Active',
    groupClass: 'Unfunded',
    groupFunding: 'undergraduate',
    website: 'http://lean0n.me/',
    desc: 'The purpose of the Lean On Me @ MIT Student Group is to facilitate communication among peer populations within MIT by way of technology-enabled, volunteer-based support networks, in order to enhance general well-being of the MIT community, particularly students. We envision a world in which everybody has someone to lean on, so we build a pervasive environment of open conversation and peer support. We strive to operate effectively and efficiently to accomplish this mission and to teach ourselves and others effective and sustainable group practices. We hold each other and the MIT community accountable to these ends, and we empower all students to participate in creating our vision and achieving our mission.',
    meetingTime: null,
    size: {
      undergraduate: 30,
      graduate: 3,
      mitCommunity: 5,
      other:  5
    }
  },
  { 
    id: 96,
    name: 'Easy Rider: The MIT Motorcycle Club',
    abbreviation: null,
    category: 'Social',
    groupStatus: 'Derecognized',
    groupClass: 'MIT-funded',
    groupFunding: 'graduate',
    website: 'http://web.mit.edu/easyrider/About.html',
    desc: 'Easyrider, the MIT motorcycle club, was founded in the Spring of 1998 to foster the interaction of motorcyclists at MIT. We promote safety, community, and support for the advantages of two wheeled transportation. We now have 114 members from MIT and the Boston area. Together we go on rides in the area and have various social events where we exchange tips & tricks about motorcycling and enjoy biker life.',
    meetingTime: 'Varied',
    size: {
      undergraduate: 20,
      graduate: 20,
      mitCommunity: 25,
      other:  10
    }
  },
  { 
    id: 2026,
    name: 'Sakata Afrique (MIT African Dance Group)',
    abbreviation: 'Sakata',
    category: 'Cultural',
    groupStatus: 'Active',
    groupClass: 'MIT-funded',
    groupFunding: 'undergraduate',
    website: 'http://sakata.scripts.mit.edu/afrique/',
    desc: 'Sakata Afrique (MIT African Dance Group) introduces African Dance to the MIT community. It provides a platform where MIT students can discover and appreciate African Culture through music and dance.',
    meetingTime: 'Sunday: 4-6 PM (McCormick Dance Studio) Wednesday: 9-10 PM (McCormick Dance Studio)',
    size: {
      undergraduate: 8,
      graduate: 0,
      mitCommunity: 0,
      other:  0
    }
  },
];

export { GROUPS };