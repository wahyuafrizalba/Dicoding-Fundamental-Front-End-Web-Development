class BerandaKonten extends HTMLElement {
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

            .gambar-beranda {
                max-height: 500px;
            }

            .deskripsi-beranda {
                margin-top: 170px;
            }

            .deskripsi-beranda h1{
                font-size: 35px;
                color: #407bff;
                font-weight: bold;
            }

            .deskripsi-beranda h3{
                display: block;
                font-size: 1.17em;
                font-weight: bold;
                margin: auto;    
                display: block;
            }

            .btn-wrapper{
                margin: 40px 0;
            }

            .tombol{
                padding: 12px 24px;
                display: inline-block;
                color: white;
                opacity: 0.8;
                border-radius: 4px;
            }

            .googleplay{
                text-decoration: none;
                background-color: #407bff;
                margin-right: 10px;
            }

            .googleplay:hover{
                opacity: 50%;
                text-decoration: none;
            }

            .logo-googleplay{
                width: 20px;
                position: absolute;
            }

            .spasi {
                color: #407bff;
            }

            .appstore{
                text-decoration: none;
                background-color: #407bff;
            }

            .appstore:hover{
                opacity: 50%;
                text-decoration: none;
            }

            .logo-apple{
                width: 20px;
                position: absolute;
            }


            .artikel-utama{
                background-color: #407bff;
            }

            .artikel-utama .container{
                padding: 20px;
                margin: 0 auto;
            }

            .artikel-utama h2{
                color: white;
                margin: 30px auto;
            }

            .artikel-utama h3{
                color: white;
                margin: 0 auto 30px;
                font-size: 30px;
            }

            @media screen and (max-width: 1000px) {
                .gambar-beranda {
                    max-height: 300px;
                    display: block;
                    margin: 0 auto;
                }

                .deskripsi-beranda {
                    margin-top: 20px;
                    text-align: center;
                }
            }

            @media screen and (max-width: 320px) {
                .tombol{
                    margin: 0 auto;
                }

                .googleplay{
                    margin-bottom: 10px;
                    width: 170px;
                }

                .appstore{
                    width: 170px;
                }
            }

            @media screen and (max-width: 320px) {
                .gambar-beranda {
                    max-height: 250px;
                    display: block;
                    margin: 0 auto;
                }
            }

        </style>
        <article>
            <div class="row">
                <div class="col-sm">
                <img src="src/images/Lawan.png" alt="beranda" class="gambar-beranda">
                </div>
                <div class="col-sm">
                <div class="deskripsi-beranda">
                    <h1>Indonesia melawan corona</h1>
                    <h3>Platfrom pemantau perkembangan virus corona terupdate dan terpercaya</h3>
                    <div class="btn-wrapper">
                        <a href="#" class="tombol googleplay">
                            <span><img class="logo-googleplay" src="src/images/putihgoogleplay.png" alt="googleplay"></span>
                            <span class="spasi">loll</span>
                            Google Play
                        </a>
                        <a href="#" class="tombol appstore">
                            <span><img class="logo-apple" src="src/images/putihapple.png" alt="apple"></span>
                            <span class="spasi">loll</span>
                            App Store
                        </a>
                    </div>
                </div>
                </div>
            </div>
        </article>
        `;
    }
}

customElements.define("beranda-konten", BerandaKonten);