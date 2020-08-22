<script>
  import { Link } from "svelte-routing";
  import { getClient, query } from "svelte-apollo";
  import { GET_LOGS } from "../apollo";

  import { formatDate } from "../utils/date";

  export let clientId = 0;

  const client = getClient();
  const approvedLogs = query(client, {
    query: GET_LOGS,
    variables: {
      filter: { client_id: { id: clientId }, approved: true },
      sort: "startTime:asc",
      start: 219,
    },
  });

  const reviewableLogs = query(client, {
    query: GET_LOGS,
    variables: {
      filter: { client_id: { id: clientId }, approved_null: true },
      sort: "startTime:asc",
      start: 219,
    },
  });

  const disapprovedLogs = query(client, {
    query: GET_LOGS,
    variables: {
      filter: { client_id: { id: clientId }, approved: false },
      sort: "startTime:asc",
      start: 219,
    },
  });
</script>

<style>
  h2 {
    margin: 1.6rem;
    padding: 1.6rem;
  }

  ul {
    max-width: 48rem;
    margin: 0.8rem auto;
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

  .row {
    display: flex;
    flex-wrap: wrap;
  }

  .col {
    display: flex;
    flex-direction: column;
  }

  .approved {
    background: var(--color-success-500);
    color: var(--color-success-100);
  }

  .disapproved {
    background: var(--color-danger-500);
    color: var(--color-danger-100);
  }
</style>

<div class="row">
  <div class="col">
    <h2>Disapproved</h2>
    <ul>
      {#await $disapprovedLogs}
        Loading...
      {:then { data }}
        {#each data.logs as { id, startTime, employee_id, approved }}
          <Link to={`/clients/${clientId}/logs/${id}`}>
            <li class="disapproved">
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
  </div>
  <div class="col">
    <h2>Reviewable</h2>
    <ul>
      {#await $reviewableLogs}
        Loading...
      {:then { data }}
        {#each data.logs as { id, startTime, employee_id, approved }}
          <Link to={`/clients/${clientId}/logs/${id}`}>
            <li class:approved>
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
  </div>
  <div class="col">
    <h2>Approved</h2>
    <ul>
      {#await $approvedLogs}
        Loading...
      {:then { data }}
        {#each data.logs as { id, startTime, employee_id, approved }}
          <Link to={`/clients/${clientId}/logs/${id}`}>
            <li class:approved>
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
  </div>
</div>
