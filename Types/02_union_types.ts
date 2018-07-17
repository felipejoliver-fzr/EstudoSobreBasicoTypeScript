let something: (Array<any> | string);

//something = [1, 2 , 3];
//something = "one string";

// something.substr(1, 3); apresentará erro, abaixo está uma solução
if (typeof something === "string"){
    something.substr(1, 3);
}
// ou
(something as string).substr(1, 3);
(<string>something).substr(1, 3);