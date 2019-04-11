import { Component, OnInit, ViewEncapsulation,Input } from '@angular/core';

@Component({
  selector: 'app-tweet-ngxkh',
  templateUrl: './tweet-ngxkh.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.Native
})
export class TweetNgxkhComponent implements OnInit {

  @Input() consumer_key :String;
  @Input() consumer_secret :String;
  @Input() access_token :String;
  @Input() secret_token :String;
  @Input() search_hastang :String;
  @Input() order_by_value :String;//recent or popular
  @Input() url_twitter:String;
  listado = [];
  
  constructor() { 
    this.listado=[];
    this.url_twitter='https://api.twitter.com';
    this.search_hastang="";
  }

  ngOnInit() {
    this.retrieve_tweet();
  }

  public retrieve_tweet(){
      if(this.search_hastang==''){
        console.warn(this.consumer_key)
				fetch(this.url_twitter+"/1.1/statuses/home_timeline.json", {
                method: 'GET', // or 'PUT'
                //body: JSON.stringify(data), // data can be `string` or {object}!
                headers:{
                    'Content-Type': "application/json",
                    'Authorization': "OAuth oauth_consumer_key=\""+this.consumer_key+"\",oauth_token=\""+this.access_token+"\",oauth_signature_method=\"HMAC-SHA1\",oauth_timestamp=\"1554868978\",oauth_nonce=\"mUqIk3O3nat\",oauth_version=\"1.0\",oauth_signature=\"vyNE%2FFuIKQneT1pL1j%2Fj4dpX2fI%3D\"",
                    'cache-control': "no-cache"
                    }
                }).then(res => res.json().then(
                  response=>{
                                this.listado=response
                    console.warn(this.listado)
                  }
                ))
              .catch(error => console.error('Error:', error))
              .then(response => console.warn('Success:', response));

      }else{
            fetch(this.url_twitter+"/1.1/search/tweets.json?q="+this.search_hastang, {
            method: 'GET', // or 'PUT'
            //body: JSON.stringify(data), // data can be `string` or {object}!
            headers:{
                'Content-Type': "application/json",
                'Authorization': "OAuth oauth_consumer_key=\""+this.consumer_key+"\",oauth_token=\""+this.access_token+"\",oauth_signature_method=\"HMAC-SHA1\",oauth_timestamp=\"1554820385\",oauth_nonce=\"XHbmTBXyS2h\",oauth_version=\"1.0\",oauth_signature=\"HUco%2B%2BMP4D24wXlsWxWPQMa%2FTjY%3D\"",
                'cache-control': "no-cache"
                }
            }).then(res => res.json().then(
                response=>{
                    this.listado=response["statuses"]
                    console.warn(this.listado)
                }
            ))
        .catch(error => console.error('Error:', error))
        .then(response => console.warn('Success:', response));
      }
  }

}
