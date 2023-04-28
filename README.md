<h1>Today-I-Learned</h1>
<hr><p>"Discover and log your daily learnings with a sleek web application."</p><h2>General Information</h2>

![Screenshot of a comment on a GitHub issue showing an image, added in the Markdown, of an Octocat smiling and raising a tentacle.](https://myoctocat.com/assets/images/base-octocat.svg)



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
<hr><ul>
<li>Project aims to help people to add interesting info about what they learned daily.</li>
</ul><ul>
<li>In this project I showed my skills in Front-End development.</li>
</ul><h2>Technologies Used</h2>
<hr><ul>
<li>HTML</li>
</ul><ul>
<li>CSS</li>
</ul><ul>
<li>JavaScript</li>
</ul><ul>
<li>React</li>
</ul><h5>Code Examples</h5><ul>
<li>Load data from Supabase</li>
</ul><p><code>loadFacts();  async function loadFacts() {   const res = await fetch(     "https://ihfbixlasyxinwhlkizu.supabase.co/rest/v1/facts",     {       headers: {         apikey:           "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImloZmJpeGxhc3l4aW53aGxraXp1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE2NjU1MzksImV4cCI6MTk5NzI0MTUzOX0.wj0mEOArlF0yYODSUETvxGi2vS43a7_49DZICZWhZHQ",         authorization:           "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImloZmJpeGxhc3l4aW53aGxraXp1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE2NjU1MzksImV4cCI6MTk5NzI0MTUzOX0.wj0mEOArlF0yYODSUETvxGi2vS43a7_49DZICZWhZHQ",       },     }   );   const data = await res.json();   const filteredData = data.filter((fact) =&gt; fact.category === "society");   createFactsList(data); }</code></p><h2>Project Status</h2>
<hr><p>In Progress. Need to add more categories and make like, emojis and reject interactive.</p><h2>Acknowledgement</h2>
<hr><ul>
<li>I created this project to show my knowledge in web development especially in HTML, CSS, Javascript and React.</li>
