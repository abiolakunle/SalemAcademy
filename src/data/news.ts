const data: News[] = [
    {
        heading: "Christmas Carol", body: `
**Christmas Carol**

The end of the first term always coincides with the end of the year and carol&#39;s are part of the festivities that characterizes that time of the year.

Salem Academy, 2021 Christmas Carol, held at the school&#39;s multipurpose hall, was a great way to wrap up the year&#39;s events and celebrate the Yuletide before the students went on vacation.

It was a full house as parents and guardians turned up for the event… EVERYONE LOVES CHRISTMAS!

There was a beautifully dressed choir who treated the audience time and time again to sonorous Christmas tunes.

The different classes in the nursery section had a handful of slots in the program of events to sing Christmas rhymes and songs.

A drama presentation portraying the birth of Jesus, which is a highlight in every Christmas Carol was acted by the primary section.

The teachers were not left out. As students watched with utter excitement as their instructors wowed the crowd with an amazing song presentation.

It was indeed a Carol to remember.
    
        `,
        date: new Date("2021-12-12"),
        image: "./assets/images/Salem8.jpg"
    },
    {
        heading: "World Soil Day", body: `
    
**World Soil Day**

As part of our resolve to ensure that our students at Salem Academy get the best education, we do not just do a perfect job in the class room, we are also strategically positioned to seize opportunities that will improve the learning experience of our students.

The Nigeria Institute of Soil Science with head quarters in Abuja, in the most recent commemoration of the World Soil Day extended an invitation to Salem Academy to be part of the event which held at Merit house, Maitama Abuja.


![salem-news](./assets/images/Salem21.jpg)


The theme for the 2021 event was; **Halt Soil Salinization, Boost soil productivity**.

The students, members of the Young Farmers Club, were treated to lectures on soil protection and productivity. And other lectures were centered on soil components and salinity.

The lectures were delivered by professionals and professors from top-rated universities in Nigeria and facilitators from related institutes around Africa.

It was a great time of learning for the students as they were given opportunity to ask questions from the series of lectures they received.

![salem-news](./assets/images/Salem18.jpg)

As they got back to school after the event, the students who were accompanied by their Agricultural Science Teacher, quizzed her in their next Young Farmers Club meeting on possible career path in Agricultural Science.

It&#39;s safe to say the opportunity to be part of World Soil Day 2021 with the theme; Halt Soil Salinization, Boost Soil Productivity, has had a lasting impact on our students and opportunities of this sort and quality are a regular fit at Salem Academy.
        `,
        date: new Date("2021-12-5"),
        image: "./assets/images/Salem15.jpg"
    },

    {
        heading: "CULTURAL DAY", body: `
    
**CULTURAL DAY**

At Salem Academy, whether our students are inside the classroom or outside of it, every opportunity we get with them is a conscious attempt to ensure their whole educational development.

The cultural day celebration, held on the 20th of November 2021, which provided a platform for the students to be exposed to various cultures across Nigeria and for them to express their creative skills, was not an exception.

It was such a sight as parents, guests and other dignitaries present at the school premises, the venue of the event, watched with palpable excitement as our students filed out in different carefully tailored cultural attires, churning out various presentations ranging from dance, to drama to traditional poetry and so much more.

With well over 200 ethnic groups in Nigeria, at the cultural day celebration which was described by some of our guests as colorful, every region was represented.

The level of preparation for the cultural presentations, facilitated by our able educational instructors, who themselves were split into various cultural groups, was brought to light with the quality of display by the students.

The cultural day celebration which is held every session creates an avenue for our students to experience first hand some of the aspects of culture taught in the classroom.

![salem-news](./assets/images/cultural.jpg)

Here are some reasons for exposing students on culture;

1. **Understanding informs Appreciation** : Naturally, when we understand something, we value that thing; and when we value something, we will protect that thing and we will strive to learn even more. It is important for students to be taught about culture because, through a proper understanding, a student will be able to connect and appreciate culture and they will be able to imbibe and apply it where needed.

2. **To help shape their Identity:** When students become aware of their culture and where they are from, they begin to truly know themselves as they should. They begin to appreciate their origin and true identity. And society becomes better for it.

3. **To ensure continuity** : If culture and tradition will enjoy any form of continuity, then the younger generation must be taught about it today. With the ever increasing influence of western values and cultures, if we are to preserve the fabric of our origin, and have any trace of our language, values, beliefs in the nearest future, then students should learn about their culture  in school.

At the end of the event the first position went to the South-East, the second position South-West, and the North-East came third. They all went home with mouth watering prizes.

Teaching about culture in the classroom and organizing cultural events in schools, makes for the all-round academic and social development of the child and this is what we are about at Salem Academy.    `,
        date: new Date("2021-11-20"),
        image: "./assets/images/Salem24.jpg"
    }
].sort((a, b) => +b.date - +a.date)


interface News {
    heading: String,
    date: Date,
    image: String,
    body: string
}

export default data;
