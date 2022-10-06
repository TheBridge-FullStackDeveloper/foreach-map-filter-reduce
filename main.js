const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 }, //company
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 }, //company.name
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//*foreach
// forEach pintar el nombre de las companies
// companies.forEach(company => console.log(company.name));

//* map

// Crear Array con los nombres de las companies
// const companiesName = companies.map(company => company.name);
// console.log(companiesName)
// Crear Array con los nombres y categorias de las companies
const companiesNameAndCategories = companies.map((company) => {
  const obj = {
    name: company.name,
    category: company.category,
  };
  return obj;
});
// console.log(companiesNameAndCategories);
//*filter

// Pintar las edades que cumplan la mayoría de edad
const mayoresEdad = ages.filter(age => age >=18)
// console.log(mayoresEdad)
//pintar las companies que tienen la categoría Retail
const retailCompanies = companies.filter(company => company.category == "Retail")
// console.log(retailCompanies)
// Pintar las companies que empezarón en los 80 o para arriba
const companies80 = companies.filter(company => company.start >= 1980 )
// const companiesMix = companies.filter(company => company.start >= 1990 && company.category == "Retail")

console.log(companies80)
//* reduce

//suma todas las edades

const sum = ages.reduce((a,b)=> a+b)
console.log(sum)
