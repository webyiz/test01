$("#topdiv div").on('click',function(){
	
	$(this).removeClass('claunclick')
		.addClass('claclick');
	$(this).siblings()
		.removeClass('claclick')
		.addClass('claunclick');
})

$("#leftchild div:nth-child(2) button").on('click',function(){
	console.log(this);
	$(this).css('background-color','#518ED6')
		.siblings().css('background-color','#EFEFEF');
	
})

var $elem=$("<div><ul><li><b>开站文件</b></li><li>开站文件</li></ul></div>");
$('#rebu h5').on('click',function(){
	console.log(this);
	$('#rebu div').remove();
	$(this).after($elem)
		.removeClass('unsel')
		.addClass('sel')
		.siblings('h5').removeClass('sel')
		.addClass('unsel');
})

$('#b2').on('click',function(){
	$("input:checked:not('#checkall')").parent().parent().remove();
})

$('#checkall').on('click',function(){
	console.log(this.checked)
	if(this.checked==true){
	$('#del input').prop('checked','checked');
	}else{$('#del input').prop('checked',false);}
})

$('#b1').on('click',function(){
	var $ele=$('<tr height="30px"><td><input type="checkbox" /></td><td>CA证书</td><td><a href="#" class="a1">file Name</a> <img class="s1" src="img/images/img03.jpg">  &nbsp&nbsp&nbsp <img class="s2" src="img/images/img04.jpg">  <a href="#" class="a2">上传</a></td><td>所有站点</td><td>SRAN</td><td></td></tr>');
	$('table').append($ele)
})

		//用toggleClass方法更省事

