/**
 * GET /feed
 * Feed page.
 */
exports.feed = (req, res) => {
  if (!req.isAuthenticated()) {
    return res.redirect('/');
  }
  res.render('account/feed', {
    title: 'Feed'
  });
};
