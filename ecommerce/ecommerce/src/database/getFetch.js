let productos = [
    {id:'01', categoria:'flexible', nombre: 'Conejo', precio: '350',stock: 20, imagen: '/productos/01_conejo.png'},
    {id:'02', categoria:'flexible', nombre: 'Delfin', precio: '350',stock: 25, imagen: '/productos/02_delfin.png'},
    {id:'03', categoria:'flexible', nombre: 'Tiburon', precio: '350',stock: 22, imagen: '/productos/03_tiburon.png'},
    {id:'04', categoria:'flexible', nombre: 'Gato', precio: '350',stock: 12, imagen: '/productos/04_gato.png'},
    {id:'05', categoria:'flexible', nombre: 'Cangrejo', precio: '500',stock: 34, imagen: '/productos/05_cangrejo.png'},
    {id:'04', categoria:'flexible', nombre: 'Gato', precio: '350',stock: 12, imagen: '/productos/04_gato.png'},
    {id:'22', categoria:'encastrable', nombre: 'Mariposa', precio: '900',stock: 23, imagen: '/productos/22_mariposa.png'},
    {id:'23', categoria:'encastrable', nombre: 'Araña', precio: '900',stock: 12, imagen: '/productos/23_araña2.png'},
]

export const getFetch = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(id){
                resolve(productos.Find(producto=>producto.id==id))
            }else{
                resolve(productos)  
            }
        }, 300); 
    })
}
