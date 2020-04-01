// here this peice of code demonstrate that setTimeOut() is an api 
// and the javascript v8 engine consist of a memory heap a call stack 
// an even loop a call back queue and web apis

console.log("1");
setTimeOut(()=>{
	console.log("2");
},1000);
console.log("3");

//copy and paste this code on to your console try yourself


// here in this block of code if we set any number of seconds then it will 
// do the block of code after that specified amount of time but if we set 
// zero as number of seconds still it does the same thing because under 
// the hood a lot of processes takes place even if the number of seconds 
// is zero even then the first console gets pushed and popped from the 
// call stack then set time out calls the web api to set a callback after 
// 1 second in the below case then in the mean time call stack reaches 
// and executes the third console log and then the event loop checks the
// callback queue if there is something there then it puts the console log
// gets pushed on to the call stack then it gets executed so even if the 
// time is set to be zero then these all processes takes time therefore 
// we get the same output 
//to read more about this api go to https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout


console.log("1");
setTimeOut(()=>{
	console.log("2");
},0);
console.log("3");

//copy and paste this code on to your console try yourself
