// creating array of strings 
const array = ["hey", "hello", "how are you"]
console.log(array[1])



//creating an array of objects
const notes = [
    {
        id: 1,
        subject: "arrays",
        date: "2/4/2022",
        feeling: "felt good learing it was a lttle confused at first. since it was my first time",
        timeSpent: "i spent about 3 hours doing the entire first row on book 2."
    },
    { 
        id: 2,
        subject: "functions",
        date: "2/4/2022",
       feeling: "Felt more comfortable because i have used functions before but it has been awhile so it was a good refresher",
       timeSpent: "I spent some of the 3 hours that day working on it"
    }
]

const noteAboutToday = {
    subject: "writing code on my own",
    date: "2/6/2022",
    feeling: "feeling really good on struggled with the console log thinking i needed to add something else i didnt need",
    timeSpent: "I spent around 15 minutes writing what it asked for"
}


//declaring a function with a parameter of noteObject(this is not invoking it)
const createNote = (noteObject) => {
    const lastIndex = notes.length - 1
    const arrayObject = notes[lastIndex]
    const newId = arrayObject.id + 1
    noteObject.id = newId

    notes.push(noteObject)
}


//invoking the function, and noteAboutToday is an argument
createNote(noteAboutToday) 
console.log(notes)


const searchTerm = "felt good learing it was a lttle confused at first. since it was my first time"

for (const note of notes) {
    if (searchTerm === note.feeling) {
        console.log(`notes ${note.subject}
        felt good learing it was a lttle confused at first. since it was my first time
        `)
        
    }
}

for (const note of notes) {
console.log(`notes ${note.id}
I learned ${note.subject} on ${note.date} and ${note.feeling} and ${note.timeSpent}
`)
}
