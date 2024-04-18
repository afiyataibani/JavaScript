/*
    *****
    *****
    *****
    *****
    *****
 */

let size = 5
for(let i = 0; i < size; i++){
    row = ''

    for(let j = 0; j < size; j++){
        row = row + "*"
    }

    console.log(row)
}

/*
    *
    **
    ***
    ****
    *****
 */

for(let i = 0; i < size; i++){
    row = ''

    for(let j = 0; j <=  i; j++){
        row = row + "*"
    }

    console.log(row)
}

/*
    1
    12
    123
    1234
    12345
 */

for(let i = 1; i <= size; i++){
    row = ''

    for(let j = 1; j <= i; j++){
        row = row + j + ''
    }

    console.log(row)
}

/* 
    *
   ***
  *****
 *******
*/

for(let i = 1; i < size; i++){
    row = ''

    for(let j = 1; j <= size - i; j++){
        row = row + ' '
    }

    for(let k = 1; k <= 2*i-1; k++ ){
        row = row + '*'
    }

    console.log(row)
}
