const router = require('express').Router(),
  { isAdmin } = require('../../middleware/authorization/'),
  {
    getCurrentUser,
    updateCurrentUser,
    logoutUser,
    logoutAllDevices,
    updatePassword,
    fetchAllUsers
  } = require('../../controllers/users');

router.get('/me', getCurrentUser);
router.patch('/me', updateCurrentUser);
router.post('/logout', logoutUser);
router.post('/logoutAll', logoutAllDevices);
router.put('/password', updatePassword);
router.get('/all', isAdmin(), fetchAllUsers);

module.exports = router;