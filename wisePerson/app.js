function wisePerson(wiseType, whatToSay) {
  return 'A wise ' + 
    wiseType + ' once said: "' + whatToSay + '".';
}

function testWisePerson() {
  var wiseType = 'goat';
  var whatToSay = 'hello world';
  var expected = 'A wise ' + wiseType + ' once said: "' +
      whatToSay + '".';
  var actual = wisePerson(wiseType, whatToSay);
  if (expected === actual) {
    console.log('SUCCESS: `wisePerson` is working');
  }
  else {
    console.log('FAILURE: `wisePerson` is not working');
  } 
}

testWisePerson();