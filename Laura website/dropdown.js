$(document).ready(function(){

    $(".dropdown").hover(

        function(){

            $(this).toggleClass("open");

        }

    );
$(".hamburger").click(function(){
 $(".nav-list").toggleClass("open");
 });
});