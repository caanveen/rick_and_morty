const {Router} = require ("express")
const getChatById = require("../controllers/getCharById");
const login = require("../controllers/loginController");
const { postFav, deleteFav } = require("../controllers/handleFavorites");


const router = Router();

router.get("/character/:id", getChatById);
router.get("/login", login);
router.post("/fav", postFav);
router.delete("/fav/:id", deleteFav);

module.exports = router;