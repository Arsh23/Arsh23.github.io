var counter = 0;
var wordcounter = 0;
var timer = 30;
var i=0;
var wordlen = 1;
var wordsdelay = 100;

var words = [
'Programmer',
'Web Developer',
'Robotist',
'Graphics Designer'
];

arr = return_arr(wordlen,words[0]);

function main() 
{
	if(counter ==  words[wordcounter].length + wordsdelay)
	{
		wordlen = words[wordcounter].length;

		counter = 0;
		wordcounter += 1;
		
		if(wordcounter == words.length)
		{wordcounter = 0;}
		
		arr = return_arr(wordlen,words[wordcounter]);
	}

	$('.letters').html(arr[counter]);

	counter += 1;
}

function random_char()
{
	var string = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&**';
	var rndnum = Math.floor(Math.random() * 68);
	return string.charAt(rndnum);
}

function random_string(len)
{
	var i;
	var string = '';

	for(i=0;i<len;i++)
	{
		string += random_char();
	}

	return string;

}

function return_arr(startlen,str)
{
	var i,j;
	var array = [];
	var len = str.length,tempstr = '';

	for(i=1;i<=2;i++)
	{
		array.push(random_string(startlen));
	}
	
	for(;startlen>=1;startlen--)
	{
		array.push(random_string(startlen));	
	}

	for(i=1;i<=5;i++)
	{
		array.push(random_string(1));
	}


	for(i=1;i<=len;i++)
	{
		array.push(random_string(i));
	}

	for(i=0;i<len;i++)
	{
		for(j=1;j<=3;j++)
		{
			tempstr = str.substring(0,i) + random_string(len-i-1);
			array.push(tempstr);
		}		
	}
	
	array.push(str);

	return array;
}

setInterval(main,timer); 