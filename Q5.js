



const urlPattern = /^(https?:\/\/)[a-zA-Z0-9\-._~:/?#[\]@!$&'()*+,;=%]+[.][a-zA-Z]+$/;

function Isvalid(input){
    return urlPattern.test(input);
}

url="https://PwSkills.com"

if(Isvalid(url)){
    console.log(`valid url ${url}`)
}else{
    console.log(`invaild url ${url}`)
}