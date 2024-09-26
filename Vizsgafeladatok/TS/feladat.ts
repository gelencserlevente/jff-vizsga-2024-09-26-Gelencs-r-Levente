function isTextLong(text:string){
    if(text.length>10){
        return true
    }
    if(text.length<10){
        return false
    }
}

function getSquarePerimeter(a:number):number{
    return 4*a
}

function countEven(numbers:number[]):number{
    let paros=0
    for(let i:number=0;i<numbers.length;i++){
        if(numbers[i]%2==0){
            paros++
        }
    }
    return paros  
}