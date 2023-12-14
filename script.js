let request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all")
request.send();
request.onload=function(){
let result=JSON.parse(request.response)
console.log(result);


//a.Get all the countries from Asia continent /region using Filter function
let countries=result.filter((value)=>value.region==='Asia')
console.log(countries);


//b.Get all the countries with a population of less than 2 lakhs using Filter function
let population=result.filter((value)=>value.population<200000);
console.log(population);

//c.Print the following details name, capital, flag, using forEach function
let details=result.forEach(element => {
  console.log(element.name.comme,element.capital,element.flag);
});

//d.Print the total population of countries using reduce function
let total=result.reduce((acc,cv)=>acc+cv.population,0)
console.log("Total Population   "+total);

//e.Print the country that uses US dollars as currency.
 
};
