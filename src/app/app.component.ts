import {
  Component,
  ElementRef,
  QueryList,
  TemplateRef,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { ChildComponent } from './components/child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-var-from-angular-course-Yuriy-Simonov';
  user = {
    name: 'Maxim',
    surname: 'Sushkov',
  };
  tooltip = 'Подсказка tooltip для ссылки';

  inlineStyleGreen = {
    width: '50%',
    background: 'green',
  };
  cssClass = 'blue';

  someDate = new Date();

  ageOfUsers = [{ age: 20 }, { age: 27 }, { age: 21 }];
  // отключено для жизненного цикла
  // constructor() {
  //   setTimeout(() => {
  //     this.ageOfUsers.push({ age: 1999 });
  //     this.ageOfUsers.push({ age: -1999 });
  //   }, 3000);
  // }
  newArr = setTimeout(() => {
    this.ageOfUsers = [...this.ageOfUsers, { age: -999 }];
  }, 3000);

  color = 'orange';
  changeColor(newColor: string) {
    this.color = newColor;
  }

  checkCurrentValue(event: Event) {
    const target = event.target as HTMLInputElement;
    console.log('e', target.value);
  }

  parentName: string = 'hello, world!!!';

  setNewName(newName: string) {
    this.parentName = newName;
  }

  toggler: boolean = true;
  str: string = '';
  arr: any[] = ['text', 123, true, ['abc', '369'], NaN];

  obj: any = {
    first: {
      second: {
        third: {
          age: 24,
          name: 'Maxim',
        },
      },
    },
  };
  someTrackByMethod(index: number, item: any) {
    // console.log(1);

    return item;
  }
  colorClass = 'pink';
  colorClassObj = { color: 'pink', background: 'violet' };

  //жизненный цикл
  titleCicle: string = 'Header Cicle';
  nameCicle: string = 'Name Cicle';
  objectCicle = { age: 24 };
  constructor() {
    setTimeout(() => {
      this.titleCicle = 'Changed titleCicle';
      this.nameCicle = 'Changed nameCicle';
      this.objectCicle = { ...this.objectCicle, age: 25 };
    }, 3000);
  }

  titleView: string = 'Header View';
  @ViewChild('paragraph')
  paragraph!: ElementRef<HTMLParagraphElement>;
  @ViewChild('template') template!: TemplateRef<HTMLParagraphElement>;
  @ViewChild(ChildComponent) component!: ChildComponent;
  // @ViewChild(TemplateRef) template!: TemplateRef<HTMLParagraphElement>;
  // @ViewChild(ChildComponent) component!: ChildComponent;

  // стаик задает View вывод без всех проверок // но это бед практис
  // @ViewChild(ChildComponent, { static: true }) component!: ChildComponent;
  // ngOnInit() {
  //   console.log('component ngOnInit', this.component);
  // }

  @ViewChildren('paragraph')
  paragraphChildren!: QueryList<ElementRef<HTMLParagraphElement>>;
  @ViewChildren('template')
  templateChildren!: QueryList<TemplateRef<HTMLParagraphElement>>;
  @ViewChildren(ChildComponent) componentChildren!: QueryList<ChildComponent>;

  ngAfterViewInit() {
    console.log('paragraph', this.paragraph);
    console.log('template', this.template);
    console.log('component', this.component);

    //не стоит менять таким образом DOM
    this.paragraph.nativeElement.textContent = 'new text';
    this.component.childNameView = 'child renamed';

    // ViewChildren
    console.log('paragraphChildren', this.paragraphChildren);
    console.log('templateChildren', this.templateChildren);
    console.log('componentChildren', this.componentChildren);

    //не стоит менять таким образом DOM
    // this.paragraphChildren.nativeElement.textContent = 'new text';
    // this.componentChildren.childNameView = 'children renamed';
  }
}
