class Render {

    renderPlayers(data) {
        $('.players').empty()

        const source = $('#players-template').html();
        const template = Handlebars.compile(source);
        const newHTML = template({data});
        console.log({data})
        $('.players').append(newHTML);

    }



}