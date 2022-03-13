
//Form
$(function () {
  
  $("#formLogin").on("submit", function (e) {
    e.preventDefault();
    var nombre = $("#inputEmail").val();
    //ver lo que escribio el usuario en la consola
    console.log(nombre);
    $("#enviar").on("click", function () {
      alert("Probando el Jquery en el evento click");
    });
  });
});


//Cards
$(".card-body").append('<button id="btnjQuery">Mostrame</button>');
$("#btnjQuery").on("click", function () {
  $("#infoGato1").toggle();
});
$(".card-body2").append('<button id="btnjQuery2">Mostrame</button>');
$("#btnjQuery2").on("click", function () {
  $("#infoGato2").toggle();
});
$(".card-body3").append('<button id="btnjQuery3">Mostrame</button>');
$("#btnjQuery3").on("click", function () {
  $("#infoGato3").toggle();
});
$(".card-body4").append('<button id="btnjQuery4">Mostrame</button>');
$("#btnjQuery4").on("click", function () {
  $("#infoGato4").toggle();
});
$(".card-body5").append('<button id="btnjQuery5">Mostrame</button>');
$("#btnjQuery5").on("click", function () {
  $("#infoGato5").toggle();
});
$(".card-body6").append('<button id="btnjQuery6">Mostrame</button>');
$("#btnjQuery6").on("click", function () {
  $("#infoGato6").toggle();
});
$(".card-body7").append('<button id="btnjQuery7">Mostrame</button>');
$("#btnjQuery7").on("click", function () {
  $("#infoGato7").toggle();
});

//Animaciones con Jquery
 //Titulo principal//
$(function () {
 
  $(".titulo__presentacion").on("mouseover", function () {
    $("h1").animate({ opacity: 0.5 });
  });
  $(".titulo__presentacion").on("mouseleave", function () {
    $("h1").animate({ opacity: 1 });
  });
});
$(function () {
  //Titulo staff
  $("#staff").on("mouseover", function () {
    $("h2").animate({ opacity: 0.5 });
  });
  $("#staff").on("mouseleave", function () {
    $("h2").animate({ opacity: 1 });
  });
});

$(function () {
  //Fotos de los gatos
  $("#may").on("mouseover", function () {
    $(this).animate({ opacity: 0.5 });
  });
  $("#may").on("mouseleave", function () {
    $(this).animate({ opacity: 1 });
  });
  $("#cless").on("mouseover", function () {
    $(this).animate({ opacity: 0.5 });
  });
  $("#cless").on("mouseleave", function () {
    $(this).animate({ opacity: 1 });
  });
  $("#vainilla").on("mouseover", function () {
    $(this).animate({ opacity: 0.5 });
  });
  $("#vainilla").on("mouseleave", function () {
    $(this).animate({ opacity: 1 });
  });
  $("#lucky").on("mouseover", function () {
    $(this).animate({ opacity: 0.5 });
  });
  $("#lucky").on("mouseleave", function () {
    $(this).animate({ opacity: 1 });
  });
  $("#lucy").on("mouseover", function () {
    $(this).animate({ opacity: 0.5 });
  });
  $("#lucy").on("mouseleave", function () {
    $(this).animate({ opacity: 1 });
  });$("#sirenita").on("mouseover", function () {
    $(this).animate({ opacity: 0.5 });
  });
  $("#sirenita").on("mouseleave", function () {
    $(this).animate({ opacity: 1 });
  });$("#lazuli").on("mouseover", function () {
    $(this).animate({ opacity: 0.5 });
  });
  $("#lazuli").on("mouseleave", function () {
    $(this).animate({ opacity: 1 });
  });
});


//AJAX
//DESCRIPCION DE LOS CAFE

//LATTE
$(() => {
  let URL16 = "https://api.sampleapis.com/coffee/hot/16";
  let flag = false;


  $("#cafeLatte").on("click", function () {
    if(!flag){
      $.get(URL16, function (response, status) {
        if (status === "success") {
          let datoObtenido = response;
          for (const dato of Object.keys(datoObtenido)) {
            $(".cafes-latte").append(
              `<div><p>${response.title}</p><p>${response.description}</p></div>`
            );
            break;
          }
        }
      });
      flag=true;
    }
  });
});

//MATCHA//
$(() => {
  let URL21 = "https://api.sampleapis.com/coffee/hot/21";

  let flag = false;
  const matchaCafe = {
    title: "Matcha",
    description:
      "A matcha latte is a tea latte made with green tea powder and steamed milk. Matcha replaces the espresso in a traditional cafe latte, giving it a brilliant green color and lightly bitter flavor. Most coffeeshops offer a hot and iced version of this drink.",
  };
  $("#matcha").on("click", function () {
    if(!flag){
    $.post(URL21, function (response, status) {
      if (status === "success") {
        let datoObtenido = response;
        for (const dato of Object.keys(datoObtenido)) {
          $(".cafes-matcha").append(
            `<div><p>${matchaCafe.title}</p><p>${matchaCafe.description}</p></div>`
          );

          break;
        }
      }
    });
      flag=true;
    }
  });
});
//VAINILLA//
$(() => {
  let URL21 = "https://api.sampleapis.com/coffee/hot/21";
  let flag = false;
  const vainillaCafe = {
    title: "Vainilla",
    description:
      "A Vanilla Latte is a coffee drink made with espresso, steamed milk, and vanilla syrup. This is a delicious, classic latte like the ones you can get in a café in Italy, flavored with a lightly sweet, vanilla-scented essence. It’s outrageously cozy, especially in the fall and winter: though of course you can drink it anytime!",
  };
  $("#vainilla").on("click", function () {
    if(!flag){
    $.post(URL21, function (response, status) {
      if (status === "success") {
        let datoObtenido = response;
        for (const dato of Object.keys(datoObtenido)) {
          $(".cafes-vainilla").append(
            `<div><p>${vainillaCafe.title}</p><p>${vainillaCafe.description}</p></div>`
          );

          break;
        }
      }
    });
    flag=true;
  }
  });
});
//MOCCA//
$(() => {
  let URL12 = "https://api.sampleapis.com/coffee/hot/12";
  let flag = false;
  
  $("#mocca").on("click", function () {
    if(!flag){
    
    $.get(URL12, function (response, status) {
      if (status === "success") {
        let datoObtenido = response;
        for (const dato of Object.keys(datoObtenido)) {
          $(".cafes-mocca").append(
            `<div><p>${response.title}</p><p>${response.description}</p></div>`
          );

          break;
        }
      }
    });
    flag=true;
  }
  });
});
//CHOCOLATE//
$(() => {
  let URL21 = "https://api.sampleapis.com/coffee/hot/21";
  let flag = false;
  const chocolate = {
    title: "Chocolatte",
    description:
      "Hot chocolate using real chocolate instead of the powdered stuff. Top with whipped cream and chocolate shavings and enjoy!",
  };
  $("#chocolate").on("click", function () {
    if(!flag){
    $.post(URL21, function (response, status) {
      if (status === "success") {
        let datoObtenido = response;
        for (const dato of Object.keys(datoObtenido)) {
          $(".cafes-chocolate").append(
            `<div><p>${chocolate.title}</p><p>${chocolate.description}</p></div>`
          );

          break;
        }
      }
    });
    flag=true;
  }
  });
});
//FRUTILLA//
$(() => {
  let URL21 = "https://api.sampleapis.com/coffee/hot/21";
  let flag = false;
  const frutilla = {
    title: "Frutilla",
    description:
      "Strawberry latte offers stunning layers of espresso, milk, and homemade strawberry syrup. The strawberries are the perfect complement to bold espresso and velvety milk!",
  };
  $("#frutilla").on("click", function () {
    if(!flag){
    $.post(URL21, function (response, status) {
      if (status === "success") {
        let datoObtenido = response;
        for (const dato of Object.keys(datoObtenido)) {
          $(".cafes-frutilla").append(
            `<div><p>${frutilla.title}</p><p>${frutilla.description}</p></div>`
          );

          break;
        }
      }
    });
    flag=true;
  }
  });
});

//GALERIA CAFETERIA//
$(() => {
$( "#cafeteria1" ).hover(
  function() {
  $( this ).css({width: "95%"});
},
  function() {
    $( this ).css({width: "80%"});
  }
  
);
$( "#cafeteria2" ).hover(
  function() {
  $( this ).css({width: "95%"});
},
  function() {
    $( this ).css({width: "80%"});
  }
  
);
$( "#cafeteria3" ).hover(
  function() {
  $( this ).css({width: "95%"});
},
  function() {
    $( this ).css({width: "80%"});
  }
  
);
$( "#cafeteria4" ).hover(
  function() {
  $( this ).css({width: "95%"});
},
  function() {
    $( this ).css({width: "80%"});
  }
  
);
$( "#cafeteria5" ).hover(
  function() {
  $( this ).css({width: "95%"});
},
  function() {
    $( this ).css({width: "80%"});
  }
  
);
});
