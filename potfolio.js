<!DOCTYPE html>

<html>

<head>

<meta charset=utf-8 />

<title>JavaScript  program</title>

</head>

<body>

<p><mark><i>Topic:control statements</mark></i></p>

<script>

for ( var i = 1; i <= 100; i++ )

{
 
 if ( i%3 === 0 && i%5 === 0 )

  {

    document.write("TalentioCompany"+" ");

  }

  else if ( i%3 === 0 ) 

  {

    document.write( "Talentio"+" " );

  }

  else if ( i%5 === 0 )
 
  {

    document.write("Company"+" " );

  }

  else

  {

  document.write(i+" ");

  }


}

</script><br><br>

<p><mark><i>Topic:Error Handling</mark></i></p>

<script>

var z=reverseString("Talentio");

function reverseString(s) {

    try {

         s = s.split('').reverse().join('');
    
} catch (e) {
 
        document.write('s.split is not a function');

    }


    document.write(s);

}

</script><br><br>

<p><mark><i>Topic:Numbers</mark></i></p>

<script>

function decimals(n, d) {

 if ((typeof n !== 'number') || (typeof d !== 'number'))
   
return false;

    	n = parseFloat(n) || 0;
	
return n.toFixed(d);

	}

document.write(decimals(2.100212, 2 )+" ");

document.write(decimals(2.100212, 3)+" ");

document.write(decimals(2100, 2)+" ");

</script>

<p><mark><i>Topic:strings</mark></i></p>

<script>

string_to_array = function (str) {

     return str.trim().split(" ");

};

document.write(string_to_array("Talentio is the best"));

</script><br><br>

<p><mark><i>Topic:Arrays</mark></i></p>

<p id="demo1"></p>

<p id="demo2"></p>

<script>

const points = [-3, 8, 7, 6, 5, -4, 3, 2, 1];

document.getElementById("demo1").innerHTML = points;

  

points.sort(function(a, b){return a - b});

document.getElementById("demo2").innerHTML = points;

</script>

</body>

</html>