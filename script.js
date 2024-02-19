function decimalToBinary(num) {
  //Write you code here
	 let i = 0;
  let binaryNum = new Array();
  while (num > 0) { 
    binaryNum[i] = num % 2; 
    num = Math.floor(num / 2); 
    i++; 
  } 
  let binaryString = '';
  for (let j = i - 1; j >= 0; j--) 
    binaryString += binaryNum[j];
  return binaryString;
}

window.decimalToBinary = decimalToBinary;
