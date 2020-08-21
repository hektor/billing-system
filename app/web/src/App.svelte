<script>
  import ApolloClient from "apollo-boost";
  import { setClient } from "svelte-apollo";
  import Logs from "./containers/Logs.svelte";

  const endpoint = window.location.pathname.split("/");

  $: id = endpoint[1] === "" ? null : Number(endpoint[1]);

  const client = new ApolloClient({ uri: "http://localhost:1337/graphql" });
  setClient(client);
</script>

<Logs {id} />
