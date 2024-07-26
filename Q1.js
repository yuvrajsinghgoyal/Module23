let input = "Pw Skills "
function Rev(StrIn){
    return StrIn.split("").reverse().join("");
}
function RevD(StrIn){
    setTimeout(function Rd (){
        let RevV=Rev(StrIn)
        console.log("Loaded",RevV)
    },3000)
}
RevD(input)

