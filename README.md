<h1>Today I Learned Web Application</h1>
<hr><p>"Discover and log your daily learnings with a sleek web application."</p><h2>General Information</h2>

<h3>In this project I showed my skills in Front-End development.</h3>

<img src="/assets/images/application.png">

### Code sample below
### Load data from Supabase
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
