// Esta es la clase que usaremos para nuestros libros
class libro {
    constructor(titulo, autor, fecha, genero) {
        this.titulo = titulo;
        this.autor = autor;
        this.fecha = fecha;
        this.genero = genero;
    }
    descripcion(){
        console.log('El libro '+titulo+' de genero '+genero+' fue escrito por '+autor+ ' en el año '+fecha);
    }
    obtAutor(){
        return this.autor;
    }
    obtNombre(){
        return this.titulo;
    }
}

// Los libros se guardaran en un array para tener mejor control
var arrayLibros = [];


// Con este ciclo pediremos exactamente 3 libros
do {
    var titulo = prompt('Titulo del libro');
    var autor = prompt('Nombre del autor');
    var fecha = prompt('Año de publicación');
    var genero = prompt('Genero del libro (generos permitidos: terror, aventura, fantasia)');

    if (titulo != '' && autor != '' && genero == 'aventura' || genero == 'terror' || genero == 'fantasia' && fecha.length == 4 && fecha <= 2021) {
        arrayLibros.push(new libro(titulo, autor, fecha, genero));
    } else {
        alert('Error al registrar libro UnU');
    }
} while (arrayLibros.length<3);

// Al poner esta funcion en la consola se nos mostraran todos los libros que tenemos
function mostrarLibros() {
    console.log('Estos son tus libros, crack');
    console.log(arrayLibros);
}

// Esta funcio solo  nos mostrara a los autores de los libros
function mostrarAutores(){
    console.log('Estos son los autores de los libros: ');
    var autores = [];
    for (var libro of arrayLibros) {
        autores.push(libro.obtAutor());
    }

    // Ese atributo de "sort" se usa para acomodarlos en orden alfabetico
    console.log(autores.sort());
}

// Con esta función se mostrara la descripcion de cada libro
function mostrarDes(){
    var nombreLibro = prompt('¿Que libro quieres ver?');
    for (var libro of arrayLibros) {
        if (libro.obtNombre() == nombreLibro){
            console.log(libro.descripcion());
        }
    }
}





