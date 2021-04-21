const yargs = require('yargs') 
const notes = require('./notes.js')
 

//customize version
yargs.version('1.1.0')
//yargs add command
yargs.command({
    command: 'add' ,
    describe: 'Add a new note',
    builder: {
        title:{
        describe: 'Note Title',
        demandOption: true,
        type: 'string'
        },
        body: {
            describe: 'body of the note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body)
    }
})

//Removing a node
yargs.command({
    command: 'remove',
    describe: 'removing a note',
    builder: {
        title: {
            describe: "Note Title",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

// listing notes
yargs.command({
    command: 'list',
    describe: 'listing your notes',
    handler(){
        notes.listNotes()
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})

yargs.parse();