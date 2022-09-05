$(document).ready(function(){

	$(".add-task").keypress(function(e) {

		if (e.keyCode == 13 && $(".add-task").val() !='') {
			var task=$('<div class="task"></div>').text($(".add-task").val());
          $(".Incompleted-task").append(task);
          $(".add-task").val('');
          var trash=$('<i class="fa-solid fa-trash ms-2"></i>').click(function(){
          var p=$(this).parent();
          p.fadeOut(function(){
          	p.hide();
          });
          });
          var ok=$('<i class="fa-solid fa-check"></i>').click(function(){
          var p=$(this).parent();
          $(".c-task").append(p);
          $(this).hide();

          
    });
          task.append(trash,ok);
    }
	});
});


		// if (e.keyCode == 13 && $(".add-task").val() !='') {
			// var task=$('<div class="task"></div>').text($(".add-task").val());