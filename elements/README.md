# Tweet

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Variables
estas 4 primeras variables lo puede encontrar en el api de twiiter
https://developer.twitter.com/en/docs/basics/authentication/guides/access-tokens.html

1. `consumer_secret` es el secret key de twitter
2. `consumer_key` es el API key de twitter
3. `access_token` es el Access token de twitter
4. `secret_token` es el Access token secret de twitter
5. `search_hastang` en un string que buscara por #

##Note
En la web, javascript no se puede accesar con un dominio externo por motivo de Cross-Origin Resource Sharing.

Este servicio se puede usar en Electron, Extensiones Chrome or web security browser desahabilitado.

## Usage

Este es un ejemplo del componente

En el archivo app.module.ts debe configurar CUSTOM_ELEMENTS_SCHEMA

```import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
   CUSTOM_ELEMENTS_SCHEMA
 ]
})
export class AppModule { }


Despues en el main.ts

import 'tweet-ngxkh/tweet-ngxkh';

y en el index.html

<tweet-ngxkh 
      search_hastang="#Uribe" 
      consumer_secret="XXXXXXXXXX"
      access_token="XXXXXXXXXX"
      secret_token="XXXXXXXXXX"
      consumer_key='XXXXXXXX'></tweet-ngxkh>```



Para probar localmente debera hacer lo siguiente:

1. crear un archivo proxyconfig.json que debe contener y usar chrome
{
    "/1.1/**": {
        "target": "https://api.twitter.com",
        "changeOrigin":true
    }
}

2. en el componente debe incluir un campo llamando url_twitter, asi como esta en el ejemplo.

<tweet-ngxkh 
      url_twitter="http://localhost:4200"
      search_hastang="#Uribe" 
      consumer_secret="XXXXXXXXXX"
      access_token="XXXXXXXXXX"
      secret_token="XXXXXXXXXX"
      consumer_key='XXXXXXXX'></tweet-ngxkh>```






