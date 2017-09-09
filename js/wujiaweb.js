//动态表格
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



//轮播图

        window.onload = function () {
            var container = document.getElementById('container');
            var list = document.getElementById('list');
            var buttons = document.getElementById('buttons').getElementsByTagName('span');
            var prev = document.getElementById('prev');
            var next = document.getElementById('next');
            var index = 1;
            var len = 4;
            var animated = false;
            var interval = 3000;
            var timer;


            function animate (offset) {
                if (offset == 0) {
                    return;
                }
                animated = true;
                var time = 300;
                var inteval = 10;
                var speed = offset/(time/inteval);
                var left = parseInt(list.style.left) + offset;

                var go = function (){
                    if ( (speed > 0 && parseInt(list.style.left) < left) || (speed < 0 && parseInt(list.style.left) > left)) {
                        list.style.left = parseInt(list.style.left) + speed + 'px';
                        setTimeout(go, inteval);
                    }
                    else {
                        list.style.left = left + 'px';
                        if(left>-1250){
                            list.style.left = -1250 * len + 'px';
                        }
                        if(left<(-1250 * len)) {
                            list.style.left = '-1250px';
                        }
                        animated = false;
                    }
                }
                go();
            }

            function showButton() {
                for (var i = 0; i < buttons.length ; i++) {
                    if( buttons[i].className == 'on'){
                        buttons[i].className = '';
                        break;
                    }
                }
                buttons[index - 1].className = 'on';
            }

            function play() {
                timer = setTimeout(function () {
                    next.onclick();
                    play();
                }, interval);
            }
            function stop() {
                clearTimeout(timer);
            }

            next.onclick = function () {
                if (animated) {
                    return;
                }
                if (index == 4) {
                    index = 1;
                }
                else {
                    index += 1;
                }
                animate(-1250);
                showButton();
            }
            prev.onclick = function () {
                if (animated) {
                    return;
                }
                if (index == 1) {
                    index = 4;
                }
                else {
                    index -= 1;
                }
                animate(1250);
                showButton();
            }

            for (var i = 0; i < buttons.length; i++) {
                buttons[i].onclick = function () {
                    if (animated) {
                        return;
                    }
                    if(this.className == 'on') {
                        return;
                    }
                    var myIndex = parseInt(this.getAttribute('index'));
                    var offset = -1250 * (myIndex - index);

                    animate(offset);
                    index = myIndex;
                    showButton();
                }
            }

            container.onmouseover = stop;
            container.onmouseout = play;

            play();

        }




	
	