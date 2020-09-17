
let student =[
	{
		name:"ABC",
		age:20,
		country:"Australia",
		hobbies:['reading','dancing'],
	},
	{
		name:"Ajay",
		age:50,
		country:"America",
		hobbies:['cooking','reading','dancing'],
	},
	{
		name:"Krutika",
		age:35,
		country:"India",
		hobbies:['singing','listening to music','sports'],
	},
	{
		name:"Prachi",
		age:80,
		country:"India",
		hobbies:['travelling'],
	}


];

console.log("Objects having age less than 30:");

function getAge()
{
	for(let i=0;i<student.length;i++)
	{
		if(student[i].age<30)
		{
			
			console.log(student[i]);
		}
	}
}
getAge();

console.log("object having country India")
function getCountry()
{
	for(let i=0;i<student.length;i++)
	{
		if(student[i].country =="India")
		{
			console.log(student[i]);
		}
	}
}
getCountry();

