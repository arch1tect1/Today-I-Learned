## Today I Learned Web Application

#### In this project I showed my skills in Front-End development.

<img src="/assets/images/application.png">

### Code sample below
#### Load data from Supabase
```javascript
loadFacts();

async function loadFacts() {
  const res = await fetch(
    "https://ihfbixlasyxinwhlkizu.supabase.co/rest/v1/facts",
    {
      headers: {
        apikey:       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImloZmJpeGxhc3l4aW53aGxraXp1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE2NjU1MzksImV4cCI6MTk5NzI0MTUzOX0.wj0mEOArlF0yYODSUETvxGi2vS43a7_49DZICZWhZHQ",
        authorization:
          "Bearer
          eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImloZmJpeGxhc3l4aW53aGxraXp1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE2NjU1MzksImV4cCI6MTk5NzI0MTUzOX0.wj0mEOArlF0yYODSUETvxGi2vS43a7_49DZICZWhZHQ",
      },
    }
  );
  const data = await res.json();
  const filteredData = data.filter((fact) => fact.category === "society");
  createFactsList(data);
}
```
```javascript
function createFactsList(dataArray) {
  const htmlArr = dataArray.map(
    (fact) => `<li class="fact">
    <p>
      ${fact.text}
      React is being developed by Meta (formerly Facebook)
    <a
      class="source"
      href="https://opensource.fb.com/"
      target="_blank"
      >(Source)</a>
    </p>
    <span class="tag" style="background-color: ${
      CATEGORIES.find((cat) => cat.name === fact.category).color
    }">${fact.category}</span>    
    </li>`
  );
  const html = htmlArr.join("");
  factsList.insertAdjacentHTML("afterbegin", html);
}
```


</ul><h2>Technologies Used</h2>
<hr><ul>
<li>HTML</li>
</ul><ul>
<li>CSS</li>
</ul><ul>
<li>JavaScript</li>
</ul><ul>
<li>React</li>
</ul>
