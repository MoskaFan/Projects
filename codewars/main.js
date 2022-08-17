/*function solution(number){
  let arr = [];
  let result = new Set();
  let a = 0;
  if (number > 0){
    for (let i = 0; i < number; i++){
      arr.push(i);
    }
  }else{
    return 0;
  }
  result = arr.filter ((i) => i % 3 == 0 || i % 5 == 0);
  function sum(res){
    return res.reduce ((x, y) => x + y, 0);
  }
  a = sum(result);
  return a;
}

	
	console.log(solution(21));*/



 var uniqueInOrder=function(iterable){
  //your code here - remember iterable can be a string or an array
 
	 if (typeof iterable === 'string' || iterable instanceof String){
      let arr = iterable.split('');
      let uniqueChars = [... new Set(arr)];
	 		return uniqueChars;
   }else{
     var arr = [];
     for (var i of iterable){
       arr.push(i);
     }
     
     let uniqueChars = [... new Set(arr)];
	 return uniqueChars;
   }

 }


console.log(uniqueInOrder('AAAABBBCCDAABBB'));
/*
	

		const unique = (value, index, self) => {
  return self.indexOf(value) === index;
}
	
	const res = arr.filter(unique);
	 
	 return res;

}*/