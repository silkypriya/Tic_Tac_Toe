var modal = document.querySelector("#m0");

    var closeButton= document.querySelector("#cb0");
    
     modal.classList.toggle("show-modal");

    function toggleModal() {
        modal.classList.toggle("show-modal");
    }

    closeButton.addEventListener("click", toggleModal);
    
	
function fun1(){
	var modal = document.querySelector("#m1");

    var closeButton = document.querySelector("#cb1");
    
     modal.classList.toggle("show-modal");

    function toggleModal() {
        modal.classList.toggle("show-modal");
    }

    closeButton.addEventListener("click", toggleModal);
}

function fun2(){
	var modal = document.querySelector("#m2");

    var closeButton = document.querySelector("#cb2");
    
     modal.classList.toggle("show-modal");

    function toggleModal() {
        modal.classList.toggle("show-modal");
    }

    closeButton.addEventListener("click", toggleModal);
}

function fun3(){
	var modal = document.querySelector("#m3");

    var closeButton = document.querySelector("#cb3");
    
     modal.classList.toggle("show-modal");

    function toggleModal() {
        modal.classList.toggle("show-modal");
    }

    closeButton.addEventListener("click", toggleModal);
}

var canvas= document.getElementById("myCanvas");
var context = canvas.getContext("2d");

context.beginPath();
context.fillStyle = "#BA55D3";
context.fillRect(0,0,600,600);
context.closePath();

context.beginPath();
context.moveTo(200,0);
context.lineTo(200,600);
context.lineWidth = "8";
context.stroke();
context.strokeStyle = "#FFA500";
context.moveTo(400,0);
context.lineTo(400,600);
context.lineWidth = "8";
context.stroke();
context.strokeStyle = "#FFA500";
context.moveTo(0,200);
context.lineTo(600,200);
context.lineWidth = "8";
context.stroke();
context.strokeStyle = "#FFA500";
context.moveTo(0,400);
context.lineTo(600,400);
context.lineWidth = "8";
context.stroke();
context.strokeStyle = "#FFA500";
context.closePath();
var counter = 0;
var oncewin = false;
var validmove = false;
var sum = 0;

var a = new Array(3);
for(var i=0;i<3;i++)
{
	a[i] = new Array(3);
}

for (var i=0;i<3;i++)
{
	for (var j=0;j<3;j++)
	{
		a[i][j]=0;
	}
}

canvas.addEventListener("click",clicker);

firstturn();

function firstturn()
{
	var delay=300; //.3 seconds

	setTimeout(function()
	{
		counter+=1;
		a[0][0]++;
		context.font = "90px Verdana";
		context.fillStyle = "#ff0000";
		context.fillText("O",60,130);		
 	}, delay); 
}

function makeOwn()
{
	var delay=200; //.2 seconds
	context.font = "90px Verdana";
	context.fillStyle = "#ff0000";

	if (a[0][0]==a[0][1] && a[0][0]==1 && a[0][2]==0)
	{
		a[0][2]++;
		counter++;
		context.fillText("O",460,130);
	}//1

	else if (a[0][1]==a[0][2] && a[0][1]==1 && a[0][0]==0)
	{
		a[0][0]++;
		counter++;
		context.fillText("O",60,130);
	}//2

	else if (a[0][0]==a[0][2] && a[0][0]==1 && a[0][1]==0)
	{
		a[0][1]++;
		counter++;
		context.fillText("O",260,130);
	}//3

	else if (a[1][0]==a[1][1] && a[1][0]==1 && a[1][2]==0)
	{
		a[1][2]++;
		counter++;
		context.fillText("O",460,330);
	}//4

	else if (a[1][1]==a[1][2] && a[1][1]==1 && a[1][0]==0)
	{
		a[1][0]++;
		counter++;
		context.fillText("O",60,330);
	}//5

	else if (a[1][0]==a[1][2] && a[1][0]==1 && a[1][1]==0)
	{
		a[1][1]++;
		counter++;
		context.fillText("O",260,330);
	}//6

	else if (a[2][0]==a[2][1] && a[2][0]==1 && a[2][2]==0)
	{
		a[2][2]++;
		counter++;
		context.fillText("O",460,530);
	}//7

	else if (a[2][1]==a[2][2] && a[2][1]==1 && a[2][0]==0)
	{
		a[2][0]++;
		counter++;
		context.fillText("O",60,530);
	}//8

	else if (a[2][0]==a[2][2] && a[2][0]==1 && a[2][1]==0)
	{
		a[2][1]++;
		counter++;
		context.fillText("O",260,530);
	}//9

	else if (a[0][0]==a[1][0] && a[0][0]==1 && a[2][0]==0)
	{
		a[2][0]++;
		counter++;
		context.fillText("O",60,530);
	}//10

	else if (a[1][0]==a[2][0] && a[1][0]==1 && a[0][0]==0)
	{
		a[0][0]++;
		counter++;
		context.fillText("O",60,130);
	}//11

	else if (a[0][0]==a[2][0] && a[0][0]==1 && a[1][0]==0)
	{
		a[1][0]++;
		counter++;
		context.fillText("O",60,330);
	}//12

	else if (a[0][1]==a[1][1] && a[0][1]==1 && a[2][1]==0)
	{
		a[2][1]++;
		counter++;
		context.fillText("O",260,530);
	}//13

	else if (a[1][1]==a[2][1] && a[1][1]==1 && a[0][1]==0)
	{
		a[0][1]++;
		counter++;
		context.fillText("O",260,130);
	}//14

	else if (a[0][1]==a[2][1] && a[0][1]==1 && a[1][1]==0)
	{
		a[1][1]++;
		counter++;
		context.fillText("O",260,330);
	}//60

	else if (a[0][2]==a[1][2] && a[0][2]==1 && a[2][2]==0)
	{
		a[2][2]++;
		counter++;
		context.fillText("O",460,530);
	}//16

	else if (a[1][2]==a[2][2] && a[1][2]==1 && a[0][2]==0)
	{
		a[0][2]++;
		counter++;
		context.fillText("O",460,130);
	}//17

	else if (a[0][2]==a[2][2] && a[0][2]==1 && a[1][2]==0)
	{
		a[1][2]++;
		counter++;
		context.fillText("O",460,330);
	}//18

	else if (a[0][0]==a[1][1] && a[0][0]==1 && a[2][2]==0)
	{
		a[2][2]++;
		counter++;
		context.fillText("O",460,530);
	}//19

	else if (a[1][1]==a[2][2] && a[1][1]==1 && a[0][0]==0)
	{
		a[0][0]++;
		counter++;
		context.fillText("O",60,130);
	}//20

	else if (a[0][0]==a[2][2] && a[0][0]==1 && a[1][1]==0)
	{
		a[1][1]++;
		counter++;
		context.fillText("O",260,330);
	}//21

	else if (a[0][2]==a[1][1] && a[0][2]==1 && a[2][0]==0)
	{
		a[2][0]++;
		counter++;
		context.fillText("O",60,530);
	}//22

	else if (a[1][1]==a[2][0] && a[1][1]==1 && a[0][2]==0)
	{
		a[0][2]++;
		counter++;
		context.fillText("O",460,130);
	}//23

	else if (a[0][2]==a[2][0] && a[0][2]==1 && a[1][1]==0)
	{
		a[1][1]++;
		counter++;
		context.fillText("O",260,330);
	}//24

	else
	{
		prevent();
	}			
}

function prevent()
{
	context.font = "90px Verdana";
	context.fillStyle = "#ff0000";

	if (a[0][0]==a[0][1] && a[0][0]==2 && a[0][2]==0)
	{
		a[0][2]++;
		counter++;
		context.fillText("O",460,130);
	}//1

	else if (a[0][1]==a[0][2] && a[0][1]==2 && a[0][0]==0)
	{
		a[0][0]++;
		counter++;
		context.fillText("O",60,130);
	}//2

	else if (a[0][0]==a[0][2] && a[0][0]==2 && a[0][1]==0)
	{
		a[0][1]++;
		counter++;
		context.fillText("O",260,130);
	}//3

	else if (a[1][0]==a[1][1] && a[1][0]==2 && a[1][2]==0)
	{
		a[1][2]++;
		counter++;
		context.fillText("O",460,330);
	}//4

	else if (a[1][1]==a[1][2] && a[1][1]==2 && a[1][0]==0)
	{
		a[1][0]++;
		counter++;
		context.fillText("O",60,330);
	}//5

	else if (a[1][0]==a[1][2] && a[1][0]==2 && a[1][1]==0)
	{
		a[1][1]++;
		counter++;
		context.fillText("O",260,330);
	}//6

	else if (a[2][0]==a[2][1] && a[2][0]==2 && a[2][2]==0)
	{
		a[2][2]++;
		counter++;
		context.fillText("O",460,530);
	}//7

	else if (a[2][1]==a[2][2] && a[2][1]==2 && a[2][0]==0)
	{
		a[2][0]++;
		counter++;
		context.fillText("O",60,530);
	}//8

	else if (a[2][0]==a[2][2] && a[2][0]==2 && a[2][1]==0)
	{
		a[2][1]++;
		counter++;
		context.fillText("O",260,530);
	}//9

	else if (a[0][0]==a[1][0] && a[0][0]==2 && a[2][0]==0)
	{
		a[2][0]++;
		counter++;
		context.fillText("O",60,530);
	}//10

	else if (a[1][0]==a[2][0] && a[1][0]==2 && a[0][0]==0)
	{
		a[0][0]++;
		counter++;
		context.fillText("O",60,130);
	}//11

	else if (a[0][0]==a[2][0] && a[0][0]==2 && a[1][0]==0)
	{
		a[1][0]++;
		counter++;
		context.fillText("O",60,330);
	}//12

	else if (a[0][1]==a[1][1] && a[0][1]==2 && a[2][1]==0)
	{
		a[2][1]++;
		counter++;
		context.fillText("O",260,530);
	}//13

	else if (a[1][1]==a[2][1] && a[1][1]==2 && a[0][1]==0)
	{
		a[0][1]++;
		counter++;
		context.fillText("O",260,130);
	}//14

	else if (a[0][1]==a[2][1] && a[0][1]==2 && a[1][1]==0)
	{
		a[1][1]++;
		counter++;
		context.fillText("O",260,330);
	}//60

	else if (a[0][2]==a[1][2] && a[0][2]==2 && a[2][2]==0)
	{
		a[2][2]++;
		counter++;
		context.fillText("O",460,530);
	}//16

	else if (a[1][2]==a[2][2] && a[1][2]==2 && a[0][2]==0)
	{
		a[0][2]++;
		counter++;
		context.fillText("O",460,130);
	}//17

	else if (a[0][2]==a[2][2] && a[0][2]==2 && a[1][2]==0)
	{
		a[1][2]++;
		counter++;
		context.fillText("O",460,330);
	}//18

	else if (a[0][0]==a[1][1] && a[0][0]==2 && a[2][2]==0)
	{
		a[2][2]++;
		counter++;
		context.fillText("O",460,530);
	}//19

	else if (a[1][1]==a[2][2] && a[1][1]==2 && a[0][0]==0)
	{
		a[0][0]++;
		counter++;
		context.fillText("O",60,130);
	}//20

	else if (a[0][0]==a[2][2] && a[0][0]==2 && a[1][1]==0)
	{
		a[1][1]++;
		counter++;
		context.fillText("O",260,330);
	}//21

	else if (a[0][2]==a[1][1] && a[0][2]==2 && a[2][0]==0)
	{
		a[2][0]++;
		counter++;
		context.fillText("O",60,530);
	}//22

	else if (a[1][1]==a[2][0] && a[1][1]==2 && a[0][2]==0)
	{
		a[0][2]++;
		counter++;
		context.fillText("O",460,130);
	}//23

	else if (a[0][2]==a[2][0] && a[0][2]==2 && a[1][1]==0)
	{
		a[1][1]++;
		counter++;
		context.fillText("O",260,330);
	}//24

	else
	{
		randomMove();
	}	
}

function randomMove()
{
	for(var i=0;i<3;i++)
	{
		for (var j=0;j<3;j++)
		{
			if (a[i][j]==0)
			{
				a[i][j]++;
				counter++;
				context.fillText("O",(60+(j*200)),(130+(i*200)));
				i=3;
				j=3;
			}
		}
	}
}

function clicker (event)
{
	if (oncewin==false && counter%2!=0)
	{
		var rect = canvas.getBoundingClientRect();
		var cx = event.clientX - rect.left;
		var cy = event.clientY - rect.top;

		context.font = "90px Verdana";
		context.fillStyle = "#ff0000";

		if (cx<200 && cx>0)
		{
			if (cy>0 && cy<200 && a[0][0]==0)
			{
				counter  += 1;
				a[0][0]++;
				if (counter%2==0)
				{
					context.fillText("X",60,130);
					a[0][0]++;
				}
				else
				{
					context.fillText("O",60,130);
				}
				validmove = true;

			}
			if (cy>200 && cy<400 && a[1][0]==0)
			{
				counter  += 1;
				a[1][0]++;
				if (counter%2==0)
				{
					context.fillText("X",60,330);
					a[1][0]++;
				}
				else
					context.fillText("O",60,330);

				validmove = true;
			}
			if (cy>400 && cy<600 && a[2][0]==0)
			{
				counter  += 1;
				a[2][0]++;
				if (counter%2==0)
				{
					context.fillText("X",60,530);
					a[2][0]++;
				}
				else
					context.fillText("O",60,530);

				validmove = true;
			}
		}

		if (cx<400 && cx>200)
		{
			if (cy>0 && cy<200 && a[0][1]==0)
			{
				counter  += 1;
				a[0][1]++;
				if (counter%2==0)
				{
					context.fillText("X",260,130);
					a[0][1]++;
				}
				else
					context.fillText("O",260,130);

				validmove = true;
			}
			if (cy>200 && cy<400 && a[1][1]==0)
			{
				counter  += 1;
				a[1][1]++;
				if (counter%2==0)
				{
					context.fillText("X",260,330);
					a[1][1]++;
				}
				else
					context.fillText("O",260,330);

				validmove = true;
			}
			if (cy>400 && cy<600  && a[2][1]==0)
			{
				counter  += 1;
				a[2][1]++;
				if (counter%2==0)
				{
					context.fillText("X",260,530);
					a[2][1]++;
				}
				else
					context.fillText("O",260,530);

				validmove = true;
			}
		}

		if (cx<600 && cx >400)
		{
			if (cy>0 && cy<200 && a[0][2]==0)
			{
				counter  += 1;
				a[0][2]++;
				if (counter%2==0)
				{
					context.fillText("X",460,130);
					a[0][2]++;
				}
				else
					context.fillText("O",460,130);

				validmove = true;
			}
			if (cy>200 && cy<400 && a[1][2]==0)
			{
				counter  += 1;
				a[1][2]++;
				if (counter%2==0)
				{
					context.fillText("X",460,330);
					a[1][2]++;
				}
				else
					context.fillText("O",460,330);

				validmove = true;
			}
			if (cy>400 && cy<600 && a[2][2]==0)
			{
				counter  += 1;
				a[2][2]++;
				if (counter%2==0)
				{
					context.fillText("X",460,530);
					a[2][2]++;
				}
				else
					context.fillText("O",460,530);

				validmove = true;
			}
		}
		check();
		sum = 0;
		for (var i=0;i<3;i++)
		{
			for (var j=0;j<3;j++)
			{
				sum+=a[i][j];
			}
		}

		if (!oncewin && validmove)
		{
			validmove = false;
			makeOwn();
		}
		check();
	}
}

function check(event)
{
	if (!oncewin)
	{
		var bool = false;
		if (a[0][0]==a[0][1] && a[0][1]==a[0][2])
		{
			if (a[0][0]==1)
			{
				fun1();
				bool = true;  
				oncewin = true;
			}
			else if(a[0][0]==2)
			{
				fun2();
				bool = true;
				oncewin = true;
			}
		}

		if (a[1][0]==a[1][1] && a[1][1]==a[1][2])
		{
			if (a[1][0]==1)
			{
				fun1();
				bool = true;
				oncewin = true;
			}
			else if(a[1][0]==2)
			{
				fun2();
				bool = true; 
				oncewin = true;
			}
		}

		if (a[2][0]==a[2][1] && a[2][1]==a[2][2])
		{
			if (a[2][0]==1)
			{
		        fun1();
				bool = true; 
				oncewin = true;
			}
			else if(a[2][0]==2)
			{
				fun2();
				bool = true; 
				oncewin = true;
			}
		}

		if (a[0][0]==a[1][0] && a[1][0]==a[2][0])
		{
			if (a[0][0]==1)
			{
				fun1();
				bool = true;
				 oncewin = true;
			}
			else if(a[0][0]==2)
			{
			   fun2();
				bool = true; 
				oncewin = true;
			}
		}

		if (a[0][1]==a[1][1] && a[1][1]==a[2][1])
		{
			if (a[0][1]==1)
			{
				fun1();
				bool = true; 
				oncewin = true;
			}
			else if(a[0][1]==2)
			{
				fun2();
				bool = true; 
				oncewin = true;
			}
		}

		if (a[0][2]==a[1][2] && a[1][2]==a[2][2])
		{
			if (a[0][2]==1)
			{
				fun1();
				bool = true; 
				oncewin = true;
			}
			else if(a[0][2]==2)
			{
				fun2();
				bool = true; 
				oncewin = true;
			}
		}

		if (a[0][0]==a[1][1] && a[1][1]==a[2][2])
		{
			if (a[0][0]==1)
			{
				fun1();
				bool = true; 
				oncewin = true;
			}
			else if(a[0][0]==2)
			{
				fun2();
				bool = true;
				oncewin = true;
			}
		}

		if (a[0][2]==a[1][1] && a[1][1]==a[2][0])
		{
			if (a[0][2]==1)
			{
				fun1();
				bool = true;
				oncewin = true;
			}
			else if(a[0][2]==2)
			{
				fun2();
				bool = true;
				oncewin = true;
			}
		}

		if (counter == 9 && bool == false)
		{
			fun3();
		}
	}
}
