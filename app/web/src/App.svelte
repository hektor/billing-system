<script>
  import { Router, Route } from "svelte-routing";

  import Logs from "./routes/Logs.svelte";
  import Log from "./routes/Log.svelte";

  import ApolloClient from "apollo-boost";
  import { setClient } from "svelte-apollo";

  export let url = "";

  const client = new ApolloClient({ uri: API });
  setClient(client);
</script>

<style>
  nav {
    padding: 1.6rem;
    color: var(--color-primary-100);
    background: var(--color-primary-500);
  }

  div {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
</style>

<div>
  <nav>My logs</nav>
  <Router {url}>
    <Route path="clients/:clientId" component={Logs} let:params />
    <Route path="clients/:clientId/logs/:logId" component={Log} let:params />
    <Route path="/">
      <h1>Home</h1>
    </Route>
  </Router>
</div>
