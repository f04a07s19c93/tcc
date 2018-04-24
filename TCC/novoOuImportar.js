
let novoOuImportarTemplate = `

<!doctype html>
<html>

<head>
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css">
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/js/materialize.min.js"></script>
    <style>
        * {
            box-sizing: border-box;
        }

        body {
            margin: 0;
        }

        #i0npgk {
            margin: 5% 0px 20px 0px;
        }

        #i9l5zk {
            text-align: center;
            font-family: Arial,
            Helvetica, sans-serif;
            font-size: 17px;
        }

        #iy1tbx {
            margin: 10% 0px 20px 0px;
        }
        #hr-separa{
            margin-top:17%;

        }

        .row {
            display: table;
            padding-top: 10px;
            padding-right: 10px;
            padding-bottom: 10px;
            padding-left: 10px;
            width: 100%;
        }

        #banner-gradient {
            background-image: linear-gradient(45deg,
            rgb(122, 188, 255) 0%, rgb(96, 171, 248) 44%, rgb(64, 150, 238) 100%);
            background-position-x: initial;
            background-position-y: initial;
            background-size: initial;
            background-repeat-x: initial;
            background-repeat-y: initial;
            background-attachment: initial;
            background-origin: initial;
            background-clip: initial;
            background-color: initial;
        }

        .col:empty {
            display: table-cell;
            height: 75px;
        }

        #myForm .col:empty {
            display: table-cell;
            height: 75px;
            position: relative;
        }

        #myForm .col:empty::after {
            content: "Add form elements
 here";color:rgb(136, 136, 136);position:absolute;left:10px;top:10px;display:block;width:400px;}nav ul a, nav .brand-logo{color:rgb(68,68, 68);
        }

        p {
            line-height: 2rem;
        }

        .parallax-container .section {
            width: 100%;
        }

        footer.gram-footer ul.collection>li.collection-item,
        footer.gram-footer ul.collection>li.collection-header {
            background-image: initial;
            background-position-x: initial;
            background-position-y: initial;
            background-size: initial;
            background-repeat-x: initial;
            background-repeat-y: initial;
            background-attachment: initial;
            background-origin: initial;
            background-clip: initial;
            background-color: transparent;
            border-top-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
            border-left-width: 0px;
            border-top-style: initial;
            border-right-style: initial;
            border-bottom-style: initial;
            border-left-style: initial;
            border-top-color: initial;
            border-right-color: initial;
            border-bottom-color: initial;
            border-left-color: initial;
            border-image-source: initial;
            border-image-slice: initial;
            border-image-width: initial;
            border-image-outset: initial;
            border-image-repeat: initial;
        }

        footer.gram-footer ul.collection {
            border-top-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
            border-left-width: 0px;
            border-top-style: initial;
            border-right-style: initial;
            border-bottom-style: initial;
            border-left-style: initial;
            border-top-color: initial;
            border-right-color: initial;
            border-bottom-color: initial;
            border-left-color: initial;
            border-image-source: initial;
            border-image-slice: initial;
            border-image-width: initial;
            border-image-outset: initial;
            border-image-repeat: initial;
        }

        .input-field [type="checkbox"]+label,
        .input-field [type="radio"]:not(:checked)+label,
        .input-field [type="radio"]:checked+label {
            pointer-events: auto;
        }

        input:not([type]):focus:not([readonly]),
        input[type="text"]:not(.browser-default):focus:not([readonly]),
        input[type="password"]:not(.browser-default):focus:not([readonly]),
        input[type="email"]:not(.browser-default):focus:not([readonly]),
        input[type="url"]:not(.browser-default):focus:not([readonly]),
        input[type="time"]:not(.browser-default):focus:not([readonly]),
        input[type="date"]:not(.browser-default):focus:not([readonly]),
        input[type="datetime"]:not(.browser-default):focus:not([readonly]),
        input[type="datetime-local"]:not(.browser-default):focus:not([readonly]),
        input[type="tel"]:not(.browser-default):focus:not([readonly]),
        input[type="number"]:not(.browser-default):focus:not([readonly]),
        input[type="search"]:not(.browser-default):focus:not([readonly]),
        textarea.materialize-textarea:focus:not([readonly]) {
            border-bottom-width: 1px;
            border-bottom-style: solid;
            border-bottom-color: orange;
            box-shadow: orange 0px 1px 0px 0px;
        }

        #contact input#your-email {
            color: rgb(255, 255, 255);
        }

        #contact textarea#your-message {
            color: rgb(255,
            255, 255);
        }

        .icon-block .material-icons {
            font-size: inherit;
        }

        footer.page-footer {
            margin-top: 0px;
            margin-right: 0px;
            margin-bottom: 0px;
            margin-left: 0px;
        }

        .btn.waves-effect.waves-light.blue {
            width: 100%;
        }

        .col.m6 {
            width: 45%;
            padding: 0px 1px 0px 1px;
        }

        @media only screen and (max-width: 992px) {
            .parallax-container .section {
                position: absolute;
                top: 40%;
            }
            #index-banner .section {
                top: 10%;
            }
        }

        @media only screen and (max-width: 600px) {
            #index-banner .section {
                top: 0px;
            }
        }
    </style>
</head>

<body>
    <div class="row" id="i0npgk">
        <div class="col m12">
            <div id="i9l5zk"><h5>FERRAMENTA PARA DESENVOLVIMENTO JAVA SCRIPT</h5></div>
        </div>
    </div>
    <div class="row" id="iy1tbx">
        <div class="col m6">
            <a id="btn-novoProjeto" class="btn waves-effect waves-light blue">NOVO PROJETO</a>
        </div>
        <div class="col m6">
            <a id="btn-importar" class="btn waves-effect waves-light blue">IMPORTAR PROJETO</a>
        </div>
    </div>
    <hr id="hr-separa"/>
   <!-- <div data-activates="menu" class="tap-target">
        <div class="tap-target-content">
            <h5>Title</h5>
            <p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Proin eget tortor risus. Praesent sapien massa,
                convallis a pellentesque nec, egestas non nisi. Nulla porttitor accumsan tincidunt.</p>
        </div>
    </div>
    <div class="fixed-action-btn horizontal click-to-toggle">
        <a onclick="$('.fixed-action-btn').openFAB()" class="btn-floating btn-large waves-effect waves-light orange">
            <i class="material-icons">menu</i>
        </a>
    </div>-->

</body>

</html>
`

var telanovoOuImportar = new Vue({
	
	el: '#novoOuImportar',
	data : {
		template1 : novoOuImportarTemplate,
		seen : true
	}
	
})