const { getClient } = require("../utils/mongo");
const { ObjectId } = require("mongodb");

const paymentsCurrencysMap = [
  {
    currency: "Albania Lek",
    abbreviation: "ALL",
    symbol: "Lek",
  },
  {
    currency: "Afghanistan Afghani",
    abbreviation: "AFN",
    symbol: "؋",
  },
  {
    currency: "Argentina Peso",
    abbreviation: "ARS",
    symbol: "$",
  },
  {
    currency: "Aruba Guilder",
    abbreviation: "AWG",
    symbol: "ƒ",
  },
  {
    currency: "Australia Dollar",
    abbreviation: "AUD",
    symbol: "$",
  },
  {
    currency: "Azerbaijan New Manat",
    abbreviation: "AZN",
    symbol: "ман",
  },
  {
    currency: "Bahamas Dollar",
    abbreviation: "BSD",
    symbol: "$",
  },
  {
    currency: "Barbados Dollar",
    abbreviation: "BBD",
    symbol: "$",
  },
  {
    currency: "Belarus Ruble",
    abbreviation: "BYR",
    symbol: "p.",
  },
  {
    currency: "Belize Dollar",
    abbreviation: "BZD",
    symbol: "BZ$",
  },
  {
    currency: "Bermuda Dollar",
    abbreviation: "BMD",
    symbol: "$",
  },
  {
    currency: "Bolivia Boliviano",
    abbreviation: "BOB",
    symbol: "$b",
  },
  {
    currency: "Bosnia and Herzegovina Convertible Marka",
    abbreviation: "BAM",
    symbol: "KM",
  },
  {
    currency: "Botswana Pula",
    abbreviation: "BWP",
    symbol: "P",
  },
  {
    currency: "Bulgaria Lev",
    abbreviation: "BGN",
    symbol: "лв",
  },
  {
    currency: "Brazil Real",
    abbreviation: "BRL",
    symbol: "R$",
  },
  {
    currency: "Brunei Darussalam Dollar",
    abbreviation: "BND",
    symbol: "$",
  },
  {
    currency: "Cambodia Riel",
    abbreviation: "KHR",
    symbol: "៛",
  },
  {
    currency: "Canada Dollar",
    abbreviation: "CAD",
    symbol: "$",
  },
  {
    currency: "Cayman Islands Dollar",
    abbreviation: "KYD",
    symbol: "$",
  },
  {
    currency: "Chile Peso",
    abbreviation: "CLP",
    symbol: "$",
  },
  {
    currency: "China Yuan Renminbi",
    abbreviation: "CNY",
    symbol: "¥",
  },
  {
    currency: "Colombia Peso",
    abbreviation: "COP",
    symbol: "$",
  },
  {
    currency: "Costa Rica Colon",
    abbreviation: "CRC",
    symbol: "₡",
  },
  {
    currency: "Croatia Kuna",
    abbreviation: "HRK",
    symbol: "kn",
  },
  {
    currency: "Cuba Peso",
    abbreviation: "CUP",
    symbol: "₱",
  },
  {
    currency: "Czech Republic Koruna",
    abbreviation: "CZK",
    symbol: "Kč",
  },
  {
    currency: "Denmark Krone",
    abbreviation: "DKK",
    symbol: "kr",
  },
  {
    currency: "Dominican Republic Peso",
    abbreviation: "DOP",
    symbol: "RD$",
  },
  {
    currency: "East Caribbean Dollar",
    abbreviation: "XCD",
    symbol: "$",
  },
  {
    currency: "Egypt Pound",
    abbreviation: "EGP",
    symbol: "£",
  },
  {
    currency: "El Salvador Colon",
    abbreviation: "SVC",
    symbol: "$",
  },
  {
    currency: "Estonia Kroon",
    abbreviation: "EEK",
    symbol: "kr",
  },
  {
    currency: "Euro Member Countries",
    abbreviation: "EUR",
    symbol: "€",
  },
  {
    currency: "Falkland Islands (Malvinas) Pound",
    abbreviation: "FKP",
    symbol: "£",
  },
  {
    currency: "Fiji Dollar",
    abbreviation: "FJD",
    symbol: "$",
  },
  {
    currency: "Ghana Cedis",
    abbreviation: "GHC",
    symbol: "¢",
  },
  {
    currency: "Gibraltar Pound",
    abbreviation: "GIP",
    symbol: "£",
  },
  {
    currency: "Guatemala Quetzal",
    abbreviation: "GTQ",
    symbol: "Q",
  },
  {
    currency: "Guernsey Pound",
    abbreviation: "GGP",
    symbol: "£",
  },
  {
    currency: "Guyana Dollar",
    abbreviation: "GYD",
    symbol: "$",
  },
  {
    currency: "Honduras Lempira",
    abbreviation: "HNL",
    symbol: "L",
  },
  {
    currency: "Hong Kong Dollar",
    abbreviation: "HKD",
    symbol: "$",
  },
  {
    currency: "Hungary Forint",
    abbreviation: "HUF",
    symbol: "Ft",
  },
  {
    currency: "Iceland Krona",
    abbreviation: "ISK",
    symbol: "kr",
  },
  {
    currency: "India Rupee",
    abbreviation: "INR",
    symbol: "",
  },
  {
    currency: "Indonesia Rupiah",
    abbreviation: "IDR",
    symbol: "Rp",
  },
  {
    currency: "Iran Rial",
    abbreviation: "IRR",
    symbol: "﷼",
  },
  {
    currency: "Isle of Man Pound",
    abbreviation: "IMP",
    symbol: "£",
  },
  {
    currency: "Israel Shekel",
    abbreviation: "ILS",
    symbol: "₪",
  },
  {
    currency: "Jamaica Dollar",
    abbreviation: "JMD",
    symbol: "J$",
  },
  {
    currency: "Japan Yen",
    abbreviation: "JPY",
    symbol: "¥",
  },
  {
    currency: "Jersey Pound",
    abbreviation: "JEP",
    symbol: "£",
  },
  {
    currency: "Kazakhstan Tenge",
    abbreviation: "KZT",
    symbol: "лв",
  },
  {
    currency: "Korea (North) Won",
    abbreviation: "KPW",
    symbol: "₩",
  },
  {
    currency: "Korea (South) Won",
    abbreviation: "KRW",
    symbol: "₩",
  },
  {
    currency: "Kyrgyzstan Som",
    abbreviation: "KGS",
    symbol: "лв",
  },
  {
    currency: "Laos Kip",
    abbreviation: "LAK",
    symbol: "₭",
  },
  {
    currency: "Latvia Lat",
    abbreviation: "LVL",
    symbol: "Ls",
  },
  {
    currency: "Lebanon Pound",
    abbreviation: "LBP",
    symbol: "£",
  },
  {
    currency: "Liberia Dollar",
    abbreviation: "LRD",
    symbol: "$",
  },
  {
    currency: "Lithuania Litas",
    abbreviation: "LTL",
    symbol: "Lt",
  },
  {
    currency: "Macedonia Denar",
    abbreviation: "MKD",
    symbol: "ден",
  },
  {
    currency: "Malaysia Ringgit",
    abbreviation: "MYR",
    symbol: "RM",
  },
  {
    currency: "Mauritius Rupee",
    abbreviation: "MUR",
    symbol: "₨",
  },
  {
    currency: "Mexico Peso",
    abbreviation: "MXN",
    symbol: "$",
  },
  {
    currency: "Mongolia Tughrik",
    abbreviation: "MNT",
    symbol: "₮",
  },
  {
    currency: "Mozambique Metical",
    abbreviation: "MZN",
    symbol: "MT",
  },
  {
    currency: "Namibia Dollar",
    abbreviation: "NAD",
    symbol: "$",
  },
  {
    currency: "Nepal Rupee",
    abbreviation: "NPR",
    symbol: "₨",
  },
  {
    currency: "Netherlands Antilles Guilder",
    abbreviation: "ANG",
    symbol: "ƒ",
  },
  {
    currency: "New Zealand Dollar",
    abbreviation: "NZD",
    symbol: "$",
  },
  {
    currency: "Nicaragua Cordoba",
    abbreviation: "NIO",
    symbol: "C$",
  },
  {
    currency: "Nigeria Naira",
    abbreviation: "NGN",
    symbol: "₦",
  },
  {
    currency: "Korea (North) Won",
    abbreviation: "KPW",
    symbol: "₩",
  },
  {
    currency: "Norway Krone",
    abbreviation: "NOK",
    symbol: "kr",
  },
  {
    currency: "Oman Rial",
    abbreviation: "OMR",
    symbol: "﷼",
  },
  {
    currency: "Pakistan Rupee",
    abbreviation: "PKR",
    symbol: "₨",
  },
  {
    currency: "Panama Balboa",
    abbreviation: "PAB",
    symbol: "B/.",
  },
  {
    currency: "Paraguay Guarani",
    abbreviation: "PYG",
    symbol: "Gs",
  },
  {
    currency: "Peru Nuevo Sol",
    abbreviation: "PEN",
    symbol: "S/.",
  },
  {
    currency: "Philippines Peso",
    abbreviation: "PHP",
    symbol: "₱",
  },
  {
    currency: "Poland Zloty",
    abbreviation: "PLN",
    symbol: "zł",
  },
  {
    currency: "Qatar Riyal",
    abbreviation: "QAR",
    symbol: "﷼",
  },
  {
    currency: "Romania New Leu",
    abbreviation: "RON",
    symbol: "lei",
  },
  {
    currency: "Russia Ruble",
    abbreviation: "RUB",
    symbol: "руб",
  },
  {
    currency: "Saint Helena Pound",
    abbreviation: "SHP",
    symbol: "£",
  },
  {
    currency: "Saudi Arabia Riyal",
    abbreviation: "SAR",
    symbol: "﷼",
  },
  {
    currency: "Serbia Dinar",
    abbreviation: "RSD",
    symbol: "Дин.",
  },
  {
    currency: "Seychelles Rupee",
    abbreviation: "SCR",
    symbol: "₨",
  },
  {
    currency: "Singapore Dollar",
    abbreviation: "SGD",
    symbol: "$",
  },
  {
    currency: "Solomon Islands Dollar",
    abbreviation: "SBD",
    symbol: "$",
  },
  {
    currency: "Somalia Shilling",
    abbreviation: "SOS",
    symbol: "S",
  },
  {
    currency: "South Africa Rand",
    abbreviation: "ZAR",
    symbol: "R",
  },
  {
    currency: "Korea (South) Won",
    abbreviation: "KRW",
    symbol: "₩",
  },
  {
    currency: "Sri Lanka Rupee",
    abbreviation: "LKR",
    symbol: "₨",
  },
  {
    currency: "Sweden Krona",
    abbreviation: "SEK",
    symbol: "kr",
  },
  {
    currency: "Switzerland Franc",
    abbreviation: "CHF",
    symbol: "CHF",
  },
  {
    currency: "Suriname Dollar",
    abbreviation: "SRD",
    symbol: "$",
  },
  {
    currency: "Syria Pound",
    abbreviation: "SYP",
    symbol: "£",
  },
  {
    currency: "Taiwan New Dollar",
    abbreviation: "TWD",
    symbol: "NT$",
  },
  {
    currency: "Thailand Baht",
    abbreviation: "THB",
    symbol: "฿",
  },
  {
    currency: "Trinidad and Tobago Dollar",
    abbreviation: "TTD",
    symbol: "TT$",
  },
  {
    currency: "Turkey Lira",
    abbreviation: "TRY",
    symbol: "",
  },
  {
    currency: "Turkey Lira",
    abbreviation: "TRL",
    symbol: "₤",
  },
  {
    currency: "Tuvalu Dollar",
    abbreviation: "TVD",
    symbol: "$",
  },
  {
    currency: "Ukraine Hryvna",
    abbreviation: "UAH",
    symbol: "₴",
  },
  {
    currency: "United Kingdom Pound",
    abbreviation: "GBP",
    symbol: "£",
  },
  {
    currency: "United States Dollar",
    abbreviation: "USD",
    symbol: "$",
  },
  {
    currency: "Uruguay Peso",
    abbreviation: "UYU",
    symbol: "$U",
  },
  {
    currency: "Uzbekistan Som",
    abbreviation: "UZS",
    symbol: "лв",
  },
  {
    currency: "Venezuela Bolivar",
    abbreviation: "VEF",
    symbol: "Bs",
  },
  {
    currency: "Viet Nam Dong",
    abbreviation: "VND",
    symbol: "₫",
  },
  {
    currency: "Yemen Rial",
    abbreviation: "YER",
    symbol: "﷼",
  },
  {
    currency: "Zimbabwe Dollar",
    abbreviation: "ZWD",
    symbol: "Z$",
  },
];

async function createCompany(companyData) {
  const client = await getClient();

  try {
    const db = client.db("printability");
    const col = db.collection("companies");
    //check if the company already exists
    const company = await col.findOne({ name: companyData.name });
    if (company) {
      throw new Error("Company already exists)");
    }
    // Add timestamp to the companyData that humans can read
    companyData.created_at = new Date();
    const result = await col.insertOne(companyData);
    return result.insertedId;
  } catch (error) {
    console.error("Error creating company:", error);
    throw error;
  }
}

async function getCompany(companyId) {
  const client = await getClient();

  try {
    const db = client.db("printability");
    const col = db.collection("companies");
    const company = await col.findOne({ _id: new ObjectId(companyId) });
    return company;
  } catch (error) {
    console.error("Error retrieving company:", error);
    throw error;
  }
}

async function getAllCompanies() {
  const client = await getClient();

  try {
    const db = client.db("printability");
    const col = db.collection("companies");
    const companies = await col.find().toArray();
    return companies;
  } catch (error) {
    console.error("Error retrieving companies:", error);
    throw error;
  }
}

async function getCompanyCurrency(companyId) {
  const client = await getClient();

  try {
    const db = client.db("printability");
    const col = db.collection("companies");
    const company = await col.findOne({ _id: new ObjectId(companyId) });
    const symbol = paymentsCurrencysMap.find(
      (item) => item.abbreviation === company.paymentsCurrency
    ).symbol;

    return symbol;
  } catch (error) {
    console.error("Error retrieving company currency:", error);
    throw error;
  }
}

async function updateCompany(details) {
  const client = await getClient();

  try {
    const db = client.db("printability");
    const col = db.collection("companies");
    const result = await col.updateOne(
      { _id: new ObjectId(details.companyId) },
      { $set: details }
    );
    return result.modifiedCount;
  } catch (error) {
    console.error("Error updating company:", error);
    throw error;
  }
}

module.exports = {
  createCompany,
  getCompany,
  getAllCompanies,
  getCompanyCurrency,
  updateCompany,
};
