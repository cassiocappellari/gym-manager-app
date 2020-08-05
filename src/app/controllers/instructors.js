const {age, date} = require('../../lib/useful')
Intl = require('intl')

module.exports = {
    index(req, res){
        return res.render('instructors/index')
    },
    create(req, res){
        return res.render('instructors/create')
    },
    post(req, res){
        const keys = Object.keys(req.body)

        for(let key of keys) {
            if(req.body[key] == '') {
               return res.send('Please, fill all the fields!')
            }
        }
        
        let {avatar_url, name, birth, gender, services} = req.body
    
        return
    },
    show(req, res){
        return
    },
    edit(req, res){
        return
    },
    put(req, res){
        const keys = Object.keys(req.body)

        for(let key of keys) {
            if(req.body[key] == '') {
               return res.send('Please, fill all the fields!')
            }
        }
        
        let {avatar_url, name, birth, gender, services} = req.body
        
        return
    },
    delete(req, res){
        return
    }
}