// Minimum and maximum values

function findMaxMin(numbers)
{
    let min = numbers[0];
    let max = numbers[0];

    for(let i = 0; i < numbers.length; i++)
    {
        if(numbers[i] < min)
        {
            min = numbers[i];
        }

        if (numbers[i] > max)
        {
            max = numbers[i];
        }
    }

    return {min, max};
}

let result = findMaxMin([1, 45, 65, 30, 23]);
console.log("Min Number: " + result.min);
console.log("Max Number: " + result.max);