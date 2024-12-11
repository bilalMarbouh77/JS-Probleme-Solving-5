function isIsogram(str) {
    let check= true;
    for(let i=0;i<str.length;i++){
        for(let j=i+1;j<str.length;j++){
            if(str[i].toLowerCase()==str[j].toLowerCase()){
                check=false;
                break;
            }
        }
    }
    return check;
}


// Question:
// Write a JavaScript function that
// checks if a given string is an isogram. 
// An isogram is a word where no letter
// repeats, regardless of case.