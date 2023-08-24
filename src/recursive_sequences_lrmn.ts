function sequence_lrmn(n:number):number{
    if(n==1){
        return 1;
    }else{
        return 2*sequence_lrmn(n-1)
    }
}
console.log(sequence_lrmn(4));