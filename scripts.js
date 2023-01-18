// Validate form to check all fields are filled then enable button
function enableSubmit() {
	let inputs = document.getElementsByClassName('required');
	let btn = document.querySelector('button[type="submit"]');
	let isValid = true;
	for (var i = 0; i < inputs.length; i++) {
		let changedInput = inputs[i];
		if (changedInput.value.trim() === "" || changedInput.value === null) {
			isValid = false;
			break;
		}
	}
	btn.disabled = !isValid;
}

// Daterpicker functions to post calendar data to 3 separate inputs
$(function() {
   
   $( "#datepicker" ).datepicker({
	   autoclose: true, 
	   changeYear: true,
	   todayHighlight: true,
	   dateFormat: "dd-mm-yy",
	   yearRange: "-18:+0"
   })
   
   $("#id_imgcalendar").on("click", function(e) {
       $('#datepicker').datepicker('show');
   });
   
   $("#datepicker").change(function(ev) {
		let parts = this.value.split("-");
		if (parts.length === 3) {
			document.getElementById("day").value = parts[0];
			document.getElementById("month").value = parts[1];
			document.getElementById("year").value = parts[2];
		}
    });
	
    // Clear form
	$("#back").click(function(){
        location.reload();
    });
});