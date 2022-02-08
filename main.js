


let messege = "bla blalbasjjnasdjkn***,,, ^^^ ,,, hdvhvff,"
let specialCharachters = "*^,"
let counter = 0
for (let i = 0; messege[i]; i++) {

    for (let j = 0; specialCharachters[j]; j++) {
        if (messege[i]== specialCharachters[j]) {
            counter++
        }
    }

}
console.log(counter);