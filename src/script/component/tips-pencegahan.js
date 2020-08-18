class TipsPencegahan extends HTMLElement {
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode:"open"});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowDOM.innerHTML = `
        <style>
            .row {
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -ms-flex-wrap: wrap;
                flex-wrap: wrap;
                margin-right: -15px;
                margin-left: -15px;
            }

            .col-sm{
                position: relative;
                width: 100%;
                min-height: 1px;
                padding-right: 15px;
                padding-left: 15px;
            }

            .col-sm {
                -ms-flex-preferred-size: 0;
                flex-basis: 0;
                -webkit-box-flex: 1;
                -ms-flex-positive: 1;
                flex-grow: 1;
                max-width: 100%;
            }

            #pencegahan h1{
                text-align: center;
                margin-bottom: 70px;
            }
            
            #pencegahan .container{
                margin-bottom: 50px;
            }
            
            .fitur-garisbawah {
                font-size: 30px;
                border-bottom: 3px solid #407bff;
                padding-bottom: 3px;
            }
            
            .gambar-pencegahan {
                max-height: 300px;
                margin-left: 200px;    
                display: block;
            }
            
            .deskripsi-pencegahan h2{
                display: block;
                font-size: 1.75em;
                font-weight: bold;
                margin-block-start: 0.83em;
                margin-block-end: 0.83em;
                color: #407bff;
                margin-top: 70px;
            }
            
            .deskripsi-pencegahan h4{
                display: block;
                font-weight: bold;
                font-size: 1.25em;
                margin-block-start: 1.33em;
                margin-block-end: 1.33em;
                margin-right: 150px
            }
            
            @media screen and (max-width: 1000px) {
                .gambar-pencegahan {
                    max-height: 300px;
                    display: block;
                    margin: 0 auto;
                }
            
                .deskripsi-pencegahan {
                    margin-top: 20px;
                    text-align: center;
                }
            
                .deskripsi-pencegahan h4{
                    margin-right: 0px
                }
            }
            
            @media screen and (max-width: 320px) {
                .gambar-pencegahan {
                    max-height: 250px;
                    display: block;
                    margin: 0 auto;
                }
            }            
        </style>
        <article id="pencegahan">
            <h1><span class="fitur-garisbawah">Pencegahan</span></h1>
            <div class="row">
                <div class="col-sm">
                    <img src="src/images/CuciTangan.png" alt="cuci tangan" class="gambar-pencegahan">
                </div>
                <div class="col-sm">
                    <div class="deskripsi-pencegahan">
                    <h2>Rajinlah mencuci tangan</h2>
                    <h4>Bersihkan tangan Anda dengan antiseptik berbasis alkohol atau dengan sabun dan air</h4>
                    </div>
                </div>
            </div>
            <br><br>
            <div class="row">
                <div class="col-sm">
                    <img src="src/images/PakaiMasker.png" alt="pakai masker" class="gambar-pencegahan">
                </div>
                <div class="col-sm">
                    <div class="deskripsi-pencegahan">
                    <h2>Pakai masker</h2>
                    <h4>Selalu siapkan masker jika Anda ingin melakukan aktivitas di luar rumah</h4>
                    </div>
                </div>
            </div>
            <br><br>
            <div class="row">
                <div class="col-sm">
                    <img src="src/images/JagaJarak.png" alt="jaga jarak" class="gambar-pencegahan">
                </div>
                <div class="col-sm">
                    <div class="deskripsi-pencegahan">
                    <h2>Jaga jarak</h2>
                    <h4>Jaga jarak setidaknya 1 meter antara Anda dan siapa pun untuk meminimalisir penularan virus</h4>
                    </div>
                </div>
            </div>
            <br><br>
            <div class="row">
                <div class="col-sm">
                    <img src="src/images/CekRutin.png" alt="cek rutin" class="gambar-pencegahan">
                </div>
                <div class="col-sm">
                    <div class="deskripsi-pencegahan">
                    <h2>Cek suhu tubuh</h2>
                    <h4>Cek secara berkala suhu tubuh Anda, Jika suhu tubuh Anda di atas 38&#176; segeralah berkonsultasi dengan dokter</h4>
                    </div>
                </div>
            </div>
            <br><br>
            <div class="row">
                <div class="col-sm">
                    <img src="src/images/KonsulDokter.png" alt="konsul dokter" class="gambar-pencegahan">
                </div>
                <div class="col-sm">
                    <div class="deskripsi-pencegahan">
                    <h2>Konsultasi dokter</h2>
                    <h4>Jika dirasa kesehatan Anda kurang baik, silakan berkonsultasi dengan dokter di daerah Anda</h4>
                    </div>
                </div>
            </div>
        </article>
        `;
    }
}

customElements.define("tips-pencegahan", TipsPencegahan);