function textToBinary(string){
	var bin, char1, char2, char3, char4;
	var out ='';
	var res = '';
	for(var i=0; i<string.length; i++) {
		// Character to binary code
		bin =string.charCodeAt(i).toString(2);
		// Because utf-8 is a variable length encoding (1 to 4 bytes), you need to split the binary value according to the case
		switch(bin.length)  {
			case 0: case 1: case 2: case 3: case 4: case 5: case 6: case 7:
				// 0xxxxxxx
				while(bin.length<=7) bin = '0' + bin;
				res = bin;
				break;
			case 8: case 9: case 10: case 11:
				// 110xxxxx 10xxxxxx    
				char2 = '10'+bin.slice(-6);
				char1 = bin.slice(0, bin.length-6);
				while(char1.length<5) char1 = '0' + char1;
				char1 = '110'+char1;
				res = char1 + char2;
				break;
			case 12: case 13: case 14: case 15: case 16:
				// 1110xxxx 10xxxxxx 10xxxxxx
				char3 = '10'+bin.slice(-6);
				char2 = '10'+bin.slice(-12,-6);
				char1 = bin.slice(0, bin.length-12);
				while(char1.length<4) char1 = '0' + char1;
				char1 = '1110'+char1;
				res= char1+char2+char3
				break;
			case 17: case 18: case 19: case 20: case 21:
				// 11110xxx 10xxxxxx 10xxxxxx 10xxxxxx
				char4 = '10'+bin.slice(-6);
				char3 = '10'+bin.slice(-12,-6);
				char2 = '10'+bin.slice(-18,-12);
				char1 = bin.slice(0, bin.length-18);
				while(char1.length<3) char1 = '0' + char1;
				char1 = '11110'+char1;
				res=char1+char2+char3+char4;
				break;
		}
		out= out+res;
	}
	return out;
}
function textToDNA(string){
	var out, bin, slice;
	out=''
	bin = textToBinary(string);
	for(var i=0; i<bin.length; i=i+2) {
		switch(bin.slice(i,i+2))  { 
			case '00':
				out=out+'A';
				break;
			case '01':
				out=out+'C';
				break;
			case '10':
				out=out+'G';
				break;
			case '11':
				out=out+'T';
				break;
		}
	}
	return out;
}
function convertToDNA (source, dest){
	var sdata = document.getElementById(source).value;
	var out = textToDNA(sdata);
	document.getElementById(dest).innerHTML=out;
}
