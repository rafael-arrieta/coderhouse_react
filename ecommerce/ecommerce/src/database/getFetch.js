let productos = [
    {id:'01', categoria: 'flexible', nombre: 'Conejo', precio: '350',stock: 20, imagen: 'productos/01_conejo.png'},
    {id:'02', categoria: 'flexible', nombre: 'Delfin', precio: '350',stock: 25, imagen: 'productos/02_delfin.png'},
    {id:'03', categoria: 'flexible', nombre: 'Tiburon', precio: '350',stock: 22, imagen: 'productos/03_tiburon.png'},
    {id:'04', categoria: 'flexible', nombre: 'Gato', precio: '350',stock: 12, imagen: 'productos/04_gato.png'},
]

export const getFetch = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(productos)
        }, 1000); 
    })
}
