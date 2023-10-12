const recfibs = function(num)
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
        return array = [...recfibs(num,array)]
    }
}

const itfibs = function(num)
{
    const numArray = [0,1]

    for(let i = 0;i<num;i++)
    {
        numArray.push(numArray[i]+numArray[i+1])
    }
}

const mergeFunction = function(array)
{
    if (array.length < 2)
    {
        return array
    }
    else
    {
        const arraySize = array.length
       
        let returnArray = []
        //if array is bigger than 1, split into 2
        let rightPart = mergeFunction(array.splice(array.length/2,array.length/2)) 
        let leftPart = mergeFunction(array)
        for(let i = 0;i<arraySize;i++)
        {
            
            if(leftPart[0]<rightPart[0] || rightPart[0] == null)
            {
                returnArray.push(leftPart.shift())
                
            }
            else
            {
                returnArray.push(rightPart.shift())
            }

            
            
        }
        return returnArray
    }
}
const mergeFunction2 = function(array)
{
    if (array.length < 2)
    {
        return array
    }
    else
    {
        const arraySize = array.length
       
        //if array is bigger than 1, split into 2
        let rightPart = mergeFunction(array.splice(array.length/2,array.length/2)) 
        let leftPart = mergeFunction(array)
        array = []
        for(let i = 0;i<arraySize;i++)
        {
            
            if(leftPart[0]<rightPart[0] || rightPart[0] == null)
            {
                array.push(leftPart.shift())
                
            }
            else
            {
                array.push( rightPart.shift())
            }

            
            
        }
        return array
    }
}

let fox = mergeFunction2([3,2,1,4,3,7])
console.log(fox)
