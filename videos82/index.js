async function sleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(46)
        }, 1000);

    }
    )
}

//IIFE FUNCTION
(async function main() {
    // let a = await sleep()
    // console.log(a)
    // let b = await sleep()
    // console.log(b)

    // let [x,y] = [1,5]
    // console.log(x,y)
    // let [x,y,...rest] = [1,5,7,8,9,3,2]
    // console.log(x,y,rest)

    let obj = {
        a : 1,
        b : 2,
        c : 3,
    }
    let {a,c} = obj
    console.log(a,c)
})()

