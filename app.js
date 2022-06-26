let eu = { 
   nome: "Leno",
    idade: 25,
     estado: "piaui"}
console.log(eu)

eu.telefone = 89994348000
console.log(eu)

delete eu.idade
console.log(eu)

let cadastro = [
    { nome:'luiz',
        idade:22,
        telefone:89772672489383,
            amigos:['vitoria','luiza','paulinha','marcelo']
    },
    {nome: 'rafael',
        idade:22,
        telefone:123123123123,
            amigos: ['leno','rafael','marcos','getulio'],

    },
    {nome: 'Carlos',
        idade:23,
        telefone:123123123123,
            amigos:['mayara','marilia', 'natalia','Luiza'],

    },
    {nome: 'joão',
        idade:20,
        telefone:1324245345,
            amigos:['debora','robert','rafael','leandro'],

    },
    {nome:'stef',
        idade:25,
        telefone:1231231263123,
            amigos:['aline','jordan','helio','ryan'],

    },
]
console.log(cadastro[0].amigos[0])
console.log(cadastro[1].amigos[0])
console.log(cadastro[2].amigos[0])
console.log(cadastro[3].amigos[0])
console.log(cadastro[4].amigos[0])