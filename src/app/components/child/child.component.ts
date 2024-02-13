import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent {
  @Input('childColor') childColorProps!: string;
  @Input() name!: string;

  @Output() nameChange = new EventEmitter<string>();
  changeName() {
    this.nameChange.emit('This name created by child component');
  }

  //жизненный цикл
  // если нет надобности установки зависимостей, то не нужно создавать конструктор
  // name: string;
  // constructor(private someService: SomeService) {
  //   this.name = 'String';
  // }

  @Input() title!: string;
  // @Input() name!: string;
  @Input() obj!: any;

  text: string = 'Any Text Example';
  constructor() {
    console.log(
      '%c Component app-child was created succesfull!',
      'background: darkgreen'
    );
  }
  //вызывает когда есть изменения input
  ngOnChanges(changes: SimpleChanges): void {
    console.log('%c ngOnChanges', 'color: aqua');
    console.log('changes', changes);
  }

  ngOnInit(): void {
    console.log('%c ngOnInit', 'color:orange');
  }

  ngDoCheck(): void {
    console.log('%c ngDoCheck', 'color: pink');
  }

  ngAfterContentInit(): void {
    console.log('%c ngAfterContentInit', 'color: yellow');
  }

  ngAfterViewInit(): void {
    console.log('%c ngAfterViewInit', 'color: purple');
  }

  ngAfterViewChecked(): void {
    console.log('%c ngAfterViewChecked', 'color: chocolate');
  }

  ngOnDestroy(): void {
    console.log('%c ngOnDestroy', 'color: red');
  }
}
