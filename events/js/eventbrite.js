class EventBrite{
    constructor(){
        this.auth_token = 'SIG2TDYLVFRF5OJOYJVI';
        this.date = 'date';
    }
        //Get categories from API
    async getCategoriesAPI(){

        // Query the API
        const  urlResponse = await fetch(`https://www.eventbriteapi.com/v3/categories/?token=${this.auth_token}`);

        //Hold for the response and then return as json
        const categories = await urlResponse.json();

        // return the categories object

        return {
            categories
        }
    }


    async apiQuery(eventName, category){
        const apiResponse = await fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${eventName}&sort_by=${this.date}&categories=${category}&token=${this.auth_token}`)

        const events = await apiResponse.json();

        return {
            events
        }
    }
}