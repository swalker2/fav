import {Router} from "express";
import FeedsController from '../controllers/FeedsController'
import RssReaderController from '../controllers/RssReaderController'

const router = Router()

// feeds CRUD
router.post('/feeds', FeedsController.store)
router.get('/feeds', FeedsController.index)
router.get('/feeds/:id', FeedsController.show)
router.put('/feeds/:id', FeedsController.update)
router.delete('/feeds/:id', FeedsController.destroy)

// RSS Reader
router.get('/feeds/:id/list', RssReaderController.index)

export default router
