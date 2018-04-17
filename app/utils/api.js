var axios = require('axios');

module.exports = {
    fetchData: function (url) {
        return axios.get(url)
        .then(function (response) {
            return response.data;
        });
    }
}