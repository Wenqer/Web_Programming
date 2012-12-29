//New OK JQuery Validation
$(document).ready(function() {
						   
	$.validator.addMethod("validcb1", function(value){
		if ($("input:checked").length < 4) return true
		else return false;
	},"");
	
	$("fieldset input").click(function(){$("fieldset label.error").remove()});
	
	$("#form1").validate({
		rules: {
			firstName: {
				required: true,
				minlength: 2
				}, 
			secondName: "required",
			patronymic: "required",
			checkbox7:{validcb1:true}
			},
		messages:{
			firstName:{
				required: "Поле имени не заполнено или заполнено не верно",
				minlength: "В поле имени должно быть минимум 2 символа",
			},
			secondName: "Поле фамилии не заполнено или заполнено не верно",
			patronymic: "Поле отчества не заполнено или заполнено не верно",
			checkbox7: "Отмечено слишком много значений, максимум допускается 3!"
		},
		errorPlacement: function(error, element) {
			if (element.attr("name") == "firstName") error.insertAfter($("input[name=firstName]"));
			if (element.attr("name") == "secondName") error.insertAfter($("input[name=secondName]"));
			if (element.attr("name") == "patronymic") error.insertAfter($("input[name=patronymic]"));
			if (element.attr("name") == "checkbox7") error.insertAfter($("fieldset label:last"));
		}	
	});
})

/* Old validation
//Valid func
function formValidator (elem) {
	var group = document.valform.chk_group;
	var count = 0;

	if (document.valform.firstName.value == "" || document.valform.firstName.value == null ) 
	{
		alert("Форма имени пустая! Заполните её!");
		return false;
	};

	if(document.valform.secondName.value == "" || document.valform.secondName.value == null)
	{
		alert("Форма фамилии пустая! Заполните её!");
		return false;
	};

	if (document.valform.patronymic.value == "" || document.valform.patronymic.value == null)
	{
		alert("Форма очества пустая! Заполните её!");
		return false;
	};
	
	//Check for count of 3
	for (var i = 0; i < group.length; i++) {
		if(group[i].checked)
			count++;
	};

	if (count>3) {
		alert("Нельзя выбирать более 3х значений!!111");
		return false;	
	} else {
		return true;
	};
}
*/
