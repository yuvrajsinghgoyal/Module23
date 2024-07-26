const linkedinProfileRegex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]\/$/;

function isvalid(input){
    return linkedinProfileRegex.test(input);
}



let url="https://linkedin.com/in"

if(isvalid(url)!=linkedinProfileRegex){
    console.log(`${url} is vailid`)
}else{
    console.log(`${url} is invailid`)
}

