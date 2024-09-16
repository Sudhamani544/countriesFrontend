import React from "react";

const DataTable = ({ countries }) => {
  console.log("countries", countries);
  return (
    <>
      <table className="border-collapse border border-slate-400 ...">
        <thead>
          <tr>
            <th className="border border-slate-300 ...">Flag</th>
            <th className="border border-slate-300 ...">Name</th>
            <th className="border border-slate-300 ...">Languages</th>
            <th className="border border-slate-300 ...">Population</th>
            <th className="border border-slate-300 ...">Region</th>
          </tr>
        </thead>
        {countries.map((country) => (
          <tbody>
            <tr>
              <td className="border border-slate-300 ...">{country.flag}</td>
              <td className="border border-slate-300 ...">
                {country.name.common}
              </td>
              <td className="border border-slate-300 ...">
                {country.languages &&
                  Object.keys(country.languages).map((language) => (
                    <ul class="list-disc">
                      <li>{country.languages[language]}</li>
                    </ul>
                  ))}
              </td>
              <td className="border border-slate-300 ...">{country.flag}</td>
              <td className="border border-slate-300 ...">{country.flag}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </>
  );
};

export default DataTable;
