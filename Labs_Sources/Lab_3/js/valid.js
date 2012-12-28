//TODO: Refactor valid function and add color changes when not valid textboxes
//Valid func
function formValidator (elem) {
				var group = document.valform.chk_group;
				var count = 0;
				if (document.valform.firstName.value == "" || document.valform.firstName.value == null || 
					document.valform.secondName.value == "" || document.valform.secondName.value == null ||
					document.valform.patronymic.value == "" || document.valform.patronymic.value == null ) 
				{
						alert("Какая то формачка пустая!!11");
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
				}
			}