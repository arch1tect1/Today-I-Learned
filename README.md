https://todayilearnedfact.netlify.app/

## This project is made to show my skills in Front-End development using HTML, CSS, JS, React.

![](assets/images/application.png)

#### Connection to Supabase database:

```import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://lfkfmypyankkrtcylleo.supabase.co";
const supabaseKey "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxma2ZteXB5YW5ra3J0Y3lsbGVvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njk2NTA0MzAsImV4cCI6MTk4NTIyNjQzMH0.bo4nfasdfsAIcqahzmAqtzHOqsrmY5cdBv684eOY5FI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
```
#### Samples of React code:

```
function App() {
  const [showForm, setShowForm] = useState(false);
  const [facts, setFacts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCategory, setCurrentCategory] = useState("all");

  useEffect(
    function () {
      async function getFacts() {
        setIsLoading(true);

        let query = supabase.from("facts").select("*");

        if (currentCategory !== "all")
          query = query.eq("category", currentCategory);

        const { data: facts, error } = await query
          .order("votesInteresting", { ascending: false })
          .limit(1000);

        if (!error) setFacts(facts);
        else alert("There was a problem getting data");
        setIsLoading(false);
      }
      getFacts();
    },
    [currentCategory]
  );

  return (
    <>
      <Header showForm={showForm} setShowForm={setShowForm} />
      {showForm ? (
        <NewFactForm setFacts={setFacts} setShowForm={setShowForm} />
      ) : null}

      <main className="main">
        <CategoryFilter setCurrentCategory={setCurrentCategory} />

        {isLoading ? (
          <Loader />
        ) : (
          <FactList facts={facts} setFacts={setFacts} />
        )}
      </main>
    </>
  );
}
```
