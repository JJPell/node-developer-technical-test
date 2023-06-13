const variationsService = require('../services/variations');

async function get(req, res) {
  try {
    const variations = await variationsService.getVariations(req.params.pokemon);

    if (!variations) {
      return res.sendStatus(404);
    }

    return res.json(variations);
  } catch (err) {
    console.error(err);
    return res.sendStatus(500);
  }
}

module.exports = {
  get,
};
