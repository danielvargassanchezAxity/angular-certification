import { AfterContentInit, AfterViewInit, Component, ContentChild, OnInit, ViewChild} from '@angular/core';
import { ReferenceTemplatesComponent } from './components/reference-templates/reference-templates.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterContentInit, AfterViewInit {
  @ViewChild('contentChild') contentChild!: ReferenceTemplatesComponent;
  title = 'contentProjection';
  value = 0
  ngOnInit(): void {
    // this.value = 0;
  }
  ngAfterContentInit(): void {
    // console.log(this.contentChild)
  }
  ngAfterViewInit(): void {
    // this.value = this.contentChild.value;
    // console.log(this.contentChild)
  }
}
