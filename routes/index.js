//*** ================== ===  ROUTING / Router (Express) ===  ======================= */
import { Router } from 'express';
//** === app === router */
const router = Router();

router.get(`/`, (req, res) => {
  res.render(`index`, { title: `Home | First Website with Node` });
});
router.get(`/about`, (req, res) => {
  res.render(`about`, { title: `About | About Me` });
});
router.get(`/contact`, (req, res) => {
  res.render(`contact`, { title: `Contact | Company Contact` });
});

//** === Export === */
export default router;
