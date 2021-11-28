
/*var string = "Конфигурирование и настройка ЧПУ стоек станков: лазерной и плазменной резки, гибочных и штамповочных прессов. Обучение программированию промышленных роботов: ABB, KUKA, Fanuc, EPSON, NACHI и прочие. Подготовка программ, калибровка гриппера, 3д симуляции. Программирование plc контроллеров: Bechhoff, Mitsubishi, Panasonic на языке ladder/stl";
var str = string.split("");
var el = document.getElementById('str');
(function animate() {
str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running); 
var running = setTimeout(animate, Math.random() * 100);
})();
*/

function printText( el ){

	let text = el.innerHTML
	let i = 1

	let print__fn = function(){

			if( i < text.length ){
				el.innerHTML = text.substr( 0, i )+"|";
			}
      else if( i = text.length ){
				el.innerHTML = text.substr( 0, i );
			}
      setTimeout( arguments.callee, Math.random() * 100 );

			i++;
		}
   
	print__fn() // init
};

// init
let el = document.getElementById( 'str' )
printText( el ) ;