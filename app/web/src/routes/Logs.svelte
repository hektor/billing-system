<script>
  import { Link } from "svelte-routing";
  import { getClient, query } from "svelte-apollo";
  import { GET_LOGS } from "../apollo";

  import { formatDate } from "../utils/date";

  export let clientId = 0;

  const client = getClient();
  const logs = query(client, {
    query: GET_LOGS,
    variables: {
      filter: { client_id: { id: clientId } },
      sort: "startTime:asc",
      start: 219,
    },
  });
</script>

<style>
  ul {
    max-width: 48rem;
    padding: 6vw;
    margin: 2.4rem auto;
  }

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0.4rem;
    border-radius: 0.4rem;
    background: var(--color-primary-500);
    color: var(--color-primary-100);
  }

  li > span {
    padding: 1.6rem;
  }
</style>

<ul>
  {#await $logs}
    Loading...
  {:then { data }}
    {#each data.logs as { id, startTime, employee_id }}
      <Link to={`/clients/${clientId}/logs/${id}`}>
        <li>
          <span>{formatDate(startTime)}</span>
          {#if employee_id.name}
            <span>{employee_id.name}</span>
          {:else}
            <span>{employee_id.email}</span>
          {/if}
        </li>
      </Link>
    {/each}
  {/await}
</ul>
