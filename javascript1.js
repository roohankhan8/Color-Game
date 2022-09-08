$(function () {
  function colorFunc() {
    let a = Math.ceil(Math.random() * 200);
    let b = Math.ceil(Math.random() * 100);
    let c = Math.ceil(Math.random() * 10);
    let d = Math.ceil(Math.random() * 200);
    let num = Math.ceil(Math.random() * 10);
    correct_color = [a, b, c];
    //console.log(a,b,c)
    //console.log(num)
    /*SQUARE BACKGROUND COLOR*/
    $(".square").css({
      "background-color": `rgb(${a},${b},${c})`,
    });
    $("h3, .options").css({
      color: `rgb(${a},${b},${c})`,
    });

    /*OPTIONS AND THEIR POSITION*/
    if (num % 2 == 0) {
      let option_1 = [c, b, a];
      let option_2 = [b, a, d];
      let option_3 = [a, d, c];
      let option_4 = [a, b, c];
      $(".option-1").text(option_1);
      $(".option-2").text(option_2);
      $(".option-3").text(option_3);
      $(".option-4").text(option_4);
    }
    if (num % 2 != 0) {
      let option_1 = [c, b, a];
      let option_2 = [b, a, d];
      let option_3 = [a, b, c];
      let option_4 = [b, d, a];
      $(".option-1").text(option_1);
      $(".option-2").text(option_2);
      $(".option-3").text(option_3);
      $(".option-4").text(option_4);
    }
    if (num == 5) {
      let option_1 = [a, b, c];
      let option_2 = [b, a, d];
      let option_3 = [b, c, d];
      let option_4 = [d, b, c];
      $(".option-1").text(option_1);
      $(".option-2").text(option_2);
      $(".option-3").text(option_3);
      $(".option-4").text(option_4);
    }
    if (num == 10) {
      let option_1 = [b, a, c];
      let option_2 = [a, b, c];
      let option_3 = [d, a, b];
      let option_4 = [c, d, b];
      $(".option-1").text(option_1);
      $(".option-2").text(option_2);
      $(".option-3").text(option_3);
      $(".option-4").text(option_4);
    }
    /*ONCLICK EVENTS*/
    /*ON option_1*/
    $(".option-1").on("click", function () {
      if ($(this).text() == correct_color) {
        $(".message").text("Correct").css({
          color: "lightgreen",
        });
        $(".play-again").addClass("enabled").removeClass("disabled");
        //$(this).siblings().remove()
      } else {
        $(".message").text("Try Again").css({
          color: "red",
        });
        //$(this).css({
        //"text-decoration":"line-through"
        //})
        //$(this).remove()
      }
    });
    /*ON option_2*/
    $(".option-2").on("click", function () {
      if ($(this).text() == correct_color) {
        $(".message").text("Correct").css({
          color: "lightgreen",
        });
        $(".play-again").addClass("enabled").removeClass("disabled");
        //$(this).siblings().remove()
      } else {
        $(".message").text("Try Again").css({
          color: "red",
        });
        //$(this).remove()
      }
    });
    /*ON option_3*/
    $(".option-3").on("click", function () {
      if ($(this).text() == correct_color) {
        $(".message").text("Correct").css({
          color: "lightgreen",
        });
        $(".play-again").addClass("enabled").removeClass("disabled");
        //$(this).siblings().remove()
      } else {
        $(".message").text("Try Again").css({
          color: "red",
        });
        //$(this).remove()
      }
    });
    /*ON option_4*/
    $(".option-4").on("click", function () {
      if ($(this).text() == correct_color) {
        $(".message").text("Correct").css({
          color: "lightgreen",
        });
        $(".play-again").addClass("enabled").removeClass("disabled");
        //$(this).siblings().remove()
      } else {
        $(".message").text("Try Again").css({
          color: "red",
        });
        //$(this).remove()
      }
    });
  }
  function message_hide() {
    $(".message").text("");
  }

  /*EVENTS ON NEW COLOR BUTTON*/
  document.querySelector(".reset").addEventListener("click", function () {
    colorFunc();
    //disabled();
    message_hide();
    //score()
  });
  colorFunc();
  /*RESET PLAY AGAIN BUTTON*/
  /*
  function disabled(){
      $('.play-again').addClass('disabled').removeClass("enabled")
  }
  */
  /*
      if($(".play-again").hasClass("enabled")){
          $(".play-again").click(colorFunc)
      }
      */
  /*
      if($(".message").text()=="Correct"){
          $(".message").css({
              "color":"lightgreen"
          })
      }
      if($(".message").text()=="Try Again"){
          $(".message").css({
              "color":"red"
          })
      }
      $(".option-1, option-2, option-3, option-4").on("click", function(){
          if($(this).text()==correct_color){
              $(".message").text("Correct").css({
                  "color":"green"
              })
          }
          else{
              $(".message").text("Try Again").css({
                  "color":"red"
              })
          }
      })
      */
});
