/*
- [x] Create the `shouter` function
- [x] `shouter` should accept a single argument, named `whatToShout`
- [x] `shouter` should turn the content of `whatToShout` upper case
- [x] `shouter` should concatenate three explanation points to the end
      of the `whatToShout` content
- [x] `shouter` should return the new content of `whatToShout`
*/

function shouter (whatToShout) {
	whatToShout = whatToShout.toUpperCase() + '!!!';
	return  whatToShout;
}

function testShouter() {
	var whatToShout = 'lorem ipsum';
	var expected = 'LOREM IPSUM!!!';
	if (shouter(whatToShout) === expected) {
		console.log('SUCCESS: `shouter` is working');
 }
 else {
 	console.log('FAILURE: `shouter` is not working');
 	}
 }

 testShouter();