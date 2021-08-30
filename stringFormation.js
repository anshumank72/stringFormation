function stringFormation(a){
    let lengthOfArray = a.length;
    let firstChar = [],
        secondChar =[],
        currentIndex = 0,
        count = {},
        

    while(currentIndex<lengthOfArray){
      firstChar.push(a[currentIndex].charAt(0));
      secondChar.push(a[currentIndex].charAt(2));
      
      recordLetter(count, a[currentIndex].charAt(0), a[currentIndex].charAt(2));
      currentIndex++;
    }

    let first;
    for(let i in count){
      if(count[i] === 1){
        if(firstChar.indexOf(i) >= 0) first = i;
      }
    }
    
    let result = first;
    currentIndex = firstChar.indexOf(first);
    let times = 0;
    while(times < lengthOfArray){
      result += secondChar[currentIndex];
      currentIndex = firstChar.indexOf(secondChar[currentIndex]);
      
      times++;
    }
    console.log(result)
    return result;
  }
  
  
  function recordLetter(count, letter1, letter2){
    count[letter1] = count[letter1] ? count[letter1]+1 : 1;
    count[letter2] = count[letter2] ? count[letter2]+1 : 1;
    return count;
  }
  
  stringFormation(["P>E", "E>R","R>U"])
  stringFormation(["I>N", "A>I","P>A","S>P"])