let productos = [
    {id:'01', categoria:'flexible', nombre: 'Conejo', precio: '350',stock: 20, imagen: '/productos/01_conejo.png'},
    {id:'02', categoria:'flexible', nombre: 'Delfin', precio: '500',stock: 25, imagen: '/productos/02_delfin.png'},
    {id:'03', categoria:'flexible', nombre: 'Tiburon', precio: '350',stock: 22, imagen: '/productos/03_tiburon.png'},
    {id:'04', categoria:'flexible', nombre: 'Gato', precio: '350',stock: 18, imagen: '/productos/04_gato.png'},
    {id:'05', categoria:'flexible', nombre: 'Cangrejo', precio: '500',stock: 34, imagen: '/productos/05_cangrejo.png'},
    {id:'06', categoria:'flexible', nombre: 'Rana', precio: '450',stock: 24, imagen: '/productos/06_sapo.png'},
    {id:'07', categoria:'flexible', nombre: 'Hormiga', precio: '550',stock: 12, imagen: '/productos/07_hormiga.png'},
    {id:'08', categoria:'flexible', nombre: 'Escorpion', precio: '450',stock: 12, imagen: '/productos/08_escorpion.png'},
    {id:'10', categoria:'flexible', nombre: 'Pez', precio: '500',stock: 16, imagen: '/productos/10_pez.png'},
    {id:'11', categoria:'flexible', nombre: 'Estrella de mar', precio: '350',stock: 25, imagen: '/productos/11_estrella.png'},


    {id:'12', categoria:'rompecabeza', nombre: 'Tiranosaurio Rex', precio: '400',stock: 28, imagen: '/productos/12_tiranosaurio.png'},
    {id:'13', categoria:'rompecabeza', nombre: 'Cuello Largo', precio: '400',stock: 19, imagen: '/productos/13_cuellolargo.png'},
    {id:'14', categoria:'rompecabeza', nombre: 'Terodactilo', precio: '400',stock: 13, imagen: '/productos/14_terodactilo.png'},
    {id:'16', categoria:'rompecabeza', nombre: 'Parasaurolofus', precio: '400',stock: 21, imagen: '/productos/16_parasaurolofus.png'},
    {id:'17', categoria:'rompecabeza', nombre: 'Estegosaurio', precio: '400',stock: 24, imagen: '/productos/17_estegosaurio.png'},
    
    {id:'18', categoria:'encastrable', nombre: 'Pez', precio: '400',stock: 32, imagen: '/productos/18_pez2.png'},
    {id:'19', categoria:'encastrable', nombre: 'Estegosaurio', precio: '750',stock: 45, imagen: '/productos/19_estegosaurio2.png'},
    {id:'20', categoria:'encastrable', nombre: 'Hormiga', precio: '1010',stock: 12, imagen: '/productos/20_hormiga.png'},
    {id:'21', categoria:'encastrable', nombre: 'Dientes de sable', precio: '850',stock: 14, imagen: '/productos/21_dientesdesable.png'},
    {id:'22', categoria:'encastrable', nombre: 'Mariposa', precio: '900',stock: 23, imagen: '/productos/22_mariposa.png'},
    {id:'23', categoria:'encastrable', nombre: 'Araña', precio: '900',stock: 12, imagen: '/productos/23_araña2.png'},
]

export const getFetch = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(id){
                resolve(productos.find(producto=>producto.id===id))
            }else{
                resolve(productos)  
            }
        }, 1000); 
    })
}
