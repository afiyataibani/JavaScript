const sym = Symbol() // key

        const obj1 = {
            1 : 'Arti',
            3 : "ukwe",
            [sym] : "SymbolValue",
            "email" : "A@gmail.com",
            "full name" : "Arti singh Chaudhary"
        }

        console.log(obj1[3])

        obj1.email = "arti@gmail.com"
        console.log(obj1)

        Object.freeze(obj1)

        obj1.email = "singh@gmail.com"
        
        console.log(obj1[sym])
        console.log(obj1["email"])
        console.log(obj1["full name"])


        const obj2 = {
            2:"a",
            3 :"b"
        }
        const obj3 = {
            4:"c",
            5 :"d"
        }

        const obj4 = {obj2 , obj3} // possible valid

        const obj5 = Object.assign({},obj2,obj3) // target {} 

        const obj6 = {...obj2, ...obj3} // ... spread operator

        console.log(obj6)

        const obj7 = {
            user1 : {
                name : "Arti",
                fullName : {
                    firstName : "Arti",
                    middleName : "Singh",
                    lastName : "Chaudhary"
                }
            }
        }

        // console.log(obj7.fullName.middleName)
        console.log(obj7["fullName"]["firstName"])
        