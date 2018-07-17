let test_for_of_loop = function () {
    let iterable: any = [3, 5, 7];
    iterable.arrayOwner = 'Felipe_Oliveira';

    console.log("for in loop");
    for (let i in iterable) {
        console.log(iterable[i]);
    }

    console.log("for of loop");
    //print somente os numeros
    for (let i of iterable) {
        console.log(i);
    }
}