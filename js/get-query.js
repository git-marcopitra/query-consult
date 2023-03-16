const getMockData = () =>
  new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        const JSObject = [
          {
            name: "Marco",
            gender: "Male",
            "has relationship": true,
          },
          {
            name: "Maria",
            gender: "Female",
            "has relationship": false,
          },
        ];

        resolve(JSON.stringify(JSObject));
      }, Math.random() * 3500 + 1500);
    } catch (e) {
      reject(e);
    }
  });

const renderTable = (plainObjectList, tableElement) => {
  document.querySelector("#load").remove();
  const headings = Object.keys(plainObjectList[0]);

  tableElement.innerHTML = `
    <thead>
      <tr>
        ${headings
          .map(
            (heading) =>
              `<th
                in-text-transform="capitalize"
                in-padding="1rem 2rem"
                in-background="#282828"
                in-color="#fff"
              >
                ${heading}
              </th>`
          )
          .join("")}
      </tr>
    </thead>
    <tbody>
      ${plainObjectList
        .map(
          (plainObject) =>
            `<tr>${headings
              .map(
                (heading) =>
                  `<td
                    in-padding="1rem 2rem"
                    in-border-bottom="1px solid #282828"
                  >
                    ${plainObject[heading]}
                  </td>`
              )
              .join("")}</tr>`
        )
        .join("")}
    </tbody>
  `;
};

// TODO: Apply all api logic here
const submitConsult = async () => {
  const queryInput = document.querySelector("#query");
  const table = document.querySelector("table");

  table.innerHTML = "";

  if (!queryInput) return;

  const query = queryInput.value;

  if (!query) return;

  table.insertAdjacentHTML("beforebegin", "<span id='load'>loading...</span>");
  // TODO: Remove the following case
  if (query === "SELECT * FROM main_table") {
    const data = JSON.parse(await getMockData());
    renderTable(data, table);
  }

  // TODO: Add the real logic here
};
