var numero = 100;
for(var n = 1; n <= 100; n++)

  {
          if(esDivisible(n, 2))
          {
              document.write("par");
              document.write(n);
          }
          if(!esDivisible(n, 2))
          {
              document.write("impar");
            document.write(n);
          }
          {

          document.write("<br/>");

          }
  }
  function esDivisible(num, divisor)
  {
      if(num % divisor == 0)
      {
          return true;
      }
      else
      {
          return false;
      }
  }
