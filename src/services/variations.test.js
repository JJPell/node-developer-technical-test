/* eslint-disable no-undef */
const { getVariations } = require('./variations');

describe('Services - variations - getVariations()', () => {
  const caterpieVariations = {
    name: 'caterpie',
    variations: [
      {
        name: 'metapod',
        variations: [
          {
            name: 'butterfree',
            variations: [],
          },
        ],
      },
    ],
  };

  it('Should return variations if the pokemon "caterpie" is provided', async () => {
    expect(await getVariations('caterpie')).toEqual(caterpieVariations);
  });

  it('Should return (the same) variations if the pokemon "metapod" is provided', async () => {
    expect(await getVariations('metapod')).toEqual(caterpieVariations);
  });

  it('Should return undefined if no pokemon name is provided', async () => {
    expect(await getVariations()).toEqual(undefined);
  });

  it('Should return undefined if an invalid pokemon name is provided', async () => {
    expect(await getVariations('ash ketchum')).toEqual(undefined);
  });
});
