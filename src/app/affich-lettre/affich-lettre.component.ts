import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EtudiantService } from '../services/etudiant.service';
import  pdfMake from  "pdfmake/build/pdfmake" ;  
import   pdfFonts from  "pdfmake/build/vfs_fonts" ;  
pdfMake.vfs = pdfFonts.pdfMake.vfs; 

@Component({
  selector: 'app-affich-lettre',
  templateUrl: './affich-lettre.component.html',
  styleUrls: ['./affich-lettre.component.css']
})
export class AffichLettreComponent implements OnInit {

  public currentEtudiant: any;
  private url: string;
  myimage:string ="assets/images/entetLettre.PNG";

  constructor( private router: Router,private activatedRoute:ActivatedRoute,
    private etudiantService:EtudiantService) { }

  ngOnInit(): void {
    this.url=atob(this.activatedRoute.snapshot.params.numeroEtud);
    this.etudiantService.getAffich(this.url)
    .subscribe(data=>{
      this.currentEtudiant=data;
    },err=>{
      console.log(err);

  } )
   
   
  }

  onAffiEtudiant(value:any){
    this.etudiantService.AffiResource(this.url,value)
    .subscribe(data=>{
      //alert("effectuer")

    },err=>{
      console.log(err);
    })

  }
  generatePDF() {
    let docDefinition = {
      header: 'C#Corner PDF Header' ,
      content: 'Example of PDF generated with Angular and PDFMake for the C#Corner blog'
    };
    pdfMake.createPdf(docDefinition).open();
  }

}
