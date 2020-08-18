class DataNegara {
    static pilihNegara(keyword) {
        return fetch(`https://covid19.mathdro.id/api/countries/${keyword}`)

        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if(responseJson) {
                return Promise.resolve(responseJson);
            } else {
                return Promise.reject(`${keyword} tidak ditemukan`);
            }
        })
    }
}

export default DataNegara;