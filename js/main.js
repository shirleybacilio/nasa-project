$(".espacio").change(function() {
		  		var element = $(this).find("option:selected").val();

		  		$.ajax({
		  			type: 'POST',
		  			url: 'http://ec2-52-91-192-232.compute-1.amazonaws.com/mis-reservas/test',
		  			data: {
		  				'element' : element
		  			},
		  			success: function(data) {
		  				$("#reglamento").html(data);
		  				var dictDays = {'Domingo': 0, 'Lunes':1,  'Martes': 2, 'Miercoles': 3, 'Jueves':4, 'Viernes':5, 'Sabado':6};
		  				var daysToDisable = [];
		  				var days = ($('#enabled-days').val().length > 0)? $('#enabled-days').val().split(', ') : [];
		  				var maxDays = ($('#max-days').val()>0)?$('#max-days').val():1;
		  				$.each(days, function(index, val){daysToDisable.push(dictDays[val]);}) 

		  				function disableSpecificWeekDays(date) {
		  					var day = date.getDay();
		  					for (i = 0; i < daysToDisable.length; i++) {
		  						if ($.inArray(day, daysToDisable) != -1) {
		  							return [false];
		  						}
		  					}
		  					return [true];
		  				}
		  				$('.datepicker').datepicker('destroy');
		  				$(".datepicker").datepicker({
		  					dateFormat : 'dd/mm/yy',
		  					minDate : new Date(),
		  					maxDate : '+'+maxDays+'D',
		  					beforeShowDay: disableSpecificWeekDays
		  				});
		  			}
		  		});
				window.addEventListener('load', function() {
				var aCollection = document.getElementsByTagName("a");
				for (var i = 0; i <= aCollection.length - 1; i++) {
					var currentId = aCollection[i].id;
					var newId = currentId.replace(/ /g, "");
					aCollection[i].id = newId;
				};
			});

		});