import ax from "axios"
async function apiCall(){
    try {
        let response = await ax.get ("https://ai.suhail.app")
        console.log(response.data);
    } catch (error) {
        console.log(error);
    }
}
apiCall()