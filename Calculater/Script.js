function display(a){
    b=document.getElementById("display").value
     c=b+a
     document.getElementById("display").value=c
      
  }

  function Clean(){
    x=document.getElementById("display").value="";
    return x;
}
  function calculate(){
      a=document.getElementById("display").value;
      console.log(eval(a))
      document.getElementById("display").value=eval(a)
  }
 