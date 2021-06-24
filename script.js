Task 2:-

1.Get all countries from Asia continent/region using filter function:-
Code:-
   var request= new XMLHttpRequest();
   request.open('GET','https://restcountries.eu/rest/v2/all',true);
   request.send();
   request.onload = function(){
   var data = JSON.parse(this.response);
   var res=data.filter(function area(element){
   return element.region==="Asia"});
   console.log(res);
   }

2.Get all countries with population of less than 2 lacs using filter function:-
Code:-
  var request= new XMLHttpRequest();
  request.open('GET','https://restcountries.eu/rest/v2/all',true);
  request.send();
  request.onload = function(){
  var data = JSON.parse(this.response);
  var result=data.filter(function pop(element){
  return element.population<200000});
  console.log(result);
}

3.Print the country which use US dollar as currency:-
Code:-
     var request= new XMLHttpRequest();
     request.open('GET','https://restcountries.eu/rest/v2/all',true);
     request.send();
     request.onload = function(){
     var data = JSON.parse(this.response);
        let curr= data.filter((ele)=>{
       for(var i in ele.currencies){
           if(ele.currencies[i].code ==='USD'){
               return true;
           }
       } 
    }).map(ele => console.log(ele.name));
    }
     
     
    


