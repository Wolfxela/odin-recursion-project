const fibs = function(num)
{
    let array = [0,1]
    if(num == 0)
    {
        return array
    }
    else
    {
        
        num--
        array.push(array[array.length - 2]+array[array.length -1])
        //x += fibs(num,x)
        return array = [...fibs(num,array)]
    }
}


// const fibs = function(num,array)
// {
    
//     if(num = 0)
//     {
//         return array 
//     }
//     else
//     {
//         num--
//         return array.push(numArray[i]+numArray[i+1])
//     }
// }

console.log(fibs(10))