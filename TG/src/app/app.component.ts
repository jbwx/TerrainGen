import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCb6Nspa9G6FFJC4MxlhRHhVcfFVDvroo4",
  authDomain: "jbwx-terraingen.firebaseapp.com",
  projectId: "jbwx-terraingen",
  storageBucket: "jbwx-terraingen.appspot.com",
  messagingSenderId: "456956675122",
  appId: "1:456956675122:web:476f90c35c3907a054e82b",
  measurementId: "G-P2XJNFE46W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  template: `<canvas #myCanvas></canvas>`
})
export class AppComponent {
  title = 'my-app';
  
  // initialize element parameters
  // "element" in this case refers to earthen elements like sand, rock, and water. Not HTML elements
  waterfrequency = 0;
  sandfrequency = 0;
  grassfrequency = 0;
  stonefrequency = 0;

  // gather the inputs from the mat-sliders, and assign them to their propper values.
  public gotResult(event: any, element: number) {
    console.log(event);
    switch(element){
      case 1: {
          this.waterfrequency = event;
        break;
      }
      case 2: {
          this.sandfrequency = event;
        break;
    }
      case 3: {
          this.grassfrequency = event;
        break;
      }
      case 4:  {
          this.stonefrequency = event;
        break;
      }

    }

    // there's gotta be a better way to do this? Sorry for the ugliness
    let grid:number[][] = [ // 54x54 for edge-case redundancy. Only 50x50 is displayed
      [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    ];

    // individual counts for each of the elements
    let watercount = 0;
    let sandcount = 0;
    let grasscount = 0;
    let stonecount = 0;

    // make sure everything is at least 1, since having a value of zero can cause weird shenanigans in the terrain generation
    this.waterfrequency+=1;
    this.sandfrequency+=1;
    this.grassfrequency+=1;
    this.stonefrequency+=1;

    // draw squares of grass at random places on the map
    while(grasscount < this.grassfrequency){
    for(let x = 3; x < 53; x++){
      for(let y = 3; y < 53; y++){
        if(getRandom(1,350) == 2) {
          grid[x][y] = 4;
          grasscount++;
        }
      }
    }
  }

  // around those squares of grass, draw more grass (creating a cluster effect)
  while(grasscount < (this.grassfrequency*5)){
    //alert("fun");
    let odds = 4;
    for(let x = 3; x < 53; x++){
      for(let y = 3; y < 53; y++){
        if(grid[x][y] == 4){
          if(getRandom(1,odds) == 2){ // directly above
            grid[x][y+1] = 4;
            grasscount++;
          }
          if(getRandom(1,odds) == 2){ // directly left
            grid[x-1][y] = 4;
            grasscount++;
          }
          if(getRandom(1,odds) == 2){ // directly below
            grid[x][y-1] = 4;
            grasscount++;
          }
          if(getRandom(1,odds) == 2){ // directly right
            grid[x+1][y] = 4;
            grasscount++;
          }

          if(getRandom(1,odds) == 2){ // top left corner
            grid[x-1][y+1] = 4;
            grasscount++;
          }

          if(getRandom(1,odds) == 2){ // top right corner
            grid[x+1][y+1] = 4;
            grasscount++;
          }

          if(getRandom(1,odds) == 2){ // bottom left corner
            grid[x-1][y-1] = 4;
            grasscount++;
          }

          if(getRandom(1,odds) == 2){ // bottom right corner corner
            grid[x+1][y-1] = 4;
            grasscount++;
          }

        }
      }
    }

  }

  for(let x = 3; x < 53; x++){
    for(let y = 3; y < 53; y++){
      if(grid[x][y] == 4){ // if grass,
        let adjacentwatertally = 0;
          if(grid[x-1][y+1] == 0){ // top left
            adjacentwatertally++;
          }
          if(grid[x][y+1] == 0){ // top center
            adjacentwatertally++;
          }
          if(grid[x+1][y+1] == 0){ // top right
            adjacentwatertally++;
          }
          if(grid[x-1][y] == 0){ // center left
            adjacentwatertally++;
          }
          if(grid[x+1][y] == 0){ // center right
            adjacentwatertally++;
          }
          if(grid[x-1][y-1] == 0){ // bottom left
            adjacentwatertally++;
          }
          if(grid[x][y-1] == 0){ // bottom center
            adjacentwatertally++;
          }
          if(grid[x+1][y-1] == 0){ // bottom right
            adjacentwatertally++;
          }
          if(adjacentwatertally >= 5){ // if adjacent water tiles are greater than 6, turn to water
            grid[x][y] = 0;
          }
        
      }
    }
  }

   // next, we do the same for water: smoothing away any single alone water tiles
  for(let x = 3; x < 53; x++){
    for(let y = 3; y < 53; y++){
      if(grid[x][y] == 0){ // if water,
        let adjacentgrasstally = 0;
          if(grid[x-1][y+1] == 4){ // top left
            adjacentgrasstally++;
          }
          if(grid[x][y+1] == 4){ // top center
            adjacentgrasstally++;
          }
          if(grid[x+1][y+1] == 4){ // top right
            adjacentgrasstally++;
          }
          if(grid[x-1][y] == 4){ // center left
            adjacentgrasstally++;
          }
          if(grid[x+1][y] == 4){ // center right
            adjacentgrasstally++;
          }
          if(grid[x-1][y-1] == 4){ // bottom left
            adjacentgrasstally++;
          }
          if(grid[x][y-1] == 4){ // bottom center
            adjacentgrasstally++;
          }
          if(grid[x+1][y-1] == 4){ // bottom right
            adjacentgrasstally++;
          }
          if(adjacentgrasstally >= 5){ // if adjacent grass tiles are greater than 5, turn to grass
            grid[x][y] = 4;
          }
        
      }
    }
  }

    // next we generate beaches, which are adjacent bettween land and water.
  for(let x = 3; x < 53; x++){
    for(let y = 3; y < 53; y++){
      if(grid[x][y] == 4){ // if grass... 
        if(grid[x-1][y+1] == 0){ // top left
          grid[x-1][y+1] = 3;
        }
        if(grid[x][y+1] == 0){ // top center
          grid[x][y+1] = 3;
        }
        if(grid[x+1][y+1] == 0){ // top right
          grid[x+1][y+1] = 3;
        }
        if(grid[x-1][y] == 0){ // center left
          grid[x-1][y] = 3;
        }
        if(grid[x+1][y] == 0){ // center right
          grid[x+1][y] = 3;
        }
        if(grid[x-1][y-1] == 0){ // bottom left
          grid[x-1][y-1] = 3;
        }
        if(grid[x][y-1] == 0){ // bottom center
          grid[x][y-1] = 3;
        }
        if(grid[x+1][y-1] == 0){ // bottom right
          grid[x+1][y-1] = 3;
        }
      }
    }
  }

  // we can make the sand extend from the land for a specified amount
  let odds = 18 - ((this.sandfrequency/100)*15);
  for(let x = 3; x < 53; x++){
    for(let y = 3; y < 53; y++){
      if(grid[x][y] == 3 && getRandom(1,odds) == 2){ // if grass... 
        if(grid[x-1][y+1] == 0){ // top left
          grid[x-1][y+1] = 3;
        }
        if(grid[x][y+1] == 0){ // top center
          grid[x][y+1] = 3;
        }
        if(grid[x+1][y+1] == 0){ // top right
          grid[x+1][y+1] = 3;
        }
        if(grid[x-1][y] == 0){ // center left
          grid[x-1][y] = 3;
        }
        if(grid[x+1][y] == 0){ // center right
          grid[x+1][y] = 3;
        }
        if(grid[x-1][y-1] == 0){ // bottom left
          grid[x-1][y-1] = 3;
        }
        if(grid[x][y-1] == 0){ // bottom center
          grid[x][y-1] = 3;
        }
        if(grid[x+1][y-1] == 0){ // bottom right
          grid[x+1][y-1] = 3;
        }
      }
    }
  }

    // draw rock chunks at random spots on the map, if stone frequency is min value (i think they look kinda ugly tbh)
    if(this.stonefrequency != 1){
    while(stonecount < this.stonefrequency/5){
      for(let x = 3; x < 53; x++){
        for(let y = 3; y < 53; y++){
          if(getRandom(1,550) == 2) {
            grid[x][y] = 5;
            stonecount++;
          }
        }
      }
    }
  }

    // let the rocks grow by using snow as a placeholder
    let odds2 = 2.5;
    for(let x = 3; x < 53; x++){
      for(let y = 3; y < 53; y++){
        if(grid[x][y] == 5) {
          if(getRandom(1,odds2) == 2){ // directly above
            grid[x][y+1] = 6;
          }
          if(getRandom(1,odds2) == 2){ // directly left
            grid[x-1][y] = 6;
          }
          if(getRandom(1,odds2) == 2){ // directly below
            grid[x][y-1] = 6;
          }
          if(getRandom(1,odds2) == 2){ // directly right
            grid[x+1][y] = 6;
          }

          if(getRandom(1,odds2) == 2){ // top left corner
            grid[x-1][y+1] = 6;
          }

          if(getRandom(1,odds2) == 2){ // top right corner
            grid[x+1][y+1] = 6;
          }

          if(getRandom(1,odds2) == 2){ // bottom left corner
            grid[x-1][y-1] = 6;
          }

          if(getRandom(1,odds2) == 2){ // bottom right corner corner
            grid[x+1][y-1] = 6;
          }
        }
      }
    }

      // convert the snow back into rock
      for(let x = 3; x < 53; x++){
        for(let y = 3; y < 53; y++){
          if(grid[x][y] == 6){
            grid[x][y] = 5;
          }
        }
      }

      // if in deep or shallow water, draw beach around rock
      for(let x = 3; x < 53; x++){
        for(let y = 3; y < 53; y++){
          if(grid[x][y] == 5){ // if rock... 
            if(grid[x-1][y+1] == 0 || grid[x-1][y+1] == 2 ){ // top left
              grid[x-1][y+1] = 3;
            }
            if(grid[x][y+1] == 0 || grid[x][y+1] == 2){ // top center
              grid[x][y+1] = 3;
            }
            if(grid[x+1][y+1] == 0 || grid[x+1][y+1] == 2){ // top right
              grid[x+1][y+1] = 3;
            }
            if(grid[x-1][y] == 0 || grid[x-1][y] == 2){ // center left
              grid[x-1][y] = 3;
            }
            if(grid[x+1][y] == 0 || grid[x+1][y] == 2){ // center right
              grid[x+1][y] = 3;
            }
            if(grid[x-1][y-1] == 0 || grid[x-1][y-1] == 2){ // bottom left
              grid[x-1][y-1] = 3;
            }
            if(grid[x][y-1] == 0 || grid[x][y-1] == 2){ // bottom center
              grid[x][y-1] = 3;
            }
            if(grid[x+1][y-1] == 0 || grid[x+1][y-1] == 2){ // bottom right
              grid[x+1][y-1] = 3;
            }
          }
        }
      }

      // generates shallow water, which lies between beaches and deep water 
  for(let x = 3; x < 53; x++){
    for(let y = 3; y < 53; y++){
      if(grid[x][y] == 3){ // if sand... 
        if(grid[x-1][y+1] == 0){ // top left
          grid[x-1][y+1] = 2;
        }
        if(grid[x][y+1] == 0){ // top center
          grid[x][y+1] = 2;
        }
        if(grid[x+1][y+1] == 0){ // top right
          grid[x+1][y+1] = 2;
        }
        if(grid[x-1][y] == 0){ // center left
          grid[x-1][y] = 2;
        }
        if(grid[x+1][y] == 0){ // center right
          grid[x+1][y] = 2;
        }
        if(grid[x-1][y-1] == 0){ // bottom left
          grid[x-1][y-1] = 2;
        }
        if(grid[x][y-1] == 0){ // bottom center
          grid[x][y-1] = 2;
        }
        if(grid[x+1][y-1] == 0){ // bottom right
          grid[x+1][y-1] = 2;
        }
      }
    }
  }
    // when generation is done, call the display function to render it on the canvas
    display(grid);
  }
}

// As per your feedback, you said "using random.org api is really unnecessary, if you do the above."
// So I did not do that.
function getRandom(min: number, max: number){
  return Math.ceil(min+(Math.random()*(max-min)));
}

// draws the map on an HTML canvas. 
function display(grid: number[][]){
  let canvas = <HTMLCanvasElement> document.getElementById("terrainDisplay");
  if(canvas.getContext) {
    var ctx = canvas.getContext('2d');
    if(ctx != null){
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for(let x = 3; x < 53; x++){
        for(let y = 3; y < 53; y++){
          // each of the following is an element, their assigned number, and their hex color code.
          switch (grid[x][y]){
            case 1: // water
              ctx.fillStyle = "#0339fc";
              ctx.fillRect(x-3, y-3, 1, 1);
            break;
            case 2: // shallow water
              ctx.fillStyle = "#7593ff";
              ctx.fillRect(x-3, y-3, 1, 1);
            break;
            case 4: // grass
              ctx.fillStyle = "#30ab11";
              ctx.fillRect(x-3, y-3, 1, 1);
            break;
            case 3: // sand
              ctx.fillStyle = "#ffd82b";
              ctx.fillRect(x-3, y-3, 1, 1);
            break;
            case 5: // rock
              ctx.fillStyle = "#737373";
              ctx.fillRect(x-3, y-3, 1, 1);
            break;
            case 6: // snow
              ctx.fillStyle = "#ffffff";
              ctx.fillRect(x-3, y-3, 1, 1);
            break;
          }
        }
      }
    }
  }
}