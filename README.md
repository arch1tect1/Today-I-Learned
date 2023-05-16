https://todayilearnedfact.netlify.app/

### This project is made to show my skills in Front-End development using HTML, CSS, JS, React.

![](assets/images/application.png)

##Connect to Supabase database

```import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://lfkfmypyankkrtcylleo.supabase.co";
const supabaseKey "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxma2ZteXB5YW5ra3J0Y3lsbGVvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njk2NTA0MzAsImV4cCI6MTk4NTIyNjQzMH0.bo4nfasdfsAIcqahzmAqtzHOqsrmY5cdBv684eOY5FI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
