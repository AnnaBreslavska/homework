var arr = `[
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
]`;
arr = arr.replace(/[<>]/g, "");
arr = arr.replace(/(\w+)\s*:/g, '"$1":');
let array = JSON.parse(arr);

let check =  /\w+(\.\w+)?@(gmail.com|yahoo.com)/gi;
let correctEmails = [];

array.forEach(element => {

    if (element.email && element.email.match(check)) {
        
        correctEmails.push(element);    }
});
console.log(correctEmails);