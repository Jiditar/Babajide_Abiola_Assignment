/*
events module provides a way to handle and emit events. 
Events are a mechanism for communicating between different parts of an application or system, 
allowing code to respond to changes or triggers.
*/

const events = require('events');
const emitter = new events.EventEmitter();
emitter.on('event', (arg1, arg2) => {
    console.log(`Event emitted with arguments ${arg1} and ${arg2}`);
  });
//To emit an event, you can use the emit() method:
emitter.emit('event', 'foo', 'bar');  