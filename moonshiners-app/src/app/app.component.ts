import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('fullpageRef') fp_directive: ElementRef;
  config;
  fullpage_api: any;



  constructor(private renderer: Renderer2) {



    // add to anchors if you want more buttons at top
    this.config = {
      // licenseKey: 'YOUR LICENSE KEY HERE', no licence required for creating an open source application under a license compatible with the GNU GPL license v3
      anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage','lastPage'],
      menu: '#menu',
      navigation: true,
      autoScrolling: false,
      scrollOverflow:true,
      // sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],

      // events callback
      afterLoad: (origin: any, destination: any, direction: any) => {
        // console.log(destination);
      },
      afterRender: () => {
        // console.log('afterRender');
      },
      afterResize: (width: any, height: any) => {
        // console.log('afterResize' + width + ' ' + height);
      },
      afterSlideLoad: (section: any, origin: any, destination: any, direction: any) => {
        // console.log(destination);
      }
    };
  }

  ngOnInit() {
  }

  getRef(fullPageRef: any) {
    this.fullpage_api = fullPageRef;
  }

}

// //adds  section
// addSection() {
//   // change background color
//   this.config['sectionsColor'] = Array(6).fill(0).map(x => this.randomColor());

//   // creating the section div
//   const section = this.renderer.createElement('div');
//   this.renderer.addClass(section, 'section');
//   this.renderer.setProperty(section, 'innerHTML', '<h3>New Section</h3>');
//   // adding section
//   this.renderer.appendChild(this.fp_directive.nativeElement, section);

//   this.fullpage_api.build();
// }

// //removes last section
// removeLast() {
//   const lastSection = this.fp_directive.nativeElement.lastChild;

//   if (lastSection.isEqualNode(this.fullpage_api.getActiveSection().item)) {
//     this.fullpage_api.moveSectionUp();
//   }
//   lastSection.remove();

//   this.fullpage_api.build();
// }
// // randomColor
// randomColor() {
//   return '#' + Math.random().toString(16).slice(-3);
// }
