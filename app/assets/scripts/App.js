var $ = require('jquery');
import Person from './modules/Person';

class Adult extends Person {
  payTaxes(){
    console.log(this.name + " now owes $0 in taxes");
  }
}

var ara = new Person("Ara Kim","Green");
ara.greet();

var lucas = new Adult("Lucas Groenendaal","Yellow");
lucas.greet();
lucas.payTaxes();
