import { Request, Response, NextFunction, Router } from 'express';
const router = Router();

/* GET home page. */
router.get('/', function(req: Request, res: Response, next: NextFunction) {
  res.render('index', { title: 'Home',page: 'Home', displayName:'' });
});

/* GET home page. */
router.get('/portfolio', function(req: Request, res: Response, next: NextFunction) {
  res.render('index', { title: 'Portfolio',page: 'portfolio', displayName:'' });
});
/* GET home page. */
router.get('/services', function(req: Request, res: Response, next: NextFunction) {
  res.render('index', { title: 'services',page: 'services', displayName:'' });
});

router.get('/team', function(req: Request, res: Response, next: NextFunction) {
  res.render('index', { title: 'team',page: 'team', displayName:'' });
});

router.get('/blog', function(req: Request, res: Response, next: NextFunction) {
  res.render('index', { title: 'blog',page: 'blog', displayName:'' });
});

router.get('/Careers', function(req: Request, res: Response, next: NextFunction) {
  res.render('index', { title: 'Careers',page: 'Careers', displayName:'' });
});

router.get('/Events', function(req: Request, res: Response, next: NextFunction) {
  res.render('index', { title: 'Events',page: 'Events', displayName:'' });
});

router.get('/EventsList', function(req: Request, res: Response, next: NextFunction) {
  res.render('index', { title: 'EventList',page: 'EventList', displayName:'' });
});

router.get('/feedback', function(req: Request, res: Response, next: NextFunction) {
  res.render('index', { title: 'feedback',page: 'feedback', displayName:'' });
});

router.get('/feedbacklist', function(req: Request, res: Response, next: NextFunction) {
  res.render('index', { title: 'feedbacklist',page: 'feedbacklist', displayName:'' });
});

router.get('/EventPlanning', function(req: Request, res: Response, next: NextFunction) {
  res.render('index', { title: 'EventPlanning',page: 'EventPlanning', displayName:'' });
});

router.get('/Gallery', function(req: Request, res: Response, next: NextFunction) {
  res.render('index', { title: 'Gallery',page: 'Gallery', displayName:'' });
});

router.get('/Humour', function(req: Request, res: Response, next: NextFunction) {
  res.render('index', { title: 'Humour',page: 'Humour', displayName:'' });
});


router.get('/Statistics', function(req: Request, res: Response, next: NextFunction) {
  res.render('index', { title: 'Statistics',page: 'Statistics', displayName:'' });
});

router.get('/login', function(req: Request, res: Response, next: NextFunction) {
  res.render('index', { title: 'login',page: 'login', displayName:'' });
});

router.get('/register', function(req: Request, res: Response, next: NextFunction) {
  res.render('index', { title: 'register',page: 'register', displayName:'' });
});


export default router;
