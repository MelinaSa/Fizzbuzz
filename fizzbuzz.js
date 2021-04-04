//Fizzbuzz program 

for(i=1; i<=100; i++)
{
    if (divisibilidad(i,3))
    {
        document.write( " fizz");
    }

    if (divisibilidad(i,5))
    {
        document.write( " buzz");
    }
    
    if(!divisibilidad(i,3) && !divisibilidad(i,5) )
    {
        document.write( i);
    }

    document.write("<br/>");
}

function divisibilidad(n,d)
{
    if (n % d == 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}
