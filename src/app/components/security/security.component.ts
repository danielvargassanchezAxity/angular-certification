import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss']
})
export class SecurityComponent implements OnInit {

  htmlSnippet = 'Template <script>alert("0wned")</script> <b>Syntax</b>';
  dangerousUrl: any;
  trustedUrl: any;
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.dangerousUrl = 'javascript:alert("Hi there")';
    this.trustedUrl = this.sanitizer.bypassSecurityTrustUrl(this.dangerousUrl);
  }

}
