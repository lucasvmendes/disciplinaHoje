const request = require("supertest")
const server = require('../server.js')

describe("Método GET", () => {
    it('testing endpoint get', async done => {
    request(server.app)
        .get("/")
        .expect(200)
        .end(function(err, res) {
            if (err) throw err
            done()
        })
    })
})

describe("Método POST", () => {
    it ("testing endpoint post", async done => {
        request(server.app)
            .get("/post")
            .expect(200)
            .end(function(err, res) {
                if (err) throw err
                done()
            })
    })
    dadosCriacao = {
        nomeMateria: "materiaTeste",
        diaMateria: "Segunda-Feira"
    }
    it ("returns the correct data tested", async done => {
        request(server.app)
            .post("/post")
            .send('materia=' + dadosCriacao.nomeMateria)
            .send('hora=' + dadosCriacao.diaMateria)
            .expect('Content-Type','application/json; charset=utf-8')
            .expect((res) => { res = res })
            .expect(200, {materia: dadosCriacao.nomeMateria, hora: dadosCriacao.diaMateria})
            .end(function(err, res) {
                if (err) return done(err)
                return done()
            })
    })
})

describe("Método DELETE", () => {
    dadosCriacao = {
        nomeMateria: "materiaTeste",
        diaMateria: "Segunda-Feira"
    }
    it('should delete a grade e return the correct message', async done => {
    let materiaTesteDel = new server.Materias({materia: dadosCriacao.nomeMateria, hora: dadosCriacao.diaMateria})
    materiaTesteDel.save((err, materiaTesteDel) => {
        request(server.app)
            .get("/del/" + materiaTesteDel.id)
            .expect((res) => { res = res })
            .expect(200, {message: 'Disciplina deletada!'})
            .end(function(err, res) {
                if (err) return done(err)
                return done()
            })
    })
    })
})