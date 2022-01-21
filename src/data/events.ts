export const eventList: EventItem[] = [
    {
        title: "Agricultural Students visit to Fish pond",
        date: new Date("2022-01-21"),
        description: ""
    },
    {
        title: "1st Continuous Assessment 31st January",
        date: new Date("2022-02-04"),
        description: ""
    }
    , {
        title: "Secondary Students Excursion to National space Research and Development Agency Museum",
        date: new Date("2022-02-7"),
        description: ""
    }
].sort((a, b) => +b.date - +a.date)

// const toEventLines = (evens: EventItem[]): EventItemLine[] => {

//     const eventLines: EventItemLine[] = [];

//     for (var i = 0; i < evens.length - 1; (i + 2)) {
//         eventLines.push({ left: evens[i], right: evens[(i + 1)] })
//     }

//     return eventLines;
// }

// const eventlines = toEventLines(evs)

interface EventItemLine {
    left: EventItem,
    right?: EventItem
}

interface EventItem {
    title: String,
    date: Date,
    description: String
}

const ev: EventItemLine[] = [{ left: eventList[0], right: eventList[1] }, { left: eventList[2] }]

export default ev;// eventlines;