const mongoose = require('mongoose')
const Schema = mongoose.Schema //criando esquema

const schema = new Schema({
    // o schema cria um _id antes de tudo por padrão
    title:{
        type: String,
        required: true,
        trim: true //remove os espaços antes e depois da string no título
    },
    slug:{      //Se for uma Cadeira Gamer = cadeira-gamer 
        type: String,
        required: [true, 'O slug é obrigatório'], //com isso é possível deixar essa msg na hora de algum erro
        trim: true,
        index: true,
        unique: true //não pode ter dois produtos com o mesmo slug
    },
    description:{      
        type: String,
        required: true
    },
    price:{      
        type: Number,
        required: true
    },
    active:{      
        type: Boolean,
        required: true,
        default: true
    },
    tags:[{       //tags é como array, permite que seja recuperado por tag facilmente diferente do banco relacional onde precisaria fazer um "iner joyn" na tabela tags
        type: String,
        required: true
    }]
})

/*
a saída ficará assim:
{
    "title":"titulo",
    "description":"exemploaaa",
    "tags":[
        "teste", "123", "pessoa"
    ]
}
*/
module.exports = mongoose.model('Product', schema)

