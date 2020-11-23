import * as firebase from 'firebase';


const  config = {
    apiKey: "AIzaSyAVSRHrrBFkqBJ4ia2GM5lF_lNWoIEeJ5s",
    authDomain: "expensify-bb9d3.firebaseapp.com",
    databaseURL: "https://expensify-bb9d3.firebaseio.com",
    projectId: "expensify-bb9d3",
    storageBucket: "expensify-bb9d3.appspot.com",
    messagingSenderId: "555102318411",
    appId: "1:555102318411:web:5e32a5c89c57fd263542ce",
    measurementId: "G-MM2H52B2DD"
  };
 firebase.initializeApp(config);

 const database = firebase.database();

 //child_removed by using events with on
 database.ref('expenses').on('child_removed',(snapshot)=>{
     console.log(snapshot.key,snapshot.val());
 });
// child_changed
database.ref('expenses').on('child_changed',(snapshot)=>{
    console.log(snapshot.key,snapshot.val());

});

//child_added
database.ref('expenses').on('child_added',(snapshot)=>{
    console.log(snapshot.key,snapshot.val());

});








//  database.ref('expenses')
//  .once('value')
//  .then((snapshot)=>{
//      const expenses = [];


//      snapshot.forEach((childsnapshot)=>{
//         expenses.push({
//           id: childsnapshot.key,
//          ...childsnapshot.val() 
//         }) ;
//      });
//      console.log(expenses);
      
//  });

//using subsription by using on so that data change reflect automatically

// database.ref('expenses').on('value',(snapshot)=>{
//     const expenses = [];


//          snapshot.forEach((childsnapshot)=>{
//             expenses.push({
//               id: childsnapshot.key,
//              ...childsnapshot.val() 
//             }) ;
//          });
//          console.log(expenses);
// });


 //fetching

//  database.ref('location/city')
//    .once('value').then((snapshot)=>{
//       const val = snapshot.val();
//       console.log(val);
       
//    }).catch((e)=>{
//             console.log('Eoor:',e)
//    });

// database.ref().on('value',(snapshot)=>{
//  console.log(snapshot.val());
// });


//  database.ref().set({
//          name: 'MOHIT Mittal',
//          age: 26,
//          stresslevel: 6,
//          job:{
//              title: 'Software Developer',
//              country: 'India'

//          },
       
//          location: {
//              city: 'INdia',
//              country: 'india'
//          }
//  }).then(()=>{
//      console.log('Data is Saved');
//  }).catch((error)=>{
//      console.log('This Failed:' , error);
//      });

//  database.ref('age').set(27);
//  database.ref('location/city').set('Lucknow');


// // database.ref().remove().then(()=>{
// //    console.log('data is removed');
// // }).catch((error)=>{
// //     console.log('data is not removed:',error);

// // });

// //deleting data by set
// //database.ref('isSingle').set(null);

// // updating 

// // database.ref().update({
// //    job: 'Manager',
// //    'location/city': 'Bangalore'

// // });

// database.ref().update({
//      stresslevel: 7,
//      'job/country':'Amazon',
//      'location/city': 'Seattle'
// });