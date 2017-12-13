console.log("Sanity Check: JS is working!");
$(document).ready(function(){
  const $pokemon = $("#pokemon");
  let isClicked = false;
  //listens for click on pokemon button then makes GET request to mutably app.
  $pokemon.on("click", () => {
    $.ajax("http://mutably.herokuapp.com/pokemon")
      //promise then returns pokemon objects
      .then( result => {
        result.pokemon.forEach((pokemon) => {
          $("#resource")
            .append("\
              <div style='border:solid'>\
                <p><strong>ID:</strong> " + pokemon._id +"</p>\
                </p><strong>Pokemon Name:</strong> " + pokemon.name + "</p>\
                <p><strong>Evolves From:</strong>" + pokemon.evolves_from +
                "<p><strong>Pokedex:</strong>" + pokemon.pokedex + "<p>Cover:</p>\
                <img style='width:60px;height:60px;' src='" + pokemon.image + "'>" +
                "<p>Version: " + pokemon.__v + "</p>\
                <button class='btn btn-sucess'>Edit</button>\
                <button class='btn btn-danger' id='delete'>Delete</button>\
              </div>")
      })
    })
  })
});
