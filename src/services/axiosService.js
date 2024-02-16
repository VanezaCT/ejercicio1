import APIRequest from "../utils/config/axios.config";


export default function getRandomUser(params) {
    return APIRequest.get('/',{
        validateStatus: function (status) {
            return status >= 200 && status < 300; // default
        },
    })
} 