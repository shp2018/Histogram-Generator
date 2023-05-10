const { getDefaultFormatCodeSettings } = require("typescript");

function init(){
    document.getElementById('fileInput').addEventListener('change', handleFileSelect, false);
  }
  
  function handleFileSelect(event){
    const reader = new FileReader()
    reader.onload = handleData;
    reader.readAsText(event.target.files[0])
  }
  
  
  function handleData(event){
    var data = [];
    var X = event.target.result.split("\n");
    var Y = X.toString().split(",")
    
    
    for (let i = 0; i < 2; i++) {
      Y.shift()
    
    for (let i = 0; i <Y.length; i++){
      if(i%2 == 0){
        data.push(Y[i]);
      }
  
      var min = 100;
      var max = 0;
      var median= 0;
      var mean = 0;
      var highest = "";
      var lowest = "";
  
    

    var grades = data.slice(1,((data.length/2)+1))
    var names = data.slice((data.length/2)+1,data.length)
    var unsorted = data.slice(1,((data.length/2)+1))
    var sorted = grades.sort(function(a,b) { return a-b; });
    var num = []

    grades.forEach(str => {
    num.push(Number(str));
    
  });


    for (let i = 0; i< num.length; i++) {
        
        if (mean >=0){
            mean = mean+ num[i]    
        }
  }
  for (let i = 0; i< num.length; i++){
      if(i==0){
          min = num[i]
      }
      else if(i== num.length-1){
          max = num[i]
      }
      else if(i == Math.floor(num.length/2)){
          median = num[i]
      }
  }

  for (let i =0; i<names.length; i++){
      if(max == unsorted[i]){
          highest = names[i]
      }
      else if(min == unsorted[i]){
          lowest = names[i]
      }
      
      
      
    }

  
  mean = (mean/(num.length)).toFixed(2)
  min = lowest+"("+min.toFixed(2)+"%)"
  max = highest+"("+max.toFixed(2)+"%)"
  median = median.toFixed(2)

   
    document.getElementById('top').textContent = max;
    document.getElementById('min').textContent = min;
    document.getElementById('mean').textContent = mean;
    document.getElementById('median').textContent = median;
  
    
    }
  
  }
  var maximum = document.getElementById('max').value;
  var OutofBounds = 0;
  var Aplus = document.getElementById('Aplus').value;
  var Apluscounter = 0;
  var A = document.getElementById('A').value;
  var Acounter = 0;
  var Aminus = document.getElementById('Aminus').value;
  var Aminuscounter = 0;
  var Bplus = document.getElementById('Bplus').value;
  var Bpluscounter = 0;
  var B = document.getElementById('B').value;
  var Bcounter =0;
  var Bminus = document.getElementById('Bminus').value;
  var Bminuscounter = 0;
  var Cplus = document.getElementById('Cplus').value;
  var Cpluscounter = 0;
  var C = document.getElementById('C').value;
  var Ccounter = 0;
  var Cminus = document.getElementById('Cminus').value;
  var Cminuscounter = 0;
  var D = document.getElementById('D').value;
  var Dcounter = 0;
  var F = document.getElementById('F').value;
  var Fcounter = 0;
  
  for(let i = 0; i<num.length; i++){
    if (num[i]>maximum){
      OutofBounds +=1
    }
    else if (num[i]>F && num[i] <D){
      Fcounter +=1
    }
    else if (num[i]>D && num[i]<Cminus){
      Dcounter +=1
    }
    else if (num[i]>Cminus && num[i]<C){
      Cminuscounter +=1
  }
  else if (num[i]>C && num[i]<Cplus){
    Ccounter +=1
  }
  else if (num[i]>Cplus && num[i]<Bminus){
    Cpluscounter +=1
  }
  else if (num[i]>Bminus && num[i]<B){
    Bminuscounter +=1
}
else if (num[i]>B && num[i]<Bplus){
  Bcounter +=1
}
else if (num[i]>Bplus && num[i]<Aminus){
  Bpluscounter +=1
}
else if (num[i]>Aminus && num[i]<A){
  Aminuscounter +=1
}
else if (num[i]>A && num[i]<Aplus){
Acounter +=1
}
else if (num[i]>Aplus && num[i]<maximum){
Apluscounter +=1
}
{
  
}

}
console.log(Apluscounter,"counter")
document.getElementById("graphAplus").style.width = String(Apluscounter*100)+"px";
if(Apluscounter!=0){document.getElementById("graphAplus").textContent = "A+ ["+ Apluscounter + "]"}

document.getElementById("graphA").style.width = String(Acounter*100)+"px";
if(Acounter!=0){document.getElementById("graphA").textContent = "A ["+ Acounter + "]"}

document.getElementById("graphAminus").style.width = String(Aminuscounter*100)+"px";
if(Aminuscounter!=0){document.getElementById("graphAminus").textContent = "A- ["+ Aminuscounter + "]"}

document.getElementById("graphBplus").style.width = String(Bpluscounter*100)+"px";
if(Bpluscounter!=0){document.getElementById("graphBplus").textContent = "B+ ["+ Bpluscounter + "]"}
document.getElementById("graphB").style.width = String(Bcounter*100)+"px";
if(Bcounter!=0){document.getElementById("graphB").textContent = "B ["+ Bcounter + "]"}
document.getElementById("graphBminus").style.width = String(Bminuscounter*100)+"px";
if(Bminuscounter!=0){document.getElementById("graphBminus").textContent = "B- ["+ Bminuscounter + "]"}
document.getElementById("graphCplus").style.width = String(Cpluscounter*100)+"px";
if(Cpluscounter!=0){document.getElementById("graphCplus").textContent = "C+ ["+ Cpluscounter + "]"}
document.getElementById("graphC").style.width = String(Ccounter*100)+"px";
if(Ccounter!=0){document.getElementById("graphC").textContent = "C ["+ Ccounter + "]"}
document.getElementById("graphCminus").style.width = String(Cminuscounter*100)+"px";
if(Cminuscounter!=0){document.getElementById("graphCminus").textContent = "C- ["+ Cminuscounter + "]"}
document.getElementById("graphD").style.width = String(Dcounter*100)+"px";
if(Dcounter!=0){document.getElementById("graphD").textContent = "D ["+ Dcounter + "]"}
document.getElementById("graphF").style.width = String(Fcounter*100)+"px";
if(Fcounter!=0){document.getElementById("graphF").textContent = "F ["+ Fcounter + "]"}
if(OutofBounds !=0){document.getElementById("OutofBounds").textContent = OutofBounds + "Students over maximum(Out of Bounds)"}

}

