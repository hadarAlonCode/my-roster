
const renderer = new Render


let getPlayers = function(teamName) {
    $.get(`/teams/${teamName}`, function(response){
        renderer.renderPlayers(response)

    })

}

// input click 
    $(".button").on("click", function () {
      let teamName = $(".input").val();
      getPlayers(teamName)

    });



 //img click ------  need to finish

    // $(".players").on("click", ".imgback" ,function () {
    //     let fullName = $(this).closest(".boxPlayers").find(".fullName").text()
    // //  console.log(fullName);
    //  $.get(`/playerStats/${fullName}`, function(response){
    //     //  console.log(response);
         
    //     renderer.renderPlayerStats(response)

    // })
//======================================================
  
    //   });

//adding team - roster 2
    // const updateTeam = function (name) {
        // $.ajax({
        //     url: `/team/${name}/${id}`,
        //     method: "PUT",
        //     data: {teamName: {name}, teamId: {id}},
        //     success: function (response) {
        //         console.log("PUT complete")
        //     }
        // })
        // fetch()
    // }


    // let data = { name: newWonder, location: newLocation }
    // $.post('/wonder', data, function (response) {
    //     console.log("POST complete")
    // })
    
    
    $(".dreamTeam").on("click", function () {
        $.get(`/dreamTeam`, function(response){
            renderer.renderPlayers(response)
        })
    });


    $(".players").on("click", ".addDream",  function () {
       let fullName = $(this).closest(".boxPlayers").find(".fullName").text()
       let splitName = fullName.split(" ");

       let lastName = splitName[1]
       let firstName = splitName[0]
       let jersey = $(this).closest(".boxPlayers").find(".jersey").text()
       let pos = $(this).closest(".boxPlayers").find(".pos").text()
       let data = {firstName: firstName, lastName: lastName, jersey: jersey, pos: pos}
          console.log(data);

        $.post("/roster"+ fullName, data ,function(response){
        })
    });



    ///delete

    $(".players").on("click", ".delete",  function () {
        let fullName = $(this).closest(".boxPlayers").find(".fullName").text()
        let splitName = fullName.split(" ");
       let lastName = splitName[1]
       let firstName = splitName[0]
        
    $.ajax({
        url: "/roster" + firstName,
        method: "DELETE",
        success: function () {
         }
        
    })

    
})