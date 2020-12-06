
    // Dados
const proffys = [
    {
        name: "Diego Fernandes", 
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4", 
        whatsapp: "11984197010",
         bio: "Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
         subject: "Química",
         cost: "20",
         weekday: [0], 
         time_from: [720], 
         time_to: [1220]
    },
    {
        name: "Lucas Eduardo", 
        avatar: "https://avatars3.githubusercontent.com/u/66156733?s=460&u=df6bfdf2e1f16765c22a6e6317706b155be58553&v=4", 
        whatsapp: "21999999999",
         bio: "Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
         subject: "Química",
         cost: "20",
         weekday: [1], 
         time_from: [720], 
         time_to: [1220]
    }
]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação Física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
    ]


    //Funcionalidades 
function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStudy(req, res) {
    const filters = req.query
    return res.render("study.html", { proffys, filters, subjects, weekdays })
}

function pageGiveClasses(req, res) {
    return res.render("give-classes.html", {subjects, weekdays})
}

    //Servidor
const express = require('express')
const server = express()


    // configurar nunjucks(Template Engine)

const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

    //Início e configuração do servidor
server
// configurando arquivos estaticos(css, scripts, imagens)
.use(express.static("public"))
// Rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
    //Start do servidor
.listen(5500)