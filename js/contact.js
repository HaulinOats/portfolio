$(document).ready(function() {
	$('#contact-form').on('submit', (e)=>{
		e.preventDefault();
		console.log('send message attempting...');
		if($("#contact-name").val() === "" || $("#contact-mail").val() === "" || $("#contact-message").val() === ""){
			$("#contact-sent").text('Fill In All Fields!').css({'opacity':'1', 'color':'red'});
			setTimeout(function(){
				$("#contact-sent").css({'opacity':'0'});
			},3000);
		} else {
			$.ajax({
				// url:'https://bc-experiments.herokuapp.com/portfolio-mail-submit',
				url:'http://localhost:8080/portfolio-mail-submit',
				method:"POST",
				type:"POST",
				data:{
					name:$("#contact-name").val(),
					email:$("#contact-mail").val(),
					message:$("#contact-message").val()
				}
			})
			.done(function(resp){
				$('#contact-form input').val("");
				$("#contact-sent").text('Message Sent!').css({'opacity':'1', 'color':'green'});
				setTimeout(function(){
					$("#contact-sent").css({'opacity':'0'});
				},3000);
			})
			.fail(function(err){
				$("#contact-sent").text('Message Not Sent').css({'opacity':'1', 'color':'red'});
				setTimeout(function(){
					$("#contact-sent").css({'opacity':'0'});
				},3000);
			});
		}
	});
});

// $(document).ready(function() {
// 	$('#contact-form').submit(function() {
// 		var buttonWidth=$('#contact-form button').width();
		
// 		var buttonCopy = $('#contact-form button').html(),
// 			errorMessage = $('#contact-form button').data('error-message'),
// 			sendingMessage = $('#contact-form button').data('sending-message'),
// 			okMessage = $('#contact-form button').data('ok-message'),
// 			hasError = false;
		
// 		$('#contact-form button').width(buttonWidth);
// 		$('#contact-form .error-message').remove();
		
// 		$('.requiredField').each(function() {
// 			if($.trim($(this).val()) == '') {
// 				var errorText = $(this).data('error-empty');
// 				$(this).parent().append('<span class="error-message">'+errorText+'.</span>');
// 				$(this).addClass('inputError');
// 				hasError = true;
// 			} else if($(this).is("input[type='email']") || $(this).attr('name')==='email') {
// 				var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
// 				if(!emailReg.test($.trim($(this).val()))) {
// 					var invalidEmail = $(this).data('error-invalid');
// 					$(this).parent().append('<span class="error-message">'+invalidEmail+'.</span>');
// 					$(this).addClass('inputError');
// 					hasError = true;
// 				}
// 			}
// 		});
		
// 		if(hasError) {
// 			$('#contact-form button').html('<i class="icon-remove"></i>'+errorMessage);
// 			setTimeout(function(){
// 				$('#contact-form button').html(buttonCopy);
// 				$('#contact-form button').width('auto');
// 			},2000);
// 		}
// 		else {
// 			$('#contact-form button').html('<i class="icon-refresh icon-spin"></i>'+sendingMessage);
			
// 			var formInput = $(this).serialize();
// 			$.post($(this).attr('action'),formInput, function(data){
// 				$('#contact-form button').html('<i class="icon-ok"></i>'+okMessage);
// 				setTimeout(function(){
// 					$('#contact-form button').html(buttonCopy);
// 					$('#contact-form button').width('auto');
// 				},2000);
				
// 			});
// 		}
		
// 		return false;	
// 	});
// });