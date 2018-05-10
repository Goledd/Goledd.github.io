<!-- 
"пирожок" :) граф.иконка или кодова€ последовательность - &#9776

например:

-->

<a href="#" id="menu" class="icon"> &#9776 </a>

<!--
медиа запрос - пр€чем всЄ, кроме первого элемента, чтобы он был виден р€дом с кнопкой сворачивани€ (например)
-->

@media screen and (max-width: 768px){
	.topnav a:not(:first-child){
			display: none;
		}
	.topnav a.icon{
		float: right;
	}
	}