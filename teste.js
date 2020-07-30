const test01 = new Promise((resolve, reject) => {
    setTimeout(function(){
        resolve('a vem primeiro');
    }, 3000)
})

const test02 = new Promise((resolve, reject) => {
    resolve('b vem depois');
})

const asyncFunction = async () => {
    try{
        const firstPart = await test01;
        const secondPart = await test02;
        console.log(firstPart);
        console.log(secondPart);
    }
    catch (err) {
        console.log(err);
    }
}
asyncFunction();
