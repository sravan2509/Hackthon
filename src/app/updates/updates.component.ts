import { Component, OnInit, APP_ID } from '@angular/core';
import { GuardsCheckEnd } from '@angular/router';
import{ GetDataService} from "../get-data.service"

@Component({
  selector: 'app-updates',
  templateUrl: './updates.component.html',
  styleUrls: ['./updates.component.scss']
})
export class UpdatesComponent implements OnInit {
  public notification=[]
   public latest
   public oldest
   public api
  public notice
 
  constructor( private Getdata:GetDataService) { }
  ngOnInit(): void {
   this.get().then((_)=>{
    for (let i = 0; i < this.notice.length; i++) {
      let obj = {  date:" ",
      title:" ",
      link:" "
    }
      if( this.notice[i].title.slice(0,9)[2]==='.' && this.notice[i].title.slice(0,9)[5]==='.' ){
        obj.date=this.notice[i].title.slice(0,10)
        obj.title=this.notice[i].title.slice(11)
      }
      else  if( this.notice[i].title.slice(0,9)[2]==='-' && this.notice[i].title.slice(0,9)[5]==='-' ){
        obj.date=this.notice[i].title.slice(0,10)
        obj.title=this.notice[i].title.slice(11)
      }
  
      else{
        obj.date="NA"
        obj.title=this.notice[i].title
      }
      obj.link=this.notice[i].link
      
      this.notification.push(obj)
      
       console.log( i + "  " + obj)
    }

    for (let j = this.notification.length-1; j >= 0;j--){
      if(this.notification[j].date!=="NA"){
         this.oldest=this.notification[j].date
        break;
      }

    }

    for (let j = 0; j < this.notification.length;j++){
      if(this.notification[j].date!=="NA"){
         this.latest=this.notification[j].date
        break;
      }

    }
    
  })
  }
  
  
get(){
 return new Promise
 ((resolve,reject)=>{
  this.Getdata.get_task2().subscribe(c=>{
    this.api=c
    console.log(this.api)
    this.notice=this.api.data.notifications 
    resolve()
  })
})

}
  

  
}
