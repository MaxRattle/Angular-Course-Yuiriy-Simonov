import { Component } from '@angular/core';

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
}
