const express = require('express');
const router = express.Router();
const {getServices, getService, createService, updateService, deleteService, uploadDocument, downloadDocument} = require('../controllers/touristicServices.controller');


router.get('/', getServices);

router.get("/:id", getService);

router.post("/", createService);

router.put("/:id", updateService);

router.delete("/:id", deleteService);

router.post("/upload/:id", uploadDocument);
router.get("/download/:id", downloadDocument);



module.exports = router;