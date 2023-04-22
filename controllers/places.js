
const router = require('express').Router()
const places = require('../models/placesArray.js')   

router.get('/', (req, res) => {
    res.render('places/index', {places})
})

router.get('/new', (req, res) => {
    res.render('places/new')
})

router.get('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    res.render('places/show', { place: places[id], id })
  }
})



router.post('/', (req, res) => {
    if(!req.body.pic){
      //default pic if one is not provided
      req.body.pic = 'http://placekitten.com/400/400'
    }
    if(!req.body.city){
      //default city if one is not provided
      req.body.city = ''
    }
    if(!req.body.state){
      //default state if one is not provided
      req.body.state = 'USA'
    }
    places.push(req.body)
    res.redirect('/places')
})

module.exports = router
