<!--trLineNumber为动态表格行数，tdData为动态表格每行单元格的数据，数据类型为数组--> 
function setTable(id, trCowNumber,tdData){ 
	
   var _table = document.getElementById(id); 
   var _row; 
   var _cell;
   var num = 0;
   for (var i = 0; num < tdData.length; i++) { 
     _row = document.createElement("tr"); 
     document.getElementById(id).appendChild(_row); 
     for(var j = 0; j < trCowNumber; j++) { 
        _cell = document.createElement("td"); 
		
         
        _cell.innerText = tdData[num]; 
        _row.appendChild(_cell); 
	    num++;
     }
   }
}


function setChangeTable(id, trCowNumber,tdData, alink){
		
		   	var _table = document.getElementById(id); 
		   	var _row; 
		   	var _cell;
			var bianji;
			var shanchu;	
			var num = 0;
		    for (var i = 1; i <= tdData.length/trCowNumber; i++) { 
	   		 	_row = document.createElement("tr"); 
	   			_table.appendChild(_row); 
	   			for(var j = 0; j < trCowNumber; j++) 
	   			{
	   				_cell = document.createElement("td"); 
					_cell.innerText = tdData[num]; 
				    _row.appendChild(_cell); 
			        num++;
				}
	   			_cell = document.createElement("td"); 
	   			_row.appendChild(_cell); 
				bianji = document.createElement("a");
	   	        bianji.href = alink;	
   	        	bianji.innerHTML = "编辑"; 
				shanchu = document.createElement("button");
				shanchu.innerHTML = "删除";
				_cell.appendChild(bianji);
				_cell.appendChild(shanchu);
       		}
		}

	
	