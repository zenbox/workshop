 /** Person Class
  *
  * @version v1.0.0
  * @since 2020-07-27
  * @param {string} n Name of a person
  * @param {string} p Prename of a person
  * @param {string} e Email of a person
  * @returns {Person}
  */
 export class Person {
     constructor(n, p, e) {
         this.name = n; // Use a setter

         this._prename = p;
         this._email = e;

         console.dir(this);
     }

     /** Common move method
      * 
      * @param {string} d 
      */
     move(d = 'west') {
         this._direction = d;
         console.log(`go ${this.direction}`);
     }
     /** Setter for name property
      * @param {string}
      */
     set name(n) {
         if (typeof n === 'string')
             this._name = n;
         else this._name = undefined;
     }

     /** Getter for name property
      * @param none
      */
     get name() {
         return this._name;
     }

     /** Setter for prename property
      * @param {string}
      */
     set prename(n) {
         this._prename = n;
     }

     /** Getter for prename property
      * @param none
      */
     get prename() {
         return this._prename;
     }

     /** Setter for email property
      * @param {string}
      */
     set email(n) {
         this._email = n;
     }

     /** Getter for email property
      * @param none
      */
     get email() {
         return this._email;
     }


     /** Setter for direction property
      * @param {string}
      */
     set direction(d) {
         this._direction = d;
     }

     /** Getter for name property
      * @param none
      */
     get direction() {
         return this._direction;
     }

 }

 // - - - - - - - - - -
 // - - - - - - - - - -
 // - - - - - - - - - -

 /** Male Class as child of Person
  *
  * @version v1.0.0
  * @since 2020-07-28
  * @param {string} n Name of a person
  * @param {string} p Prename of a person
  * @param {string} e Email of a person
  * @returns {Male}
  */
 export class Male extends Person {
     constructor(n, p, e) {
         super(n, p, e);
     }
     /** New drink method
      * 
      * @param {string} d 
      */
     drink(d) {
         console.log(d);
     }
 }

 /** Female Class as child of Person
  *
  * @version v1.0.0
  * @since 2020-07-28
  * @param {string} n Name of a person
  * @param {string} p Prename of a person
  * @param {string} e Email of a person
  * @returns {Female}
  */
 export class Female extends Person {
     constructor(n, p, e) {
         super(n, p, e);
     }

     /** Overwrite move
      * 
      * @param {string} d 
      */
     move(d = 'west') {
         this._direction = d;
         console.log(`female go ${this.direction}`);
     }

     /** New cook method
      * 
      * @param {string} f 
      */
     cook(f) {
         this.move('north');
         console.log(f);
     }
 }