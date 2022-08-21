const MAIN_URL = "https://api.spoonacular.com/recipes/";
const API_KEY = "5e3b32cfcce1458a8ea0cb13effdad13"; ///52f1014614c940d28129c16f71cff37e ///5e3b32cfcce1458a8ea0cb13effdad13

export function urlGenerate(path, query) {
  if (query) {
    return `${MAIN_URL}${path}?apiKey=${API_KEY}&${query}`;
  }
  return `${MAIN_URL}${path}?apiKey=${API_KEY}`;
}

export function transformationDescription(description) {
  return description.split("<a").splice(0, 1).join();
}

export function getNumberFromPercent(str) {
  const regexp = new RegExp(/^\d{1,3}%$/);
  const result = str.match(regexp);
  if (result) {
    return result[0].replace("%", "");
  }
  return 0;
}

export function getNumberFromPxl(str) {
  const regexp = new RegExp(/^\d+.\d*px$/);
  const result = str.match(regexp);
  if (result) {
    return Number(result[0].replace("px", ""));
  }
  return 0;
}

export function toFixed(num, digits) {
  return Number(num.toFixed(digits));
}
