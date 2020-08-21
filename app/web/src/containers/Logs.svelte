<script>
  import { getClient, query } from "svelte-apollo";
  import { GET_LOGS } from "../apollo";

  import Log from "./Log.svelte";

  export let id = 0;

  const client = getClient();
  const logs = query(client, {
    query: GET_LOGS,
    variables: {
      filter: { client_id: { id } },
      sort: "startTime:asc",
      start: 219,
    },
  });
</script>

{#await $logs}
  Loading...
{:then { data }}
  {#each data.logs as log}
    <Log data={log} />
  {/each}
{:catch error}
  Error: {error}
{/await}
