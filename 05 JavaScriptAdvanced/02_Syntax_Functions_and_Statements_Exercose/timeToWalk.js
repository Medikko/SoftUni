function solve(steps,footprint,speed){
 const dist = steps * footprint;
 let time = dist / speed * 3.6
 time += Math.floor(dist /500) * 60;

 const seconds = time % 60;
 time -= seconds;
 const minutes = (time / 60) % 60;
 time -=minutes * 60;
 const hours = time/3600;

 console.log(`${pad(hours)}:${pad(minutes.toFixed(0))}:${pad(seconds.toFixed(0))}`);

 function pad(num){
     if (num<10) {
         return '0' + num;
     }
     else{
         return '' + num;
     }
 }
}

solve(2564,0.70,5.5);