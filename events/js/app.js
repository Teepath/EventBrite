//instatiate classes

const eventBrite = new EventBrite();
 const ui = new UI();

//listen for the submit button

document.getElementById('submitBtn').addEventListener('click', (e)=>{
    e.preventDefault();

    const eventName = document.getElementById('event-name').value;
    const categories = document.getElementById('category').value;

    if(eventName === "" || categories === ""){
        //print error message
        ui.printMessage('You must select a name/city and chose the category', 'text-center alert alert-danger mt-4');
    }else {
        //query event api

        eventBrite.apiQuery(eventName, categories)
            .then((events)=>{
                const eventsList = events.events.events;
                if(eventsList.length > 0){
                    //print events
                   ui.displayEvent(eventsList);
                }else {
                    ui.printMessage('No Result Found', 'text-center alert alert-danger mt-4');
                }
            })

    }
})