import { Component, OnInit, OnChanges, AfterViewInit, ViewChild, ViewContainerRef, Input, Compiler, ComponentFactoryResolver } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnChanges, AfterViewInit {
  public comp;
  public factoryClass;
  public containerRef;

  @ViewChild('vc', { read: ViewContainerRef }) _container: ViewContainerRef;
  @Input('properties') public properties;
  constructor(private _compiler: Compiler,
    private _resolver: ComponentFactoryResolver) { }

  ngOnChanges() {
    // this.properties=this.property;
    console.log('properties', this.properties);
  }

 
  public ngAfterViewInit() {
    setTimeout(() => {
      const factories = Array.from(this._resolver['_factories'].keys());
      factories.forEach((fa, i) => {
        const fc: any = factories[i];
        if (fc.name === this.properties.name) {
          this.factoryClass = fa;
        }
      });
      console.log("factoryClass",this.factoryClass);
      
      const cmpFactory = this._resolver.resolveComponentFactory(this.factoryClass);
      this.containerRef = this._container.createComponent(cmpFactory);
    }, 1);
  }
}