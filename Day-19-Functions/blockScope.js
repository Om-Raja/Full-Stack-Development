// variables declared inside a block {...}. can not be used outside the block
// applied on only let, const not on var
for(let i = 0; i < 1; i++)
{
    
    let lett = "Lett";
    const CONSTT = "CONSTT";
    var varr = "varr";

    console.log(lett); // printed
    console.log(CONSTT); // printed
    console.log(varr); // printed
}

    console.log(varr); // printed
    console.log(CONSTT); // error
    console.log(lett); // error