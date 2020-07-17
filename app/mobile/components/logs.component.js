import React from 'react'
import Link from 'next/link'
import Query from '../apollo/query'
import { GET_LOGS } from '../apollo'
import { formatDate } from '../utils/date'

export default () => (
	<div className="list">
		<Query query={GET_LOGS} id={null}>
			{({data: {logs}}) =>
				logs.map(({id, employee_id, client_id, startTime, endTime, activitiesPerformed, totalBreakDuration, resourcesUsed, billingRate, distance, transportationCost}) => (
					<Link key={id} href={{pathname: 'log', query: { id }}}>
						<div className="item">
							{/*
							<span>{employee_id.email}</span>
							<span>{employee_id.name}</span>
              */}
							<span>{client_id.name}</span>
							<span>{formatDate(startTime)}</span>
							{/*
							<span>{formatDate(endTime)}</span>
							<span>{activitiesPerformed}</span>
							<span>{resourcesUsed}</span>
							<span>{totalBreakDuration} minutes</span>
							<span>&euro;{billingRate}/hour</span>
							<span>{distance} km</span>
							<span>&euro;{transportationCost}/km</span>
              */}
						</div>
					</Link>
				))
			}
		</Query>
		<style jsx>
			{`
        .item {
          display: flex;
          justify-content: space-between;
          padding: 3.2rem 1.6rem;
          border-bottom: 1px solid var(--color-primary-300);
        }
      `}
		</style>
	</div>
)
