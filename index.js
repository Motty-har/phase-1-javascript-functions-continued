// code your solution here
function saturdayFun (activity= "roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}
const mondayWork = function (work= "go to the office"){
    return `This Monday, I will ${work}.`
}
function wrapAdjective(flair= "*"){
    return function (adjevtive = "special"){
        return `You are ${flair}${adjevtive}${flair}!`
    }
}