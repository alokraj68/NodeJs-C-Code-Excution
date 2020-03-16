const { exec,spawn } = require('child_process');

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

//using spawn
const child = spawn(toExecute, []);
child.on('exit', (code) => {
    console.log(`Child process exited with code ${code}`);
});
child.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
});
child.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`);
});
