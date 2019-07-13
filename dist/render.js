class Render {

    renderPlayers(data) {
        $('.players').empty()

        const source = $('#players-template').html();
        const template = Handlebars.compile(source);
        const newHTML = template({data});
        // console.log({data})
        $('.players').append(newHTML);

    }


    //extension
//     renderPlayerStats(state){
//         $('.state').empty()
//         const source = $('#stats-template').html();
//         const template = Handlebars.compile(source);
//         const newHTML = template (state);
//         $('.state').append(newHTML);
// }

}