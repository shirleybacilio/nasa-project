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

		  		(function(a,c,e,f,d,b){a.hj=a.hj||function(){(a.hj.q=a.hj.q||[]).push(arguments)};a._hjSettings={hjid:94039,hjsv:5};d=c.getElementsByTagName("head")[0];b=c.createElement("script");b.async=1;b.src=e+a._hjSettings.hjid+f+a._hjSettings.hjsv;d.appendChild(b)})(window,document,"//static.hotjar.com/c/hotjar-",".js?sv\x3d");</script><script type="text/javascript" id="">var $buoop={c:2};function $buo_f(){var a=document.createElement("script");a.src="//browser-update.org/update.min.js";document.body.appendChild(a)}try{document.addEventListener("DOMContentLoaded",$buo_f,!1)}catch(a){window.attachEvent("onload",$buo_f)};
		});