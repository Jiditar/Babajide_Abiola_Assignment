// child_process module provides the ability to spawn child processes 
//and interact with them through standard input/output streams
/*
There are two main functions in the child_process module:
spawn(): This function launches a new process with the given command and arguments.
exec(): This function runs a shell command in a new process and buffers the output.
*/

const { spawn } = require('child_process');
const ls = spawn('ls', ['-lh', '/usr']);

ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});
