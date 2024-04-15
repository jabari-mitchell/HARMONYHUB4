"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Home', page: 'Home', displayName: '' });
});
router.get('/portfolio', function (req, res, next) {
    res.render('index', { title: 'Portfolio', page: 'portfolio', displayName: '' });
});
router.get('/services', function (req, res, next) {
    res.render('index', { title: 'services', page: 'services', displayName: '' });
});
router.get('/team', function (req, res, next) {
    res.render('index', { title: 'team', page: 'team', displayName: '' });
});
router.get('/blog', function (req, res, next) {
    res.render('index', { title: 'blog', page: 'blog', displayName: '' });
});
router.get('/Careers', function (req, res, next) {
    res.render('index', { title: 'Careers', page: 'Careers', displayName: '' });
});
router.get('/Events', function (req, res, next) {
    res.render('index', { title: 'Events', page: 'Events', displayName: '' });
});
router.get('/EventsList', function (req, res, next) {
    res.render('index', { title: 'EventList', page: 'EventList', displayName: '' });
});
router.get('/feedback', function (req, res, next) {
    res.render('index', { title: 'feedback', page: 'feedback', displayName: '' });
});
router.get('/feedbacklist', function (req, res, next) {
    res.render('index', { title: 'feedbacklist', page: 'feedbacklist', displayName: '' });
});
router.get('/EventPlanning', function (req, res, next) {
    res.render('index', { title: 'EventPlanning', page: 'EventPlanning', displayName: '' });
});
router.get('/Gallery', function (req, res, next) {
    res.render('index', { title: 'Gallery', page: 'Gallery', displayName: '' });
});
router.get('/Humour', function (req, res, next) {
    res.render('index', { title: 'Humour', page: 'Humour', displayName: '' });
});
router.get('/Statistics', function (req, res, next) {
    res.render('index', { title: 'Statistics', page: 'Statistics', displayName: '' });
});
router.get('/login', function (req, res, next) {
    res.render('index', { title: 'login', page: 'login', displayName: '' });
});
router.get('/register', function (req, res, next) {
    res.render('index', { title: 'register', page: 'register', displayName: '' });
});
exports.default = router;
//# sourceMappingURL=index.js.map