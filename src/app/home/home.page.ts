import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
   public nome1= "";
   public nome2= "";
   url = "http://lucasreno.kinghost.net/love-calculator/"
   resultado = 0
   mensagem =""
   imagem = false;
   img = "";
   calculando = false;

  constructor(
    public http:HttpClient,
  ) {}

   async enviarDados(){
     let soma = 0;
     this.imagem = false
     while (soma != 10){
      this.resultado = Math.floor(Math.random() * 100 + 1);
      this.calculando =true;
      soma += 1;
      
     }
     this.calculando = false;

     console.log(this.url + this.nome1 + '/' +this.nome2);
     this.img= "";
         
     this.http.get<any>(this.url+this.nome1 + "/" + this.nome2).subscribe(
       (resposta : any) => {
       this.resultado = resposta;
       if(this.resultado<20) {
         this.mensagem ="Pare já! Não se iluda mais!";
         this.img = "../assets/pare2.jpg";
         this.imagem= true;
       }
       else if(this.resultado<40) {
        this.mensagem ="Acredito que você não tenha vez, Ctrl F !!";
        this.img = "../assets/f.jpg";
         this.imagem= true;
       }
       
       else if(this.resultado<60) {
         this.mensagem ="Amor ou paixonite? Largue mão de ser besta!";
         this.img = "../assets/friends.png";
         this.imagem= true;
       }
       else if(this.resultado<80) {
         this.mensagem ="Ta quase conquistando, tente somente ser mais legal!";
         this.img = "../assets/bebe.png";
         this.imagem= true;
       }
       else {
         this.mensagem ="Muito bom! Só tente ter mais atitude! Enfim.. destino.";
         this.img = "../assets/namoro.jpg";
         this.imagem= true;
     }
    }
    );
  }
   
   limpar(){
     this.nome1 = null;
     this.nome2 = null;
     this.resultado = null;
     this.imagem = null;
     this.mensagem = null;
   }
}

