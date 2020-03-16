const { exec,spawn,fork } = require('child_process');

// var toExecute = "ipconfig /all";
var toExecute = 'hello.exe';

//works with exec

// const ls = exec(toExecute, function (error, stdout, stderr) {
//   if (error) {
//     console.log(error.stack);
//     console.log('Error code: '+error.code);
//     console.log('Signal received: '+error.signal);
//   }
//   console.log('Child Process STDOUT: '+stdout);
//   console.log('Child Process STDERR: '+stderr);
// });

// ls.on('exit', function (code) {
//   console.log('Child process exited with exit code '+code);
// });

//using spawn // not working. same issue as per the program
const child = spawn(toExecute, []);
// Pipe the input on the parent stdin to the child stdin
child.on('exit', (code) => {
    console.log(`Child process exited with code ${code}`);
});
child.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
});
child.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`);
});
console.log("pid is",child.pid.toFixed());

setTimeout(function () {
 console.log("starting to write");
process.stdin.pipe(child.stdin);
child.stdin.setEncoding('utf-8');
child.stdout.pipe(process.stdout);

child.stdin.write("-boot 0 0 0 0");

// child.stdin.end();
console.log("write done and ended");

}, 10000);

//fork getting error on execute for c executables
// const n = fork(toExecute);
// n.on('message', (m) => {
//   console.log('PARENT got message:', m);
// });
// n.send('-boot 0 0 0 0');
// n.on('close', function (code) {  
//     console.log('child process exited with code ' + code);  
//  });  
//sub.js
// process.on('message', (m) => {
//   console.log('CHILD got message:', m);
// });
// process.send('-wftest 0 0 0 0');

// let child = fork(toExecute);

// child.on('message', (message) =>{
//  console.log('Parent got message: '+message);
//  //this script got a message from child.js
// });
