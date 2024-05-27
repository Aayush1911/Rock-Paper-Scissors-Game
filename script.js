let choices=document.querySelectorAll('.choice')
let result=document.querySelector('.result')
let userscore=document.querySelector('#userscore')
let compscore=document.querySelector('#compscore')
let user=0;
let comp=0;

const getcompchoice=()=>{
    const option=['rock','paper','scissor']
    const comp=Math.floor(Math.random()*3);
    // console.log('compchoice'+" "+option[comp]);
    return option[comp]
}
const drawgame=()=>{
    result.innerText='Draw Game'
    result.style.backgroundColor='#081b31'
    result.style.color='white'

}
const showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        user++;
        userscore.innerText=user;
        result.innerText=`User Win!! Your ${userchoice} beats ${compchoice}`
        result.style.backgroundColor='green'
        result.style.color='white'

    }else{
        comp++;
        compscore.innerText=comp
        result.innerText=`You lost. ${compchoice} beats your ${userchoice}`
        result.style.backgroundColor='red'
        result.style.color='white'
    }
}
const playgame=(userchoice)=>{
    // console.log('userchoice'+" "+userchoice);
    let compchoice=getcompchoice()
    if(userchoice==compchoice){
        drawgame()
    }else{
        userwin=true
        if(userchoice=='rock'){
            userwin=compchoice=='paper'?false:true            
        }else if(userchoice=='paper'){
            userwin=compchoice=='rock'?true:false
        }else{  
            userwin=compchoice=='paper'?true:false
        }
        showwinner(userwin,userchoice,compchoice)
    }
}
choices.forEach((choice) => {
    choice.addEventListener('click',()=>{
        let userchoice=choice.getAttribute("id")
        // console.log(userschoice);
        playgame(userchoice)
    })    
});
