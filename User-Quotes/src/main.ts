import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  // class Quote {
  //   constructor(name, myQuote) {  // Constructor
  //     this.name = name;
  //     this.myQuote = myQuote;
  //   }
  // }
  // addQuote= new Quote("The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.” – Winston Churchill);
  
  var app = angular.module("myModule", [])
  .controller("myController" , function($scope){

var members =[
  {name: "Vincent Juma", Votes: 0},
  {name: "Clifford Morara", Votes: 0},
];					

$scope.members = members;

$scope.incrementUp = function(member){
  member.Votes++;
}
$scope.incrementDown = function(member){
  member.Votes--;
}
});	