// abekim, Anik188, sicknick323, testtest123, Sagobunny, baltuntas3

function getMissingIngredients(recipe, added) {
  const final = {};

  let coefficient = 1;

  if (Object.keys(added).length === 0) {
    return recipe;
  }

  for (let item in recipe) {
    if (item in added) {
     let division = Math.ceil(added[item] / recipe[item]);
      coefficient = division > coefficient ? division : coefficient;
    }
  }
  for (let item in recipe) {
    if (!(item in added)) final[item] = recipe[item] * coefficient;
    if (recipe[item] * coefficient - added[item])
      final[item] = recipe[item] * coefficient - added[item];
  }
  console.log(final);
  return final;
}

var recipe = { flour: 200, eggs: 1, sugar: 100 };

getMissingIngredients(recipe, { flour: 50, sugar: 150 });

getMissingIngredients(recipe, { flour: 50, eggs: 1 }); // must return {flour: 150, sugar: 100}
getMissingIngredients(recipe, {}); // must return {flour: 200, eggs: 1, sugar: 100}

getMissingIngredients(recipe, { flour: 500, sugar: 200 }); // must return {flour: 100, eggs: 3, sugar: 100}
