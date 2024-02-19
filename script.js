function decimalToBinary(num) {
  //Write you code here
	let decimal = prompt('please insert decimal number');
	let i = 0;
	 let binaryNum = new Array();
    while (num > 0) { 
  
        // storing remainder in binary array 
        binaryNum[i] = num % 2; 
        num = Math.floor(num / 2); 
        i++; 
    } 
	for (let j = i - 1; j >= 0; j--) 
        console.log(binaryNum[j]); 
}

window.decimalToBinary = decimalToBinary;
