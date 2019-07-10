
const renderer = new Render



let getPlayers = function(teamName) {
    $.get(`/teams/${teamName}`, function(response){
        renderer.renderPlayers(response)

    } )

}


// input click 
    $(".button").on("click", function () {
      let teamName = $(".input").val();
      getPlayers(teamName)

    });


    

