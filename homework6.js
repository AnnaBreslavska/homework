var arr = `
[
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        <email:"dmitro.porohov@yahoo.com>"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru"
    }
]
`;
arr = arr.replace(/[<>]/g, "");
//console.log(arr);
let check = /\w+(\.\w+)?@(gmail.com|yahoo.com)/gi;
let correctEmails = arr.match(check);
console.log(correctEmails);