//child.js

//got a message
process.on('message',(message)=>{
    console.log(message);
   });
   
   //send a message back to parent
   setInterval(function () {
   process.send('A message from child.js');
   },2000);