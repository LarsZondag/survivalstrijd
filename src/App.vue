<template>

    <div id="app">
        <div id="slopend">
            <a href="slopend.com">
                <button class="btn" id="goToSite" v-html="$t('reguliereSite')"></button>
            </a>
        </div>
        <div class="brand">
            <img id="logo" src="./assets/logo-banner.png">
        </div>

        <!-- Navigation -->
        <nav class="navbar navbar-default" role="navigation">
            <div class="container">
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse"
                            data-target="#bs-example-navbar-collapse-1">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <!-- navbar-brand is hidden on larger screens, but visible when the menu is collapsed -->
                    <a class="navbar-brand" href="index.html">Survivalstrijd</a>
                </div>
                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav">
                        <li>
                            <router-link to="/survivalstrijd">{{$t('nav.survivalstrijd')}}</router-link>
                        </li>
                        <li>
                            <router-link to="/informatie">{{$t('nav.informatie')}}</router-link>
                        </li>
                        <li>
                            <router-link to="/vrijwilligers">{{$t('nav.vrijwilligers')}}</router-link>
                        </li>
                        <li>
                            <router-link to="/trainingen">{{$t('nav.trainingen')}}</router-link>
                        </li>
                        <li>
                            <router-link to="/eindtijden">{{$t('nav.eindtijden')}}</router-link>
                        </li>
                        <li>
                            <router-link to="/fotos">{{$t('nav.fotos')}}</router-link>
                        </li>
                        <li>
                            <router-link to="/sponsoren">{{$t('nav.sponsoren')}}</router-link>
                        </li>
                        <li>
                            <router-link to="/parcours">{{$t('nav.parcours')}}</router-link>
                        </li>
                        <li>
                            <router-link to="/bedrijfsrun">{{$t('nav.bedrijfsrun')}}</router-link>
                        </li>
                        <li>
                            <a style="cursor: pointer"
                               v-bind:class="{ inactiveLang: isNotActive('nl') }"
                               v-on:click="changeLocale('nl')">🇳🇱</a>
                        </li>
                        <li>
                            <a style="cursor: pointer"
                               v-bind:class="{ inactiveLang: isNotActive('en') }"
                               v-on:click="changeLocale('en')"> 🇬🇧</a>
                        </li>
                    </ul>
                </div>
                <!-- /.navbar-collapse -->
            </div>
            <!-- /.container -->
        </nav>

        <div class="container">

            <div class="row">
                <div class="box">
                    <div class="col-lg-12 text-center">
                        <router-view></router-view>
                    </div>
                </div>
            </div>
        </div>

        <div class="spacer"></div>

        <footer class="footer navbar-fixed-bottom">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 text-center">
                        <p>Sponsoren</p>
                    </div>
                </div>
            </div>
        </footer>

    </div>
</template>

<script>
    export default {
        name: 'app',
        data () {
            return {}
        },
        methods: {
            changeLocale: function (lang) {
                window.Vue.config.lang = lang;
            },
            isNotActive: function (lang) {
                return window.Vue.config.lang != lang;
            }
        }
    }
</script>

<style>
    .inactiveLang {
        opacity: 0.5;
    }

    body {
        font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
        background: url('./assets/bg.jpg') no-repeat center center fixed;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        background-size: cover;
        -o-background-size: cover;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        text-transform: uppercase;
        font-family: "Josefin Slab", "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-weight: 700;
        letter-spacing: 1px;
    }

    p {
        font-size: 1.25em;
        line-height: 1.6;
        color: #000;
    }

    hr {
        max-width: 400px;
        border-color: #999999;
    }

    .brand,
    .address-bar {
        display: none;
    }

    .navbar-brand {
        text-transform: uppercase;
        font-weight: 900;
        letter-spacing: 2px;
    }

    .navbar-nav {
        font-weight: 400;
        font-size: 0.9em;
    }

    .img-full {
        min-width: 100%;
    }

    #logo {
        /*width: 100%;*/
        max-width: 100%;
        display: inherit;
        margin-left: auto;
        margin-right: auto
    }

    .brand-before,
    .brand-name {
        text-transform: capitalize;
    }

    .brand-before {
        margin: 15px 0;
    }

    .brand-name {
        margin: 0;
        font-size: 4em;
    }

    .tagline-divider {
        margin: 15px auto 3px;
        max-width: 250px;
        border-color: #999999;
    }

    .box {
        margin-bottom: 20px;
        padding: 30px 15px;
        background: #fff;
        background: rgba(255, 255, 255, 0.95);
    }

    .intro-text {
        text-transform: uppercase;
        font-size: 1.25em;
        font-weight: 400;
        letter-spacing: 1px;
    }

    .img-border {
        float: none;
        margin: 0 auto 0;
        border: #999999 solid 1px;
    }

    .img-left {
        float: none;
        margin: 0 auto 0;
    }

    footer {
        background: #fff;
        background: rgba(255, 255, 255, 0.8);
        /*margin-top: 250px;*/
    }

    .spacer {
        height: 68px;
    }

    footer p {
        margin: 0;
        padding: 20px 0;
    }

    #slopend {
        display: none;
        margin: 0px;
    }

    @media screen and (min-width: 768px) {
        #slopend {
            display: block;
            position:absolute;

            right: 30px;
            top: 10px;
            /*background: white;*/
            margin: auto;
            /*padding-top: .5em;*/
            /*padding-bottom: .5em;*/
            /*width: 250px;*/
            text-align: center;
        }

        #goToSite {
            background: #1D740F;
            color: white;
            border-color: #FFFFFF;
            font-weight: bold;
        }

        #goToSite:hover {
            background: white;
            color: #1D740F;
            border-color: #FFFFFF;
            font-weight: bold;
        }

        .brand {
            display: inherit;
            margin: 0;
            padding: 5px 0 5px;
            text-align: center;
            text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
            font-family: "Josefin Slab", "Helvetica Neue", Helvetica, Arial, sans-serif;
            font-size: 5em;
            font-weight: 700;
            line-height: normal;
            color: #fff;
        }

        .top-divider {
            margin-top: 0;
        }

        .img-left {
            float: left;
            margin-right: 25px;
        }

        .address-bar {
            display: inherit;
            margin: 0;
            padding: 0 0 40px;
            text-align: center;
            text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
            text-transform: uppercase;
            font-size: 1.25em;
            font-weight: 400;
            letter-spacing: 3px;
            color: #fff;
        }

        .navbar {
            border-radius: 0;
        }

        .navbar-header {
            display: none;
        }

        .navbar {
            min-height: 0;
        }

        .navbar-default {
            border: none;
            background: #fff;
            background: rgba(255, 255, 255, 0.95);
        }

        .nav > li > a {
            padding: 9px;
        }

        .router-link-active {
            font-weight: bold;
        }

        .navbar-nav > li > a {
            line-height: normal;
        }

        .navbar-default .navbar-nav > li > a {
            color: #1d1d1d;
        }

        .navbar-nav {
            display: table;
            float: none;
            margin: 0 auto;
            table-layout: fixed;
            font-size: 1.25em;
        }
    }

    @media screen and (min-width: 1200px) {
        .box:after {
            content: '';
            display: table;
            clear: both;
        }
    }
</style>
