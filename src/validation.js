import { map, compose, sequence, mergeWithKey } from "ramda";
import Result from "folktale/result";

// Folktale versions of algebraic Either.Right and Either.Left
const { Ok, Error } = Result;

const makePredicate = ([predFn, e]) => a => (predFn(a) ? Ok(a) : Error(e));

const makePredicates = map(makePredicate);

const runPredicates = ([input, validations]) => {
  console.log(input, validations);
  return map(predFn => predFn(input), makePredicates(validations));
}

const validate = map(
  compose(
    sequence(Result.of),
    runPredicates
  )
);

const makeValidationObject = mergeWithKey((k, l, r) => [l, r]);

/* ----------------------- exportables below ----------------------- */

export const getErrors = compose(
  validate,
  makeValidationObject
);

export const displayError = result =>
  result.cata({
    Ok: a => null,
    Error: errorMsg => errorMsg
  });
