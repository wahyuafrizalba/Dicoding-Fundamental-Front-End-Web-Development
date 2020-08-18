import DataNegara from "./data-negara.js"
import "./component/search-bar.js"
import "./component/beranda-konten.js"
import "./component/tips-pencegahan.js"

function main() {
    const searchElement = document.querySelector("search-bar");

    const onButtonSearchClicked = async () => {
        try{
            const result = await DataNegara.pilihNegara(searchElement.value);
            renderLokal(result);
        } catch (message) {
            showResponseMessage(message)
        }
    };

    searchElement.clickEvent = onButtonSearchClicked;

    const getGlobal = async () => {
        try {
          const response = await fetch(`https://covid.mathdro.id/api`);
          const responseJson = await response.json();
          if(responseJson) {
             renderGlobal(responseJson);
          } 
        } catch(error) {
           showResponseMessage(error);
        }
    }

    const getLokal = async () => {
        try {
          const response = await fetch(`https://covid19.mathdro.id/api/countries/Indonesia`);
          const responseJson = await response.json();
          if(responseJson) {
             renderLokal(responseJson);
          }
        } catch(error) {
           showResponseMessage(error);
        }
    }

    const renderGlobal = (globals) => {
        const listNegara = document.querySelector("#tabel-utama");
        listNegara.innerHTML += `
        <h2>Kasus Global</h2>
            <div class="row">
                <div class="col-sm-4">
                    <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Terkonfirmasi</h5>
                        <p class="card-text">${globals.confirmed.value}</p>
                    </div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Sembuh</h5>
                        <p class="card-text">${globals.recovered.value}</p>
                    </div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="card">
                        <div class="card-body">
                        <h5 class="card-title">Meninggal</h5>
                        <p class="card-text">${globals.deaths.value}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    };

    const renderLokal = (globals) => {
        const listNegara = document.querySelector("#tabel-lokal");
        listNegara.innerHTML = "" 
        listNegara.innerHTML += `
        <h3>Kasus di ${searchElement.value}</h3>
            <div class="row">
                <div class="col-sm-4">
                    <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Terkonfirmasi</h5>
                        <p class="card-text">${globals.confirmed.value}</p>
                    </div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Sembuh</h5>
                        <p class="card-text">${globals.recovered.value}</p>
                    </div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="card">
                        <div class="card-body">
                        <h5 class="card-title">Meninggal</h5>
                        <p class="card-text">${globals.deaths.value}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    };

    const showResponseMessage = (message = "Cek koneksi internet Anda") => {
        alert(message);
    };

    document.addEventListener("DOMContentLoaded", () => {
        getGlobal();
        getLokal();
    });
}

export default main;