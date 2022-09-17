let main=document.getElementById("main");
let add_user=document.getElementById("add-user");
let double=document.getElementById("double");
let show_millon=document.getElementById("show-millionaires");
let sort=document.getElementById("sort");
let calc=document.getElementById("calculate-wealth");

let full_name=" ",age,money,all=[];
let user={};
let getRandomUser= function fetch_data(url = "https://randomuser.me/api")
{
    fetch("https://randomuser.me/api")
    .then((resp)=>resp.json())
    .then((data)=>{
        const {name,registered}= data.results[0];
        age=registered.age;
        full_name= name.title+" "+name.first+" "+name.last;
        money= Math.floor(Math.random() * 100);
       user={
        name:full_name,
        wealth:money
                };
                all.push(user);
        main.innerHTML+=user.name + ",     ,Have "+ user.wealth+"$" +"<br>";
        }
    
    );
    
}

let doubleMoney = function()
{
    all.forEach(element => element.wealth*=2);
update();
}
let show=function()
{  let inner=[];
     inner = all.filter(elemnt => elemnt.wealth > 10000000);
    update(inner);
}
let sorts=function()
{ 
    all.sort((a, b) => b.wealth - a.wealth);
update(all);
}
let calcs=function()
{
    let sum=0;
    
let sumetion=all.reduce((pre,next)=>pre+=next.wealth,sum=0);
main.innerHTML+="<hr>"+"     Sumation of all wealth is "+ sumetion +"$" +"<br>";
}

let update=function(array=all)
{
main.innerHTML=" ";
array.forEach(element => {
    main.innerHTML+=element.name + ",     ,Have "+ element.wealth+"$" +"<br>";

});

}

add_user.addEventListener('click', getRandomUser);
double.addEventListener('click', doubleMoney);
show_millon.addEventListener('click', show);
sort.addEventListener('click', sorts);
calc.addEventListener('click', calcs);