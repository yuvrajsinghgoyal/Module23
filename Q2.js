function Randnum(){
    return Math.floor(Math.random()*200);
}

function DealyNum(condownNum){
    console.log(`Your Random number is genrating in ${condownNum } SEcondes.....`)
    let condown=3;
    LiveCon=setInterval(()=>{
        console.log(`secdons Remainig  ${condown}...`)
        condown--;

        if(condown===0){
            clearInterval(LiveCon);
            let Rand=Randnum()
            console.log(`your radndim is  ${Rand}`)
        }
    },3000)
}
DealyNum(3)
