var convert = function(s, numRows) {
    let r="";
    if(numRows==1) return s;
    for(let i = 0 ; i  < numRows ; i++){
        for(let i1 = i ;i1<s.length ;i1=i1+numRows*2-2){
            r=r+s[i1];
            if(i!=0 && i!= numRows-1){
                if(i1+ (numRows - 1 - i)*2<s.length)
                    r=r+s[ i1+ (numRows - 1 - i)*2];
            }
        }
    }
    return r;
};