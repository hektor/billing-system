<script>
  import { Link } from "svelte-routing";
  import { getClient, query } from "svelte-apollo";
  import { GET_LOG } from "../apollo";
  import { formatTime } from "../utils/date";

  export let logId = 0;
  export let clientId = 0;

  const client = getClient();
  const log = query(client, {
    query: GET_LOG,
    variables: {
      id: logId,
    },
  });
</script>

<style>
  .back {
    padding: 0.8rem 1.6rem;
    border-bottom: 1px solid var(--color-primary-300);
  }

  .log {
    display: flex;
    flex-direction: column;
    margin: 1.6rem;
    padding: 1.6rem;
  }

  h2,
  h3 {
    padding: 1.6rem 0;
  }
</style>

<div class="back">
  <Link to={`clients/${clientId}`}>&#x25C4; Back to logs</Link>
</div>
{#await $log}
  Loading...
{:then { data }}
  <div class="log">
    {#if data.log.employee_id.name}
      <h2>{data.log.employee_id.name}</h2>
    {:else}
      <h2>{data.log.employee_id.email}</h2>
    {/if}
    <span>{formatTime(data.log.startTime)}-{formatTime(data.log.endTime)}</span>
    <span>{data.log.totalBreakDuration} minutes paused</span>
    <h3>Activities</h3>
    <span>{data.log.activitiesPerformed}</span>
    <h3>Resources</h3>
    <span>{data.log.resourcesUsed}</span>
    <h3>Billing rate</h3>
    <span>{data.log.billingRate} eurors/hour</span>
    <h3>Transportation costs</h3>
    <span>{data.log.transportationCost} euros/km</span>
  </div>
{/await}
