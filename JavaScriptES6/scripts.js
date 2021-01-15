
// EventEmitter

const EventEmitter = require('events');

class Users extends EventEmitter {
    userLoggeddata(){
        setTimeout(() => {
            this.emit('User logged', data);
        }, 2000);
    }
}

const users = new Users();
users.on('User logged', data => {
    console.log(data);
});

users.userLogged({ user: 'Celso Henrique' })
users.userLogged({ user: 'Vicente Rodrigues' })

/*
//Symbols
const uniqueId = Symbol('Hello');

// Well know symbols

Symbol.iterator;

const arr = [1, 2, 3, 4];
const str = 'Digital Innovation One';



// Generators
const obj = {
    values: [1, 2, 3, 4],
    *[Symbol.iterator]() {
        for (var i = 0; i < this.values.length; i++) {
            yield this.values[i];
        }
    }
};

for (let value of obj) {
    console.log(value);
}
*/

/////////////////////////////////////////////////////////////


/*
//Promises
const doSomethingPromise = () => 
    new Promise((resolved, reject) => {
        setTimeout(function() {
           //did something
            resolved('First data');
        }, 1000);
    
});

const doOtherThingPromise = () => 
    new Promise((resolved, reject) => {
        setTimeout(function() {
          //did something
         resolved('Second data');
        }, 1000);
    
});

Promise.all([doSomethingPromise(), doSomethingPromise()]).then(data => {
    console.log(data);
});
*/


/*
doSomethingPromise()
    .then(data => {
        console.log(data.split(''));
        return doOtherThingPromise();
    })
    .then(data2 => console.log(data2.split('')))
    .catch(error => console.log('ops', error));

*/



// Pending
// Fulfielled
// Reject


/*
//callbacks
function doSomething(callback) {
    setTimeout(function() {
        //did something
        callback('First data');
    }, 1000);
}

function doOtherThing(callback)  {
    setTimeout(function() {
        //did other thing
        callback('Second data');
    }, 1000);
}

function doAll() {
    try{


        doSomething(function(data) {
            var processData = data.split('');
            
            try {
                doOtherThing(function(data2) {
                    var processData2 = data2.split('');

                    try {
                        setTimeout(function() {
                            console.log(processData, processData2);
                        }, 1000);
                    } catch (err) {
                        //handle error
                    }
                });
            }catch (err) {
                //handle error
            }
        });
    } catch (err) {
        //handle error
    }
}

doAll();
*/