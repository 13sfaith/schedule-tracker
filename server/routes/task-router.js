const express = require('express');

const taskCtrl = require('../controllers/task-ctrl.js');

const router = express.Router();

router.post('/task', taskCtrl.createTask);
router.put('/task/:id', taskCtrl.updateTask);
router.delete('/task/:id', taskCtrl.deleteTask);
router.get('/task/:id', taskCtrl.getTaskById);
router.get('/task', taskCtrl.getTasks);

module.exports = router;
