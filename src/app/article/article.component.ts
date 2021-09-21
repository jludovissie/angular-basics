import{Component} from '@angular/core'

@Component({
  selector: 'app-article' ,
  templateUrl: './article.component.html' ,

})

export class ArticleComponent {
  nameId= 'Jordan' ;
  ageId= 29 ;
  courseId= 'Angular' ;
  isTechRelated=true;
  

  toggleTechRelated(){
    this.isTechRelated= !this.isTechRelated
  }
}
