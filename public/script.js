console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  //listens for click on pokemon button then makes GET request to mutably app.
     $.get("http://mutably.herokuapp.com/pokemon")
      //promise then returns pokemon objects
      .then( result => {
        result.pokemon.forEach((pokemon) => {
          $("#resource")
            .append("\
              <div style='border:solid'>\
                </p><strong>Pokemon Name:</strong> " + pokemon.name + "</p>\
                <p><strong>Evolves From:</strong>" + pokemon.evolves_from +
                "<p><strong>Pokedex:</strong>" + pokemon.pokedex + "<p>Cover:</p>\
                <img style='width:60px;height:60px;' src='" + pokemon.image + "'>" +
                "<button class='btn btn-sucess'>Edit</button>\
                <button class='btn btn-danger' id='delete'>Delete</button>\
              </div>")
      })
    })

  $("#createForm").submit(function(evt) {
    evt.preventDefault();
    let formData = $(this).serialize();
    $.post("http://mutably.herokuapp.com/pokemon", formData)
      .then(result => {
        $("#resource").append("\
          <div style='border:solid'>\
            </p><strong>Pokemon Name:</strong> " + result.name + "</p>\
            <p><strong>Evolves From:</strong>" + result.evolves_from +
            "<p><strong>Pokedex:</strong>" + result.pokedex + "<p>Cover:</p>\
            <img style='width:60px;height:60px;' src='" + result.image + "'>" +
            "<button class='btn btn-sucess'>Edit</button>\
            <button class='btn btn-danger' id='delete'>Delete</button>\
          </div>");
        $('#myModal').modal('toggle')
      })
  })

  $()

});
