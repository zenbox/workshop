let result = db.on('error', error => console.log('lala') );

let result = db.on('error', (error) => {
    console.log('lili')
});


if (true) console.log('lala'); console.log('lili')

if (true) {
    console.log('lala');
    console.log('lili')
}