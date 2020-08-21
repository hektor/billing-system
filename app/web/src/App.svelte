<script>
  import ApolloClient from "apollo-boost";
  import { setClient } from "svelte-apollo";
  import Logs from "./containers/Logs.svelte";

  const client = new ApolloClient({ uri: "http://localhost:1337/graphql" });
  setClient(client);
</script>

<Logs />
