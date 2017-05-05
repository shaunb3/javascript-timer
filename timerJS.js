var timerDisplay = document.getElementById("timerDisplay");
var breakDisplay = document.getElementById("breakDisplay");

var timer =function(){

	var userTime =6000;
	var userBreak =6000;
	var interval =1000;

	var currentTime = ( new Date() ).getTime();
	var endTime = currentTime + userTime;
	var breakEnd = currentTime + userTime + userBreak;
	//var breakEnd = currentTime + userBreak;

	console.log(currentTime, endTime);

	var running =true;

	

	var updateTimer =function(){


		if(currentTime +interval  < endTime){
			setTimeout(updateTimer, interval);
		}


		if(running ===true){
			
			currentTime+=interval;	
			
			 if(currentTime>= endTime){
				clearTimeout(updateTimer);
				console.log('end');				
				breakTimer();

			}


		}

		var time =new Date();
		time.setTime(endTime- currentTime +interval);

		console.log(time);

			var minutes=time.getMinutes();
			var seconds=time.getSeconds();

		//var time =endTime- currentTime;
		timerDisplay.innerHTML = "<h1>Timer</h1><p>min:"+ minutes + "sec:"+ seconds +"</p>";


	};


	var breakTimer =function(){

				
		

		console.log(currentTime, breakEnd);

		if(currentTime +interval < breakEnd){
			setTimeout(breakTimer, interval);
		}


		if(running ===true){
			currentTime+=interval;

			if(currentTime>= breakEnd){
				//clearTimeout(breakTimer);
				console.log('Break end');
			}
		}

		//var time =endTime- currentTime;
		var breakTime =new Date();
		breakTime.setTime(breakEnd- currentTime);

		console.log(breakTime);

			var breakMinutes=breakTime.getMinutes();
			var breakSeconds=breakTime.getSeconds();

			breakDisplay.innerHTML = "<h1>Break</h1><p>min:"+ breakMinutes + "sec:"+ breakSeconds +"</p>";

	};



updateTimer();

};

timer();